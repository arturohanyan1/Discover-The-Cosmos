const text = window.location.pathname;

const photoDay = text.match(/\d{4}-\d{2}-\d{2}/);
const showImgNasa = document.getElementById('showImgNasa');
const showTitle = document.getElementById('showTitle');
const showDay = document.getElementById('showDay');
const showExplanation = document.getElementById('showExplanation');

document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = '18eJXqjzQbB0mU3kRouC9cCCcolKeu5gWG3e7HxY';
  // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${day}`);
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${photoDay}`);
  const data = await response.json();
  console.log('data', data);
  showImgNasa.src = data.url;
  showDay.innerText = `${data.date}`;
  showTitle.innerHTML = `${data.title}`;
  showExplanation.innerHTML = `${data.explanation}`;
});

const addToAlbum = document.getElementById('addToAlbum');

addToAlbum.addEventListener('click', async () => {
  const titleText = showTitle.innerText;
  const explanationText = showExplanation.innerText;
  const imgUrl = showImgNasa.src;
  const picDate = showDay.innerText;

  const myBody = {
    titleText, explanationText, imgUrl, picDate,
  };
  console.log('album', myBody);
  const response = await fetch('/main/addPhoto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myBody),
  });
  if (response.status === 200) {
    addToAlbum.innerText = 'ADDED';
  } else {
    console.log(response);
  }
});
