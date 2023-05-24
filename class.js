class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
    login() {
        console.log("You're Logged in!!");
    }
}

const user1 = new UserCreator("Armaan", 7);
const user2 = new UserCreator("Bushra", 9);

user1.increment();
user2.login();