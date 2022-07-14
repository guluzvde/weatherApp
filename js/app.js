const xhr = new XMLHttpRequest();
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".weather");
const wind = document.querySelector(".wind");
const rutubet = document.querySelector(".hum");

let dayNow = new Date().getDate();
let monthNow = new Date().getMonth();
let yearNow = new Date().getFullYear();

const aylar = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
let dateNow = document.createElement("h3");
dateNow.innerHTML = `${dayNow}  ${aylar[monthNow]}  ${yearNow}`;
date.appendChild(dateNow);

function myLocation() {
  fetch("https://ipapi.co/json/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let h1 = document.createElement("h1");
      h1.innerHTML = `${data.city}`;
      h1.style.color = "gold";
      city.appendChild(h1);
    });
}
myLocation();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // console.log( JSON.parse(xhr.responseText));
    temp.innerHTML = `${
      JSON.parse(xhr.responseText).current.feelslike_c
    }  ${"\u2103"}`;
    wind.innerHTML = `${JSON.parse(xhr.responseText).current.wind_mph} mph`;
    rutubet.innerHTML = `${JSON.parse(xhr.responseText).current.humidity}%`;
  }
};
url =
  "http://api.weatherapi.com/v1/current.json?key=a0e8927c61a1441a8d8183910221407&q=baku&aqi=no";
xhr.open("GET", url);
xhr.send();
