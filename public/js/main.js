const store = {
  apiKey: "8c9b143e9a9687fa41b484de07203098",
  locationName: "Brooklyn,nyc"
}
let weatherApp;
window.onload = async function(){
  weatherApp = new Weather(store);
  await weatherApp.init();
  console.log(weatherApp.data.current)
}