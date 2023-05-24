function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function () { this.score++; },
    login: function () { console.log("You're Logged in"); }
}

const user1 = userCreator("Armaan", 7);
const user2 = userCreator("Bushra", 9);

user1.increment();
user2.login();