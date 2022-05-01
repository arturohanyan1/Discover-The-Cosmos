const albumPics = document.getElementById('albumPics');

albumPics.addEventListener('click', async (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    const { id } = ev.target.dataset;
    if (id) {
      const response = await fetch(`/myAlbum/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.status === 200) {
        window.location.assign('/myAlbum');
      } else {
        console.log(response);
      }
    }
  }
});
