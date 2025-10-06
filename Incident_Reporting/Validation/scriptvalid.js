$(document).ready(function () {
    let currentURL = window.location.href;
    const url = new URL(currentURL);
    $('body').on('click', '#allsumit', function () {
        
        var incident_date
        if (url.pathname != '/QRIncident_Reporting.aspx') {
            incident_date = document.getElementById("incidentdate").value;
            if (!incident_date) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Kindly provide values for mandatory fields");
                $(".incident").find('div').remove();
                $("#incidentdate").addClass("is-invalid");
                $(".incident").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                valid = false;
            }

        }
        
        let valid = true;
        const date = new Date();
        var params = new window.URLSearchParams(window.location.search);
        if (params.size != "0") {
            const incident_mbldate = document.getElementById("incidentMbldate").value;
            const incident_mbltime = document.getElementById("incidentmbltime").value;

            if (!incident_mbldate) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Kindly provide values for mandatory fields");
                $(".incidentm").find('div').remove();
                $(".incidentm").find("input").addClass("is-invalid");
                $(".incidentm").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                valid = false;
            }
            if (!incident_mbltime) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Kindly provide values for mandatory fields");
                $(".incidentm").find('div').remove();
                $(".incidentm").find("input").addClass("is-invalid");
                $(".incidentm").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                valid = false;
            }
        }


        const type = document.getElementById("type").value;
        if (type == "select") {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Kindly provide values for mandatory fields");
            $(".incidentype").find('div').remove();
            $("#type").addClass("is-invalid");
            $(".incidentype").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
            valid = false;
        }

        if ($('input:radio[name="Involver"]:checked')) {
            const selectedValue = document.querySelector('input[name="ReportorType"]:checked');

            const userType = selectedValue.value;
            const searchType = $('input[name="Places"]:checked').val();
            var ward = searchType == 'insert' ? "" : $("#wards").val();
            var location = searchType == 'select' ? "" : $("#wards").val();

            if (userType === "Employee") {
                const input = $("#value").val();
                const empName = document.getElementById("value").value;

                if (!empName || !(ward != "" || location != "")) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;
                    if (input == "" && !(ward != "" || location != "")) {
                        $(".empidname").find('div').remove();
                        $("#value").addClass("is-invalid");
                        $(".empidname").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $('#btnsearch').parent().addClass('align-self-center mt-2').removeClass('align-self-end');
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                    else if (input == "") {
                        $(".empidname").find('div').remove();
                        $("#value").addClass("is-invalid");
                        $(".empidname").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $('#btnsearch').parent().addClass('align-self-center mt-2').removeClass('align-self-end');
                    }
                    else {
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
            } else if (userType === "Doctor") {
                const docName = document.getElementById("docname").value;
                const input = $("#docname").val();

                if (!docName || !(ward != "" || location != "")) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;
                    if (input == "" && !(ward != "" || location != "")) {
                        $(".docidname").find('div').remove();
                        $("#docname").addClass("is-invalid");
                        $(".docidname").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $('#btnsearch').parent().addClass('align-self-center mt-2').removeClass('align-self-end');
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                    else if (input == "") {
                        $(".docidname").find('div').remove();
                        $("#docname").addClass("is-invalid");
                        $(".docidname").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $('#btnsearch').parent().addClass('align-self-center mt-2').removeClass('align-self-end');
                    }
                    else {
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
            } else if (userType === "Others") {
                const othersName = document.getElementById("others-name").value;

                if (!othersName || !(ward != "" || location != "")) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;
                    if (!othersName && !(ward != "" || location != "")) {
                        $(".OtherTypes").find('div').remove();
                        $("#others-mbl").addClass("is-invalid");
                        $("#others-name").addClass("is-invalid");
                        $(".OtherTypes").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                    else if (!othersName) {
                        $("#others-mbl").addClass("is-invalid");
                        $(".OtherTypes").find('div').remove();
                        $("#others-name").addClass("is-invalid");
                        $(".OtherTypes").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                    else {
                        $(".addword").find('div').remove();
                        $("#wards").addClass("is-invalid");
                        $(".addword").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
                else {
                    var mobileno = $("#others-mbl").val() == undefined ? "" : $("#others-mbl").val();
                    if (mobileno != "") {
                        const disallowedPatterns = [
                            '0000000000', '1000000000', '2000000000', '3000000000', '4000000000',
                            '5000000000', '6000000000', '7000000000', '8000000000', '9000000000'
                        ];
                        for (let pattern of disallowedPatterns) {
                            if (mobileno.includes(pattern)) {
                                $('#exampleModal').modal('show');
                                $('.modal-body').text("Kindly enter valid mobile number");
                                valid = false;
                            }
                        }
                        if (mobileno.length < 10) {
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("Kindly enter a valid 10-digit mobile number.");
                            $("#others-mbl").addClass("is-invalid");
                            valid = false;
                        }
                    }
                }
            }
        }

        if ($('input:radio[name="Involver"]')) {
            const involver_value = document.querySelector('input[name="Involver"]:checked');
            const involver = involver_value.value;

            if (involver === "Patient" || involver === "Attender" || involver === "Visitor") {
                const IpNum = document.getElementById("ipopervalue").value;
                if (!IpNum) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;

                    $(".removevalid-ip").find('div').remove();
                    $("#ipopervalue").addClass("is-invalid");
                    $(".removevalid-ip").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                }
                if (involver === "Attender") {
                    const input_att = document.getElementById("attendername").value;
                    if (!input_att) {
                        $('#exampleModal').modal('show');
                        $('.modal-body').text("Kindly provide values for mandatory fields");
                        valid = false;

                        $(".remove-attnd").find('div').remove();
                        $("#attendername").addClass("is-invalid");
                        $(".remove-attnd").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
                else if (involver === "Visitor") {
                    const input_vis = document.getElementById("visitername").value;
                    if (!input_vis) {
                        $('#exampleModal').modal('show');
                        $('.modal-body').text("Kindly provide values for mandatory fields");
                        valid = false;

                        $(".remove-vis").find('div').remove();
                        $("#visitername").addClass("is-invalid");
                        $(".remove-vis").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
            }
            else if (involver === "Employee") {
                const IpNum = document.getElementById("values").value;
                if (!IpNum) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;

                    $(".removeval-emp").find('div').remove();
                    $("#values").addClass("is-invalid");
                    $(".removeval-emp").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                }
            }
            else if (involver === "Doctor") {
                const IpNum = document.getElementById("involve-doc-id").value;
                if (!IpNum) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;

                    $(".removeval-doc").find('div').remove();
                    $("#involve-doc-id").addClass("is-invalid");
                    $(".removeval-doc").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                }
            }

            else {
                const otherml = document.getElementById("othersmblno").value;
                const other_name = document.getElementById("othername").value;
                const occupation = document.getElementById("occupn").value;

                if (!otherml || !other_name || !occupation) {
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("Kindly provide values for mandatory fields");
                    valid = false;

                    if (!otherml && !other_name && !occupation) {
                        $(".removeval-mbl").find('div').remove();
                        $("#othersmblno").addClass("is-invalid");
                        $(".removeval-mbl").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $(".removeval-name").find('div').remove();
                        $("#othername").addClass("is-invalid");
                        $(".removeval-name").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        $(".removeval-occpn").find('div').remove();
                        $("#occupn").addClass("is-invalid");
                        $(".removeval-occpn").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                    else if (!otherml) {
                        if (!otherml && !other_name) {
                            $(".removeval-mbl").find('div').remove();
                            $("#othersmblno").addClass("is-invalid");
                            $(".removeval-mbl").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                            $(".removeval-name").find('div').remove();
                            $("#othername").addClass("is-invalid");
                            $(".removeval-name").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        }
                        else if (!otherml && !occupation) {
                            $(".removeval-mbl").find('div').remove();
                            $("#othersmblno").addClass("is-invalid");
                            $(".removeval-mbl").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                            $(".removeval-occpn").find('div').remove();
                            $("#occupn").addClass("is-invalid");
                            $(".removeval-occpn").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        }
                        else {
                            $(".removeval-mbl").find('div').remove();
                            $("#othersmblno").addClass("is-invalid");
                            $(".removeval-mbl").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        }
                    }
                    else if (!other_name) {
                        if (!other_name && !occupation) {
                            $(".removeval-name").find('div').remove();
                            $("#othername").addClass("is-invalid");
                            $(".removeval-name").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                            $(".removeval-occpn").find('div').remove();
                            $("#occupn").addClass("is-invalid");
                            $(".removeval-occpn").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        }
                        else {
                            $(".removeval-name").find('div').remove();
                            $("#othername").addClass("is-invalid");
                            $(".removeval-name").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                        }
                    }
                    else {
                        $(".dropdown1").find('div').remove();
                        $("#occupn").addClass("is-invalid");
                        $(".dropdown1").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
                    }
                }
                else {
                    var others_mblno = $("#othersmblno").val() == undefined ? "" : $("#othersmblno").val();
                    if (others_mblno != "") {
                        const disallowedPatterns = [
                            '0000000000', '1000000000', '2000000000', '3000000000', '4000000000',
                            '5000000000', '6000000000', '7000000000', '8000000000', '9000000000'
                        ];
                        for (let pattern of disallowedPatterns) {
                            if (others_mblno.includes(pattern)) {
                                $('#exampleModal').modal('show');
                                $('.modal-body').text("Kindly enter valid mobile number");
                                $("#othersmblno").addClass("is-invalid");
                                valid = false;
                            }
                        }
                        if (others_mblno.length < 10) {
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("Kindly enter a valid 10-digit mobile number.");
                            $("#othersmblno").addClass("is-invalid");
                            valid = false;
                        }
                    }
                }
            }
        }

        const incident = $("#Remarks").val() == undefined ? "" : $("#Remarks").val();
        if (incident == "") {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Kindly provide values for mandatory fields");
            $(".removeval-rem").find('div').remove();
            $("#Remarks").addClass("is-invalid");
            $(".removeval-rem").append('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
            valid = false;
        }

        if (valid) {
            savedatas()
        }
    });


    function savedatas() {        
        var incident_date = $("#incidentdate").val();
        var reportedby = $('input[name="ReportorType"]:checked').val()
        const input = $("#value").val() == undefined ? "" : $("#value").val();
        var params = new window.URLSearchParams(window.location.search);

        if (url.pathname === '/QRIncident_Reporting.aspx') {
            var incident_mbldate = $("#incidentMbldate").val() == undefined ? "" : $("#incidentMbldate").val();
            var incident_mbltime = $("#incidentmbltime").val() == undefined ? "" : $("#incidentmbltime").val();
            incident_date = incident_mbldate;
        }
        if (params.size != "0") {
            var incident_mbldate = $("#incidentMbldate").val() == undefined ? "" : $("#incidentMbldate").val();
            var incident_mbltime = $("#incidentmbltime").val() == undefined ? "" : $("#incidentmbltime").val();
            incident_date = incident_mbldate;
        }
        if (input != "") {
            const [employeid] = input.split('-');            
            var empid = employeid;
        }
        else {        
            var empid = "";
        }
        var doc = $("#docname").val() == undefined ? "" : $("#docname").val();
        var others_name = $("#others-name").val() == undefined ? "" : $("#others-name").val();
        var mobileno = $("#others-mbl").val() == undefined ? "" : $("#others-mbl").val();
        var others_mblno = $("#othersmblno").val() == undefined ? "" : $("#othersmblno").val();
        const searchType = $('input[name="Places"]:checked').val();
        var ward = searchType == 'Ward' ? $("#wards").val() : "";
        var location = searchType == 'Department' ? $("#wards").val() : "";
        var other_ward_dep = searchType == 'Location' ? $("#wards").val() : "";
        var opno = $("#ipopervalue").val() == undefined ? "" : $("#ipopervalue").val();
        var type = $("#type").val();
        var involver = $('input:radio[name="Involver"]:checked').val();
        var patient_name = $('#patientname').val() == undefined ? "" : $('#patientname').val();
        var involved_docname = $('#involve-doc-id').val() == undefined ? "" : $('#involve-doc-id').val();
        var involved_empid = $("#values").val() == undefined ? "" : $("#values").val();
        var reporting_to = $("#hodname").val() == undefined ? "" : $("#hodname").val();
        var attender = $('#attendername').val() == undefined ? "" : $('#attendername').val();
        var visitor = $('#visitername').val() == undefined ? "" : $('#visitername').val();
        var involved_othersname = $('#othername').val() == undefined ? "" : $('#othername').val();
        var occupation = $('#occupn').val() == undefined ? "" : $('#occupn').val();
        var attending_physician = $("#physicianname").val() == undefined ? "" : $("#physicianname").val();
        var incident = $("#Remarks").val();
        $('.submitspinner').removeClass('d-none');
        $.ajax({
            type: "POST",
            url: "Incident_Reporting.aspx/SaveIncident",
            data: "{'incident_date':'" + incident_date + "' , 'reportedby':'" + reportedby + "', 'mobileno':'" + mobileno + "','empid':'" + empid + "' ,'reporting_to':'" + reporting_to + "' ,'doc':'" + doc + "' ,'others_name':'" + others_name + "' , 'others_mblno':'" + others_mblno + "','ward':'" + ward + "','location':'" + location + "','other_ward_dep':'" + other_ward_dep + "','opno':'" + opno + "','type':'" + type + "','involver':'" + involver + "','patient_name':'" + patient_name + "','involved_docname':'" + involved_docname + "','involved_empid':'" + involved_empid + "','attender':'" + attender + "','visitor':'" + visitor + "','involved_othersname':'" + involved_othersname + "','occupation':'" + occupation + "' ,'attending_physician':'" + attending_physician + "','incident':'" + incident + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                debugger;
                $('.submitspinner').addClass('d-none');
                if (response.d.StatusCode == 200) {
                    var responsejson = JSON.parse(response.d.Content);
                    if (responsejson.result[0].message != null) {
                        $('#exampleModal').modal('show');
                        $("#exampleModalLabel").text("Success Message");
                        $('.modal-content').removeClass('bg-danger');
                        $('.modal-content').addClass('bg-success');
                        $('.modal-header').removeClass('bg-danger');
                        $('.modal-header').addClass('bg-success');
                        $('.modal-body').text("Saved Successfully");
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    } else if (responsejson.result[0].error != null) {
                        $('#exampleModal').modal('show');
                        $('.modal-content').addClass('bg-danger');
                        $('.modal-header').addClass('bg-danger');
                        $('.modal-body').text(responsejson.result[0].error.msg);
                    }
                }
                else if (response.d.StatusCode == 400)
                {
                    debugger;
                    $('#exampleModal').modal('show');
                    $('.modal-content').addClass('bg-danger');
                    $('.modal-header').addClass('bg-danger');
                    $('.modal-body').text(response.d.Content);
                }
                else {
                    $('#exampleModal').modal('show');
                    $('.modal-content').addClass('bg-danger');
                    $('.modal-header').addClass('bg-danger');
                    $('.modal-body').text('Api not working kindly check');
                }
            },
            failure: function (response) {
                alert("Error return from SavaIncident method" + response);
            }
        });
    }

});