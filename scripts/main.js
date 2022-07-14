const { createApp } = Vue;

const quotes = ["bitcoin","ethereum","dogecoin","tron","cosmos","stellar","litecoin","zcash","ren"];

const prepareHttpRequest = (url) =>
  fetch(url).then((response) => response.json());

const mapAssetFromDto = (assetDto) =>( {
  assetId: assetDto.symbol,
  name: assetDto.id,
  priceUSD: parseInt(assetDto.priceUsd * 1000) / 1000,
  volume: parseInt(assetDto.volumeUsd24Hr * 1000) /1000,
  
});

const getAssets = () =>
  prepareHttpRequest(
    `https://api.coincap.io/v2/assets?ids=${quotes.join(
      ","
    )}`)
    .then((data) =>
    data.data.map((assetDto) => mapAssetFromDto(assetDto))
  );

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
  },
}).mount("#app");
