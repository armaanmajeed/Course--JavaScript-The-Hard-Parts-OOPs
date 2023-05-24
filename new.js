function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function () {
    this.score++;
};
UserCreator.prototype.login = function () {
    console.log("You're logged in!!");
};

const user1 = new UserCreator("Armaan", 7);
const user2 = new UserCreator("Bushra", 9);

user1.increment();
user2.login();