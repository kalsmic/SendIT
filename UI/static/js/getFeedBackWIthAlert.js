var msg;

function AlertUser(msg){
  return alert(msg);
}

function cancelOrder() {
    document.getElementById("dry1").innerHTML = "Cancelled";
    document.getElementById("dry1").style = "text-lred";

    alert('Order Cancelled');
}
