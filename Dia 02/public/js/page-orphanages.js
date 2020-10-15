const map = L.map("mapid").setView([-23.5513794, -46.6357827], 16);

// Criação do tileLayer:

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Criação de ícone:

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Criação do overlay do popup

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  "Orf. da Esperança <a href='orphanage.html?id=1' class='choose-orphanage'><img src='./public/images/arrow-white.svg'></a>"
);

// Criação do Marcador:

L.marker([-23.5513794, -46.6357827], { icon })
  .addTo(map)
  .bindPopup(popup);
