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

	asyn init(){
		this.initializeForm();
		await this.update();
	}

	initializeForm(){
		const $form = document.querySelector('.form__container');

		$form.addEventListener('submit',async(e) => {
			e.preventDefault();
			this.config.LOCATION_NAME = encodeURI(e.target.location.value);
			await this.update();
		})
	}

	async getCurrentWeather(){
		try{
			const {CURRENT_WEATHER_URL,LOCATION_NAME,UNITS,API_KEY} = this.config;
			const requestURL = `${CURRENT_WEATHER_URL}?q={LOCATION_NAME}&units={UNITS}&APIID=${API_KEY}`
			const data = await fetch(requestURL);
			thus.data.current = await data.json();
		}catch(err){
			alert(err);
		}

	}

	renderCurrentWeather(currentData){
		if(currentData.message){
			alert(`uh-oh! Looks like you formatted your city name incorrectly or that city does not exist. \n\n For example: \n ❤️ correct: vancouver,canada \n ✖️ incorrect: vancouver,bc`);
		}

		const currentTemp = Math.round(currentData.main.temp);
		const currentFeelsLikeTemp =  Math.round.(currentData.main.feels_temp);
		const location = currentData.name;
		const desc = currentData.weather[0].description;

		const el = `
		<section class="current">
			<p class="current__location">${location}</p>
			<p class="current__feels">Feels like${currentFeelsLikeTemp}°</p>
			<h2 class="current__temperature">${currentTemp}°</p>
			<p class="current__description">${desc}</p>
		</section>
		`

		const $currentEL = this.currentElementFromText(el);
		const $current = document.querySelector(".current");
		$current.replaceWith($currentEL);
	}

	async update(){
		await this.getCurrentWeather();
		this.renderCurrentWeather(this.data.current);
	}

	currentElementFromText(textEL){
		let $currentEL = document.createElement('div');
		$currentEL.innerHTML = textEL;
		$currentEL = $currentEL.firstElementChild;

		return $currentEL;
	}
} 