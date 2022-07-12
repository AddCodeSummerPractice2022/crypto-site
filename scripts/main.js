function getRequest() {
fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,tron,cosmos,stellar,litecoin,zcash,ren') //получение цены монет
    .then(response => response.json())
    .then(commits  => {
        //-------получение уены монет
        document.getElementById("BTC").innerHTML = parseInt(commits.data[0].priceUsd * 1000) / 1000 + " $";
        document.getElementById("ETH").innerHTML = parseInt(commits.data[1].priceUsd * 1000) / 1000 + " $";
        document.getElementById("DOG").innerHTML = parseInt(commits.data[2].priceUsd * 1000) / 1000 + " $";
        document.getElementById("TRON").innerHTML = parseInt(commits.data[3].priceUsd * 1000) / 1000 + " $"
        document.getElementById("LT").innerHTML = parseInt(commits.data[4].priceUsd * 1000) / 1000 + " $";
        document.getElementById("STL").innerHTML = parseInt(commits.data[5].priceUsd * 1000) / 1000 + " $";
        document.getElementById("COSM").innerHTML = parseInt(commits.data[6].priceUsd * 1000) / 1000 + " $";
        document.getElementById("ZC").innerHTML = parseInt(commits.data[7].priceUsd * 1000) / 1000 + " $";
        document.getElementById("REN").innerHTML = parseInt(commits.data[8].priceUsd * 1000) / 1000 + " $";
        //-------получение объема продаж
        document.getElementById("BTC1").innerHTML = Math.floor(commits.data[0].volumeUsd24Hr) + " $";
        document.getElementById("ETH1").innerHTML = Math.floor(commits.data[1].volumeUsd24Hr) + " $";
        document.getElementById("DOG1").innerHTML = Math.floor(commits.data[2].volumeUsd24Hr) + " $";
        document.getElementById("TRON1").innerHTML = Math.floor(commits.data[3].volumeUsd24Hr) + " $";
        document.getElementById("LT1").innerHTML = Math.floor(commits.data[4].volumeUsd24Hr) + " $";
        document.getElementById("STL1").innerHTML = Math.floor(commits.data[5].volumeUsd24Hr) + " $";
        document.getElementById("COSM1").innerHTML = Math.floor(commits.data[6].volumeUsd24Hr) + " $";
        document.getElementById("ZC1").innerHTML = Math.floor(commits.data[7].volumeUsd24Hr) + " $";
        document.getElementById("REN1").innerHTML = Math.floor(commits.data[8].volumeUsd24Hr) + " $";
        //-------изменение цены за 24 часа
        document.getElementById("BTC2").innerHTML = parseInt(commits.data[0].changePercent24Hr * 1000) / 1000 + " %";
        document.getElementById("ETH2").innerHTML = parseInt(commits.data[1].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("DOG2").innerHTML = parseInt(commits.data[2].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("TRON2").innerHTML = parseInt(commits.data[3].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("LT2").innerHTML = parseInt(commits.data[4].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("STL2").innerHTML = parseInt(commits.data[5].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("COSM2").innerHTML = parseInt(commits.data[6].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("ZC2").innerHTML = parseInt(commits.data[7].changePercent24Hr * 1000) / 1000 + " %"; 
        document.getElementById("REN2").innerHTML = parseInt(commits.data[8].changePercent24Hr * 1000) / 1000 + " %" 
    });
  }
  setInterval(getRequest, 500)
