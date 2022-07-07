const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

   pricesWs.onmessage = function (msg) {
       msg = JSON.parse(msg.data);   
       let a = msg.bitcoin;
       if (a != undefined)
       {
       document.getElementById("demo").innerHTML = a + "$";
       }
   }
