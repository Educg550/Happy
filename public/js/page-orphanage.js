const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// Importação dos dados de latitude e longitude do HBS
const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

const map = L.map("mapid", options).setView([spanLat.dataset.lat, spanLng.dataset.lng], 15);

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

// Criação do Marcador:

L.marker([spanLat.dataset.lat,spanLng.dataset.lng], { icon })
  .addTo(map)

// Galeria de imagens:

const selectImage = (event) => {
    const button = event.currentTarget
    
    // Remover classe .active do botão clicado
    const removeActiveClass = (button) => {
        button.classList.remove("active")
    }
    
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de imagem principal
    imageContainer.src = image.src

    // Adicionar a classe .active para o botão que foi clicado
    button.classList.add('active')
}
