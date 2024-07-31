document.addEventListener('DOMContentLoaded', getJoke);
document.getElementById('jokeButton').addEventListener('click', getJoke);

function getJoke() {
  const url = 'https://api.chucknorris.io/jokes/random';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').innerText = data.value;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('joke').innerText = 'Şaka yüklenirken bir hata oluştu!';
    });
}
