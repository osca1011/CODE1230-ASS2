let map = L.map('map').setView([-33.8, 151.2], 11);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicGVubnlwYW5nY29kZSIsImEiOiJjajZ2bjlwazkxNW10MzJvMzVidjNlcnExIn0.kxfe2U4_vp8dcb6dQdok2g'
}).addTo(map);



let style = feature => {
    const { _2016Census_G16A_NSW_SA1_M_Y12e_Tot } = feature.properties;
    return {
        fillColor: colour(_2016Census_G16A_NSW_SA1_M_Y12e_Tot),
        weight: 0, //border thicknedd
        opacity: 1,
        color:'none',  //border color or 'none'
        fillOpacity: 0.7
    };
}

let colour = d => {
    return (
        d > 150 ?'#581845' :
        d > 85 ? '#900c3f' :
        d > 76 ? '#0288D1' :
        d > 68 ? '#039BE5' :
        d > 60 ? '#03A9F4' :
        d > 52 ? '#29BCF6' :
        d > 43 ? '#4FC3F7' :
        d > 34 ? '#81D4FA' :
        d > 26 ? '#B3E5FC' :
        d > 11 ? '#E1F5FE' :
            '#e6f0ff' //default
    )
}

L.geoJSON(male15_19, {style : style}).addTo(map);


  let markers = [
      {
          coord :[-33.72464, 151.120716],
          data: 'Sydney Grammar School'
      },
        {
          coord :[-33.848427, 151.214356],
          data: 'Shore'
      },
        {
          coord :[-33.848427, 151.214356],
          data: 'St Aloysius College'
      }
  ]

var redIcon = L.icon({
  iconUrl:'http://www.freeiconspng.com/uploads/red-location-icon-1.png',
  iconSize:[25,21],
  iconAnchor:[0,0],
  popupAnchor: [0,-15]
})
  markers.forEach(
    ({coord, data} ) => new
    L.marker([coord[0], coord[1]], {icon: redIcon}).bindPopup(data).addTo(map)
  );
