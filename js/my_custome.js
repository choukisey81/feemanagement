
$(document).ready(function(){
    $('.feeDetails').hide();

    $("#user_type").change(function(){
        var user_type = $(this).val();
        if(user_type=='STUDENT')
        {
            $('.feeDetails').show();
            $("#tutionFee").prop('disabled', false);
            $("#libraryFee").prop('disabled', false);
            $("#transportationFee").prop('disabled', false);
            $("#miscellaneousFee").prop('disabled', false);
        }
        else{
            $('.feeDetails').hide();
            $("#tutionFee").prop('disabled', true);
            $("#libraryFee").prop('disabled', true);
            $("#transportationFee").prop('disabled', true);
            $("#miscellaneousFee").prop('disabled', true);
        }
    });

});