// Declare some variables so that they can be accessible to the getDirections function
// defined outside initMap()
var origin,
    travelMode,
    destination,
    title,
    ds,
    directionsDisplay,
    map,
    marker1,
    marker2;
// This array will contain small infowindows which will display distance and duration of the trip from the user-specified origin
var smallInfowindows = [];
// Array of all markers. This array will not change throughout.
var markers = [];
// This array will only contain markers that are displayed.
var displayedMarkers = [];
// This variable will refer to the view model, to make observables in the view model accessible to getDirections
var vm;

// Callback function to the google api request. Almost all the code is defined within it to ensure availability of google maps data..
function initMap() {
    var ViewModel = function() {
      var self = this;
      //Create an array of destinations, which contain all the places. This array does not change.
      var destinations = [];
      // Large infowindow will contain information from Google and Foursquare for the user-selected place
      var largeInfowindow = new google.maps.InfoWindow();
      // bounds to used for resizing map
      var bounds;

      // Text list of all places that are displayed. The list corresponds with displayed markers
      this.placeList = ko.observableArray([]);
      // True if screen size is less than 630px (when map is initially hidden).
      this.smallScreen = ko.observable($(".container").width() < 630);

      this.init = function() {
        // Create customized map
        $.getJSON("mapStyle.json",function(data) {
          map = new google.maps.Map(document.getElementById("map"), {
            center:  {lat: 35.6471607, lng: 139.7075507},
            zoom: 13,
            styles: data,
            mapTypeControl: false
          });
        })
          // Alert user when data fail to load
          .fail(function() {
            window.alert("Something went wrong while customizing map. Please check back later.");
          })
          .done(function() {
            // load data in data.json
            $.getJSON("data.json",function(data) {
              // Create a marker for each place in data
              data.forEach(function(place) {
                var marker = new google.maps.Marker({
                  icon: "img/png/004-dog-pawprint-on-a-heart.png",
                  shape: {
                    coords: [0,0, 32, 32],
                    type: "rect"
                  },
                  position: place.location[0],
                  title: place.name,
                  tip: place.tip,
                  foursqid: place.id,
                  map: map,
                  visible: false
                });
                marker.addListener("click", function() {
                  self.createLargeInfowindow(marker);
                });
                markers.push(marker);
              });

              // Create an array of destinations and displayedMarkers. These arrays contain to all markers/places.
              // Destinations array does not change. displayedMarkers array gets updated to contain only the displayed markers.
              markers.forEach(function(marker) {
                destinations.push(marker.position);
                displayedMarkers.push(marker);
              });

              // Render the initial set of markers
              mapView.renderMarkers(displayedMarkers);

              var Place = function(data,index) {
                this.placeName = data.title;
                this.index = index;
                this.position = data.position;
                // Information about the distance and duration of the trip from user-provided origin to each of the destinations. Used on small screens.
                this.travelInfo = data.travelInfo;
              };

              // Create an array of place names. Items in this array are shown in the clickable text list on the page.
              self.createPlaceList = function(markerArray) {
                markerArray.forEach(function(marker,index){
                  self.placeList.push(new Place(marker,index));
                });
              };
              self.createPlaceList(displayedMarkers);
            })
              // Alert user when data fail to load
              .fail(function() {
                window.alert("Something went wrong with loading data. Please check back later.");
              });

            // Add resize event listener to resize map and update the smallScreen observable when the viewport size changes
            google.maps.event.addDomListener(window, "resize", function() {
              mapView.resizeMap();
              self.smallScreen($(".container").width() < 630);
            });
          });
      };
      this.init();

      // Reset arrays, infowindows and directions when user clikcs on "reset/show all" button.
      this.reset = function() {
        if (displayedMarkers.length>0) {
          this.clearAll();
        }
        markers.forEach(function(marker) {
          marker.travelInfo = null;
          displayedMarkers.push(marker);
        });
        self.createPlaceList(displayedMarkers);
        mapView.renderMarkers(displayedMarkers);
      };

      // Clear all arrays, markers and infowindows
      this.clearAll = function() {
        // windows need to be closed before markers are hidden/removed
        largeInfowindow.close();
        smallInfowindows.forEach(function(smallinfowindow) {
          smallinfowindow.close();
        });
        mapView.hideMarkers(displayedMarkers);

        // clear any prior directions
        directionsDisplay.setMap(null);
        // clear place info and previously clicked place
        self.details("");
        self.clickedIndex(null);

        // clear arrays
        displayedMarkers.splice(0,displayedMarkers.length);
        self.placeList.splice(0,self.placeList().length);
        smallInfowindows.splice(0,smallInfowindows.length);
      };

      var sv = new google.maps.StreetViewService();
      // Declaring variables required to get data from Foursquare
      var foursqaddress,
          foursqLikes,
          foursqLink,
          foursqapi,
          foursqCategory;
      // Date used to control for foursquare version
      var v = "20170603";
      // Variables for setting infowindow content
      var contentStr1 = "",
          contentStr2 = "",
          contentStr3 = "";
      // Declare variables required for Google Streeview
      var panorama,
          panoramaOptions;

      // Index and marker of the place selected by user.
      this.clickedIndex = ko.observable(null);
      this.clickedMarker = ko.computed(function() {
        return displayedMarkers[self.clickedIndex()];
      });
      // Location and description of the place chosen by user
      this.location = ko.observable("");
      this.details = ko.observable("");

      // On large screens, show large infowindow when user clicks on the text list entry or on the marker. On small screens, info is displayed within the text list of places.
      this.displayCurrentPlace = function(clickedPlace) {
        // clear previous content
        self.location("");
        self.details("");
        self.clickedIndex(clickedPlace.index);
        self.createLargeInfowindow(self.clickedMarker());
      };

      // Create large infowindow which displays information relevant to the user-selected place
      this.createLargeInfowindow = function(marker) {
        // Get data from foursquare for user selected place
        foursqapi = "https://api.foursquare.com/v2/venues/" + marker.foursqid +
        "?client_id=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O&client_secret=X14V4PIDNRIABQPAH5VMRJ52AWZOJ5R21GTQ3MELH2QOOEQW&v=" +
        v + "&locale=en";

        $.getJSON(foursqapi, function(data) {
          foursqaddress = data.response.venue.location.formattedAddress[1];
          foursqLikes = data.response.venue.likes.count + " humans like this place";
          foursqCategory = data.response.venue.categories[0].name;
          foursqLink = data.response.venue.canonicalUrl+"?ref=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O";

          // Create text content for clicked place
          contentStr1 = '<div class="infowindow"><div class="pano-title">' + marker.title + ' (' + foursqCategory + ')</div><div id="pano"></div>';
          contentStr2 = '<span class="item-title">Located in: </span>' + foursqaddress;
          contentStr3 = '<div>'+ foursqLikes + '</div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div><div><a target="_blank" href=' + foursqLink + '>See full details</a> on Foursquare</div></div>';
        })
          .fail(function() {
            // Create text content for clicked place for when foursq request fails
            contentStr1 = '<div class="infowindow"><div class="pano-title">' + marker.title + '</div>';
            contentStr2 = "<span>Location data is not available</span>";
            contentStr3 = '<div id="pano"></div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div></div>';
          })
          .always(function() {
            // On larger screens
            if (!self.smallScreen()) {
              self.details(contentStr1 + contentStr2 + contentStr3);
              largeInfowindow.setContent(self.details());
              // Display largeInfowindow on clicked marker in front of all other infowindows by giving it the largest latitude #
              largeInfowindow.setZIndex(90);
              mapView.renderInfowindow(largeInfowindow,marker);

              // Get StreetView Image
              sv.getPanorama({location: marker.position}, function(data,status) {
                if (status == "OK") {
                  panoramaOptions = {
                    pano: data.location.pano,
                    pov: {
                      heading: google.maps.geometry.spherical.computeHeading(data.location.latLng, marker.position),
                      pitch: 0
                    }
                  };
                  panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions);
                } else {
                  document.getElementById("pano").innerHTML = "Sorry, no image is available for this location.";
                }
              }); // end of getPanorama
              // Clicked marker bounces 3 times
              mapView.addAnimation(marker);
              // Make sure the marker property is cleared if the infowindow is closed. Highlight on the text entry is also removed.
              largeInfowindow.addListener('closeclick', function() {
                largeInfowindow.marker = null;
                self.clickedIndex(null);
              });

            // On smaller screens
            } else {
              // Content to be displayed underneath the selected text entry
              self.location(contentStr2);
              self.details(contentStr3);
            }
            mapView.displayClickedPlace(marker);
          }); // End of always
        }; // End of createLargeInfowindow

        // Indicates whether map is visible on small screens
        this.mapVisible = ko.observable(false);

        // On small screens, show map when user clicks on the see map button
        this.showMap = function() {
          // Clear any previous small InfoWindows, markers and event listeners
          smallInfowindows.forEach(function(smallinfowindow) {
            smallinfowindow.close();
          });
          smallInfowindows.splice(0,smallInfowindows.length);
          marker1.setVisible(false);
          marker2.setVisible(false);
          directionsDisplay.setMap(null);

          self.mapVisible(true);
          mapView.addAnimation(self.clickedMarker());

          // Open a new smallInfowindow
          var smallInfowindow = new google.maps.InfoWindow();
          smallInfowindow.setContent(self.clickedMarker().title);
          smallInfowindow.open(map,self.clickedMarker());
          smallInfowindows.push(smallInfowindow);
        };

      // Declare varaibles required for distanceMatrixService
      var distanceMatrixService = new google.maps.DistanceMatrixService();
      var results;
      // Declare variables required for small infowindows which display results
      var duration,
          distanceText,
          durationText;
      // Set to true if at least one destination is within the user-specified travel time
      var atLeastOne;
      // index of current marker in displayedMarkers
      var entryNo;

      // Make user-provided origin and travel mode observables to pass between pages on small screens
      this.origin = ko.observable("");
      // Maximum duration of the trip
      this.maxDuration = ko.observable("15");
      // Change in user selected travel mode is passed between pages on small screens, but search is not conducted automatically
      this.travelMode = ko.observable("DRIVING");

      // Search for places that are within user's desired travel time
      this.searchWithinTime = function() {
        atLeastOne = false;
        // Alert user if user does not enter where he or she is leaving from
        if (this.origin() === "") {
          window.alert("Please enter an address.");
        } else {
          // Clear all previous markers, infowindows, etc
          if (displayedMarkers.length>0) {
            this.clearAll();
          }

          // Find destinations that are within maxDuration of travel time from user provided origin
          distanceMatrixService.getDistanceMatrix({
            origins: [this.origin()],
            destinations: destinations,
            travelMode: this.travelMode(),
            unitSystem: google.maps.UnitSystem.IMPERIAL,
          }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
              window.alert("Something went wrong with calculating travel time. Please check back again later");
            } else {
              results = response.rows[0].elements;

              for (var i = 0; i < results.length; i++) {
                if (results[i].status === "OK") {
                  // Convert duration value from seconds to MINUTES
                  duration = results[i].duration.value / 60;
                  if (duration <= self.maxDuration()) {
                    entryNo = displayedMarkers.length;
                    displayedMarkers.push(markers[i]);
                    distanceText = results[i].distance.text,
                    durationText = results[i].duration.text;
                    displayedMarkers[entryNo].travelInfo = distanceText + ", " + durationText;

                    if (!self.smallScreen()) {
                      // Create a small infowindow for all markers within specified time
                      var smallInfowindow = new google.maps.InfoWindow();
                      smallInfowindow.marker = markers[i];

                      // Create a small infowindow that contains the distance and duration info
                      contentStr1 = '<div id="vrtitle" class="vr-title">' + markers[i].title +
                      '</div>' + durationText + ' away, ' + distanceText +
                      '<div><input id="vr-btn" type="button" value="View Route" onclick="getDirections(' + i + ')"></input></div>';

                      smallInfowindow.setContent(contentStr1);
                      // Each small infowindow is given a z index that is the marker's latitude rather than leaving it undefined. This ensures that large infowindow will be displayed in front
                      smallInfowindow.setZIndex(markers[i].position.lat());
                      // Create an array of all small infowindows, which will be rendered together later
                      smallInfowindows.push(smallInfowindow);
                    }
                  }
                  atLeastOne = true;
                  }
                }
              }

              if (!atLeastOne) {
                window.alert('We could not find any locations within that travel time!');
              } else {
                // Render markers and create text list of places to display
                mapView.renderMarkers(displayedMarkers);
                self.createPlaceList(displayedMarkers);
                if (!self.smallScreen()) {
                  // On large screens, results are displayed in small infowindows
                  mapView.renderInfowindowArray(smallInfowindows);
              }
            }
          });
        }
      }; // End of searchWithinTime
    }; //End of viewmodel

    vm = new ViewModel();
    ko.applyBindings(vm);

    var mapView = {
      // Resize map when viewport size changes
      resizeMap: function() {
        bounds = new google.maps.LatLngBounds();
        displayedMarkers.forEach(function(marker) {
          bounds.extend(marker.position);
        });
        map.fitBounds(bounds);
      },
      // Display one marker when user clicks on the text list
      displayClickedPlace: function(marker) {
        // Highlight selected place in text list. This only happens when user
        // clicks on the list rather than the market itself
        map.setCenter(marker.position);
        map.setZoom(13);
      },
      // Display an array of markers and adjust the map to accommodate them
      renderMarkers: function(markerArray) {
        bounds = new google.maps.LatLngBounds();
        markerArray.forEach(function(marker) {
          marker.setVisible(true);
          marker.setAnimation(google.maps.Animation.DROP);
          bounds.extend(marker.position);
        });
        map.fitBounds(bounds);
      },
      // Hide all displayed markers and adjust the map
      hideMarkers: function(markerArray) {
        markerArray.forEach(function(marker) {
          marker.setVisible(false);
        });
        //Make the map go back to the original center and zoom level
        map.setOptions({
          center: markerArray[0].position,
          zoom: 13
        });
      },
      // Render one infowindow. Used to display largeinfowindow.
      renderInfowindow: function(infowindow, marker) {
        infowindow.open(map,marker);
      },
      // Render an array of infowindows. Used with smallInfowindows.
      renderInfowindowArray: function(infowindowArray) {
        infowindowArray.forEach(function(infowindow) {
          infowindow.open(map,infowindow.marker);
        });
      },
      // Clicked marker bounces for 3 times
      addAnimation: function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
          marker.setAnimation(null);
        }, 2100);
      }
    }; // end of mapView

    // create new instances of google maps objects using variables declared at the beg
    // (to enable access by function getDirections and availability of google api)
    ds = new google.maps.DirectionsService();
    marker1 = new google.maps.Marker();
    marker2 = new google.maps.Marker();
    directionsDisplay = new google.maps.DirectionsRenderer();

} // end of initmap

  // Display route from origin to destination when user clicks on the "View Route" button in a small infowindow
  // Placing this function here so that html onclick in small infowindow can find it
  function getDirections(i) {
    // On large screens
    if (!vm.smallScreen()) {
      smallInfowindows.forEach(function(smallinfowindow) {
        smallinfowindow.close();
      });
      destination = markers[i].position;
      title = markers[i].title;
    } else {
      // On small screens
      if (origin === "") {
        window.alert("Please enter an address.");
      } else {
        destination = vm.clickedMarker().position;
        title = vm.clickedMarker().title;
      }
    }

    origin = vm.origin();
    travelMode = vm.travelMode();

    ds.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setOptions({
          map: map,
          directions: response,
          draggable: false,
          polylineOptions: {
            strokeColor: 'green'
          },
          suppressMarkers: true
        });

        marker1.setOptions({
          map: map,
          label: "A",
          position: response.routes[0].legs[0].start_location,
          title: "Start: " + origin,
          visible: true
        });
        marker2.setOptions({
          map: map,
          label: "B",
          position: response.routes[0].legs[0].end_location,
          title: "Finish: " + title,
          visible: true
        });
        displayedMarkers.push(marker1, marker2);

      } else {
        window.alert("Sorry, directions request could not be processed properly. Please try again or check back later");
      }
    });
  }

// Error handling for when app fails to connect to Google. If Google maps api is available, error cases seem to be handled automatically.
function mapError() {
    $("#map").append("<div class='errorMsg'><img src='img/IMG_1004.JPG'><p class='largerText'>Oops! Sorry, Ren ate the map!</p><p> Please try again later.</p></div>");
}
