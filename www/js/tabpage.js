$(document).on('pageshow', '#tabpage', function(){  
alert("tabpage one");
 $(document).off('click', '#dashcoo').on('click', '#dashcoo', function() {

  $.mobile.changePage($('#dashboardco'), { transition: "none", changeHash: true, reverse: false });
return false;
});

   
 $(document).off('click', '#inprogresscoo').on('click', '#inprogresscoo', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#finalcoo').on('click', '#finalcoo ', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#reportcoo').on('click', '#reportcoo ', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcoo').on('click', '#signoutcoo', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});


    currentobj_address_co =  JSON.parse(sessionStorage.getItem("currentobj_address_co"));
     basic_profile_obja =  JSON.parse(sessionStorage.getItem("basic_profile_obja"));
      address_id =  JSON.parse(sessionStorage.getItem("address_id"));
       education_co1 =  JSON.parse(sessionStorage.getItem("education_co1"));
  //alert(address_id.document_name);
    co_new_veri_list =  JSON.parse(sessionStorage.getItem("co_new_veri_list"));

    
if(currentobj_address_co !== null){
$('.ration').append('<img src="http://115.118.113.83/watchguard/documents/addressid/' + currentobj_address_co.document_name +'" style="width:50px;height:50px">');
}
if(basic_profile_obja !== null){
$('.basic_profile').append('<img src="http://115.118.113.83/watchguard/documents/basicprofile/' + basic_profile_obja.document_name +'" style="width:50px;height:50px">');
}
if(address_id !== null){
$('.address_id').append('<img src="http://115.118.113.83/watchguard/documents/addressid/' + address_id.document_name +'" style="width:50px;height:50px">');
}

if(address_id !== null){
alert(education_co1.institute_name);
$('#institute_name').text('education_co1.institute_name');
}

});

