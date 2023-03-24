
$(document).on('click', '.register', function(e){
    "use strict";
    var BASEURL = 'http://localhost:8082/';
    const form = document.querySelector('#register_page');
		var mydata= new FormData(form);
		const formData = Object.fromEntries(mydata.entries());

    var user_type = formData.user_type;
    var my_custom ;
    if(user_type=='STUDENT')
    {
      my_custom = get_student_signup_data(formData);
    }
    else{
      my_custom = get_accountant_signup_data(formData);
    }

		 var registerJSON = JSON.stringify(my_custom);
     $.ajax({
            url: BASEURL+'account/register', 
            type: "post",
            //dataType: 'json',
            async:false,
            processData: false,
            headers: {  
              "content-type": "application/json",
            },
            data: registerJSON,
          
            success: function(data){
               alert('You are successfully Registered!');
               //$("#registerStatus").append('<label style="color:green;">Your are Successfully Registered! </label>');
               if(user_type=='STUDENT')
               {
                  window.location.replace("http://127.0.0.1:5501/sign-in.html");
               }else{
                  window.location.replace("http://127.0.0.1:5501/recruiter_signin.html");
               }            
            },
            error: function(data){
              //alert('Not Done');
              $("#registerStatus").append('<label style="color:red;">Something Went Wrong! </label>');
            }
      });

  });

  function get_student_signup_data(formData)
  {
     
      var my_custom = {
                  "userType":formData.user_type,
                  "firstName":formData.firstName,
                  "lastName":formData.lastName,
                  "password":formData.password,
                  "email":formData.email,
                  "mobileNumber":formData.mobile_no,
                  "gender":formData.gender,
                  "tutionFee":formData.tutionFee,
                  "libraryFee":formData.libraryFee,
                  "transportationFee":formData.transportationFee,
                  "miscellaneousFee":formData.miscellaneousFee
            };
      return my_custom;
  }

  function get_accountant_signup_data(formData)
  {
       
        var my_custom = {
            "userType":formData.user_type,
            "firstName":formData.firstName,
            "lastName":formData.lastName,
            "password":formData.password,
            "email":formData.email,
            "mobileNumber":formData.mobile_no,
            "gender":formData.gender,
            "totalExperiece":formData.total_experiece
              };
        return my_custom;   
  }
