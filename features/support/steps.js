const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("an existing client named {string} with {float} EUR in his account", function(arg1, arg2) {
  this.setNewAccount(arg1, arg2);
});

When("he withdraws {float} EUR from his account", function(arg1) {
  this.account.withdraw(arg1);
});

Then("the new balance is {float} EUR", function(arg1) {
  expect(this.account.getAmount()).to.eql(arg1);
});