$(document).on('click', '.addStudent', function(e){
    "use strict";
    //alert('contact data');
    var BASEURL = 'http://localhost:8080/';
    const form = document.querySelector('#register_page');
    var mydata= new FormData(form);
    const formData = Object.fromEntries(mydata.entries());
    var contactFormJSON = JSON.stringify(formData);
    //alert(contactFormJSON);
    var myrequest = $.ajax({
          url: BASEURL+'students',
          type: "post",
          dataType: 'json',
          async:false,
          processData: false,
          headers: {  
            "content-type": "application/json",
          },
          data: contactFormJSON,
    });
    myrequest.done(function(response, textStatus, jqXHR){
      alert('Saved successfully!');
      $("#contact_return_msg").append('<label style="color:green;">Successfully Saved, Contact You Soon! </label>');
      $("#contactSubmit").empty();
      //window.location.replace("http://127.0.0.1:5501/contact.html");
    });
    myrequest.fail(function(jqXHR, textStatus, errorThrown){
      alert('Not Done');
      console.log(textStatus);
      console.log(errorThrown);
    });
  });