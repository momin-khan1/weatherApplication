const API_KEY = `430e4320029b86754657e19b388accbb`;

const getWeatherData = () => {
  const city = document.getElementById("city-tempareture").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTempareture(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTempareture = (tempareture) => {
  setInnerText("city-name", tempareture.name);
  setInnerText("temp", tempareture.main.temp);
  setInnerText("temp-condition", tempareture.weather[0].main);
  console.log(tempareture);
  const url = ` http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("img-icon");
  imgIcon.setAttribute("src", url);
};
