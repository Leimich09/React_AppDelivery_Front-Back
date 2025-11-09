const usersController = require('../controllers/userController');

module.exports = (app) => {
    
    //GET -> Obtener Datos
    //POST -> Almacenar Datos
    //PUT -> Actualizar Datos
    //DELETE -> Eliminar Datos
    
    app.post('/api/users/create', usersController.register);
}