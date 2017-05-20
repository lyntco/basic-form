const { expect } = require('chai');
const jsdom = require('jsdom-global')();
const { stub } = require('sinon');
const { validate } = require('../scripts/validate');

describe('#validate', () => {
  let otherRadioOption;
  let otherTextInput;
  beforeEach(() => {
    otherRadioOption = document.createElement('input');
    otherTextInput = document.createElement('input');
    otherRadioOption.setAttribute('id', 'event-other');
    otherTextInput.setAttribute('id', 'event-other-text');
    document.body.appendChild(otherRadioOption);
    document.body.appendChild(otherTextInput);
  });

  afterEach(() => {
    document.body = document.createElement('div');
  });

  after(jsdom);

  it('does not submit the form passed in if other is selected and there is no text', () => {
    const submitStub = stub();
    const eventStub = stub();
    otherRadioOption.checked = true;
    const form = { submit: submitStub };
    const event = { preventDefault: eventStub };
    const validateForm = validate(form);
    validateForm(event);
    expect(eventStub.called).to.equal(true);
    expect(otherTextInput.getAttribute('class')).to.equal('input input--invalid');
    expect(submitStub.called).to.equal(false);
  });

  it('submits the form passed in if other is not selected', () => {
    throw new Error('Implement this test');
  });
});
