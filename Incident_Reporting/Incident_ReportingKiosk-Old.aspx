<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Incident_ReportingKiosk.aspx.cs" Inherits="Incident_Reporting.Incident_ReportingKiosk" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Incident Reporting</title>
    <link href="Content/css/Tabler.css" rel="stylesheet" />
    <link href="Content/fontawesome-free-6.5.1-web/css/all.min.css" rel="stylesheet" />
    <link href="Content/Date_Picker/css/flatpickr.min.css" rel="stylesheet" />
    <link href="Content/css/custom.css" rel="stylesheet" />
    <script src="Content/js/TablerJs.js"></script>
    <script src="Content/Date_Picker/js/flatpickr.js"></script>
    <script src="Content/js/jquery-3.6.4.min.js"></script>
    <script src="Validation/scriptvalid.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-11 border cus-bg-color rounded my-3">
                    <div class="mx-3">
                        <div class="row justify-content-center">
                            <div class="col-auto">
                                <h2 class="text-pink">Incident Reporting</h2>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <label class="form-label fw-bold">Hospital Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                    </div>
                                                    <div class="col-7">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control dropdown-toggle Filter clearbox" placeholder="Select Region" data-bs-toggle="dropdown" aria-expanded="false" disabled="disabled" value="Development" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                                <div class="row mt-3 mb-1">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="form-label">Incident Reporting Date & Time</label>
                                            </div>
                                            <div class="col-7">
                                                <div class="input-icon">
                                                    <div id="DATETIME" placeholder="dd-mm-yy" class="form-control disabled-color" value="17-Sep-24 12:00 PM" readonly="readonly" disabled="disabled"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-5">
                                                <label class="form-label">Incident Occurrence Date & Time<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            </div>
                                            <div class="col-7">
                                                <div class="input-icon incident">
                                                    <input type="text" placeholder="dd-mm-yy" class="form-control datapicker clearbox" id="incidentdate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body py-0">
                                <div class="my-2">
                                    <div class="row Menutitle-border justify-content-between">
                                        <div class="col-auto p-0 position-relative">
                                            <div class="text-white Menutitle d-flex p-1 px-3 rounded-top edit">
                                                <h4 class="ms-2 mt-1">WHO IS REPORTING?</h4>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="radio-inputs">
                                                <label class="radio">
                                                    <input id="empid" type="radio" value="Employee" name="ReportorType" checked="checked" />
                                                    <span class="name"><i class="fa-solid fa-check me-2 checkicon"></i>Employee</span>
                                                </label>
                                                <label class="radio">
                                                    <input id="uhid" type="radio" value="Doctor" name="ReportorType" />
                                                    <span class="name">Doctor</span>
                                                </label>
                                                <label class="radio">
                                                    <input type="radio" value="Others" name="ReportorType" />
                                                    <span class="name">Others</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row border border-top-0">
                                        <div class="col">
                                            <%--<div class="row my-2 justify-content-end">
                                        <div class="col-3">
                                                    <label class="form-label ms-1">Incident Type</label>
                                                    <select class="form-control">
                                                        <option value="Clinical">--- Select ---</option>
                                                        <option value="Clinical">Clinical</option>
                                                         <option value="Non Clinical">Non Clinical</option>
                                                    </select>
                                                    <div class="radio-inputs">
                                                        <label class="radio">
                                                            <input type="radio" value="select" name="Incident" checked="checked" />
                                                            <span class="name"><i class="fa-solid fa-check me-2 checkicon"></i>Clinical</span>
                                                        </label>
                                                        <label class="radio">
                                                            <input type="radio" value="insert" name="Incident" />
                                                            <span class="name">Non Clinical</span>
                                                        </label>
                                                    </div>
                                                </div>
                                     </div>--%>
                                            <div class="my-3 row justify-content-around">
                                                <div class="col-4 align-self-center">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="ReportorTypeclick">
                                                                <div class="row">
                                                                    <div class="col-8">
                                                                        <label class="form-label ms-1">Employee ID</label>
                                                                        <div class="input-group empidname">
                                                                            <input id="value" type="text" class="form-control Filter clearbox" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" />
                                                                            <span class="input-group-text dropdown-toggle dropdown-toggle-show searchdropdown" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                                            <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas search">
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-2 align-self-end">
                                                                        <a href="#" class="btn btn-pink mx-2" id="btnsearch">
                                                                            <span class="searchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                                                            Search
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4 align-self-center">
                                                    <div class="row">
                                                       <div class="col-10">
                                                            <div class="radio-inputs remove-ward">
                                                                <label class="radio">
                                                                    <input id="ward" type="radio" value="Ward" name="Places" checked="checked" />
                                                                    <span class="name"><i class="fa-solid fa-check me-2 checkicon"></i>Ward</span>
                                                                </label>
                                                                <label class="radio">
                                                                    <input id="department" type="radio" value="Department" name="Places" />
                                                                    <span class="name">Department</span>
                                                                </label>
                                                                <label class="radio">
                                                                    <input id="location" type="radio" value="Location" name="Places" />
                                                                    <span class="name">Location</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row my-2">
                                                        <div class="col">
                                                           <div class="input-group addword">
                                                                <input id="wards" type="text" class="form-control dropdown-toggle Filter clearbox" data-bs-toggle="dropdown" aria-expanded="false" />
                                                                <span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3 align-self-center">
                                                    <label class="form-label ms-1">Incident Type</label>
                                                    <select id="type" class="form-control">
                                                        <option value="Clinical">--- Select ---</option>
                                                        <option value="Clinical">Clinical</option>
                                                        <option value="Non-Clinical">Non Clinical</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="my-3 row justify-content-around">
                                                <div class="col-4 OtherTypes">
                                                </div>
                                                <div class="col-4">
                                                </div>
                                                <div class="col-3">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body py-0">
                                <div class="my-2">
                                    <div class="row Menutitle-border justify-content-between">
                                        <div class="col-auto p-0 position-relative">
                                            <div class="text-white Menutitle d-flex p-1 px-3 rounded-top edit">
                                                <h4 class="ms-2 mt-1">WHO WAS INVOLVED?</h4>
                                            </div>
                                        </div>
                                        <div class="col-6 align-self-center">
                                            <div class="radio-inputs">
                                                <label class="radio">
                                                    <input class="form-check-input" value="Patient" name="Involver" type="radio" checked="checked" />
                                                    <span class="name"><i class="fa-solid fa-check me-2 checkicon"></i>Patient</span>
                                                </label>
                                                <label class="radio">
                                                    <input class="form-check-input" value="Attender" name="Involver" type="radio" />
                                                    <span class="name">Attender</span>
                                                </label>
                                                <label class="radio">
                                                    <input class="form-check-input" value="Visitor" name="Involver" type="radio" />
                                                    <span class="name">Visitor</span>
                                                </label>
                                                <label class="radio">
                                                    <input class="form-check-input" value="Employee" name="Involver" type="radio" />
                                                    <span class="name">Employee</span>
                                                </label>
                                                <label class="radio">
                                                    <input class="form-check-input" value="Doctor" name="Involver" type="radio" />
                                                    <span class="name">Doctor</span>
                                                </label>
                                                <label class="radio">
                                                    <input class="form-check-input" value="Others" name="Involver" type="radio" />
                                                    <span class="name">Others</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row border border-top-0">
                                        <div class="col Inovolver-menu">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="my-3 row justify-content-between">
                                                        <div class="col InvolvedOther-first">
                                                            <label class="form-label">IP/OP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                            <div class="input-group removevalid-ip">
                                                                <input id="ipopervalue" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER" data-bs-toggle="dropdown" aria-expanded="false" />
                                                                <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                    <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                                                    Search
                                                                </a>

                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <label class="form-label ms-1">Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                            <input id="patientname" type="text" class="form-control clearbox" placeholder="Enter the Patient name" />
                                                        </div>
                                                        <div class="col InvolvedOther-sec">
                                                            <label class="form-label">Attending Physician<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                            <input id="physicianname" type="text" class="form-control clearbox" placeholder="Enter Attending Physician" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body py-0">
                                <div class="my-2">
                                    <div class="row Menutitle-border">
                                        <div class="col-auto p-0 position-relative">
                                            <div class="text-white Menutitle d-flex p-1 px-3 rounded-top edit">
                                                <h4 class="ms-2 mt-1">INCIDENT</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row py-3 border border-top-0">
                                        <div class="col  removeval-rem">
                                            <textarea class="form-control clearbox" data-bs-toggle="autosize" id="Remarks" maxlength="4000" name="" placeholder="Type something…"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row my-3 justify-content-end">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-blue" id="Clear">
                                            <i class="fa-solid fa-eraser me-2"></i>
                                            Clear
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button id="allsumit" type="button" class="btn btn-pink" onclick="validateForm()">
                                            <span class="submitspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                            <i class="fa-solid fa-database me-2"></i>                                            
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-danger text-white">
                    <div class="modal-header bg-danger">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Alret Message</h1>
                    </div>
                    <div class="modal-body">
                    </div>
                </div>
            </div>
        </div>
    </form>
    <script>

        flatpickr(".datapicker", {
            enableTime: true,
            dateFormat: "d-M-y h:i K",
            time_24hr: false,
            onChange: function (selectedDates, dateStr, instance) {
                $(this).val = dateStr;
            }
        });
        $('body').on('click', '.DropOptions', function () {

            if ($(this).parent('ul').siblings('input').attr('id') == 'values') {
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                var emp = $(this).children(':first').text().split('-');
                $(this).parent('ul').siblings('input').val(emp[0]).attr('optionval', $(this).attr('value'));
                $('#empname').val(emp[1]);
                $('#hodname').val($(this).attr('value'));
                $('#empname').attr('disabled', true);
                $('#hodname').attr('disabled', true);
            } else if ($(this).parent('ul').siblings('input').attr('id') == 'ipopervalue') {
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                var ipop = $(this).children(':first').text().split('-');
                $(this).parent('ul').siblings('input').val(ipop[0]).attr('optionval', $(this).attr('value'));
                $('#patientname').val(ipop[1]);
                $('#physicianname').val($(this).attr('value'));
                $('#patientname').attr('disabled', true);
                $('#physicianname').attr('disabled', true);
            }
            else if ($(this).parent('ul').siblings('input').attr('id') == 'attipopervalue') {
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                var ipop = $(this).children(':first').text().split('-');
                $(this).parent('ul').siblings('input').val(ipop[0]).attr('optionval', $(this).attr('value'));
                $('#attipop').val(ipop[1]);
                $('#attdoc').val($(this).attr('value'));
                $('#attipop').attr('disabled', true);
                $('#attdoc').attr('disabled', true);
            } else if ($(this).parent('ul').siblings('input').attr('id') == 'visitipopervalue') {
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                var ipop = $(this).children(':first').text().split('-');
                $(this).parent('ul').siblings('input').val(ipop[0]).attr('optionval', $(this).attr('value'));
                $('#visitpatientname').val(ipop[1]);
                $('#visitdoc').val($(this).attr('value'));
                $('#visitpatientname').attr('disabled', true);
                $('#visitdoc').attr('disabled', true);
            }
            else if ($(this).parent('ul').siblings('input').attr('id') == 'involve-doc-id') {
                debugger;
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                var ipop = $(this).children(':first').text().split('-');
                $(this).parent('ul').siblings('input').val(ipop[0]).attr('optionval', $(this).attr('value'));
                $('#involve-doc-id').val(ipop[0]);
                $('#involve-doc-name').val(ipop[1]);
                $('#involve-doc-name').attr('disabled', true);
                //$('#involve-doc-id').attr('disabled', true);
            }
            else {
                $('.DropOptions').removeClass('bg-primary fw-bold text-white');
                $(this).addClass('bg-primary fw-bold text-white');
                $(this).parent('ul').siblings('input').val($(this).children(':first').text()).attr('optionval', $(this).attr('value'));
            }
        });
        $('body').on('keyup', '.Filter', function (event) {

            if (event.key != 'Backspace' && event.key != 'Delete') {
                let meunlist = $(this).siblings('ul').find('.DropOptions:visible');
                var val = $.trim($(this).val()).toLowerCase();
                meunlist.show().filter(function () {
                    var text = $(this).text().toLowerCase();
                    return !~text.indexOf(val);
                }).hide();
            }
            else {
                let meunHiddenlist = $(this).siblings('ul').find('.DropOptions:hidden');
                var val = $.trim($(this).val()).toLowerCase();
                meunHiddenlist.show().filter(function () {
                    var text = $(this).text().toLowerCase();
                    return !~text.indexOf(val);
                }).hide();
            }
        });
        $('body').on('click', '#Clear', () => {
            $('.clearbox').val('');
            $('input:checkbox[name="Involver"]').prop('checked', false);
        });
        function showDateTime() {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            document.getElementById('DATETIME').innerHTML = date + ' ' + time;
        }

        setInterval(showDateTime, 1000);
        $(document).ready(function () {
            $("#wards").attr("placeholder", "Select Ward")
            GetWard();

        });

        $('body').on('input', '#others-mbl ,#othersmblno', function (e) {
            debugger;
            var mob = $(this).val().replace(/[^\d]/g, '');
            if (mob.length > 10) {
                mob = mob.substring(0, 10);
            }
            $(this).val(mob);
        })

        function GetWard() {
            $.ajax({
                type: "POST",
                url: "Incident_ReportingKiosk.aspx/GetWord",
                /*data: "{'value':'" + $("#SessionId").val() + "','flag':'auth','mobileNum':'','uhid':'','name':'','abhanumber':'','abhaaddress':''}",*/
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {

                    let data = response.d.result[0].result.row;
                    $('.ward').empty();
                    data.forEach(function (ward) {
                        $('.ward').append('<li class="px-2 py-1 DropOptions hovercolors value="' + ward["ward_name"] + '"><span>' + ward["ward_name"] + '</span></li>');
                    });
                },
                failure: function (response) {
                    alert("Error return from Getward method" + response);
                }
            })
        }
        function GetDepartment() {
            $.ajax({
                type: "POST",
                url: "Incident_ReportingKiosk.aspx/GetDepartment",
                /*data: "{'value':'" + $("#SessionId").val() + "','flag':'auth','mobileNum':'','uhid':'','name':'','abhanumber':'','abhaaddress':''}",*/
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {

                    let data = response.d.result[0].result.row;
                    $('.ward').empty();
                    data.forEach(function (department) {
                        $('.ward').append('<li class="px-2 py-1 DropOptions hovercolors value="' + department["department_name"] + '"><span>' + department["department_name"] + '</span></li>');
                    });
                },
                failure: function (response) {
                    alert("Error return from GetDepartment method" + response);
                }
            })
        }
        $('body').on('click', '#btnsearch', function () {

            $('.searchspinner').removeClass('d-none');
            let input = $('#value').val();
            if ($('input[name="ReportorType"]:checked').val() == "Employee" && input != "") {
                $.ajax({
                    type: "POST",
                    url: "Incident_ReportingKiosk.aspx/GetSerarchEmpId",
                    data: "{'input':'" + input + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {

                        $('.searchspinner').addClass('d-none');
                        $('.searchdropdown').click();
                        let data = response.d.result[0].result.row;
                        $('.search').empty();
                        data.forEach(function (search) {
                            $('.search').append('<li class="px-2 py-1 DropOptions hovercolors value="' + search["reporting_to"] + '"><span>' + search["display_name"] + '</span></li>');
                        });
                    },
                    failure: function (response) {
                        alert("Error return from EmployeeSearch method" + response);
                    }
                });
            } else if ($('input[name="ReportorType"]:checked').val() == "Doctor" && input != "") {

                $('.searchspinner').removeClass('d-none');
                let input = $('#docname').val();
                $.ajax({
                    type: "POST",
                    url: "Incident_ReportingKiosk.aspx/GetDoctor",
                    data: "{'doctorname':'" + input + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {

                        $('.searchspinner').addClass('d-none');
                        const json = JSON.parse(response.d);
                        var data = json.result[0].result.row;
                        $('.searchdropdown').click();
                        $('.doctor').empty();
                        if (data == '') {
                            $('.searchspinner').addClass('d-none');
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("System does not have searched entered value");
                        }
                        else {
                            var data = json.result[0].result.row;
                            data.forEach(function (doctor) {
                                $('.doctor').append('<li class="px-2 py-1 DropOptions hovercolors"><span>' + doctor["doctor"] + '</span></li>');
                            });
                        }
                    },
                    failure: function (response) {
                        alert("Error return from GetDoctor method" + response);
                    }
                });
            }
            else {
                $('.searchspinner').addClass('d-none');
                $('#exampleModal').modal('show');
                $('.modal-body').text("System does not allow search empty values");
            }
        });     
        $('body').on('click', "#empsearch", function () {

            let input = $('#values').val();
            $('.empsearchspinner').removeClass('d-none');
            if (input == "" || input.length <= 3) {
                if (input.length <= 3) {
                    $('.empsearchspinner').addClass('d-none');
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("You should entery 4 digit employee number");
                } else {
                    $('.empsearchspinner').addClass('d-none');
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("System does not allow search empty values");
                }
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "Incident_ReportingKiosk.aspx/GetSerarchEmpId",
                    data: "{'input':'" + input + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {

                        $('.empsearchspinner').addClass('d-none');
                        let data = response.d.result[0].result.row;
                        if (data != null) {
                            $('.empsearchs').empty();
                            data.forEach(function (search) {
                                $('.empsearchs').append('<li class="px-2 py-1 DropOptions hovercolors" value="' + search["reporting_to"] + '" ><span>' + search["display_name"] + '</span></li>');
                            });
                            $('#values').click();
                        } else {
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("System does not have information you search");
                        }
                    },
                    failure: function (response) {
                        alert("Error return from Search-EmpID method" + response);
                    }
                });
            }
        });
        $('body').on('click', "#ipopersearch", function () {

            $('.searchspinners').removeClass('d-none');
            let value = $("#ipopervalue").val();
            if (value == "" || value.length <= 2) {
                if (value.length <= 2) {
                    $('.searchspinners').addClass('d-none');
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("You should entery 4 digit IP/OP/ER number");
                } else {
                    $('.searchspinners').addClass('d-none');
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("System does not allow search empty values");
                }
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "Incident_ReportingKiosk.aspx/GetPatientIpOpEr",
                    data: "{'ipoper':'" + value + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {

                        $('.searchspinners').addClass('d-none');
                        const json = JSON.parse(response.d);
                        let data = json.result[0].result.row;
                        $('.IPOP').empty();
                        if (data != null && data != "") {
                            data.forEach(function (search) {
                                $('.IPOP').append('<li class="px-2 py-1 DropOptions hovercolors" value="' + search["doctorname"] + '"><span>' + search["ip_no"] + '</span></li>');
                            });
                            $('#ipopervalue').click();
                        }
                        else {
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("System does not allow search empty values");
                        }
                    },
                    failure: function (response) {
                        alert("Error return from Search-Patient method" + response);
                    }
                });
            }
        });
        $('input:radio').change(function () {

            var name = $(this).siblings().text();
            var buttonname = $(this).attr('name');
            $('input:radio[name="' + buttonname + '"]').parent().find('.checkicon').remove();
            $(this).siblings().html(`<i class="fa-solid fa-check me-2 checkicon"></i> ${name}`);

        });
        $('input:radio[name="Places"]').change(function () {
            debugger;
            if ($(this).val() == "Ward") {
                $("#wards").attr("placeholder", "Select Ward")
                $('.addword').find("input").siblings().remove();
                $('.addword').find("input").attr("data-bs-toggle", "dropdown").attr("aria-expanded", "false");
                $('.addword').append('<span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span><ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward"></ul>');
                GetWard();
            } else if ($(this).val() == "Department") {
                $("#wards").text("");
                $("#wards").attr("placeholder", "Select Department");
                $('.addword').find("input").siblings().remove();
                $('.addword').find("input").attr("data-bs-toggle", "dropdown").attr("aria-expanded", "false");
                $('.addword').append('<span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span><ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward"></ul>');
                GetDepartment();
            } else if ($(this).val() == "Location") {
                $("#wards").text("");
                $("#wards").attr("placeholder", "Enter Location")
                $('#incidenttype').remove();
                $('.ward').remove();
            }
        });
        $('input:radio[name="ReportorType"]').change(function () {

            if ($(this).val() == "Employee") {
                $(this).prop('checked', true);
                $('.ReportorTypeclick').html(`<div id="employeeFields" class="row">
                                                    <div class="col-8">
                                                        <label class="form-label ms-1">Employee ID</label>
                                                        <div class="input-group">
                                                            <input id="value" type="text" class="form-control Filter clearbox" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" />
                                                            <span class="input-group-text dropdown-toggle dropdown-toggle-show searchdropdown" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                            <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas search"></ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-2 align-self-end">
                                                        <a href="#" class="btn btn-pink mx-2" id="btnsearch"><span class="searchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                    </div>
                                                </div>
                                                `);
                $('.OtherTypes').empty();
            }
            else if ($(this).val() == "Doctor") {
                $(this).prop('checked', true);
                $('.ReportorTypeclick').html(`<div id="doctorFields" class="row">
                                                <div class="col-8">
                                                    <label class="form-label ms-1">Doctor Name</label>
                                                    <div class="input-group docidname">
                                                        <input id="docname" type="text" class="form-control Filter clearbox" placeholder="Enter the Doctor Name" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <span class="input-group-text dropdown-toggle dropdown-toggle-show searchdropdown" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                        <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas doctor">
                                                        </ul>
                                                    </div>
                                                </div>
                                             <div class="col-2 align-self-end">
                                             <a href="#" class="btn btn-pink mx-2" id="btnsearch">
                                                <span class="searchspinner spinner-border spinner-border-sm me-2 d-none" role="status">
                                                </span>Search</a>
                                            </div>
                                            </div>`);
                $('.OtherTypes').empty();
            }
            else {
                $(this).prop('checked', true);
                $('.OtherTypes').html(`<label class="form-label namevalue">Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                        <input id="others-name" type="text" class=" form-control clearbox" placeholder="Enter the Name" name="" value="" required/>`);
                $('.ReportorTypeclick').html(`<label class="form-label mblvalue">Mobile No<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                              <input id="others-mbl" type="text" class="blockletters form-control clearbox" placeholder="Enter the Mobile No" maxlength="10" name="" value="" required />`);
            }

        });
        $('input:radio[name="Involver"]').change(function () {

            if ($(this).val() == "Patient") {
                $(this).prop('checked', true);
                $('.Inovolver-menu').html(`<div class="row">
                                                <div class="col">
                                                    <div class="my-3 row justify-content-between">
                                                        <div class="col">
                                                            <label class="form-label">IP/OP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                            <div class="input-group removevalid-ip">
                                                                <input id="ipopervalue" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" />
                                                             <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                            <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                                                            Search
                                                                        </a>
                                                            <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP">
                                                            </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                        <label class="form-label ms-1">Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="patientname" type="text" class="form-control clearbox" placeholder="Enter the Patient name" name="" value="" /></div>
                                                        <div class="col">
                                                        <label class="form-label">Attending Physician <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="physicianname" type="text" class="form-control clearbox" placeholder="Enter Attending Physician" name="" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`);

            }
            else if ($(this).val() == "Attender") {
                $('.Inovolver-menu').html(`<div class="row my-3">
                                                <div class="col-5">
                                                    <label class="form-label">OP/IP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>                                                    
                                                        <div class="input-group removevalid-ip">
                                                            <input id="ipopervalue" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" />
                                                                <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP"></ul>
                                                        </div>
                                                </div>
                                                    <div class="col-5">
                                                        <label class="form-label ms-1">Patient Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="patientname" type="text" class="form-control" placeholder="Enter the Patient name" clearbox" name="" value="" />
                                                    </div>
                                                
                                                <div class="row my-3">
                                                    <div class="col-5 remove-attnd">
                                                        <label class="form-label ms-1">Attender Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="attendername" type="text" class="form-control clearbox" placeholder="Enter the Attender name" name="" value="" />
                                                    </div>
                                                    <div class="col-5">
                                                    <label class="form-label">Attending Physician <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                    <input id="physicianname" type="text" class="form-control clearbox" placeholder="Enter Attending Physician" name="" value="" />
                                                 </div>
                                             </div>`);
            }
            else if ($(this).val() == "Visitor") {
                $('.Inovolver-menu').html(`<div class="row my-3">
                                            <div class="col-5">
                                                <label class="form-label">OP/IP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                <div class="input-group removevalid-ip">
                                                            <input id="ipopervalue" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" />
                                                                <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP"></ul>
                                                        </div>
                                            </div>
                                            <div class="col-5">
                                                <label class="form-label ms-1">Patient Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i> </label>
                                                <input id="patientname" type="text" class="form-control clearbox" placeholder="Enter the Patient name" />
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5 remove-vis">
                                                <label class="form-label ms-1">Visitor Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                <input id="visitername" type="text" class="form-control clearbox" placeholder="Enter the Visitor name" name="" value="" />
                                            </div>
                                            <div class="col-5">
                                                <label class="form-label">Attending Physician <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                <input id="physicianname" type="text" class="form-control clearbox" placeholder="Enter Attending Physician" name="" value="" />
                                            </div>
                                        </div>`);
            }
            else if ($(this).val() == "Employee") {
                $('.Inovolver-menu').html(`<div class="row">
                                            <div class="col">
                                                <div class="my-3 row justify-content-between">
                                                    <div class="col">
                                                        <label class="form-label  ms-1">Employee ID <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <h5 class="loading d-none">Loading<span class="animated-dots"></span></h5>
                                                        <div class="input-group removeval-emp">
                                                         <input id="values" type="text" class="form-control Filter clearbox" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" />
                                                            <a class="btn btn-pink mx-2" id="empsearch">
                                                                <span class="empsearchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                         </span>
                                                          <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas empsearchs">
                                                          </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label class="form-label ms-1">Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="empname" type="text" class="form-control clearbox" placeholder="Enter Employee Name" />
                                                    </div>
                                                    <div class="col">
                                                        <label class="form-label">HOD <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="hodname" type="text" class="form-control clearbox" placeholder="Enter HOD"/>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>`);
            }
            else if ($(this).val() == "Doctor") {
                $('.Inovolver-menu').html(`<div class="row">
                                                    <div class="col">
                                                        <div class="my-3 row justify-content-between">
                                                            <div class="col">
                                                               <label class="form-label  ms-1">Doctor Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <h5 class="loading d-none">Loading<span class="animated-dots"></span></h5>
                                                        <div class="input-group removeval-doc">
                                                         <input id="involve-doc-id" type="text" class="form-control Filter clearbox" placeholder="Enter the Doctor Name" data-bs-toggle="dropdown" aria-expanded="false" />
                                                            <a class="btn btn-pink mx-2" id="involvedoc-search">
                                                                <span class="doc-searchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                         </span>
                                                          <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas doc-searchs">
                                                          </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label class="form-label ms-1">Doctor ID <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="involve-doc-name" type="text" class="form-control clearbox" placeholder="Enter Doctor ID" />
                                                    </div>   
                                            </div>
                                            </div>`);
            }
            else {
                $(this).prop('checked', true);
                $('.Inovolver-menu').html(`<div class="row">
                                                    <div class="col">
                                                        <div class="my-3 row justify-content-between">
                                                            <div class="col removeval-name">
                                                                <label class="form-label">Mobile No <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input id="othersmblno" type="text" class="form-control othernum clearbox" placeholder="Enter the Mobile No" name="" value="" />
                                                            </div>
                                                            <div class="col removeval-mbl">
                                                                <label class="form-label ms-1">Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input type="text" class="form-control clearbox" placeholder="Enter the Patient name" name="" value="" id="othername" />
                                                            </div>
                                                            <div class="col removeval-occpn">
                                                                <label class="form-label">Occupation <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input id="occupn" type="text" class="form-control clearbox" placeholder="Enter the Occupation" name="" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`);
            }

        });
        $('body').on('click', '#involvedoc-search', function () {
            debugger;
            $('.doc-searchspinner').removeClass('d-none');
            let input = $('#involve-doc-id').val();
            if ($('input[name="Involver"]:checked').val() == "Doctor" && input != "") {
                $.ajax({
                    type: "POST",
                    url: "Incident_ReportingKiosk.aspx/GetDoctorByName",
                    data: "{'doctorname':'" + input + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        debugger;
                        $('.doc-searchs').empty();
                        $('.doc-searchspinner').addClass('d-none');
                        const json = JSON.parse(response.d);
                        let data = json.result[0].result.row;
                        $('.doctor-search').empty();
                        if (data == '') {
                            $('.doc-searchspinner').addClass('d-none');
                            $('#exampleModal').modal('show');
                            $('.modal-body').text("System does not have searched entered value");
                        }
                        else {
                            data.forEach(function (doctor) {
                                $('.doc-searchs').append('<li class="px-2 py-1 DropOptions hovercolors" ><span>' + doctor["doctor"] + '</span></li>');
                            });
                        }
                       $('#involve-doc-id').click();
                    },
                    failure: function (response) {
                        alert("Error return from Search-Doctor method" + response);
                    }
                });
            }
            else {
                $('.doc-searchspinner').addClass('d-none');
                $('#exampleModal').modal('show');
                $('.modal-body').text("System does not allow search empty values");
            }
        });
        $('body').on('click', '#Remarks', function () {
            $("#Remarks").removeClass("is-invalid");
            $(".removeval-rem").remove('<div class="invalid-feedback" style="color: red;">Empty Field</div>');
        });

        $('body').on('focus', 'input:text', function () {
            $(this).removeClass('is-invalid').parent().find('div').remove();
            ($(this).attr('id') == "value") ? $('#btnsearch').parent().removeClass('align-self-center mt-2').addClass('align-self-end'): '';
        });

    </script>
</body>
</html>
