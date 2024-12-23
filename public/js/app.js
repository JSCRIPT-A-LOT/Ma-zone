const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
    autohide: true, delay: 60000})
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const togglePlannerButton = document.getElementById('toggle-planner');
  const planner = document.getElementById('planner');

  
  togglePlannerButton.addEventListener('click', function (e) {
    e.stopPropagation(); 
    if (planner.style.display === 'none' || planner.style.display === '') {
      planner.style.display = 'block';
    } else {
      planner.style.display = 'none';
    }
  });

  document.addEventListener('click', function (e) {
    if (!planner.contains(e.target) && e.target !== togglePlannerButton) {
      planner.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const jokeContainer = document.getElementById('jokeContainer');
    const newJokeDiv = document.getElementById('joke');
    newJokeDiv.addEventListener('click', async () => {
        try {
            let res = await axios.get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' } 
            });
            jokeContainer.innerText = res.data.joke; 
        } catch (error) {
            jokeContainer.innerText = 'Error fetching joke. Please try again!';
            console.error('Error:', error);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const weather = document.getElementById('liveToastBtn');
  const weatherBody = document.querySelector('#liveToast .toast-body');
  const liveToast = document.getElementById('liveToast'); // The container for the toast


  weather.addEventListener('click', async (e) => {
    e.stopPropagation(); 
    
    // Fetch weather data
    try {
      let res = await axios.get('http://api.weatherapi.com/v1/current.json?key=7a1ce6740fee46d08b6194957240512&q=T5X.weatherapi.com/v1');
      let weatherItems = `
        <ul>
          <li>Current temp is: ${res.data.current.temp_c}</li>
          <li>It feels like: ${res.data.current.feelslike_c}</li>
          <li>Windchill is: ${res.data.current.windchill_c || 'N/A'}</li>
          <li>This was last updated: ${res.data.current.last_updated}</li>
          <li>Today is: ${res.data.current.condition.text}</li>
        </ul>`;
      weatherBody.innerHTML = weatherItems;
    } catch (error) {
      console.error('Error:', error);
      weatherBody.innerText = 'Failed to fetch weather data.';
    }

    // Show the toast
    liveToast.style.display = 'block';
  });

  // Hide the toast when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!liveToast.contains(e.target) && e.target !== weather) {
      liveToast.style.display = 'none';
    }
  });
});
