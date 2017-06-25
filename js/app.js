// Data of places for use in the project
// Some entries are commented out to meet Google's limit on # destinations
var places = [
  {
    name: "Ebisu Garden Place",
    id: "4ca1863779d9b1f7e654c099",
    location: [{lat: 35.64279793799042,lng: 139.71346735954285}],
    tip: "Good meeting place with other dogs and humans in the neighborhood. Nice benches for relaxing & people watching. Several restaurants have outdoor seatings, where our kind is welcome."
  },
  // {
  //   name: "Ebisu Minami Ichi Koen",
  //   id: "4b568b04f964a5209a1428e3",
  //   location: [{lat: 35.64249277390707,lng: 139.71188485622406}],
  //   tip: "Typical neighborhood playground. Several nice trees for marking. Good place for pigeon chasing."
  // },
  {
    name: "Meguro Incinelation Plant Koen",
    id: "4bf75ae25efe2d7fd6fa6834",
    location: [{lat: 35.63828860270989,lng: 139.7083522654069}],
    tip: "Nice neighborhood park with trees and grassy area. Popular with dogs and usually not busy."
  },
  {
    name: "Green Dog Daikanyama",
    id: "52662a92498edbab9f134a77",
    location: [{lat: 35.64941488424095,lng: 139.7002590478803}],
    tip: "Located on a dog-friendly strip mall, Green Dog is a health-conscious dog shop with food, treats, apparel, hotel and spa. Free drinks of water in the store. There is a small dog run there, too. Beware of onsite pet clinic."
  },
  // {
  //   name: "Green Dog Roppongi",
  //   id: "4c2211c899282d7fae7966b0",
  //   location: [{lat: 35.66644025074744,lng: 139.7303009033203}],
  //   tip: "Large dog shop with lots of treats and apparel (among others). Perfect spot to stop by before/during a walk in the nearby parks."
  // },
  {
    name: "Familina Garden",
    id: "5914269ac9a51768c57d5955",
    location: [{lat: 35.659377,lng: 139.714142}],
    tip: "Training school and hotel in fashionable Aoyama area. Teachers are the best and the twice-daily play time is really fun with lots of dogs of all breeds."
  },
  // {
  //   name: "Aoyama Koen (North)",
  //   id: "4b5f9b68f964a5203bc429e3",
  //   location: [{lat: 35.669441282741715,lng: 139.71950406853185}],
  //   tip: "Neighborhood park with a relatively large grassy area to run around in. Trees make nice shades in the summer."
  // },
  {
    name: "Donguri Koen",
    id: "4b7f8658f964a520e63230e3",
    location: [{lat: 35.63663775732061,lng: 139.7222274541855}],
    tip: "Neighborhood playground/park. A hangout place for dogs in the neighborhood in the summer."
  },
  {
    name: "Showa Kinen Koen",
    id: "4b5bed76f964a520a41d29e3",
    location: [{lat: 35.70735314848069,lng: 139.39423084259033}],
    tip: "Big, big park in the suburbs. A long way from downtown but worth the trip with several well-maintained dog runs."
  },
  {
    name: "Tsujido Kaihin Koen",
    id: "4c7e2fe8d598a09374edc462",
    location: [{lat: 35.321250590922844,lng: 139.44774484454146}],
    tip: "A huge park in Tsujido, Kanagawa that is popular with dogs in the neighborhood. No dog runs here, but between the long stretch of the beach nearby and a large grassy field in the park, your needs for a run will no doubt be satisfied. There is also a dog cafe/apparel shop within a walking distance."
  },
  {
    name: "Shichiri ga Hama Beach",
    id: "4ba6ab1bf964a520806739e3",
    location: [{lat: 35.305308198383585,lng: 139.51074296767837}],
    tip:"A non-swimming beach (and hence open to dogs all year) that is nice to walk on and watch the surfers."
  },
  {
    name: "Yoyogi Koen",
    id: "4b5a3a54f964a520cdb528e3",
    location: [{lat: 35.66909479768642,lng: 139.69723746490402}],
    tip: "One of the largest parks in central Tokyo. It feels cooler than the city outside it in the summer thanks to the fields and trees. Dog runs are among the largest in Tokyo as well and busy with lots of dogs on weekends."
  },
  // {
  //   name: "Konno Hachimangu",
  //   id: "4b504919f964a520c31f27e3",
  //   location: [{lat: 35.65739628131302,lng: 139.70652209410855}],
  //   tip: "This is a shrine and it does not really have much for dog entertainment, but occcasional festivals can be fun to watch. If you have a wish, pray to God there, too, and it comes true!"
  // },
  {
    name: "Wonderful Nature Village",
    id: "560f4ea7498efc11c577831d",
    location: [{lat: 35.717343,lng: 139.261731}],
    tip: "Located very far from central Tokyo, you can hardly believe this place is still Tokyo. Large dog runs, dog swimming pools and short trails keep you entertained all day. There is even a dog cafe on site!"
  },
  {
    name: "Koganei Koen",
    id: "4b593bd6f964a520698228e3",
    location: [{lat: 35.714792770255876,lng: 139.5181703567505}],
    tip: "Large park in the suburbs. Inconvenient to get to, but it has a lot of grassy space and dog runs."
  },
  {
    name: "Meguro River",
    id: "4f729013e4b0905384b2e359",
    location: [{lat: 35.64542883999949,lng: 139.69925165176392}],
    tip: "An urban river popular with dogs and joggers. It is extremely crowded during the cherry blossoms, and there are mosquitos in the summer."
  },
  {
    name: "Hinokimachi Koen",
    id: "4b4d99a9f964a520a5d426e3",
    location: [{lat: 35.66679762138858,lng: 139.732586145401}],
    tip: "A park/playground in the middle of Roppongi, which is taken care well. There are usually at least a few dogs there and in summer evenings after kids are gone, the park turns into a dog run (though not officially allowed)."
  },
  {
    name: "National Graduate Institute for Policy Studies",
    id: "4b06467ff964a52040ea22e3",
    location: [{lat: 35.664317341779835,lng: 139.72748019245475}],
    tip: "This campus has a nice grassy field with lots of trees in the back of the building, which is used as a dog run. "
  },
  {
    name: "Rinko Koen",
    id: "4b5672d5f964a520d11028e3",
    location: [{lat: 35.46108941215697,lng: 139.63719606399536}],
    tip: "Nice city park with a sizable grassy area and a nice view of the Yokoahama port."
  },
  {
    name: "Dog Petite Resort Tsunayoshi no Yu",
    id: "4c37fe411e06d13ae019773e",
    location: [{lat: 35.616058125635774,lng: 139.7775063166186}],
    tip: "Tsunayoshi has an indoor swimming pool (lessons available), a hot spring, and a dog run. Great for big dogs that love water. Dog run is usually not busy."
  },
  // {
  //   name: "Aomi Minami Futo Koen",
  //   id: "4b9b186bf964a52049f235e3",
  //   location: [{lat: 35.6157006623404,lng: 139.7763330347624}],
  //   tip: "Good park on a man-made island that is usually not busy. You can run around without worrying about bumping into humans or other dogs."
  // },
  {
    name: "Odaiba Beach",
    id: "4c54f4cd728920a1a51e9383",
    location: [{lat: 35.630277,lng: 139.775328}],
    tip: "Manmade beach, but the only sandy beach in Tokyo. it can get busy, but it is a lot of fun to walk on it."
  },
  {
    name: "Ino Forest Dog Garden",
    id: "5251084b11d23360faa61e9b",
    location: [{lat: 35.65060102359122,lng: 139.8360013961792}],
    tip:"Very good grassy dog runs. There are usually a good number of friendly dogs there. There are enough trees to escape from the sun in the summer."
  },
  {
    name: "Kiba Koen Dog Run",
    id: "4d215b79756e8cfa750e7554",
    location: [{lat: 35.67205458181746,lng: 139.80839442203182}],
    tip: "Relatively large park with dog runs. Friendly dogs. No trees so probably too hot in the summer."
  },
  {
    name: "Mother Farm",
    id: "4e8fbc5cb63456ab95280415",
    location: [{lat: 35.24760756,lng: 139.940761}],
    tip: "Located in the middle of mountains in Chiba. Far from downtown, but several dog runs and lots of farm animals to see."
  },
  {
    name: "Mt. Jeans Nasu Ski Resort",
    id: "4b7f8d56f964a5201e3430e3",
    location: [{lat: 37.12792951449089,lng: 140.0153660774231}],
    tip:"Located on top of the mountain is a couple of dog runs, which are covered in snow in the winter. Snowshoe tours for dogs and humans during the ski season, too. Recommended for big active dogs."
  },
  {
    name: "Yokohama Koen",
    id: "4b5be65ef964a520561c29e3",
    location: [{lat: 35.44430982019753,lng: 139.64070352740328}],
    tip: "A large park with Yokohama Baseball Stadium. The dog runs there are monitored by dog trainers, so you feel safe. Outside the dog runs is a vast grassy area, which is great to run around in."
  },
  // {
  //   name: "Isetan Department Store (Shinjuku)",
  //   id: "4b7af3d1f964a520e3472fe3",
  //   location: [{lat: 35.69134831090007,lng: 139.7045024884739}],
  //   tip: "Dogs can enter any Isetan/Mitsukoshi Dept Store in a carry bag. On one of the floors is a dog apparel/gear/food shop, which sells high-quality imported dog wear."
  // },
  {
    name: "Venus Fort",
    id: "4b527802f964a520bf7e27e3",
    location: [{lat: 35.6247912631104,lng: 139.779953956604}],
    tip: "You can enter one of the floors here on a leash. There are severl pet shops and one of them has a small indoor dog run with agility facilities. There is a dog cafe, too."
  },
  {
    name: "Urban Dock LaLaport TOYOSU",
    id: "4b0587a9f964a520d09e22e3",
    location: [{lat: 35.655531243222775,lng: 139.79279105252874}],
    tip: "A small part of the mall requires only a leash to enter. There is a good pet shop selling a large selection of toys and apparel, and they have a small dog run just outside. At the mall are also a good number of restaurants with tables outside, which means we are welcome. The dog cafe there is pretty good, too, and the servers absolutely adore us."
  },
  {
    name: "Aeon Mall Makuhari Shintoshin",
    id: "5126e2e3e4b0b2427bc2b9f9",
    location: [{lat: 35.653007184502094,lng: 140.03115892410278}],
    tip: "Very large mall with one whole building open to dogs on leash. The building is a perfect place to try swimming for the first time. There is a swimming pool and a dog under-water treadmill, and kind instructors are available to teach. There are also pet shops with a large selection of dog wear. When you get tired of it all, you can run around with other dogs in the dog run just outside or sit in one of the cafes (allowed inside!)."
  }
];

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

    this.init = function() {
      // Create customized map
      var styles =
        [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
      map = new google.maps.Map(document.getElementById('map'), {
        center:  {lat: 35.6471607, lng: 139.7075507},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
      });

      var Place = function(data,index) {
        this.placeName = data.title;
        this.index = index;
        this.position = data.position;
      };

      // Create a marker for each place in data
      places.forEach(function(place) {
        var marker = new google.maps.Marker({
          icon: "img/png/004-dog-pawprint-on-a-heart.png",
          shape: {
            coords: [0,0, 32, 32],
            type: "rect"
          },
          position: place.location[0],
          title: place.name,
          tip: place.tip,
          foursqid: place.id
        });
        marker.addListener("click", function() {
          self.createLargeInfowindow(marker,null);
        });
        markers.push(marker);
      });

      // Create an array of destinations and displayedMarkers. These arrays contain to all markers/places.
      // Destinations array does not change. displayedMarkers array gets updated to contain only the displayed markers.
      markers.forEach(function(marker) {
        destinations.push(marker.position);
        displayedMarkers.push(marker);
      });

      // Create an array of place names. Items in this array are shown in the clickable text list on the page.
      this.placeList = ko.observableArray([]);
      this.createPlaceList = function(markerArray) {
        markerArray.forEach(function(marker,index){
          self.placeList.push(new Place(marker,index));
        });
      };
      this.createPlaceList(displayedMarkers);
    };
    this.init();

    // Reset arrays, infowindows and directions when user clikcs on "reset/show all" button.
    this.reset = function() {
      if (displayedMarkers.length>0) {
        this.clearAll();
      }
      markers.forEach(function(marker) {
        displayedMarkers.push(marker);
      });
      this.createPlaceList(displayedMarkers);
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
        contentStr3 = "",
        contentStr4 = "",
        content = "";
    // Declare variables required for Google Streeview
    var panorama,
        panoramaOptions;
    // Clicked marker or marker that corresponds to the place in text list that user clicked
    var clickedMarker;

    // True if screen size is less than 630px (when map is initially hidden).
    this.smallScreen = ko.observable();
    // On large screens, show large infowindow when user clicks on the text list entry or on the marker. On small screens, info is displayed within the text list of places.
    this.displayCurrentPlace = function(clickedPlace) {
      clickedMarker = displayedMarkers[clickedPlace.index];
      // Set smallScreen observable
      self.smallScreen($(".container").width() < 630);
      self.createLargeInfowindow(clickedMarker,clickedPlace.index);
    };

    // Create large infowindow which displays information relevant to the user-selected place
    this.createLargeInfowindow = function(marker,index) {
      // Get data from foursquare for user selected place
      foursqapi = "https://api.foursquare.com/v2/venues/" + marker.foursqid +
      "?client_id=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O&client_secret=X14V4PIDNRIABQPAH5VMRJ52AWZOJ5R21GTQ3MELH2QOOEQW&v="
      + v + "&locale=en";

      $.getJSON(foursqapi, function(data) {
        foursqaddress = data.response.venue.location.formattedAddress[1];
        foursqLikes = data.response.venue.likes.count + " humans like this place";
        foursqCategory = data.response.venue.categories[0].name;
        foursqLink = data.response.venue.canonicalUrl+"?ref=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O";

        // Create text content for clicked place
        contentStr1 = '<div id="infowindow"><div class="pano-title">' + marker.title + ' (' + foursqCategory + ')</div><div id="pano"></div>';
        contentStr2 = '<div><span class="item-title">Located in: </span>' + foursqaddress;
        contentStr3 = ' <input type="button" class="text seeMap-btn" value="See Map">';
        contentStr4 = '</div><div>'+ foursqLikes + '</div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div><div><a target="_blank" href=' + foursqLink + '>See full details</a> on Foursquare</div></div>';
      })
        .fail(function() {
          // Create text content for clicked place for when foursq request fails
          contentStr1 = '<div id="infowindow"><div class="pano-title">' + marker.title + '</div>';
          contentStr2 = "";
          contentStr3 = ' <input type="button" class="text seeMap-btn" value="See Map">';
          contentStr4 = '<div id="pano"></div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div></div>';
        })
        .always(function() {
          // On larger screens
          if (!self.smallScreen()) {
            largeInfowindow.setContent(contentStr1 + contentStr2 + contentStr4);
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
                document.getElementById("pano").innerHTML = "Image Not Available";
              }
            }); // end of getPanorama

            // Clicked marker bounces for 3 seconds
            mapView.addAnimation(marker);
            // Make sure the marker property is cleared if the infowindow is closed. Highlight on the text entry is also removed.
            largeInfowindow.addListener('closeclick', function() {
              largeInfowindow.marker = null;
              mapView.animateColor(null);
            });

          // On smaller screens
          } else {
            // Content to be displayed underneath the selected text entry
            content = '<div class="place-info">' + contentStr2 + contentStr3 + contentStr4 + '</div>';
            mapView.displayPlaceInfo(marker,index,content);

            $(".seeMap-btn").click(function() {
              // Clear any previous small InfoWindows, markers and event listeners
              smallInfowindows.forEach(function(smallinfowindow) {
                smallinfowindow.close();
              });
              smallInfowindows.splice(0,smallInfowindows.length);
              marker1.setMap(null);
              marker2.setMap(null);
              directionsDisplay.setMap(null);
              $(".back-btn").off("click");
              $("#mobileVR-btn").off("click");

              // Display map and make the marker for the clicked place bounce
              mapView.toggleMap();
              mapView.addAnimation(marker);
              // Open a new smallInfowindow
              var smallInfowindow = new google.maps.InfoWindow();
              smallInfowindow.setContent(marker.title);
              mapView.renderInfowindow(smallInfowindow,marker);
              smallInfowindows.push(smallInfowindow);

              // Closes the map when user clikcs on the "back" icon. Event listener is set here as I could not get knockout binding to work
              // with a function defined in mapView (outside the view model)
              $(".back-btn").click(function() {
                mapView.toggleMap();
              });
              // Event listener on the button to display route from origin to destination
              $("#mobileVR-btn").click(function() {
                getDirections(index,marker,self.smallScreen());
              });
            });
          }
          mapView.displayClickedPlace(index,marker);
        }); // End of always
      }; // End of createLargeInfowindow

    // Declare varaibles required for distanceMatrixService
    var distanceMatrixService = new google.maps.DistanceMatrixService();
    var origins = [],
        mode,
        results;
    // Declare variables required for small infowindows which display results
    var duration,
        distanceText,
        durationText,
        maxDuration;
    // Array of trip information for use on small screens
    var travelArray = [];
    // Set to true if at least one destination is within the user-specified travel time
    var atLeastOne;

    // Make user-provided origin and travel mode observables to pass between pages on small screens
    this.origin = ko.observable("");
    // Change in user selected travel mode is passed between pages on small screens, but search is not conducted automatically
    this.travelMode = ko.observable("DRIVING");

    var Trip = function(distanceText,durationText) {
      this.distance = distanceText;
      this.duration = durationText;
    };

    // Search for places that are within user's desired travel time
    this.searchWithinTime = function() {
      maxDuration = document.getElementById("maxDuration").value;
      atLeastOne = false;
      travelArray.splice(0,travelArray.length);

      // Alert user if user does not enter where he or she is leaving from
      if (this.origin() == "") {
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
          // Commented out for now as transit directions do not seem to be working in Japan
          // transitOptions: {
          //   modes: ["BUS","RAIL","SUBWAY","TRAIN","TRAM"]
          // }
        }, function(response, status) {
          if (status !== google.maps.DistanceMatrixStatus.OK) {
            window.alert('Error: ' + status);
          } else {
            results = response.rows[0].elements;

            for (var i = 0; i < results.length; i++) {
              if (results[i].status === "OK") {
                // Convert duration value from seconds to MINUTES
                duration = results[i].duration.value / 60;
                if (duration <= maxDuration) {
                  displayedMarkers.push(markers[i]);
                  distanceText = results[i].distance.text,
                  durationText = results[i].duration.text;
                  self.smallScreen($(".container").width() < 630);

                  if (!self.smallScreen()) {
                    // Create a small infowindow for all markers within specified time
                    var smallInfowindow = new google.maps.InfoWindow();
                    // Create a small infowindow that contains the distance and duration info
                    contentStr1 = '<div id="vrtitle" class="vr-title">' + markers[i].title +
                    '</div>' + durationText + ' away, ' + distanceText +
                    '<div><input id="vr-btn" type="button" value="View Route" onclick="getDirections('+ i + ')"></input></div>';

                    smallInfowindow.setContent(contentStr1);
                    smallInfowindow.marker = markers[i];
                    // Each small infowindow is given a z index that is the marker's latitude rather than leaving it undefined. This ensures that large infowindow will be displayed in front
                    smallInfowindow.setZIndex(markers[i].position.lat());
                    // Create an array of all small infowindows, which will be rendered together later
                    smallInfowindows.push(smallInfowindow);
                  } else {
                    // On small screens, create an array of trip information for all qualified places
                    travelArray.push(new Trip(distanceText,durationText));
                  }
                  atLeastOne = true;
                }
              }
            };
            if (!atLeastOne) {
              window.alert('We could not find any locations within that travel time!');
            } else {
              // Render markers and create text list of places to display
              mapView.renderMarkers(displayedMarkers);
              self.createPlaceList(displayedMarkers);
              if (!self.smallScreen()) {
                // On large screens, results are displayed in small infowindows
                mapView.renderInfowindowArray(smallInfowindows);
              } else {
                // On small screens, results are displayed in the text list
                travelArray.forEach(function(data,index) {
                  contentStr1 = data.distance + ', ' + data.duration;
                  mapView.displayTripInfo(index,contentStr1);
                });
              }
            }
          }
        });
      }
    }; // End of searchWithinTime
  }; //End of viewmodel

  ko.applyBindings(new ViewModel());

  var mapView = {
    init: function() {
      this.renderMarkers(displayedMarkers);
    },
    // Display one marker when user clicks on the text list
    displayClickedPlace: function(index,marker) {
      // Highlight selected place in text list. This only happens when user
      // clicks on the list rather than the market itself
      mapView.animateColor(index);
      map.setCenter(marker.position);
      map.setZoom(13);
    },
    // Display an array of markers and adjust the map to accommodate them
    renderMarkers: function(markerArray) {
      bounds = new google.maps.LatLngBounds();
      markerArray.forEach(function(marker) {
        marker.setMap(map);
        marker.setAnimation(google.maps.Animation.DROP);
        bounds.extend(marker.position);
      });
      map.fitBounds(bounds);
    },
    // Hide all displayed markers and adjust the map
    hideMarkers: function(markerArray) {
      markerArray.forEach(function(marker) {
        marker.setMap(null);
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
    // Clicked marker bounces for 3 seconds
    addAnimation: function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      window.setTimeout(function() {
        marker.setAnimation(null);
      }, 3000);
    },
    animateColor: function(index) {
      // Reset previous color animation
      $(".list-text").animate({
        backgroundColor: "#FFFFFF"
      });
      // If index is not null, add color
      if (index>=0) {
        $("#entry-" + index).animate({
          backgroundColor: "#F0E68C"
        });
        $("#desc-" + index).animate({
          backgroundColor: "#F0E68C"
        });
        $("#trip-" + index).animate({
          backgroundColor: "#F0E68C"
        });
      }
    },
    // Show/hide map on small screens
    toggleMap: function() {
      $("#map").toggleClass("open");
      $("#map-header").toggleClass("open");
      $(".backicon").toggleClass("open");
    },
    // On a small screen, display largeinfowindow contents instead in the text list
    displayPlaceInfo: function(marker,index,content) {
      // Clear previous selection's data and animated color
      $(".place-info").remove();
      // Show info on the selected place in the text list
      $("#desc-" + index).append(content);
      $(".place-info").show("slide", {direction: "up"});
    },
    // Trip distance and duration in the text list info on small screens
    displayTripInfo: function(index,content) {
      $("#trip-" + index).append(content);
    }
  }; // end of mapView

  // Render the initial set of markers
  mapView.init();

  // create new instances of google maps objects using variables declared at the beg
  // (to enable access by function getDirections and availability of google api)
  ds = new google.maps.DirectionsService();
  marker1 = new google.maps.Marker();
  marker2 = new google.maps.Marker();
  directionsDisplay = new google.maps.DirectionsRenderer();

}; // end of initmap

// Display route from origin to destination when user clicks on the "View Route" button in a small infowindow
// Placing this function here so that html onclick in small infowindow can find it
function getDirections(i,marker,smallScreen) {
  // On large screens
  if (!smallScreen) {
    origin = document.getElementById("origin").value;
    travelMode = document.getElementById("travelMode").value;

    smallInfowindows.forEach(function(smallinfowindow) {
      smallinfowindow.close();
    });
    destination = markers[i].position;
    title = markers[i].title;

    displayRoute(origin,destination,travelMode,title);
  } else {
    // On small screens
    origin = document.getElementById("mobileOrigin").value;
    if (origin == "") {
      window.alert("Please enter an address.");
    } else {
      travelMode = document.getElementById("mobileTravelMode").value;
      destination =  marker.position;
      title = marker.title;
      displayRoute(origin,destination,travelMode,title);
    }
  }
};

function displayRoute(origin,destination,travelMode,title) {
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
        title: "Start: " + origin
      });
      marker2.setOptions({
        map: map,
        label: "B",
        position: response.routes[0].legs[0].end_location,
        title: "Finish: " + title
      });
      displayedMarkers.push(marker1, marker2);

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

};
