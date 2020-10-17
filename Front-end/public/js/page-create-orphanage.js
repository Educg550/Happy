const map = L.map("mapid").setView([-23.5504484, -46.6360999], 16);

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
});

// Criação do overlay do popup
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  "Orf. Raio de Luz <a href='orphanage.html?id=1' class='choose-orphanage'><img src='./public/images/arrow-white.svg'></a>"
);

// Criar marcador ao clicar
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remover ícone anterior (marker existe -> então executa função de remover)
  marker && map.removeLayer(marker);

  // Adicionar ícone
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Adicionar campo das fotos
const addPhotoField = () => {
  // Resgatar o container de fotos #photos
  const container = document.querySelector("div#photos");

  // Resgatar o container da imagem que será duplicado #new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verificar se o campo está vazio~
  var input = newFieldContainer.children[0].value;
  if (input == "") {
    alert("Insira um link antes de adicionar outro campo");
    return;
  }

  // Limpeza do campo antes de adicioná-lo no container
  newFieldContainer.children[0].value = "";

  // Adicionar o clone ao container de imagens #photos no HTML
  container.appendChild(newFieldContainer);
};

// Remover o campo de fotos clicado
const removePhotoField = (event) => {
  // Resgatar o elemento que foi clicado
  const span = event.currentTarget;

  // Verificar se existe mais de um campo de fotos
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length == 1) {
    // Limpar o valor do campo
    span.parentNode.children[0].value = ''
    return;
  }

  // Remover o campo inteiro
  span.parentNode.remove();
};

const selectButtonActive = (event) => {
  // Resgatar os dois botões sim e não
  const buttons = document.querySelectorAll('.button-select button')

  // Remover a classe active dos dois botões
  buttons.forEach( (button) => button.classList.remove('active') )

  // Colocar a classe active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  // Resgatar o input hidden dos botões
  const input = document.querySelector('input#open-on-weekends')

  // Verificar se o botão é sim ou não
  if (button.value == '1')
  {
    input.value = button.value
  }
  else if (button.value == '0')
  {
    input.value = button.value
  }

  console.log(input.value)
}
