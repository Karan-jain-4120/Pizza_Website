const homeController =require('../app/http/controller/homeController')
const authController =require('../app/http/controller/authController')
const cartController =require('../app/http/controller/customers/cartController')
const orderController =require('../app/http/controller/customers/orderController')
const adminOrderController =require('../app/http/controller/admin/orderController')
const statusController =require('../app/http/controller/admin/statusController')

//middleware 
const auth = require('../app/http/middlewares/auth')
const guest = require('../app/http/middlewares/guest')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app){
    app.get('/',homeController().index)
    
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin) 
    app.post('/logout', authController().logout)

    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)
   
    // Customers routes
    app.post('/orders',auth,orderController().store)
    app.get('/customers/orders',auth,orderController().index)
    app.get('/customers/orders/:id', auth, orderController().show)
    
     // Admin routes
     app.get('/admin/orders', admin, adminOrderController().index)
     app.post('/admin/orders/status', admin, statusController().update)
}

module.exports=initRoutes