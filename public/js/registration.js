const regForm = document.getElementById('regForm');

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.user_name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (!name || !email || !password) {
    alert('Name, E-mail and Password are required');
  } else {
    const bodyObj = { name, email, password };

    const response = await fetch('/register/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    });
    const result = await response.json();

    if (result.name === name) {
      alert(`well done ${name}`);
      window.location.assign('/');
    } else if (result.reg === 'email') {
      alert('try other email');
    } else {
      alert(response);
      console.log(response);
    }
  }
});
