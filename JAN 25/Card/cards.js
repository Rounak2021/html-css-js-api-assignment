var newURL = "https://api2.binance.com/api/v3/ticker/24hr";
var box_card = document.getElementById("box-card");
var table = document.getElementById("table");
var ul = document.getElementById("inputs");


fetch(newURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i<100; i++) {
           li = document.createElement("li");
           li1 = document.createElement("li");
           li2 = document.createElement("li");
           li3 = document.createElement("li");

          
          li.innerText = "Printing of 100 Cards";
          li1.innerText = data[i].symbol;
          li2.innerText = data[i].openPrice;
          li3.innerText = data[i].lastPrice;


        
          
          
          li.append(li1,li2,li3);
          ul.appendChild(li);
          box_card.appendChild(ul);
          
  
      }
    })
    .catch((err) => console.log("api has failed"));

  
  