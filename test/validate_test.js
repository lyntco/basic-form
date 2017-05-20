const { expect } = require('chai');
const jsdom = require('jsdom-global')();
const { stub } = require('sinon');
const { validate } = require('../scripts/validate');

describe('#validate', () => {
  let otherRadioOption;
  let otherTextInput;
  let submitStub;
  let eventStub;
  let form;
  let event;
  beforeEach(() => {
    submitStub = stub();
    eventStub = stub();
    form = { submit: submitStub };
    event = { preventDefault: eventStub };
    otherRadioOption = document.createElement('input');
    otherTextInput = document.createElement('input');
    otherRadioOption.setAttribute('id', 'event-other');
    otherTextInput.setAttribute('id', 'event-other-text');
    otherTextInput.setAttribute('class', 'input');
    document.body.appendChild(otherRadioOption);
    document.body.appendChild(otherTextInput);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  after(jsdom);

  it('does not submit the form passed in if other is selected and there is no text', () => {
    otherRadioOption.checked = true;
    const validateForm = validate(form);
    validateForm(event);
    expect(eventStub.called).to.equal(true);
    expect(otherTextInput.getAttribute('class')).to.equal('input input--invalid');
    expect(submitStub.called).to.equal(false);
  });

  it('submits the form passed in if other selected and has text', () => {
    otherRadioOption.checked = true;
    otherTextInput.value = 'New Years Eve';
    const validateForm = validate(form);
    validateForm(event);
    expect(eventStub.called).to.equal(true);
    expect(otherTextInput.getAttribute('class')).to.equal('input');
    expect(submitStub.called).to.equal(true);
  });

  it('submits the form passed in if other is not selected', () => {
    const validateForm = validate(form);
    validateForm(event);
    expect(eventStub.called).to.equal(true);
    expect(otherTextInput.getAttribute('class')).to.equal('input');
    expect(submitStub.called).to.equal(true);
  });
});
