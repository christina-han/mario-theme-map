function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66755425579326, lng: 135.43055565137513},
        zoom: 17,
        mapId: '30c1e661725d65ae',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      });


      //name
      //latitude, longitude
      //imageURL
      //scaledSize width, height 
    
      const markers = [
        [
            "Yoshi\'s House",
            34.666726619464384,
            135.4308758316919,
            "yoshi_house.svg",
            38,
            31
        ],
        [
            "Castle",
            34.668088766521414,
            135.42856405367175,
            "castle.svg",
            38,
            31
        ],
        [
            "Pointer",
            34.667047956535114,
            135.42985239821132,
            "pointer.svg",
            38,
            31
        ],
        [
            "Pipe",
            34.667649872338465,
            135.43216227037396,
            "pipe.svg",
            38,
            31
        ],
        [
            "Star",
            34.66823924399176, 
            135.43300846116625,
            "star.svg",
            38,
            31
        ],
        [
            "Ghost House",
            34.66878472253043,
            135.43149141641254,
            "ghosthouse.svg",
            38,
            31
        ],
        [
            "Hill",
            34.66743042437505,
            135.43249007401423,
            "hill_with_eyes.svg",
            38,
            31
        ],
      ];

      for (let i=0; i<markers.length; i++){
        const currMarker = markers[i];

        marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5]), 
            },
            animation: google.maps.Animation.DROP,
          });
    
          const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
    
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });

      }

}

