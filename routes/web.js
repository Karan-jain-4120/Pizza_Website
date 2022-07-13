const homeController =require('../app/http/controller/homeController')
const authController =require('../app/http/controller/authController')
const cartController =require('../app/http/controller/customers/cartController')
const orderController =require('../app/http/controller/customers/orderController')
const AdminOrderController =require('../app/http/controller/admin/orderController')

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

    
     // Admin routes
     app.get('/admin/orders', admin, AdminOrderController().index)
    // app.post('/admin/order/status', admin, statusController().update)
}

module.exports=initRoutes