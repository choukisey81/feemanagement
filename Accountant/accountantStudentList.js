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
      alert("No Student Exists");
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
    var studentHtml = get_data_with_html_for_view_recruiter(response);
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

$(document).on("click", ".student_reciept", function (e) {
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
    var studentHtml = get_data_with_html_for_view_reciept(response);
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

function get_data_with_html_for_view_reciept(response) {
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
                    <a class="btn btn-primary btn-sm" href="../Accountant/accountantStudentList.html">Back</a>`;

  var txt = `<div class="row gutters">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <a href="index.html" class="invoice-logo">
            Stcloud State University
        </a>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6">
        <address class="text-right">
            Maxwell admin Inc, 45 NorthWest Street.<br>
            Sunrise Blvd, San Francisco.<br>
            00000 00000
        </address>
    </div>
</div>
<!-- Row end -->
<!-- Row start -->
<div class="row gutters">
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="invoice-details">
            <address>
                Alex Maxwell<br>
                150-600 Church Street, Florida, USA
            </address>
        </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="invoice-details">
            <div class="invoice-num">
                <div>Invoice - #009</div>
                <div>January 10th 2023</div>
            </div>
        </div>													
    </div>
</div>
<!-- Row end -->
</div>
<div class="invoice-body">
<!-- Row start -->
<div class="row gutters">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="table-responsive">
            <table class="table custom-table m-0">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Tution Fee
                            <p class="m-0 text-muted">
                                Reference site about Lorem Ipsum, giving information on its origins.
                            </p>
                        </td>
                        <td>#50000981</td>
                        <td>9</td>
                        <td>$5000.00</td>
                    </tr>
                    <tr>
                        <td>
                            Library Fee
                            <p class="m-0 text-muted">
                                As well as a random Lipsum generator.
                            </p>
                        </td>
                        <td>#50000126</td>
                        <td>5</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>
                            Transportation Fee
                            <p class="m-0 text-muted">
                                Lorem ipsum has become the industry standard.
                            </p>
                        </td>
                        <td>#50000821</td>
                        <td>6</td>
                        <td>$49.99</td>
                    </tr>
                    <tr>
                        <td>
                            Miscellaneous Fee
                            <p class="m-0 text-muted">
                                Lorem ipsum has become the industry standard.
                            </p>
                        </td>
                        <td>#50000821</td>
                        <td>6</td>
                        <td>$49.99</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td colspan="2">
                            <!-- <p>
                                Subtotal<br>
                                Shipping &amp; Handling<br>
                                Tax<br>
                            </p> -->
                            <h5 class="text-success"><strong>Grand Total</strong></h5>
                        </td>			
                        <td>
                            <p>
                                $5000.00<br>
                                $100.00<br>
                                $49.00<br>
                                $49.00<br>
                            </p>
                            <h5 class="text-success"><strong>$5200.98</strong></h5>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- Row end -->
</div>
<div class="invoice-footer">
Thank you.
</div>
</div>
</div>
</div>
</div>
</div>
</div>
             
            `;

  var final_txt = pre_html + txt + post_html;
  return final_txt;
}

function get_data_with_html_for_view_recruiter(response) {
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
                    <a class="btn btn-primary btn-sm" href="../Accountant/accountantStudentList.html">Back</a>`;

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
        <th scope="col">Send Reciept</th>

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
            <td id="view"><a class="btn btn-primary btn-sm student_reciept" id="` +
        response[i].id +
        `"><i class="fas fa-pen"></i></a></td>
          </tr>
			`;
    }
  }
  var final_txt = pre_html + txt + post_html;
  return final_txt;
}
