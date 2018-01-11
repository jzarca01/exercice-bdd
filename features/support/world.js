const { setWorldConstructor } = require("cucumber");
const Account = require('../../models/account');

class World {
    
  setNewAccount(arg1, arg2) {
      this.account = new Account(arg1, arg2);
  }

  withdraw(arg1) {
      this.withdraw(arg1);
  }

  getAmount() {
      return this.getAmount();
  }

};

setWorldConstructor(World);