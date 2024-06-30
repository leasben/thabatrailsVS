//TOGGLE FUNCTION SOCIAL ICONS & WEATHER WIDGETS

$(document) .ready(function() {
    $("#toggleIcons").click(function(e) {
        e.preventDefault(); // Prevent default action of scrolling to top

        $(".social-icon a:not(:first-child)").slideToggle("slow");
        $(".weather-widget").slideToggle("slow");

    });
});

//BACK TO TOP
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 100);
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
  
  