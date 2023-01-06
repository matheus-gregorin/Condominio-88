var userModel = require("../models/userModel");

function listAll(req, res) {
    userModel.listAll().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getUser(req, res) {

    var user = req.params.id

    userModel.getUser(user).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function registerUser(req, res) {

    var nome = req.body.nomeUser
    var email = req.body.emailUser
    var senha = req.body.senhaUser
    var apartamento = req.body.apartamentoUser
    var isSindico = req.body.isSindicoUser

    userModel.registerUser(nome, email, senha, apartamento, isSindico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Não foi possivel cadastrar Usuário!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao cadastrar Usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function login(req, res) {

    var email = req.body.emailUser
    var senha = req.body.senhaUser

    userModel.login(email, senha).then(function (resultado) {
        if (resultado.length > 0 ) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Não foi possivel realizar o login!")
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao logar: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function updateUser(req, res) {

    var user = req.params.id
    var nome = req.body.nomeUser
    var email = req.body.emailUser
    var senha = req.body.senhaUser
    var apartamento = req.body.apartamentoUser
    var isSindico = req.body.isSindicoUser

    userModel.updateUser(user, nome, email, senha, apartamento, isSindico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function deleteUser(req, res) {

    var user = req.params.id

    userModel.deleteUser(user).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listAll,
    getUser,
    registerUser,
    login,
    updateUser,
    deleteUser
}