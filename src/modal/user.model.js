//mydb
let users = [{
        "id": "1",
        "firstName": "Hassan",
        "middleName": "Ali",
        "lastName": "Hassaan",
        "email": "Hassan@gmail.com",
        "age": "25",
        "password": "12345"
    }, {
        "id": "2",
        "firstName": "Mahad",
        "middleName": "Abdullahi",
        "lastName": "Mohamed",
        "email": "Mahad@gmail.com",
        "age": "20",
        "password": "6789"
    }, {
        "id": "3",
        "firstName": "saira",
        "middleName": "Jabril",
        "lastName": "jama",
        "email": "saira@gmail.com",
        "age": "21",
        "password": "saira"
    },
    {
        "id": "4",
        "firstName": "aden",
        "middleName": "mohamed",
        "lastName": "muhudin",
        "email": "aden@gmail.com",
        "age": "21",
        "password": "aden"
    },
    {
        "id": "5",
        "firstName": "mascuud",
        "middleName": "tahliil",
        "lastName": "siad",
        "email": "mascuud@gmail.com",
        "age": "21",
        "password": "mascuud"
    }
];

//-----------------------------------------
const getusers = () => {
    return users;
};

const getuser = (id) => {
    return users.filter(u => u.id == id);
};

const create = (user) => {
    users.push(user);
    return true;
};

const updateUser = (user) => {
    const objIndex = users.findIndex(obj => obj.id === user.id);
    users[objIndex].firstName = user.firstName;
    users[objIndex].middleName = user.middleName;
    users[objIndex].lastName = user.lastName;
    users[objIndex].lastName = user.lastName;
}

const deleteUser = (id) => {
    const objIndex = users.findIndex(obj => obj.id == id);
    users.splice(objIndex, 1);
};

const isEmailExist = (email) => {
    return users.filter(u => u.email === email).length > 0;
};

const isIdExist = (id) => {
    return users.filter(u => u.id == id);
};
const getUserByEmailAndPassword = (email, password) => {
    return users.filter(u => u.email === email && u.password === password);
};

module.exports = {
    getusers,
    getuser,
    create,
    updateUser,
    deleteUser,
    isEmailExist,
    isIdExist,
    getUserByEmailAndPassword
};