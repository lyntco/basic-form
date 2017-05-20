const validate = (form) => (e) => {
  e.preventDefault();
  const isOtherEvent = document.getElementById('event-other').checked;
  const otherInput = document.getElementById('event-other-text');
  if (isOtherEvent && !otherInput.value) {
    otherInput.setAttribute('class', 'input input--invalid');
    return;
  }
  form.submit();
};

const addFormListener = () => {
  const form = document.getElementById('cake-form');
  form.addEventListener("submit", validate(form), false);
}

module.exports = {
  addFormListener,
  validate,
};
