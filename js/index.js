const apiKey = '7c13de4469846108fafa37e367bea033';

const form = $('form');
const input = $('#location-input');
const weatherInfo = $('#weather-info');

form.submit((e) => {
  e.preventDefault();

  const location = input.val();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},Kosovo&appid=${apiKey}&units=metric`;

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: (data) => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const city = data.name;

      weatherInfo.html(`<p>Current weather in ${city}: ${temp} &deg;C, ${desc}</p>`);
    },
    error: (xhr, status, error) => {
      console.log(error);
      weatherInfo.html(`<p>Could not retrieve weather information for ${location}.</p>`);
    }
  });

  input.val('');
});
