window.onload=function(){
  const from_currencyEl = document.getElementById('from_curency');
  const from_ammountEl = document.getElementById('input');
  const to_currencyEl = document.getElementById('to_curency');
  from_currencyEl.addEventListener('change', calculate);
  to_currencyEl.addEventListener('change', calculate);
  from_ammountEl.addEventListener('input', calculate);
  function calculate() {
    if (from_currencyEl.value != '' && to_currencyEl.value != '')
    {
      const from_currency = from_currencyEl.value;
      const to_currency = to_currencyEl.value;
      
      fetch(`https://api.coincap.io/v2/assets?ids=${from_currency},${to_currency}`)
      .then(res => res.json())
      .then(res => {
        if (from_currency === to_currency) {
          document.getElementById("output").innerHTML = from_ammountEl.value;
        }
        else {
          let rate = res.data[0].priceUsd;
          let rate1 = res.data[1].priceUsd;
          document.getElementById("output").innerHTML = ((from_ammountEl.value * rate)/rate1).toFixed(3);
        }
      })
    }
  }
}
