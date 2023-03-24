$(document).on("click", ".addAccountant", function (e) {
  "use strict";
  //alert('contact data');
  var BASEURL = "http://localhost:8080/";
  const form = document.querySelector("#register_page");
  var mydata = new FormData(form);
  const formData = Object.fromEntries(mydata.entries());
  var contactFormJSON = JSON.stringify(formData);

  if (formData.firstName == null || formData.firstName == "") {
    alert("First Name is Empty , Please Enter First name ");
    return;
  }
  if (formData.lastName == null || formData.lastName == "") {
    alert("Last Name is Empty , Please Enter Last Name ");
    return;
  }
  if (formData.email == null || formData.email == "") {
    alert("Email is Empty , Please Enter email ");
    return;
  }
  if (formData.password == null || formData.password == "") {
    alert("Password is Empty , Please Enter Password ");
    return;
  }

  if (formData.mobile_no == null || formData.mobile_no == "") {
    alert("Mobile No. is Empty , Please Enter Mobile No. ");
    return;
  }

  if (formData.gender == null || formData.gender == "") {
    alert("Gender is Empty , Please Enter Gender ");
    return;
  }

  if (formData.total_experiece == null || formData.total_experiece == "") {
    alert("Total experince is Empty , Please Enter Total experince");
    return;
  }

  //alert(contactFormJSON);
  var myrequest = $.ajax({
    url: BASEURL + "accountants",
    type: "post",
    dataType: "json",
    async: false,
    processData: false,
    headers: {
      "content-type": "application/json",
    },
    data: contactFormJSON,
  });
  myrequest.done(function (response, textStatus, jqXHR) {
    alert("Saved successfully!");
    $("#contact_return_msg").append(
      '<label style="color:green;">Successfully Saved, Contact You Soon! </label>'
    );
    $("#contactSubmit").empty();
    //window.location.replace("http://127.0.0.1:5501/contact.html");
  });
  myrequest.fail(function (jqXHR, textStatus, errorThrown) {
    alert("Not Done");
    console.log(textStatus);
    console.log(errorThrown);
  });
});
