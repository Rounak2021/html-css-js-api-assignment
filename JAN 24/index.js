  var newURL = "https://api2.binance.com/api/v3/ticker/24hr";
  var table = document.getElementById("table");

  

  fetch(newURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
           tr = document.createElement("tr");
           td1 = document.createElement("td");
           td2 = document.createElement("td");
          
          tr.innerText = data[i].symbol;
          td1.innerText = data[i].openPrice;
          td2.innerText = data[i].lastPrice;
        
          
          
          tr.append(td1, td2);         
          table.appendChild(tr);
          
  
      }
    })
    .catch((err) => console.log("api has failed"));
  
// ---------------------------------------------------------------