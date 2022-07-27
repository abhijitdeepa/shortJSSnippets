// for doordash

function dashSummer() {
    let allPayments = document.getElementsByClassName("styles__TextElement-sc-1jrzcv7-0 nLUZp");
    let totalPayment=0
    for (let i = 0; i < allPayments.length; i++) {
        if(allPayments[i].innerHTML.toUpperCase().split("•")[1][1]=="$"){
           let valueEachPayments= Number((allPayments[i].innerHTML.toUpperCase().split("•")[1]).replace(/[^0-9\.]+/g,""))
           totalPayment+=valueEachPayments
        }   
    }
    console.log("sum: "+totalPayment)
    return 0;
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
