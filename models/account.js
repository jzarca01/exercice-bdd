module.exports = class Account {
    constructor(accountName, initialAmount) {
      this.account = {
          name: accountName,
          amount: initialAmount
      };
    }

    withdraw(amount) {
        this.account.amount = this.account.amount - amount;
    }

    getAmount() {
        return this.account.amount;
    }
  };
  