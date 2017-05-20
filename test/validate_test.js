const { expect } = require('chai');
const { stub } = require('sinon');
const { validate } = require('../scripts/validate');

describe('#validate', () => {
  it('does not submit the form passed in if other is selected and there is no text', () => {
    const submitStub = stub();
    const eventStub = stub();
    const form = { submit: submitStub };
    const event = { preventDefault: eventStub };
    const validateForm = validate(form);
    validateForm(event);
    expect(eventStub.called).to.equal(true);
    expect(submitStub.called).to.equal(false);
  });

  it('submits the form passed in if other is not selected', () => {
    throw new Error('Implement this test');
  });
});
