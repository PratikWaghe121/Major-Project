

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11',
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 9 // starting zoom
});




const marker = new mapboxgl.Marker({color: "#fe424d"})
.setLngLat( listing.geometry.coordinates)  //listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h4>${ listing.title}</h4><p>exact location will be provided after booking</p>`))
.addTo(map);


