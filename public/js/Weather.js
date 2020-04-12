class weather{
	constructor(options){
		//api.openweathermap.org/data/2.5/weather?q={city name},{state}
		this.config = {
			API_KEY : options.apikey || "8c9b143e9a9687fa41b484de07203098",
			CURRENT_WEATHER_URL : "https://api.openweathermap.org/data/2.5/weather",
			LOCATION_NAME: options.locationName || 'Broklyn,nyc',
			UNITS: 'metric'
		}
		this.data = {
			current : {}
		};
	}
	
} 