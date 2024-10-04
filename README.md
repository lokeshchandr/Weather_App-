# Weather Detection Website

This project is a simple weather detection website built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data from the **OpenWeather API** based on the user's input and displays the current weather conditions such as temperature, humidity, and weather description.

## Table of Contents


- [API Reference]( https://openweathermap.org/api)


## Live Demo

Check out the live version of the Weather Detection Website here: (https://lokeshchandr.github.io/Weather_App-/)
![Screenshot 2024-10-04 223047](https://github.com/user-attachments/assets/3715bc3d-c415-450c-9228-3fe97f73fa50)
![Screenshot 2024-10-04 223016](https://github.com/user-attachments/assets/521b5609-84cc-40b0-9a73-463b5156981b)
![Screenshot 2024-10-04 222923](https://github.com/user-attachments/assets/b02d9640-ad4a-4736-b362-3ce643df461f)


## Features


- Search weather data for any city.
- Displays real-time temperature, humidity, and weather description.
- Simple and clean user interface.
- Uses OpenWeather API for fetching real-time weather data.
  
## Technologies Used

- **HTML5** - Markup language for the web page structure.
- **CSS3** - Styling the web page, making it responsive and visually appealing.
- **JavaScript** - Adding dynamic functionality to fetch and display weather data.
- **OpenWeather API** - Provides current weather data for the requested city.

## Installation

### Prerequisites

- A modern web browser.
- An API key from OpenWeather (free to sign up at [https://openweathermap.org/](https://openweathermap.org/)).

### Steps to Install Locally

1. Clone the repository:
    ```bash
    gh repo clone lokeshchandr/Weather_App-
    ```

2. Navigate into the project directory:
    ```bash
    cd Weather_App-
    ```

3. Open `index.html` in your web browser:
    ```bash
    open index.html
    ```

4. Enter your OpenWeather API key in the JavaScript file (`script.js`):
    ```javascript
    const API_K = 'YOUR_API_KEY';
    ```

5. The website should now be running locally, allowing you to search for weather data.

## Usage

1. Enter a city name in the search box.
2. Click the "Search" button or press Enter.
3. The website will display the current weather, including temperature, humidity, and weather description.
4. If the city is not found, an error message will be shown.

### Example

Enter "New York" to get the following weather data:
- Temperature: 22°C
- Humidity: 78%
- Weather: Clear sky

## API Reference

The website uses the **Current Weather Data API** from OpenWeather to fetch weather information. 

- **Base URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Required Parameters:**
  - `q`: City name (e.g., `New York`).
  - `appid`: Your unique API key.

### Sample API Request

```bash
https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=YOUR_API_KEY
