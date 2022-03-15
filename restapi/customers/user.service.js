const config = require("../config.json");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db_connection');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({
    username,
    password
}) {
    const user = await findUser(username);
    console.log(user)
    if (!user)
        throw 'Username is incorrect';

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword)
        throw 'Password is incorrect';

    // authentication successful
    const token = jwt.sign({
        sub: user.id
    }, config.secret, {
        expiresIn: '7d'
    });
    return {...omitHash(user), token };
};

const findUser = async (username) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM customers WHERE username = '${username}'`, (error, results) => {
            if (error) {
                return reject(error);
            }
            if (results.length === 0) return resolve(null);
            return resolve(results[0]);
        });
    });
};

async function getAll() {
    return await getUserAll();
};

const getUserAll= async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM customers`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};


async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    console.log("🚀 ~ file: user.service.js ~ line 54 ~ create ~ params", params)
    const checkUser = await findUser(params.username);
    // validate
    if (checkUser) {
        throw 'Username "' + params.username + '" is already taken';
    }

    if (params.password) {
        params.password = await bcrypt.hash(params.password, 6);
    }

    db.query("INSERT INTO customers SET ?", params, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(err, null);
            return;
        }

        console.log("created customer: ", params);
        //   result(null, params);
    });

}



async function update(id, params) {
console.log("🚀 ~ file: user.service.js ~ line 98 ~ update ~ params", params)
    const user = await getUser(id);
    // validate
    // const usernameChanged = params.username && user.username !== params.username;
    // // if (usernameChanged && await findUser(params.username)) {
    // //     throw 'Username "' + params.username + '" is already taken';
    // // }

    // hash password if it was entered
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // copy params to user and save
    // Object.assign(user, params);
    await db.query(`UPDATE customers SET fullName='${params.fullName}', address='${params.address}',
     mail='${params.mail}', username='${params.username}', phone='${params.phone}', gender='${params.gender}',
    password='${params.password}' WHERE id =${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(err, null);
            return;
        }

        console.log("updated customer: ", params);
        //   result(null, params);
    });
    return {user};
}

async function _delete(id) {
    // const user = await getUser(id);
    await  db.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          return(err) ;
        }
    
        if (res.affectedRows === 0) {
          // not found Customer with the id
          return (null);
        }
    
        console.log("deleted customer with id: ", id);
       return (res)
      });
}

// helper functions

async function getUser(id) {
    const user = await findByPk(id);

    // const findByPk = (id, result) => {
    //     db.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             result(err, null);
    //             return;
    //         }

    //         if (res.length) {
    //             console.log("found customer: ", res[0]);
    //             result(null, res[0]);
    //             return;
    //         }
    //     })
    // }
    if (!user) throw 'User not found';
    return user;
}
const findByPk = async (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM customers WHERE id = ${id}`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};

function omitHash(user) {
    const {
        hash,
        ...userWithoutHash
    } = user;
    return userWithoutHash;
}