const validate = (form) => (e) => {
  e.preventDefault();
  //validateStuff
  form.submit();
};

const form = document.getElementById('cake-form');

form.addEventListener("submit", validate(form), false);
