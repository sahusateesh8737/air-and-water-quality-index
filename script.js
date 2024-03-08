// Replace with your actual API endpoint URLs
const airQualityUrl = "https://api.example.com/air-quality";
const waterQualityUrl = "https://api.example.com/water-quality";

const updateAirQuality = (data) => {
  document.getElementById("air-index").textContent = data.index;
  document.getElementById("air-description").textContent = data.description;
};

const updateWaterQuality = (data) => {
  document.getElementById("water-index").textContent = data.index;
  document.getElementById("water-description").textContent = data.description;
};

const fetchData = async (url, updateFunction) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    updateFunction(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById(url.split("/")[1] + "-index").textContent = "Error";
  }
};

fetchData(airQualityUrl, updateAirQuality);
fetchData(waterQualityUrl, updateWaterQuality);





