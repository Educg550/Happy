const map = L.map("mapid").setView([-23.5180237, -46.6226418], 16);

// Criação do tileLayer:
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Criação de ícone:
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const addMarker = ({ id, name, lat, lng }) => {
  // Criação do overlay do popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href='/orphanage?id=${id}'><img src='/images/arrow-white.svg'>
    </a>`
  );

  // Criação do Marcador:
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
};

  const orphanagesSpan = document.querySelectorAll(".orphanages span");
  orphanagesSpan.forEach((span) => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng,
    };

    addMarker(orphanage);
  });
