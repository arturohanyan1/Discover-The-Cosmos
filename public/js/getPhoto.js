const getPhoto = document.getElementById('getPhoto');

getPhoto.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const val = ev.target.getDate.value;
  const d = new Date(val);
  const today = new Date();
  const firstDay = new Date('1995-06-16');
  if (d <= today && d >= firstDay) {
    console.log(true);
    window.location.assign(`showOne/${val}`);
  } else {
    alert('Date must be start from 1995-06-16 to today');
  }
});
