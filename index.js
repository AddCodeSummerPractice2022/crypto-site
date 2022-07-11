fetch('https://api.coincap.io/v2/assets/bitcoin')
    .then(response => response.json())
    .then(commits  => {
        let bitc = commits.data.priceUsd;
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 50000)
        fetch('https://api.coincap.io/v2/assets/bitcoin', {
            signal: controller.signal
            })
        .then(response => response.json())
        .then(commits =>{
            let test = commits.data.priceUsd;
            console.log("this is test" + test);
            console.log("bitcoin" + bitc);

            if(bitc < test){
                document.getElementById("demo").innerHTML = '<span style="color:red;">' +
                parseInt(bitc * 10000) / 10000 + " $" + '</span>'; 
            }if(bitc > test){
                document.getElementById("demo").innerHTML = '<span style="color:green;">' +
                parseInt(test * 1000) / 1000 + " $" + '</span>'; 
            }
        });

            document.getElementById("demo").innerHTML = parseInt(commits.data.priceUsd * 100) / 100 + " $"
    });
            
        
fetch('https://api.coincap.io/v2/assets/ethereum')
    .then(response => response.json())
    .then(commits => document.getElementById("eth").innerHTML = parseInt(commits.data.priceUsd * 100) / 100 + " $");

fetch('https://api.coincap.io/v2/assets/dogecoin')
    .then(response => response.json())
    .then(commits => document.getElementById("dog").innerHTML = parseInt(commits.data.priceUsd * 10000) / 10000 + " $");

fetch('https://api.coincap.io/v2/assets/tron')
    .then(response => response.json())
    .then(commits => document.getElementById("tro").innerHTML = parseInt(commits.data.priceUsd * 10000) / 10000 + " $");

fetch('https://api.coincap.io/v2/assets/cosmos')
    .then(response => response.json())
    .then(commits => document.getElementById("cosm").innerHTML = parseInt(commits.data.priceUsd * 10000) / 10000 + " $");

fetch('https://api.coincap.io/v2/assets/stellar')
    .then(response => response.json())
    .then(commits => document.getElementById("st").innerHTML = parseInt(commits.data.priceUsd * 10000) / 10000 + " $");

fetch('https://api.coincap.io/v2/assets/litecoin')
    .then(response => response.json())
    .then(commits => document.getElementById("lt").innerHTML = parseInt(commits.data.priceUsd * 100) / 100 + " $");

fetch('https://api.coincap.io/v2/assets/zcash')
    .then(response => response.json())
    .then(commits => document.getElementById("ztc").innerHTML = parseInt(commits.data.priceUsd * 100) / 100 + " $");

fetch('https://api.coincap.io/v2/assets/ren')
    .then(response => response.json())
    .then(commits => document.getElementById("re").innerHTML = parseInt(commits.data.priceUsd * 10000) / 10000 + " $");
   
        //через WEBSOCKET
        //if(a != undefined){
        //document.getElementById("demo").innerHTML = a + "$";
       //};
       /*if(b != undefined){
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
       };*/
       //if(ltcc != undefined){
        //document.getElementById("lt").innerHTML = ltcc + " $";
       //};
       /*if(zt != undefined){
        document.getElementById("ztc").innerHTML = zt + " $";
       };
       if(r != undefined){
        document.getElementById("re").innerHTML = r + " $";
       };
    }*/

   
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
        
    
fetch('https://api.coincap.io/v2/assets/bitcoin')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("demo2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("demo2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })
    
fetch('https://api.coincap.io/v2/assets/ethereum')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("eth2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("eth2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/dogecoin')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("dog2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
         } else {
            document.getElementById("dog2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
         }
    })

fetch('https://api.coincap.io/v2/assets/tron')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("tro2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("tro2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/cosmos')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("cosm2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("cosm2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/litecoin')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("lite2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("lite2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/zcash')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("zc2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("zc2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/ren')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("ren2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("ren2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })

fetch('https://api.coincap.io/v2/assets/stellar')
    .then(response => response.json())
    .then(commits => {
        if ( parseInt(commits.data.changePercent24Hr * 1000) / 1000 > 0) {
            document.getElementById("stel2").innerHTML = '<span style="color:green;">+' +
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        } else {
            document.getElementById("stel2").innerHTML = '<span style="color:red;">' + 
            parseInt(commits.data.changePercent24Hr * 1000) / 1000 + " %" + '</span>'; 
        }
    })
    
