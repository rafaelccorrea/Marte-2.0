const knex = require("../database/connection");
var User = require("../models/User");

class UserController{
    async index(req, res){
        var users = await User.findAll();
        res.json(users);
    }
    async create(req, res){
        var {name} = req.body;
        if(name == undefined || name == '' || name == ' ' || name.length < 3){
            res.status(204);
            res.json({err: "O nome é inválido!"})
            return;
        }
        await User.new(name);
        res.status(200);
        res.send("Tudo OK!");
    }

    async edit(req, res){
        var {name} = req.body;
        var result = await User.update(name);
        if(result != undefined){
            if(result.status){
                res.status(200);
                res.send("Tudo OK!");
            }else{
                res.status(406);
                res.send(result.err)
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor!");
        }
    }

    async like(req,res){
        let {like} = req.body;
        var result =  await User.update(like);
        if(result == 0 || result == undefined){
            res.status(204);
        }else{
            res.status(200);
        }
    }
}

    
module.exports = new UserController();