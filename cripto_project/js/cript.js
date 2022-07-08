const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL'); 
   const tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance?assets=bitcoin');

   pricesWs.onmessage = function (msg) {
       
       msg = JSON.parse(msg.data);
       let a = msg.bitcoin;
       let b = msg.ethereum;
       let c = msg.dogecoin;
       let tr = msg.tron;
       let cos = msg.cosmos;
       let stl = msg.stellar;
       let ltcc = msg.litecoin;
       let zt = msg.zcash;
       let r = msg.ren;

       if(a != undefined){
        document.getElementById("demo").innerHTML = a + "$";
       };
       if(b != undefined){
        document.getElementById("eth").innerHTML = b + " $";
       };
       if(c != undefined){
        document.getElementById("dog").innerHTML = c + " $";
       };
       if(tr != undefined){
        document.getElementById("tro").innerHTML = tr + " $";
       };
       if(cos != undefined){
        document.getElementById("cosm").innerHTML = cos + " $";
       };
       if(stl != undefined){
        document.getElementById("st").innerHTML = stl + " $";
       };
       if(ltcc != undefined){
        document.getElementById("lt").innerHTML = ltcc + " $";
       };
       if(zt != undefined){
        document.getElementById("ztc").innerHTML = zt + " $";
       };
       if(r != undefined){
        document.getElementById("re").innerHTML = r + " $";
       };
    }

    async function getResp(){

        fetch('https://api.coincap.io/v2/assets/bitcoin')
            .then(response => response.json())
            .then(commits => document.getElementById("demo1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/ethereum')
            .then(response => response.json())
            .then(commits => document.getElementById("eth1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/dogecoin')
            .then(response => response.json())
            .then(commits => document.getElementById("dog1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/tron')
            .then(response => response.json())
            .then(commits => document.getElementById("tro1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/cosmos')
            .then(response => response.json())
            .then(commits => document.getElementById("cosm1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");

        fetch('https://api.coincap.io/v2/assets/stellar')
            .then(response => response.json())
            .then(commits => document.getElementById("stel1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/litecoin')
            .then(response => response.json())
            .then(commits => document.getElementById("lite1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");

        fetch('https://api.coincap.io/v2/assets/zcash')
            .then(response => response.json())
            .then(commits => document.getElementById("zc1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
        fetch('https://api.coincap.io/v2/assets/ren')
            .then(response => response.json())
            .then(commits => document.getElementById("ren1").innerHTML = Math.floor(commits.data.volumeUsd24Hr) + " $");
        
            
    }
    getResp()
