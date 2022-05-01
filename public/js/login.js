const logForm = document.getElementById('logForm');

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const bodyObj = { email, password };
  console.log(bodyObj);

  const response = await fetch('/login/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj),
  });
  const result = await response.json();

  if (result.login === 'login') {
    window.location.assign('/');
  } else if (result.login === 'email') {
    alert('wrong email');
  } else if (result.login === 'password') {
    alert('wrong password');
  } else {
    console.log(result);
  }
});
