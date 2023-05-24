// First Way
const user1 = {
    name: "Armaan",
    score: 7,
    increment: function () {
        user1.score++;
    }
};

// Second Way
const user2 = {};
user2.name = "Bushra";
user2.score = 9;
user2.increment = function () {
    user2.score++;
}

// Third Way
const user3 = Object.create(null);
user3.name = "Kashaifa";
user3.score = 8;
user3.increment = function () {
    user3.score++;
}

// Generate objects using functions
function userCreator(name, score) {
    const newObj = {};
    newObj.name = name;
    newObj.score = score;
    newObj.increment = function () {
        newObj.score++;
    }
    return newObj;
}