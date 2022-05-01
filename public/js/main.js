const imgNasa = document.getElementById('imgNasa');
const today = document.getElementById('today');
const title = document.getElementById('title');
const explanation = document.getElementById('explanation');

document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = '18eJXqjzQbB0mU3kRouC9cCCcolKeu5gWG3e7HxY';
  // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${day}`);
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  const data = await response.json();
  console.log('data', data);
  imgNasa.src = data.url;
  today.innerText = `${data.date}`;
  title.innerHTML = `${data.title}`;
  explanation.innerHTML = `${data.explanation}`;
});

const addAlbum = document.getElementById('addAlbum');

addAlbum.addEventListener('click', async () => {
  const titleText = title.innerText;
  const explanationText = explanation.innerText;
  const imgUrl = imgNasa.src;
  const picDate = today.innerText;

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
    addAlbum.innerText = 'ADDED';
  } else {
    console.log(response);
  }
});
