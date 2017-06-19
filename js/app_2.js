var places = [
  // commenting out some data to meet Google's limit on # destinations
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
    name: "Rinko Park",
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

var Place = function(data,index) {
  this.placeName = data.title;
  this.index = index;
};




function initMap() {
  // Create customized map
  var styles =
    [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
  var map = new google.maps.Map(document.getElementById('map'), {
    center:  {lat: 35.6471607, lng: 139.7075507},
    zoom: 13,
    styles: styles,
    mapTypeControl: false
  });
//
//   var conductPlacesSearch = function(data) {
//     var placesService = new google.maps.places.PlacesService(map);
//     data.forEach(function(place) {
//       placesService.textSearch({
//         query: place.name
//       }, function(results, status) {
//         // if (status === google.maps.places.PlacesServiceStatus.OK) {
//           console.log(results);
//         // }
//       });
//     });
//   };
//   conductPlacesSearch(places);
//

  var ViewModel = function() {

    var self = this;
    // Array of displayed markers. Initially contains all markers.
    var markers = [];
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
        self.createLargeInfowindow(marker);
      });
      markers.push(marker);
    });

    // Create an array of the name of all the places. This syncs with text list on page.
    this.placeList = ko.observableArray([]);

    this.createPlaceList = function(markerArray) {
      markerArray.forEach(function(marker,index){
        self.placeList.push(new Place(marker,index));
      });
    };


    // Only contains markers that are displayed. Initially a copy of the markers array.
    var displayedMarkers = [];
    // Displays all/hide all markers when user clicks on a button
    var markerVisibility = false;
    this.btntxt = ko.observable("Show All Places");
    this.clickableList = ko.observable(false);
    this.toggleMarkers = function() {
      // close all infowindows
      largeInfowindow.close();
      if (!markerVisibility) {
        // Clear displayedMarkers array and include new markers for all places
        displayedMarkers.splice(0,displayedMarkers.length);
        for (let i=0; i<markers.length;i++) {
          displayedMarkers.push(markers[i]);
         };
        this.createPlaceList(displayedMarkers);
        mapView.displayMarkers(displayedMarkers);
        this.clickableList(true);
        self.btntxt("Hide All Places");
        markerVisibility = true;
      } else {
        mapView.hideMarkers(displayedMarkers);
        this.clickableList(false);
        this.placeList.splice(0,this.placeList().length);
        displayedMarkers.splice(0,displayedMarkers.length);
        self.btntxt("Show All Places");
        markerVisibility = false;
      }
    };

    // Show only the current marker and infowindow when user clicks on the text list
    this.displayCurrentPlace = function(clickedPlace) {
      mapView.displayClickedPlace(displayedMarkers[clickedPlace.index]);
      self.createLargeInfowindow(displayedMarkers[clickedPlace.index]);
    };

    var largeInfowindow = new google.maps.InfoWindow();
    var sv = new google.maps.StreetViewService();
    this.createLargeInfowindow = function(marker) {
      console.log(marker);
      // Get info from foursquare
      var name,
          address,
          foursqLikes,
          foursqDesc,
          foursqLink;

      var v = "20170603";
      var foursqapi = "https://api.foursquare.com/v2/venues/" + marker.foursqid +
      "?client_id=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O&client_secret=X14V4PIDNRIABQPAH5VMRJ52AWZOJ5R21GTQ3MELH2QOOEQW&v="
      + v + "&locale=en";

      $.getJSON(foursqapi, function(data) {
        address = data.response.venue.location.formattedAddress[1];
        foursqLikes = data.response.venue.likes.count + " people like this place";
        foursqCategory = data.response.venue.categories[0].name;
        foursqLink = data.response.venue.canonicalUrl+"?ref=CSPBX14BPM20MZ31XGZZQ0CFRJ5AM2USP3AIGEYRRPTHCJ3O";
      })
        .fail(function() {
          address = "Address not available";
          foursqLikes = "No data on likes";
          foursqCategory = "Not avaialble";
          foursqLink = "";
        })
        .done (function() {
          // clear content if infowindow was already open
          if (largeInfowindow.marker != marker) {
            largeInfowindow.setContent("");
            largeInfowindow.marker = marker;
          }

          sv.getPanorama({location: marker.position}, function(data,status) {
          //get streetview image
            if (status == "OK") {
              // largeInfowindow.setContent('<div class="pano-title">' + marker.title + '</div><div id="pano"></div>' + '<div>' + marker.tip + '</div>');
              largeInfowindow.setContent('<div class="pano-title">' + marker.title + ' (' + foursqCategory + ')</div><div id="pano"></div><div><span class="item-title">Located in: </span>' + address + '</div><div>'
              + foursqLikes + '</div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div><div><a target="_blank" href=' + foursqLink + '>See full details</a> on Foursquare</div>');

              // Displayed largeInfowindow on clicked marker in front of all other infowindows
              largeInfowindow.setZIndex(90);
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);
              var panoramaOptions = {
                // position: nearStreetViewLocation,
                pano: data.location.pano,
                pov: {
                  heading: heading,
                  pitch: 0
                }
              };
              var panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
            } else {
              // largeInfowindow.setContent('<div class="pano-title">' + marker.title + '</div>' + '<div>No Street View Found</div>'+ '<div>' + marker.tip + '</div>');
              largeInfowindow.setContent('<div class="pano-title">' + marker.title + '(' + foursqCategory + ')</div><div>No Image Found</div><div><span class="item-title">Located in: </span>' + address + '</div><div>'
              + foursqLikes + '</div><div><span class="item-title">Tip from Ren: </span>' + marker.tip + '</div><div><a href=' + foursqLink + '>See more info</a> on Foursquare</div>');
            }
          });
          largeInfowindow.open(map, marker);
      });
    };

    var distanceMatrixService = new google.maps.DistanceMatrixService;
    //Create an array of destinations, which are all the places in the list. This array does not change.
    var destinations = [];
    markers.forEach(function(marker) {
      destinations.push(marker.position);
    });

    // Search for places that are within user's desired travel time
    this.searchWithinTime = function() {
      var origin = [],
          smallInfowindows = [];
      var mode = document.getElementById('travelMode').value,
          address = document.getElementById('origin').value;
      var atLeastOne = false;

      if (address == '') {
        window.alert('Please enter an address.');
      } else {
        origin.push(address);

        if (displayedMarkers.length>0) {
          largeInfowindow.close();
          // mapView.hideMarkers(displayedMarkers);
          displayedMarkers.splice(0,displayedMarkers.length);
          this.placeList.splice(0,this.placeList().length);
        }

        distanceMatrixService.getDistanceMatrix({
          origins: origin,
          destinations: destinations,
          travelMode: google.maps.TravelMode[mode],
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        }, function(response, status) {
          if (status !== google.maps.DistanceMatrixStatus.OK) {
            window.alert('Error: ' + status);
          } else {
            var maxDuration = document.getElementById('maxDuration').value;

            var results = response.rows[0].elements;

            var duration,
                distanceText,
                durationText,
                infowindowZIndex;

            for (var i = 0; i < results.length; i++) {
              if (results[i].status === "OK") {
                // Convert duration value from seconds to MINUTES
                duration = results[i].duration.value / 60;
                if (duration <= maxDuration) {
                  displayedMarkers.push(markers[i]);

                  // Create a small infowindow for all markers within specified time
                  var smallInfowindow = new google.maps.InfoWindow();
                  distanceText = results[i].distance.text,
                  durationText = results[i].duration.text;

                  // Create a small infowindow that contains the distance and duration info
                  var contentStr = '<div class="vr-title">' + markers[i].title +
                  '</div>' + durationText + ' away, ' + distanceText +
                  '<div><input id="vr-btn" type="button" value="View Route" onclick="getDirections()"></input></div>';
                  smallInfowindow.setContent(contentStr);

                  // Set ZIndex to be latitude of each location instead of leaving it undefined
                  smallInfowindow.setZIndex(markers[i].position.lat());
                  smallInfowindow.marker = markers[i];

                  smallInfowindows.push(smallInfowindow);
                  atLeastOne = true;
                }
              }
            };
            if (!atLeastOne) {
              window.alert('We could not find any locations within that distance!');
            } else {
              mapView.displaySmallInfowindows(smallInfowindows);
              mapView.displayMarkers(displayedMarkers);
              self.createPlaceList(displayedMarkers);
            }
          };
        });
      }
      // End of searchWithinTime
    };
  // //end of viewmodel
  };

  ko.applyBindings(new ViewModel());

  var mapView = {
    // Displays one marker when user clicks on the text list
    displayClickedPlace: function(marker) {
      map.setCenter(marker.position);
      map.setZoom(13);
    },
    displayMarkers: function(markerArray) {
      var bounds = new google.maps.LatLngBounds();
      markerArray.forEach(function(marker) {
        marker.setMap(map);
        marker.setAnimation(google.maps.Animation.DROP);
        bounds.extend(marker.position);
      });
      map.fitBounds(bounds);
    },
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
    displaySmallInfowindows: function(infowindowArray) {
      infowindowArray.forEach(function(infowindow) {
        infowindow.open(map,infowindow.marker);
      });
    }
  // end of mapView
  };
// end of initmap
};

function getDirections() {
  var ds = new google.maps.DirectionsService();
  // mapView.hideMarkers(displayedMarkers);
  var mode = document.getElementById('mode').value;
  ds.route({
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode[mode]
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
        directions: response,
        draggable: true,
        polylineOptions: {
          strokeColor: 'green'
        }
      });
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};
