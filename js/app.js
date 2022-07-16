//############################  Seçmə/Təyin etmə START  ############################
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
//############################  Seçmə/Təyin etmə END  ############################
positionWeather()
//############################  Koordinatların təyini və APİ-dən koor-a uyğun məlumat alınması START  ############################
 function positionWeather (pos) {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude
    let lon= position.coords.longitude
//############################  APİ-lərə müraciət START  ############################
const xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let h1 = document.createElement("h1");
              h1.innerHTML = JSON.parse(xhr.responseText).location.region;
              h1.style.color = "gold";
              h1.className="sheher"
              city.appendChild(h1);
          let pos = document.createElement("h1");
              pos.innerHTML = `${lat},&nbsp &nbsp &nbsp ${lon}`;
              pos.style.color = "gold";
              pos.style.fontSize="10px"
              pos.className="sheher"
              city.appendChild(pos);

          temp.innerHTML = `${
            JSON.parse(xhr.responseText).current.feelslike_c
          }  ${"\u2103"}`;
          wind.innerHTML = `${JSON.parse(xhr.responseText).current.wind_mph} mph`;
          rutubet.innerHTML = `${JSON.parse(xhr.responseText).current.humidity}%`;
        }
      };
      url =
      `https://api.weatherapi.com/v1/current.json?key=a0e8927c61a1441a8d8183910221407&q=${lat},${lon}&aqi=no
      `;
      xhr.open("GET", url);
      document.onload=xhr.send();
//#############################  APİ-lərə müraciət END  #############################
  },
  function (error) {
      console.log("The Locator was denied. :(")
  })
};
//############################  Koordinatların təyini və APİ-dən koor-a uyğun məlumat alınması END  ############################
//############################  Hal-hazırdakı tarix START  ############################
let dateNow = document.createElement("h3");
dateNow.innerHTML = `${dayNow}  ${aylar[monthNow]}  ${yearNow}`;
date.appendChild(dateNow);
//############################  Hal-hazırdakı tarix END  ############################
