var msg;

function AlertUser(msg){
  return alert(msg);
}

function cancelOrder(tid) {
    document.getElementById(tid).innerHTML = "Cancelled";
    document.getElementById(tid).style = "text-red";

    alert('Order Cancelled');
}
