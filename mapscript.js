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

//Legend
