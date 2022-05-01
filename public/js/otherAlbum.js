const otherAlbum = document.getElementById('otherAlbum');

otherAlbum.addEventListener('click', async (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    const addBtn = ev.target;
    const { id } = ev.target.dataset;
    const title = document.getElementById(`otherTitle${id}`).innerText;
    const day = document.getElementById(`otherDate${id}`).innerText;
    const explanation = document.getElementById(`otherExplanation${id}`).innerText;
    const url = document.getElementById(`otherImg${id}`).src;

    const myObj = {
      title, explanation, day, url,
    };

    const response = await fetch('/myAlbum/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myObj),
    });
    if (response.status === 200) {
      addBtn.innerText = 'ADDED';
    } else {
      console.log(response);
    }
  }
});
