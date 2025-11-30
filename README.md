# Weather App 

A modern, responsive weather application showcasing real-time weather forecasts for major Indian cities. Built with vanilla JavaScript, HTML5, and CSS3 without external dependencies or APIs.

## Features

 **Modern UI/UX**
- Dark theme with elegant gradient design
- Smooth animations and transitions
- Fully responsive mobile-first design
- Professional card-based layout

 **Smart Search**
- Real-time search with debouncing (300ms)
- Search by city name or country
- Instant results as you type
- Click-to-search button option

 **Performance Optimized**
- No external APIs or dependencies
- Lightweight JSON data source
- Debounced search for better performance
- Smooth loading states

 **Responsive Design**
- Desktop, tablet, and mobile optimized
- Touch-friendly interactive elements
- Flexible grid layout
- Adaptive typography

 **Professional Design**
- System font stack for optimal rendering
- Semantic HTML structure
- Accessibility best practices
- SEO-friendly markup

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Data:** Local JSON file (weather-data.json)
- **Deployment:** Vercel-ready
- **Browser Support:** All modern browsers

## Project Structure

```
 index.html          # Main HTML file with styles
 index.js            # WeatherApp class with logic
 weather-data.json   # Sample weather data (20 Indian cities)
 README.md           # This file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone or download the project:**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Open in browser:**
   - Option 1: Double-click `index.html`
   - Option 2: Use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the app:**
   - Open `http://localhost:8000` in your browser

## Usage

### Search for a City
1. Type a city name in the search box (e.g.,  Delhi, Mumbai)
2. Results filter automatically as you type (debounced for performance)
3. Or click the Search button for immediate results

### View Weather Details
- **Temperature:** Current temperature in Celsius
- **Feels Like:** Perceived temperature
- **Humidity:** Air moisture percentage
- **Wind Speed:** Wind speed in km/h
- **Condition:** Current weather condition with emoji indicator

## Weather Data

The app includes 20 major Indian cities:

**Metro Cities:** Delhi, Mumbai, Bangalore, Kolkata, Chennai
**Tier-2 Cities:** Pune, Hyderabad, Jaipur, Ahmedabad, Lucknow
**Other Cities:** Chandigarh, Indore, Surat, Vadodara, Kochi, Guwahati, Bhopal, Visakhapatnam, Nagpur, Patna

### Data Format
```json
{
  id: 1,
  name: Delhi,
  country: India,
  temperature: 22,
  feelsLike: 20,
  condition: Partly Cloudy,
  humidity: 60,
  windSpeed: 15,
  icon: 
}
```

## Architecture

### WeatherApp Class
The app uses a class-based architecture for clean, maintainable code:

```javascript
class WeatherApp {
 constructor() // Initialize app
 async init() // Setup and load data
 setupEventListeners()// Bind UI events
 debouncedSearch() // Debounced search handler
 performSearch() // Execute search logic
 loadWeatherData() // Fetch and load JSON data
 displayWeather() // Render weather cards
 createWeatherCard() // Generate single card
 handleSearch() // Direct search handler
 showLoading() // Show loading state
 showError() // Show error state
 escapeHtml() // XSS protection
}
```

### Key Features

**Debounced Search**
- 300ms delay reduces unnecessary renders
- Improves performance during fast typing
- Button click bypasses debounce for instant search

**Error Handling**
- Graceful error messages
- Loading states during data fetch
- Try-catch blocks for robustness

**Security**
- HTML escaping for XSS protection
- Safe content injection
- No eval or dangerous practices

## Customization

### Change Debounce Delay
Edit `index.js`:
```javascript
this.debounceDelay = 300; // Change to desired milliseconds
```

### Add More Cities
Edit `weather-data.json`:
```json
{
 id: 21,
 name: Your City,
 country: India,
 temperature: 25,
 feelsLike: 24,
 condition: Sunny,
 humidity: 60,
 windSpeed: 15,
 icon: 
}
```

### Update Colors
Edit CSS variables in `index.html`:
```css
:root {
  --primary: #3b82f6;        /* Primary blue */
  --primary-dark: #1e40af;   /* Dark blue */
  --primary-light: #60a5fa;  /* Light blue */
  --bg-primary: #0f172a;     /* Dark background */
  --bg-secondary: #1e293b;   /* Card background */
}
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m Initial commit
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click New Project
   - Import your GitHub repository
   - Click Deploy

3. **Your app is live!**
   - Vercel will provide a URL
   - Auto-deploys on every push

### Deploy Locally
```bash
# Using Python HTTP Server
python -m http.server 8000

# Using Node.js
npx serve

# Using Live Server VS Code extension
# Right-click index.html > Open with Live Server
```

## Performance Optimization

 **Best Practices Implemented:**
- Debounced search to reduce renders
- Efficient DOM manipulation
- CSS animations for smooth UX
- Optimized JSON data structure
- No external dependencies
- Minimal CSS/JS bundle size

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  |  Full |
| Firefox |  Full |
| Safari  |  Full |
| Edge    |  Full |
| IE 11   |  Partial |

## Code Quality

-  ES6+ modern JavaScript
-  Semantic HTML5
-  CSS3 with vendor prefixes
-  XSS protection (HTML escaping)
-  Responsive design
-  Accessibility features
-  Clean, maintainable code

## Future Enhancements

- [ ] Add location-based weather using Geolocation API
- [ ] Implement hourly/weekly forecast
- [ ] Add temperature unit toggle (C/F)
- [ ] Local storage for favorites
- [ ] Dark/light theme toggle
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] PWA capabilities for offline use

## Troubleshooting

### Data not loading?
- Check browser console for errors
- Ensure `weather-data.json` is in the same directory
- Verify JSON syntax is valid

### Search not working?
- Clear browser cache
- Check console for JavaScript errors
- Ensure input field has focus

### Styling issues?
- Clear browser cache
- Try different browser
- Check CSS variables are properly set

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## Author

**Hrishikesh Patkal**
- GitHub: [@hrishikeshpatkal](https://github.com/hrishikeshpatkal)
- Repository: [JavaScript](https://github.com/hrishikeshpatkal/JavaScript)

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section
2. Review the code comments
3. Open an issue on GitHub
4. Contact the author

---

**Last Updated:** November 30, 2025

Made with  by a 10x Experience Developer
