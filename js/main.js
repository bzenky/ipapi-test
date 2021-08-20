const cidade = document.querySelector('.cidade')
const estado = document.querySelector('.estado')
const pais = document.querySelector('.pais')
const ip = document.querySelector('.ip')


fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json().then(jsonData => {
    cidade.innerText += ' ' + jsonData.city;
    estado.innerText += ' ' + jsonData.region;
    pais.innerText += ' ' + jsonData.country;
    ip.innerText += ' ' + jsonData.ip;
  });
})
.catch(function(error) {
  console.log(error)
});