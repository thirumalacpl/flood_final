$(document).on('pageshow', '#Gift', function(){  
  //alert('volunteer page js');
$(document).off('click', '#gift_btn').on('click', '#gift_btn', function() { 

var ffullname=document.getElementById('ffullname').value;
var ccnumber=document.getElementById('ccnumber').value;
var donateitems=document.getElementById('donateitems').value;
var quantity=document.getElementById('quantity').value;
//alert(fullname+'fullname');
//alert(email+'email');
//alert(cnumber+'cnumber');

document.getElementById('ffullname').value = "";
document.getElementById('ccnumber').value = "";
document.getElementById('donateitems').value = "";
document.getElementById('quantity').value = "";

/*if(x == 'New'){
  alert('Select Person To Assign');
    $.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
}
*/

$.ajax({url: "http://staging.eimpressive.com/slim-agni/gift.php?ffullname="+ffullname+"&ccnumber="+ccnumber+"&donateitems="+donateitems+"&quantity="+quantity,
    data:$('#giftform').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        document.getElementById('ffullname').value = "";
document.getElementById('ccnumber').value = "";
document.getElementById('donateitems').value = "";
document.getElementById('quantity').value = "";
        alert('Thank you for your gift ');
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("sh_new_veri_list_countq",JSON.stringify(result[0]));

        $.mobile.loading().hide();
       $.mobile.changePage($('#Gift'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});
});