//TOGGLE FUNCTION SOCIAL ICONS

document.addEventListener('DOMContentLoaded', function() {
    const toggleIconsBtn = document.getElementById('toggleIcons');
    const socialIcons = document.querySelectorAll('.social-icon a:not(:first-child)');
    const weatherWidget = document.querySelector('.weather-widget');

    let iconsVisible = false; // Icons are initially visible

    toggleIconsBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action of scrolling to top

        socialIcons.forEach(icon => {
            icon.style.display = iconsVisible ? 'none' : 'inline-block';
        });

        // Toggle the weather and date widget
        weatherWidget.style.display = iconsVisible ? 'none' : 'block';

        iconsVisible = !iconsVisible;
    });
});



// WEATHER AND DATE WIDGETS

  $(document).ready(function() {
      // Fetch weather data
      function updateWeather() {
          var apiKey = '0c7f6d19b737e51b5d836828c6f539da'; // API KEY
          var cityId = '993800'; // JHB ID
          var url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`;
  
          $.getJSON(url, function(data) {
              var temp = data.main.temp;
              var weatherDescription = data.weather[0].description;
              $('#current-weather').text(`${temp}°C, ${weatherDescription}`);
          }).fail(function() {
              $('#current-weather').text('Unable to fetch weather data.');
          });
      }
  
      // Update date
      function updateDate() {
          var today = new Date();
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          var formattedDate = today.toLocaleDateString('en-US', options);
          $('#current-date').text(formattedDate);
      }
  
      // Initial call to update weather and date
      updateWeather();
      updateDate();
  });
  
  

//BACK TO TOP
 
  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var backToTop = document.getElementById('backToTop');

    // Function to control visibility based on scroll position
    function toggleBackToTop() {
        if (window.scrollY > 100) { // Adjust 100 to the scroll position where you want it to appear
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    // Listen to the scroll event
    window.addEventListener('scroll', toggleBackToTop);

    // Initial check in case the user starts already scrolled down
    toggleBackToTop();
});
