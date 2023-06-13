class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    console.log(`I'm ${this.name}`);
  }
  increment() {
    this.score++;
  }
}

const user1 = new UserCreator("AMK", 7);
user1.sayName();

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new PaidUserCreator("Armaan", 7, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
