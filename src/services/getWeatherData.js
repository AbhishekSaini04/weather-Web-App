export default async function getWeatherData(Place = String, KEY = String) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${"e09649b0adfd443790f85820251401"}&q=${Place}&aqi=no`,
    {
      method: "GET",
    }
  );
  return await response.json();
}
