$(document).ready(function () {
  var BASEURL = "http://localhost:8080/";
  $.ajax({
    url: BASEURL + "students",
    type: "get",
    dataType: "json",
    async: false,
    processData: false,
    headers: {
      "content-type": "application/json",
    },

    success: function (data) {
      alert(JSON.stringify(data));
      var myhtml = get_data_with_html_for_users(data);
      //alert(myhtml);
      $("#accountantStudentListHeader").empty();
      $("#accountantStudentListHeader").append(
        ' <div class="d-flex flex-column justify-content-center" style="min-height: 300px"><h3 class="display-4 text-white text-uppercase">Student List</h3><div class="d-inline-flex text-white"> <p class="m-0 text-uppercase"><a class="text-white" href="../Accountant/home.html">Home</a></p><i class="fa fa-angle-double-right pt-1 px-3"></i><p class="m-0 text-uppercase">Accountant</p></div></div>'
      );

      $("#accountantStudentList").empty();
      $("#accountantStudentList").append(myhtml);
    },
    error: function (data) {
      alert("No Student Exist");
      //$("#registerStatus").append('<label style="color:red;">Something Went Wrong! </label>');
    },
  });
});

$(document).on("click", ".student_view", function (e) {
  "use strict";
  $("#accountantStudentList").empty();
  $("#accountantStudentListHeader").empty();
  $("#accountantStudentListHeader").append(
    '<div class="d-flex flex-column justify-content-center" style="min-height: 300px"><h3 class="display-4 text-white text-uppercase">Student Detail</h3><div class="d-inline-flex text-white"> <p class="m-0 text-uppercase"><a class="text-white" href="../Accountant/home.html">Home</a></p><i class="fa fa-angle-double-right pt-1 px-3"></i><p class="m-0 text-uppercase">Accountant</p></div></div>'
  );

  var userId = $(this).attr("id");
  var myrequest = $.ajax({
    url: "http://localhost:8080/students/" + userId, //'http://localhost:8082/applicants/'+userId,
    type: "GET",
    dataType: "json",
    async: false,
    processData: false,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  myrequest.done(function (response, textStatus, jqXHR) {
    var studentHtml = get_data_with_html_for_view_student(response);
    $("#accountantStudentList").empty();
    $("#accountantStudentList").append(studentHtml);
    alert("empty");
  });
  myrequest.fail(function (jqXHR, textStatus, errorThrown) {
    alert("Not Done");
    // console.log(textStatus);
    // console.log(errorThrown);
  });
});

$(document).on("click", ".student_delete", function (e) {
  "use strict";
  if (confirm("Are You sure ?")) {
    var userId = $(this).attr("id");
    var myrequest = $.ajax({
      url: "http://localhost:8080/students/" + userId,
      type: "DELETE",
      dataType: "json",
      async: false,
      processData: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    alert(
      "Thanks for Confirming......! Your Data has been Deleted successfully!"
    );
    window.location.replace("http://127.0.0.1:5502/Admin/studentList.html");
  } else {
    alert("Thanks For Cancel.");
  }
});

function get_data_with_html_for_view_student(response) {
  var txt = "";
  var pre_html = `<table id="example1" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                <tbody>`;

  var post_html = `</tbody>
                    </table>
                    <a class="btn btn-primary btn-sm" href="../Admin/studentList.html">Back</a>`;

  var txt =
    `<tr>
                <td>Full Name</td>
                <td>` +
    response.firstName +
    `</td>
              </tr>
              <tr>
                <td>User Name</td>
                <td>` +
    response.lastName +
    `</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>` +
    response.email +
    `</td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td>` +
    response.phoneNo +
    `</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>` +
    response.age +
    `</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>` +
    response.industry +
    `</td>
              </tr>
             
            `;

  var final_txt = pre_html + txt + post_html;
  return final_txt;
}
function get_data_with_html_for_users(response) {
  var txt = "";
  var pre_html = `        <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile No.</th>
        <th scope="col">View Fee detail</th>
        <th scope="col">Edit Fee detail</th>
        <th scope="col">Delete Fee detail</th>

        <!-- <th scope="col">Add To Cart</th> -->
      </tr>
    </thead>
    <tbody>`;

  var post_html = `</tbody>
                    </table>
                    `;
  for (let i in response) {
    if (response[i]) {
      let j = parseInt(i) + 1;

      txt +=
        ` <tr>
            <td id="name">` +
        response[i].firstName +
        ` </td>
            <td id="gender">` +
        response[i].lasttName +
        `</td>
            <td id="email">` +
        response[i].email +
        `</td>
            <td id="mobileNo">` +
        response[i].phoneNo +
        `</td>
            <td id="view"><a class="btn btn-primary btn-sm student_view" id="` +
        response[i].id +
        `"><i class="fas fa-eye"></i></a></td>
            <td id="view"><a class="btn btn-primary btn-sm student_view" id="` +
        response[i].id +
        `"><i class="fas fa-pen"></i></a></td>
            <td id="view"><a class="btn btn-primary btn-sm student_delete" id="` +
        response[i].id +
        `"><i class="fas fa-trash"></i></a></td>
          </tr>
			`;
    }
  }
  var final_txt = pre_html + txt + post_html;
  return final_txt;
}

// console.log("Hello");
// const url = "http://localhost:8080/students";
// const studentName = document.querySelector('#name');
// const gender = document.querySelector('#gender');
// const email= document.querySelector('#email');
// const mobileNo= document.querySelector('#mobileNo');
// // const yearOfPublication= document.querySelector('#yearOfPublication');
// // const discription= document.querySelector('#discription');
// // const price= document.querySelector('#price');
// const edit = document.querySelector('#edit');
// const view = document.querySelector('#view');
// const del = document.querySelector('#delete');

// let xHR = new XMLHttpRequest();
// xHR.open('GET',url);
// xHR.responseType='json';
// xHR.onload = function(){
//     console.log(xHR.response);
//     let data = xHR.response;
//     data.forEach(function(val){
//         studentName.innerHTML += `${val.firstName} <br><br>` ;
//         gender.innerHTML +=`${val.lastName} <br><br>` ;
//         email.innerHTML +=`${val.email} <br><br>` ;
//         mobileNo.innerHTML +=`${val.dob} <br><br>`;
//         // yearOfPublication.innerHTML +=`${val.publication_date} <br><br>` ;
//         // discription.innerHTML +=`${val.description} <br><br>` ;
//         // price.innerHTML +=`${val.price} <br><br>` ;
//        edit.innerHTML += `   <a class="btn btn-primary btn-sm appliedJobs" id=""><i class="fas fa-pen"></i></a> <br><br>`;
//        view.innerHTML += `  <a class="btn btn-primary btn-sm appliedJobs" id=""><i class="fas fa-eye"></i></a> <br><br>`;
//        del.innerHTML += `  <a class="btn btn-primary btn-sm appliedJobs" id=""><i class="fas fa-trash"></i></a> <br><br>`;

//     })
// }
// xHR.send();
// console.log(xHR);
