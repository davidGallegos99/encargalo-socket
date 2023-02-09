// const OrderController =  require('./../controllers/order.controller');
class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado');
            
            // socket.on("sucursal", async (arg) => {
            //     socket.join(arg.sucursal);

            //     const controller = OrderController;
            //     const order = await controller.getBySucursal(arg.sucursal, arg.fecha);
            //     console.log(arg.sucursal);
            //     this.io.to(arg.sucursal).emit('initOrdenes', order);
            // });
            
            // socket.on("dashboard", async (arg) => {
            //     socket.join(arg.sucursal);

            //     const controller = OrderController;
            //     const order = await controller.initDashboard(arg.sucursal, arg.type);
            //     console.log(arg.sucursal);
            //     this.io.to(arg.sucursal).emit('dashboard:response', order);
            // });

            // socket.on("order:refreshOrders", async (arg) => {

            //     const controller = OrderController;
            //     const order = await controller.getBySucursal(arg.sucursal, arg.fecha);
            //     this.io.to(arg.sucursal).emit('initOrdenes', order);
            // });

            // socket.on('order:new', async (arg) => {
            //     const controller = OrderController;
            //     const order = await controller.saveNewOrderFromDashboard(arg.orden);
            //     this.io.to(arg.sucursal).emit('order:saved', order);
            // })
            
            // socket.on('order:update', async (arg) => {
            //     const controller = OrderController;
            //     const order = await controller.updateProducts(arg);
            //     this.io.to(arg.sucursal).emit('products:updated', order);
            // })
            
            // socket.on('order:filterOrder', async (args) => {
            //     const controller = OrderController;
            //     const order = await controller.filterOrders(args.req);
            //     this.io.to(args.sucursal).emit('order:ListenFilterOrder', order);
            // });

            // socket.on('disconnect', () => {
            //     console.log('desconectado');
            // })
        });
    }


}


module.exports = Sockets;