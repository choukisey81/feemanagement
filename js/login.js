$(document).on("click", ".loginJobSeeker", function (e) {
  "use strict";
  var BASEURL = "http://localhost:8080/";
  const form = document.querySelector("#login_form");
  var mydata = new FormData(form);
  const formData = Object.fromEntries(mydata.entries());

  var registerJSON = JSON.stringify(formData);
  console.log(registerJSON);

  if (
    formData.userRole == "" ||
    formData.email == "" ||
    formData.password == ""
  ) {
    $("#loginStatus").append(
      '<label style="color:red;">Please Fill Username and Password! </label>'
    );
  } else if (
    formData.userRole == "ADMIN" ||
    formData.email == "admin@gmail.com" ||
    formData.password == "admin"
  ) {
    alert("Successfully logged in!");
    window.location.replace("http://127.0.0.1:5502/Admin/home.html");
  } else if (formData.userRole == "STUDENT") {
    $.ajax({
      url: BASEURL + "login",
      type: "post",
      // dataType: 'json',
      async: false,
      processData: false,
      contentType: "application/json",
      data: registerJSON,
      statusCode: {
        201: function (data) {
          {
            sessionStorage.clear();
            sessionStorage.setItem("id", data.id);
            // sessionStorage.setItem("loginStatus", data.status);
            sessionStorage.setItem("userType", data.userRole);
            alert("Successfully logged in!");
            window.location.replace("http://127.0.0.1:5502/Student/home.html");
          }
          // else{
          //     $("#loginStatus").append('<label style="color:red;"> and Password are Incorrect! </label>');
          // }
        },
      },
      error: function (err) {
        //$("#applicantloginStatus").append('<input type="hidden" id="loginStatus" name="loginStatus" value="0" />');
        $("#loginStatus").append(
          '<label style="color:red;">UserName and Password are Incorrect! </label>'
        );
      },
    });
  } else {
    $.ajax({
      url: BASEURL + "login",
      type: "post",
      // dataType: 'json',
      async: false,
      processData: false,
      contentType: "application/json",
      data: registerJSON,
      statusCode: {
        201: function (data) {
          {
            sessionStorage.clear();
            sessionStorage.setItem("id", data.id);
            // sessionStorage.setItem("loginStatus", data.status);
            sessionStorage.setItem("userType", data.userRole);
            alert("Successfully logged in!");
            window.location.replace(
              "http://127.0.0.1:5502/Accountant/home.html"
            );
          }
          // else{
          //     $("#loginStatus").append('<label style="color:red;"> and Password are Incorrect! </label>');
          // }
        },
      },
      error: function (err) {
        //$("#applicantloginStatus").append('<input type="hidden" id="loginStatus" name="loginStatus" value="0" />');
        $("#loginStatus").append(
          '<label style="color:red;">UserName and Password are Incorrect! </label>'
        );
      },
    });
  }
});
