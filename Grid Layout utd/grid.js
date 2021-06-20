// var stkname = document.getElementById("stockname");
var stkname = document.forms['form']['stkname'];
var stkname_err = document.getElementById("lblStk");

var quantity = document.forms['form']['quantity'];
var quantity_err = document.getElementById("lblQty");

var baseprice = document.forms['form']['baseprice'];
var baseprice_err = document.getElementById("lblBp");

var profit = document.forms['form']['profit'];
var profit_err = document.getElementById("lblPft");

var date = document.forms['form']['date'];
var date_err = document.getElementById("lblDate");

var category = document.forms['form']['categories'];
var category_err = document.getElementById("lblcat");


// adding event listener
stkname.addEventListener('keyup', stkname_verify);
quantity.addEventListener('textInput', quantity_verify);
baseprice.addEventListener('textInput', baseprice_verify);
profit.addEventListener('textInput', profit_verify);
date.addEventListener('input', date_verify);

//reset form 
function Reset() {
    var input_elements = document.getElementById("formid").querySelectorAll(".in");
    var label_elements = document.getElementById("formid").querySelectorAll(".err-lbl");
    
  
    for(var i=0; i<input_elements.length; i++){
      input_elements[i].style.border = "1px solid silver";
      label_elements[i].style.visibility = "hidden"; 
    }
  }
  

function validate() {

    if (stkname.value == "") {
        stkname.style.borderLeft = "10px solid rgb(243, 157, 126)";
        stkname.style.transition = "400ms ease-in-out";
        stkname_err.style.color = "rgb(243, 157, 126)";
        stkname_err.style.visibility = "visible";
        return false;
    }

    if (quantity.value == 0 || quantity.value < 0) {
        quantity_err.style.color = "rgb(243, 157, 126)";
        quantity_err.style.visibility = "visible";
        quantity.style.borderLeft = "10px solid rgb(243, 157, 126)";
        quantity.style.transition = "400ms ease-in-out";
        // quantitybox.style.border = "1px solid red";
        return false;
    }

    if (baseprice.value == 0 || baseprice.value < 0) {
        baseprice_err.style.color = "rgb(243, 157, 126)";
        baseprice_err.style.visibility = "visible";
        baseprice.style.borderLeft = "10px solid rgb(243, 157, 126)";
        baseprice.style.transition = "400ms ease-in-out";
        // quantitybox.style.border = "1px solid red";
        return false;
    }

    if (profit.value == 0 || profit.value < 0 || profit.value > 100) {
        profit_err.style.color = "rgb(243, 157, 126)";
        profit_err.style.visibility = "visible";
        profit.style.borderLeft = "10px solid rgb(243, 157, 126)";
        profit.style.transition = "400ms ease-in-out";
        // quantitybox.style.border = "1px solid red";
        return false;
    }

    if(category.value == "Food" || category.value == "Cosmetics")
    {
        if (date.value == "") {
            date_err.style.color = "rgb(243, 157, 126)";
            date_err.style.visibility = "visible";
            date.style.borderLeft = "10px solid rgb(243, 157, 126)";
        date.style.transition = "400ms ease-in-out";
            // quantitybox.style.border = "1px solid red";
            return false;
        }else{
            date.value = "NA";
            return true;
        }
    }

    if(category.value == ""){
        category_err.style.visibility = "visible";
        category_err.style.color = "rgb(243, 157, 126)";
        category.style.borderLeft = "10px solid rgb(243, 157, 126)";
        category.style.transition = "400ms ease-in-out";
        return false;
    }
   
}

//error rectifier
function stkname_verify() {
    if (stkname.value != "") {
      stkname.style.borderLeft = "10px solid rgb(31, 182, 31)";
      stkname.style.transition = "400ms ease-in-out";
    //   stkname.style.boxShadow = " 0 0 5px green";
      stkname_err.style.visibility = "hidden";
      return true;
    }
  }
  
  function quantity_verify() {
    if (quantity.value != "") {
      quantity.style.borderLeft = "10px solid rgb(31, 182, 31)";
      quantity.style.transition = "400ms ease-in-out";
      quantity_err.style.visibility = "hidden";
      return true;
    }
  }
  
  function baseprice_verify() {
    if (baseprice.value != "") {
      baseprice.style.borderLeft = "10px solid green";
      baseprice.style.transition = "400ms ease-in-out";
      baseprice_err.style.visibility = "hidden";
      return true;
    }
  }
  

  function profit_verify() {
    if (profit.value != "") {
      profit.style.borderLeft = "10px solid green";
      profit.style.transition = "400ms ease-in-out";
      profit_err.style.visibility = "hidden";
      return true;
    }
  }
  

  function date_verify() {
    if (date.value != "") {
      date.style.borderLeft = "10px solid green";
      date.style.transition = "400ms ease-in-out";
      date_err.style.visibility = "hidden";
      return true;
    }
  }
  
  // context menu
  $contextMenu = $("#contextMenu");

  $("table").on("click", "tr i", function (e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
  $("body").on("click", function () {
    $contextMenu.hide();
  });