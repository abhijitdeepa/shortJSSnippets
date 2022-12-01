// for doordash

function dashSummer() {
    let allPayments = document.getElementsByClassName("styles__TextElement-sc-3qedjx-0 jPYUXx");
 let sum=0;
    for (let i = 0; i < allPayments.length; i++) {
    let payment=Number(allPayments[i].innerHTML.split("•")[1].split("$")[1]);
    //if payment is not NaN, add it to sum
    if (!isNaN(payment)) {
        sum+=payment;
    }
    //print sum   
}
    console.log(sum);
 
}

// for uber
function uberSummer(){
    let allPayments = document.getElementsByClassName("k7");
    let totalPayment=0
    for (let i = 0; i < allPayments.length; i++) {
       if(allPayments[i].innerHTML.toUpperCase().includes("<")&&allPayments[i].innerHTML.toUpperCase().includes("$")){
           let valueEachPayments=Number(((allPayments[i].innerHTML.toUpperCase().split("<")[0]).split("$")[1]).replace(/[^0-9\.]+/g,""));
           totalPayment+=valueEachPayments
       }
    }
    console.log("sum: "+totalPayment)
    return 0;
}
