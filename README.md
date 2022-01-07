## Table of Contents

-   [Weather App](<#weather-App-(myWeather)>)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Built With](#built-with)
-   [Contact](#contact)

# Weather App (myWeather)

Displays weather forecast based on an address provided. Data come from [mapbox](https://www.mapbox.com/) and [weatherstack.com](https://weatherstack.com/) APIs.

**URL:** https://tony-trinh-weather-application.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Node.js](https://nodejs.org/en/) - get and install the latest version

### Installation

Follow below steps to setup the project on your local machine.

1. Clone the project
    ```sh
    git clone https://github.com/tonytrinh19/weather-nodejs.git
    ```
2. Get project dependencies
    ```sh
    npm install
    ```
3. Create `config/dev.env` file

    - Create new accounts on **[mapbox](https://www.mapbox.com/)** and **[weatherstack](https://weatherstack.com/)**
    - Get API keys from both websites
    - Save the API keys in `dev.env` file

        **Example:**

        ```JS
        PORT=3000
        FORECAST_API_KEY=your_api_key
        GEOCODE_API_KEY=your_api_key
        ```

1. Start the server

    ```sh
    npm run dev
    ```

    You should see below console message if successful

    ```sh
    [nodemon] 2.0.7
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,hbs
    [nodemon] starting `node src/app.js hbs`
    Server running on port 3000
    ```

    - Access `http://localhost` on your browser to view the app
  

    - Basic logging available in console for every search
        ```sh
        {
            "request": {
                "type": "City",
                "query": "Vancouver, Canada",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Vancouver",
                "country": "Canada",
                "region": "British Columbia",
                "lat": "49.250",
                "lon": "-123.133",
                "timezone_id": "America/Vancouver",
                "localtime": "2022-01-06 23:04",
                "localtime_epoch": 1641510240,
                "utc_offset": "-8.0"
            },
            "current": {
                "observation_time": "07:04 AM",
                "temperature": 3,
                "weather_code": 296,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0033_cloudy_with_light_rain_night.png"
                ],
                "weather_descriptions": [
                    "Light rain"
                ],
                "wind_speed": 9,
                "wind_degree": 80,
                "wind_dir": "E",
                "pressure": 997,
                "precip": 1.4,
                "humidity": 99,
                "cloudcover": 100,
                "feelslike": 1,
                "uv_index": 1,
                "visibility": 9,
                "is_day": "no"
            }
        }
        ```
## Built With

-   [Node.js](https://nodejs.org/en/) - Server side runtime
-   [npm](https://www.npmjs.com/) - Package management
-   [Express.js](https://expressjs.com/) - Web application framework
-   [express-hbs](https://www.npmjs.com/package/express-hbs) / [Handlebars](https://handlebarsjs.com/) - Template engines

## Contact

Tony Trinh - tony@trinh.in

LinkedIn - https://www.linkedin.com/in/tonytrinh19/
