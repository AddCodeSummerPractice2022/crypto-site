const { createApp } = Vue;

const FromAssets = (coins) =>( {
  assetId: coins.symbol,
  name: coins.id,
  priceUSD:Number(coins.priceUsd).toFixed(3) ,
  volume: Number(coins.volumeUsd24Hr).toFixed(3),
  change: Number(coins.changePercent24Hr).toFixed(3),
});

const getAssets = () =>
    fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,tron,cosmos,stellar,litecoin,zcash,ren')
    .then((response) => response.json())
    .then((commits) => 
      commits.data.map((coins) =>
      FromAssets(coins)))
  
// vue app
createApp({
  data() {
    return {
      loading: false,
      error: null,
      assets: null,
      
    };
  },
  computed: {
    isNonEmptyError() {
      return this.error !== null;
    },
    isNonEmptyAssets() {
      return this.assets !== null;
    },
  },
  async mounted() {
   
    try {
      this.loading = true;
      this.assets = await getAssets();
    } catch (err) {
      console.error(err);
      this.error = err;
    } finally {
      this.loading = false;
    }
  }}).mount("#app");
