const { createApp } = Vue;

const mapAssetFromDto = (assetDto) =>( {
  symbol: assetDto.symbol,
  id: assetDto.id,
  priceUsd:Number(assetDto.priceUsd).toFixed(3) ,
  volumeUsd24Hr: Number(assetDto.volumeUsd24Hr).toFixed(3),
  changePercent24Hr: Number(assetDto.changePercent24Hr).toFixed(3),
});

const getAssets = () =>
    fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,tron,cosmos,stellar,litecoin,zcash,ren')
    .then((response) => response.json())
    .then((commits) => 
      commits.data.map((assetDto) =>
      mapAssetFromDto(assetDto)))
  
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

