//Second Map for markers
let map2 = L.map('map2').setView([-33.8, 151.2], 11);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicGVubnlwYW5nY29kZSIsImEiOiJjajZ2bjlwazkxNW10MzJvMzVidjNlcnExIn0.kxfe2U4_vp8dcb6dQdok2g'
}).addTo(map2);

let style2 = feature => {
    const { __2016Census_G16A_NSW_SA1_M_Y12e_Tot } = feature.properties;
    return {
        fillColor: colour2(__2016Census_G16A_NSW_SA1_M_Y12e_Tot),
        weight: 0, //border thicknedd
        opacity: 1,
        color:'none',  //border color or 'none'
        fillOpacity: 0.7
    };
}

let colour2 = d => {
    return (
        d > 150 ?'#413839' :
        d > 85 ? '#900c3f' :
        d > 76 ? '#2F4F4F' :
        d > 68 ? '#708090' :
        d > 60 ? '#778899' :
        d > 52 ? '#696969' :
        d > 43 ? '#808080' :
        d > 34 ? '#A9A9A9' :
        d > 26 ? '#D3D3D3' :
        d > 11 ? '#DCDCDC' :
            '#e6f0ff' //default
    )
}

L.geoJSON(male15_19, {style : style}).addTo(map2);

  let markers = [
      {
          coord :[-33.72464, 151.120716],
          data: 'Sydney Grammar School'
      },
        {
          coord :[-33.840559, 151.20448],
          data: 'Sydney Church of England Grammar School'
      },
        {
          coord :[-33.848427, 151.214356],
          data: 'St Aloysius College'
      },
        {
          coord :[-33.872363, 151.251123],
          data: 'Cranbrook School'
      },
        {
          coord :[-33.724549, 151.120674],
          data: 'Knox Grammar'
      },
        {
          coord :[-33.805106, 150.985547],
          data: 'Parramatta Marist High School'
      },
        {
          coord :[-33.874896, 151.253077],
          data: 'The Scots College'
      },
      {
        coord :[-33.786159, 151.025467],
        data: 'The Kings School'
    },
      {
        coord :[-33.827917, 151.156018],
        data: 'Saint Ignatius College'
    },
      {
        coord :[-33.831229, 151.138753],
        data: 'St Joseph College'
    }
  ]

  let markers2 = [
      {
          coord :[-33.720191, 151.115046],
          data: 'Abbotsleigh'
      },
        {
          coord :[-33.878003, 151.237118],
          data: 'Ascham School'
      },
        {
          coord :[-33.726044, 151.098812],
          data: 'Loreto Normanhurst'
      },
        {
          coord :[-33.876383, 151.218727],
          data: 'SCEGGS Darlinghurst'
      },
        {
          coord :[-33.847286, 151.216394],
          data: 'Loreto Kirribilli'
      },
        {
          coord :[-33.83464, 151.243264],
          data: 'Queenwood'
      },
        {
          coord :[-33.748389, 151.134796],
          data: 'Pymble Ladies College'
      },
      {
        coord :[-33.882533, 151.115576],
        data: 'PLC Sydney'
    },
      {
        coord :[-33.784446, 151.182849],
        data: 'Roseville College'
    },
      {
        coord :[-33.874366, 151.089964],
        data: 'Meriden School'
    }
  ]

var orangeIcon = L.icon({
  iconUrl:'http://www.clker.com/cliparts/m/I/n/1/T/P/orange-dot-md.png',
  iconSize:[20,20],
  iconAnchor:[0,0],
  popupAnchor: [0,-15]
})

var redIcon = L.icon({
  iconUrl:'http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot-md.png',
  iconSize:[20,20],
  iconAnchor:[0,0],
  popupAnchor: [0,-15]
})

//legend;



  markers.forEach(
    ({coord, data} ) => new
    L.marker([coord[0], coord[1]], {icon: orangeIcon}).bindPopup(data).addTo(map2)
  );

  markers2.forEach(
    ({coord, data} ) => new
    L.marker([coord[0], coord[1]], {icon: redIcon}).bindPopup(data).addTo(map2)
  );
