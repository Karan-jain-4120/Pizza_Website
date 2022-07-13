const homeController =require('../app/http/controller/homeController')
const authController =require('../app/http/controller/authController')
const cartController =require('../app/http/controller/customers/cartController')
const guest = require('../app/http/middlewares/guest')
function initRoutes(app){
    app.get('/',homeController().index)
    
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin) 
    app.post('/logout', authController().logout)

    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)
}

module.exports=initRoutes