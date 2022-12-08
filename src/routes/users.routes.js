const {Router} = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()


const usersController = new UsersController()


usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);
/*
usersRoutes.post("/", (request, response) => {
    const {name, email, password} = request.body;
    response.json({name, email, password})
})*/

module.exports = usersRoutes;