module.exports = function (app) {
    var users = [
        {uid: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonderland', email: "alice@gmail.com"  },
        {uid: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley' , email: "bob@hotmail.com"},
        {uid: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: "charly@google.com"},
        {uid: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: "jannunzi@yahoo.com"}
    ];
    app.post('/api/user', createUser);
    // app.get('/api/user?username=username', findUserByUserName);
    app.get('/api/user', findUserByCredentials);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUserById);
    app.delete('/api/user/:uid', deleteUserById);

    function createUser(req, res) {
        var user = req.body;
        user.uid = new Date().getTime() + '';
        for (let x = 0; x < users.length; x++) {
            if (users[x].username === user.username) {
                res.status(200).send({message: 'User is already exist!'});
                return;
            }
        }
        users.push(user);
        res.status(200).send(user);
    }

    function findUserByUserName(req, res) {
        let username = req.query.username;
        var user = null;
        for (let x = 0; x < users.length; x++) {
            if (users[x].username === username) {
                user = users[x];
                res.status(200).send(user);
                return;
            }
        }
        res.json({message: 'User not found!'});
    }

    function findUserByCredentials(req, res) {
        let username = req.query.username;
        let password = req.query.password;

        var user = null;
        for (let x = 0; x < users.length; x++) {
            if (users[x].username === username
                && users[x].password === password) {
                user = users[x];
                res.status(200).send(user);
                return;
            }
        }
        res.json({message: 'User not found or Wrong password!'});
    }

    function findUserById(req, res) {
        var userId = req.params['uid'];
        var user = null;
        for (let x = 0; x < users.length; x++) {
            if (users[x].uid === userId) {
                user = users[x];
                res.status(200).send(user);
                return;
            }
        }
        res.json({message: 'User not found!'});
    }



    function updateUserById(req, res) {
        var userId = req.params['uid'];
        var user = req.body;
        for (let x = 0; x < users.length; x++) {
            if (users[x].uid === userId) {
                users[x].firstName = user.firstName;
                users[x].lastName = user.lastName;
                users[x].email = user.email;
                res.status(200).send(users[x]);
                return;
            }
        }
        res.json({message: 'User not found!'});
    }

    function deleteUserById(req, res) {
        var userId = req.params['uid'];
        for (let x = 0; x < users.length; x++) {
            if (users[x].uid === userId) {
                users.splice(x, 1);
                res.status(200).send(users);
                return;
            }
        }
        res.json({message: 'User not found!'});
    }
}
