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

function paidUserCreator(paidName, paidScore, accountBalance) {
    const paidUser = userCreator(paidName, paidScore);
    Object.setPrototypeOf(paidUser, paidUserFunctions);
    paidUser.accountBalance = accountBalance;
    return paidUser;
}

const paidUserFunctions = {
    increaseBalance: function () {
        this.accountBalance++;
    }
};

Object.setPrototypeOf(paidUserFunctions, userFunctionStore);
const paidUser1 = paidUser("AMK", 7, 25000);
paidUser1.accountBalance();
paidUser1.login();