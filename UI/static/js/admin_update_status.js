function UpdateStatus(cellId,mySelectId) {

    var orderStatus= document.getElementById(mySelectId).value;
    document.getElementById(cellId).innerHTML = orderStatus;
  }