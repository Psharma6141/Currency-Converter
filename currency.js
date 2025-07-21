const full_url = "https://v6.exchangerate-api.com/v6/63abbeedc13cc5ab259964d0/pair/EUR/JPY";
const base_url = "https://v6.exchangerate-api.com/v6/63abbeedc13cc5ab259964d0/pair";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const showMess = document.getElementsByClassName("msg")[0];
console.log(showMess);



// here 2 select in dropdown then total dropdown will be 2 , then first loop chlega 2 baar or second loop chlega number of contry 
console.log(dropdowns.length);
for (let select of dropdowns) {
     for (currCode in countryList) {
          let newo = document.createElement("option")
          newo.innerText = currCode;
          newo.value = currCode;
          select.append(newo);
     }
     select.addEventListener("change", function () {
          let currCode = this.value;
          let countryCode = countryList[currCode];
          let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
          let img = this.parentElement.querySelector("img");
          img.src = newsrc;
     })
}

// update button and currency

const updateExchangeRate = async () => {
     let amount = document.querySelector("form input");
     let amtval = amount.value;
     if (amtval == "" || amtval < 1) {
          amtval = 1;
          amount.value = '1'
     }
     let url = `${base_url}/${fromcurr.value}/${tocurr.value}`;
     let response = await fetch(url);
     let data = await response.json();
     let rate = data.conversion_rate;
     let finalAmount = amtval * rate;


     showMess.innerHTML = `${amtval}${fromcurr.value}= ${finalAmount}${tocurr.value}`;
     console.log(finalAmount);
     console.log(fromcurr.value, tocurr.value)

}


window.addEventListener("load", (evt) => {
     evt.preventDefault();
     updateExchangeRate();
});

btn.addEventListener("click", (evt) => {
     evt.preventDefault();
     updateExchangeRate();
})

