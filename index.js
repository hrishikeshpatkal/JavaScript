class WeatherApp {
  constructor() {
    this.weatherData = [];
    this.searchTimeout = null;
    this.debounceDelay = 300; // milliseconds
    this.init();
  }

  async init() {
    this.setupEventListeners();
    await this.loadWeatherData();
  }

  setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', () => this.handleSearch());
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSearch();
    });
    searchInput.addEventListener('input', (e) => {
      this.debouncedSearch(e.target.value);
    });
  }

  debouncedSearch(searchTerm) {
    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Set new timeout for search
    this.searchTimeout = setTimeout(() => {
      this.performSearch(searchTerm);
    }, this.debounceDelay);
  }

  performSearch(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();

    if (!searchTerm) {
      this.displayWeather(this.weatherData);
      return;
    }

    const filtered = this.weatherData.filter(city =>
      city.name.toLowerCase().includes(searchTerm) ||
      city.country.toLowerCase().includes(searchTerm)
    );

    this.displayWeather(filtered);
  }

  async loadWeatherData() {
    try {
      this.showLoading();
      const response = await fetch('weather-data.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.weatherData = data.cities || [];
      this.displayWeather(this.weatherData);
    } catch (error) {
      console.error('Error loading weather data:', error);
      this.showError('Failed to load weather data. Please try again.');
    }
  }

  displayWeather(cities) {
    const grid = document.getElementById('weatherGrid');

    if (cities.length === 0) {
      grid.innerHTML = '<div class="no-results">📍 No cities found. Try adjusting your search.</div>';
      return;
    }

    grid.innerHTML = cities.map(city => this.createWeatherCard(city)).join('');
  }

  createWeatherCard(city) {
    return `
      <div class="weather-card">
        <div class="weather-header">
          <div>
            <div class="weather-title">${this.escapeHtml(city.name)}</div>
            <div class="weather-location">📍 ${this.escapeHtml(city.country)}</div>
          </div>
          <div class="weather-icon">${city.icon}</div>
        </div>
        <div class="weather-condition">${this.escapeHtml(city.condition)}</div>
        <div class="temperature">${city.temperature}°</div>
        <div class="temp-label">Celsius</div>
        <div class="divider"></div>
        <div class="details">
          <div class="detail-item">
            <div class="detail-label">Feels Like</div>
            <div class="detail-value">${city.feelsLike}°C</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Humidity</div>
            <div class="detail-value">${city.humidity}%</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Wind Speed</div>
            <div class="detail-value">${city.windSpeed} km/h</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Status</div>
            <div class="detail-value">✓ Live</div>
          </div>
        </div>
      </div>
    `;
  }

  handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Cancel any pending debounced search
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Perform search immediately when button is clicked
    this.performSearch(searchTerm);
  }

  showLoading() {
    const grid = document.getElementById('weatherGrid');
    grid.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading weather data...</p></div>';
  }

  showError(message) {
    const grid = document.getElementById('weatherGrid');
    grid.innerHTML = `<div class="no-results">❌ ${this.escapeHtml(message)}</div>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});