const historicalUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const globalUrl = "https://disease.sh/v3/covid-19/all";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchHistoricalData() {
  return fetchData(historicalUrl);
}

async function fetchGlobalData() {
  return fetchData(globalUrl);
}

// Fetch data
Promise.all([fetchHistoricalData(), fetchGlobalData()])
  .then(([historicalData, globalData]) => {
    // Proceed to build the dashboard
    buildDashboard(historicalData, globalData);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


  function buildDashboard(historicalData, globalData) {
    // Process historical data and build line chart
    const dates = Object.keys(historicalData.cases);
    const cases = Object.values(historicalData.cases);
    const deaths = Object.values(historicalData.deaths);
    const recovered = Object.values(historicalData.recovered);
  
    const chartData = {
      labels: dates,
      datasets: [
        {
          label: 'Cases',
          data: cases,
          borderColor: 'blue',
        },
        {
          label: 'Deaths',
          data: deaths,
          borderColor: 'red',
        },
        {
          label: 'Recovered',
          data: recovered,
          borderColor: 'green',
        },
      ],
    };
  
    const chartConfig = {
      type: 'line',
      data: chartData,
    };
  
    // Create a canvas element for the line chart
    const chartCanvas = document.createElement('canvas');
    chartCanvas.width = 800;
    chartCanvas.height = 400;
    document.body.appendChild(chartCanvas);
    new Chart(chartCanvas, chartConfig);
  
    // Build map with markers
    const mapContainer = document.createElement('div');
    mapContainer.style.width = '800px';
    mapContainer.style.height = '400px';
    document.body.appendChild(mapContainer);
  
    const map = L.map(mapContainer).setView([0, 0], 2);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
    
  }
  