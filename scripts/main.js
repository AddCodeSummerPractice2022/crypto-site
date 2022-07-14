let lastPrice  = null;
const Ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')
let stockpriceEl = document.getElementById('BTC');

Ws.onmessage = (event) => {
    let stcobj = JSON.parse(event.data);
    let price  = parseFloat(stcobj.bitcoin).toFixed(4);
    
    if(!lastPrice || lastPrice === price){
      document.getElementById('BTC').innerHTML = '<span style="color:black;">' +
      price +  '</span>'; 
    }else if(price > lastPrice){
      document.getElementById('BTC').innerHTML = '<span style="color:green;">' +
      price +  '</span>';
    }if(price < lastPrice){
      document.getElementById('BTC').innerHTML = '<span style="color:red;">' +
      price  + '</span>';
    }
    
    lastPrice = price;
    
}
