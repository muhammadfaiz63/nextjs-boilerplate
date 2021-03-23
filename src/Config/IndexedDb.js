import Dexie from "dexie";

// set the database 
const db = new Dexie("HoodaMerchantDB");
//create the database store
db.version(1).stores({
    customer: "_id,orderNumber,customerAddress,customerLocation,customerName,customerAddressNote,customerTelp,deliveryDistance,totalPrice,driver"
})
db.version(2).stores({
    cartOrder:"_id,active,ProductName,ProductPicture,ProductCategory,RequestNote,ProductPrice,SubTotalPrice,Qty"
})
db.version(3).stores({
    listOrder:"_id,assignDate,orderCancel,createDate,createByMerchant,orderNumber,merchantId,merchant,merchantLocation,customer,foodItems,orderPrice,promo,discount,orderCategory,deliveryCost,totalPrice,promoCost,deliveryDistance,riderFee,DanaFee,GoogleFee,Tax,orderStatus,orderNote,driverList,orderCode,driver,logConfirmOrder,logGetOrder,logDeliveryOrder,logFinishOrder,receivedBy"
})
db.open().catch((err) => {
    console.log(err.stack || err)
})

export default db