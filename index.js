const cart=["shoes","pants","kurta"];

//CallBack Hell
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});


//Promises chain
createOrder(cart).
then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    updateWalletBalance(paymentInfo);
}); 
   



