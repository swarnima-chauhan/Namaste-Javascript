const cart=["shoes","pants","kurta"];

createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch(function(err){
    console.log(err.message);
  });
   
///Producer End

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //create an order
        //validate cart
        //orderId
        if(!validateCart(cart)){
            const err=new Error("Cart is not valid");
            reject(err);
        }
        //logic for create order
        const orderId="12345";
        if(orderId){
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}

