function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.sayName = () => {
    console.log(`I'm ${this.name}`);
}
UserCreator.prototype.increment = () => {
    this.score++;
}

const user1 = new UserCreator("AMK", 7);
user1.sayName();

function PaidUserCreator(paidName, paidScore, accountBalance) {
    UserCreator.call(this, paidName, paidScore);
    this.accountBalance = accountBalance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.incrementBalance = () {
    this.accountBalance++;
}

const paidUser1 = new PaidUserCreator("Armaan", 7, 25);
paidUser1.incrementBalance();
paidUser1.sayName();