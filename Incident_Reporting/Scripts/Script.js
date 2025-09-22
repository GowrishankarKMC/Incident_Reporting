$(document).ready(function () {
    let currentURL = window.location.href;
    const url = new URL(currentURL);
    
    if (url.pathname === '/QRIncident_Reporting.aspx') {
        $('input:radio[value="Others"]').click();
        $('input:radio[name="ReportorType"]').click();
    }

    console.log("%cStop!", "color: red; font-size: 4em; font-weight: bold;");
    console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it might give them access to your account.", "font-size: 1.5em; color: black;");
    console.log("%cDo not paste any code here unless you know exactly what you are doing!", "font-size: 1.5em; color: orange;");
let datepicTime;
$(document).ajaxSend(function (event, jqxhr, settings) {
    var token = $("#__RequestVerificationToken").val();
    if (token) {
        if (settings.type === "POST") {
            if (jqxhr && jqxhr.setRequestHeader) {
                jqxhr.setRequestHeader("RequestVerificationToken", token);
            }
        }
    }
});

    if (url.pathname === '/QRIncident_Reporting.aspx') {
        timepk();
        timepkmob();
    }
    var params = new window.URLSearchParams(window.location.search);
    if (params.size != "0") {
        timepk();
        timepkmob();
    }
    function timepk() {
        const timePickermobs = flatpickr(".datapickerMob", {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            maxDate: "today"
        });
    };
    function timepkmob() {
        const timePickermob = flatpickr(".TimePickerMob", {
            time_24hr: false,
            enableTime: true,
            noCalendar: true
        });
    }

    $('body').on('input', '.TimePickerMob', function () {
        if (url.pathname === '/QRIncident_Reporting.aspx') {
        }
        else {
            var params = new window.URLSearchParams(window.location.search);
            if (params.size != "0") {
                let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                let formattedDate = new Date().toLocaleDateString('en-GB', options);
                const currentTime = new Date();
                let inpval = new Date($('.datapickerMob').val()).toLocaleDateString('en-GB', options);
                if (formattedDate == inpval) {
                    const formattedTime = currentTime.toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    });
                    if (parseInt(TimeToMinutes(formattedTime)) < parseInt(TimeToMinutes($(this).val())))
                        $(this).val("");
                }
                else {
                    timePicker.set('maxTime', null);
                }
            }
        }
});
function TimeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = (hours * 60) + minutes;
    return totalMinutes;
}
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

const timePicker = flatpickr(".datapicker", {
    enableTime: true,
    dateFormat: "d-M-y h:i K",
    time_24hr: false,
    maxDate: "today",
    onChange: function (selectedDates, dateStr, instance) {
        $(this).val = dateStr;
    }
});

$('body').on('input', '.datapicker', function () {

    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let formattedDate = new Date().toLocaleDateString('en-GB', options);
    const currentTime = new Date();
    let inpval = new Date($(this).val()).toLocaleDateString('en-GB', options);
    if (formattedDate == inpval) {
        const formattedTime = currentTime.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        timePicker.set('maxTime', formattedTime);
    }
    else {
        timePicker.set('maxTime', null);
    }
});
    if (url.pathname != '/QRIncident_Reporting.aspx') {
        setInterval(showDateTime, 1000);
    }


    var params = new window.URLSearchParams(window.location.search);
    if (params.size != "0") {
        
        $('.searchdropdown').remove();
        $('#docname').attr('disabled', true);
        $('#value').attr('disabled', true);
        $('.desktop-picker').addClass("d-none");
        $('.mob-picker').removeClass('d-none');
        var empid = params.get('empid');
        var empsul = params.get('empsul');
        var empname = params.get('empname');

        if (empsul == "Dr.") {
            $('.searchdropdown').remove();
            $('#docname').attr('disabled', true);
            $("#uhid").prop("checked", true);
            $('input[name=ReportorType]').val('Doctor');
            //var name = $('#uhid').siblings().text();
            //$('input:radio[name="ReportorType"]').parent().find('.checkicon').remove();
            //$('#uhid').siblings().html(`<i class="fa-solid fa-check me-2 checkicon"></i> ${name}`);


            $('.ReportorTypeclick').html(`<div id="doctorFields" class="row">
                                                <div class="col-md-12">
                                                    <label class="form-label ms-1">Doctor Name</label>
                                                    <div class="input-group docidname">
                                                        <input id="docname" type="text" class="form-control Filter clearbox docid" placeholder="Enter the Doctor Name" readonly />
                                                     </div>
                                                </div>
                                            </div>`);
            $('.OtherTypes').empty();

            var docname = empsul + empname;
            $('.docid').val(docname);
            $('.mobmyselfhide').addClass(' d-none');
            $('input[name=ReportorType]').attr("disabled", true);

        }
        else {
            $("#empid").prop("checked", true);
            var empname = empid + '-' + empsul + empname;
            $('.empid').val(empname);
            $('.mobmyselfhide').addClass('d-none');
            $('input[name=ReportorType]').val('Employee');
            $('input[name=ReportorType]').attr("disabled", true);

        }
    }
    $("#wards").attr("placeholder", "Select Ward")
    GetWard();

    $('body').on('input', '#others-mbl ,#othersmblno', function (e) {
        const regex = /^[0-9]*$/;

        var mob = $(this).val()
        var lastchar = mob[mob.length - 1];
        if (!regex.test(lastchar)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only numbers.");
            if ($(this)[0].id === "othersmblno") {

                $("#othersmblno").val(mob.slice(0, -1));
            }
            else if ($(this)[0].id === "others-mbl") {
                $("#others-mbl").val(mob.slice(0, -1));
            }
        } else {
            mob.replace(/[^\d]/g, '');
            if (mob.length > 10) {
                mob = mob.substring(0, 10);
            }
            $(this).val(mob);
        }
    });

function GetWard() {
    $.ajax({
        type: "POST",
        url: "Incident_Reporting.aspx/GetWord",
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
            alert("Error return from Confirmpayment method" + response);
        }
    })
}
function GetDepartment() {
    $.ajax({
        type: "POST",
        url: "Incident_Reporting.aspx/GetDepartment",
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
            alert("Error return from Confirmpayment method" + response);
        }
    })
}
$('body').on('click', '#btnsearch', function () {

    $('.searchspinner').removeClass('d-none');
    let input = $('#value').val();
    if ($('input[name="ReportorType"]:checked').val() == "Employee") {
        if (input.length <= 2 || input == "") {
            $('.searchspinner').addClass('d-none');
            $('#exampleModal').modal('show');
            $('.modal-body').text("You should enter 3 digit employee number");
        }
        else {
            $.ajax({
                type: "POST",
                url: "Incident_Reporting.aspx/GetSerarchEmpId",
                data: "{'input':'" + input + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {

                    $('.searchspinner').addClass('d-none');
                    $('.searchdropdown').click();
                    let data = response.d.result[0].result.row;
                    $('.search').empty();
                    if (data == '' || data == null) {
                        $('.searchspinner').addClass('d-none');
                        $('#exampleModal').modal('show');
                        $('.modal-body').text("The system does not have information you search for.");
                    }
                    else {
                        data.forEach(function (search) {
                            $('.search').append('<li class="px-2 py-1 DropOptions hovercolors value="' + search["reporting_to"] + '"><span>' + search["display_name"] + '</span></li>');
                        });
                    }
                },
                failure: function (response) {
                    alert("Error return from Confirmpayment method" + response);
                }
            });
        }
    }
    else if ($('input[name="ReportorType"]:checked').val() == "Doctor") {
        $('.searchspinner').removeClass('d-none');
        let input = $('#docname').val();
        if (input == "" || input.length <= 2) {
            $('.searchspinner').addClass('d-none');
            $('#exampleModal').modal('show');
            $('.modal-body').text("The system does not allow searching for empty values. Please enter at least 3 letters.");
        }
        else {
            $.ajax({
                type: "POST",
                url: "Incident_Reporting.aspx/GetDoctor",
                data: "{'doctorname':'" + input + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {

                    $('.searchspinner').addClass('d-none');
                    const json = JSON.parse(response.d);
                    var data = json.result[0].result.row;
                    $('.searchdropdown').click();
                    $('.doctor').empty();
                    if (data == '' || data == null) {
                        $('.searchspinner').addClass('d-none');
                        $('#exampleModal').modal('show');
                        $('.modal-body').text("The system does not have information you search for.");
                    }
                    else {
                        var data = json.result[0].result.row;
                        data.forEach(function (doctor) {
                            $('.doctor').append('<li class="px-2 py-1 DropOptions hovercolors"><span>' + doctor["doctor"] + '</span></li>');
                        });
                    }
                },
                failure: function (response) {
                    alert("Error return from Confirmpayment method" + response);
                }
            });
        }

    }
    else {
        $('.searchspinner').addClass('d-none');
        $('#exampleModal').modal('show');
        $('.modal-body').text("The system does not allow searching for empty values. Please enter at least 3 letters.");
    }
});
$('body').on('click', "#empsearch", function () {

    let input = $('#values').val();
    $('.empsearchspinner').removeClass('d-none');
    if (input == "" || input.length <= 3) {
        $('.empsearchspinner').addClass('d-none');
        $('#exampleModal').modal('show');
        $('.modal-body').text("You should enter 4 digit employee number");
    }
    else {
        $.ajax({
            type: "POST",
            url: "Incident_Reporting.aspx/GetSerarchEmpId",
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
                    $('.modal-body').text("The system does not have information you search for.");
                }
            },
            failure: function (response) {
                alert("Error return from Confirmpayment method" + response);
            }
        });
    }
});
$('body').on('click', "#ipopersearch", function () {

    $('.searchspinners').removeClass('d-none');
    let value = $("#ipopervalue").val();
    if (value == "" || value.length <= 2) {
        $('.searchspinners').addClass('d-none');
        $('#exampleModal').modal('show');
        $('.modal-body').text("You should enter 4 digit IP/OP/ER number");
    }
    else {
        $.ajax({
            type: "POST",
            url: "Incident_Reporting.aspx/GetPatientIpOpEr",
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
                    $('.modal-body').text("The system does not have information you search for.");
                }
            },
            failure: function (response) {
                alert("Error return from Confirmpayment method" + response);
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

    if ($(this).val() == "Ward") {
        $("#wards").val('');
        $("#wards").attr("placeholder", "Select Ward")
        $('.addword').find("input").siblings().remove();
        $('.addword').find("input").attr("data-bs-toggle", "dropdown").attr("aria-expanded", "false");
        $('.addword').append('<span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span><ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward"></ul>');
        GetWard();
    } else if ($(this).val() == "Department") {
        $("#wards").val('');
        $("#wards").text("");
        $("#wards").attr("placeholder", "Select Department");
        $('.addword').find("input").siblings().remove();
        $('.addword').find("input").attr("data-bs-toggle", "dropdown").attr("aria-expanded", "false");
        $('.addword').append('<span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span><ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward"></ul>');
        GetDepartment();
    } else if ($(this).val() == "Location") {
        $("#wards").val('');
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
                                                        <label class="form-label ms-1">Employee ID<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <div class="input-group empidname">
                                                            <input id="value" type="text" class="form-control Filter clearbox empid" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
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
        $('#wards').val('');
        $('#type').val('select');
    }
    else if ($(this).val() == "Doctor") {
        $(this).prop('checked', true);
        $('.ReportorTypeclick').html(`<div id="doctorFields" class="row">
                                                <div class="col-8">
                                                    <label class="form-label ms-1">Doctor Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                    <div class="input-group docidname">
                                                        <input id="docname" oninput="validateDoctor()" type="text" class="form-control Filter clearbox docid" placeholder="Enter the Doctor Name" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
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
        $('#wards').val('');
        $('#type').val('select');
    }
    else {
        $(this).prop('checked', true);
        $('.OtherTypes').html(`<label class="form-label namevalue">Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                        <input id="others-name" oninput="validateInput()" type="text" class=" form-control clearbox" placeholder="Enter the Name" name="" value="" autocomplete="off"/>`);
        $('.ReportorTypeclick').html(`<label class="form-label mblvalue">Mobile No</label>
                                              <input id="others-mbl" type="text" class="blockletters form-control clearbox" placeholder="Enter the Mobile No" maxlength="10" name="" value="" autocomplete="off" />`);
        $('#wards').val('');
        $('#type').val('select');
    }

});
$('input:radio[name="Involver"]').change(function () {

    if ($(this).val() == "Patient") {
        $(this).prop('checked', true);
        $('.Inovolver-menu').html(`<div class="row">
                                                <div class="col">
                                                    <div class="my-3 row justify-content-between">
                                                        <div class="col-md-4">
                                                            <label class="form-label">IP/OP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                            <div class="input-group removevalid-ip">
                                                                <input id="ipopervalue" oninput="validateIP()" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
                                                             <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                            <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                                                            Search
                                                                        </a>
                                                            <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP">
                                                            </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                        <label class="form-label ms-1 mobtop-3">Name </label>
                                                        <input id="patientname" type="text" class="form-control clearbox" name="" value="" disabled="disabled"/></div>
                                                        <div class="col-md-4">
                                                        <label class="form-label mobtop-3">Attending Physician</label>
                                                        <input id="physicianname" type="text" class="form-control clearbox" name="" value="" disabled="disabled"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`);

    }
    else if ($(this).val() == "Attender") {
        $('.Inovolver-menu').html(`<div class="row my-3">
                                                <div class="col-md-5">
                                                    <label class="form-label">OP/IP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>                                                    
                                                        <div class="input-group removevalid-ip">
                                                            <input id="ipopervalue" oninput="validateIP()" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
                                                                <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP"></ul>
                                                        </div>
                                                </div>
                                                    <div class="col-md-5">
                                                        <label class="form-label ms-1 mobtop-3">Patient Name</label>
                                                        <input id="patientname" type="text" class="form-control" clearbox" name="" value="" disabled="disabled"/>
                                                    </div>
                                                </div>
                                                <div class="row my-3">
                                                    <div class="col-md-5 remove-attnd">
                                                        <label class="form-label ms-1">Attender Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <input id="attendername" oninput="validateInput()" type="text" class="form-control clearbox" placeholder="Enter the Attender name" name="" value="" autocomplete="off"/>
                                                    </div>
                                                    <div class="col-md-5">
                                                    <label class="form-label mobtop-3">Attending Physician </label>
                                                    <input id="physicianname" type="text" class="form-control clearbox" name="" value="" disabled="disabled" />
                                                 </div>`);
    }
    else if ($(this).val() == "Visitor") {
        $('.Inovolver-menu').html(`<div class="row my-3">
                                            <div class="col-md-5">
                                                <label class="form-label">OP/IP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                <div class="input-group removevalid-ip">
                                                            <input id="ipopervalue" oninput="validateIP()" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER"  data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
                                                                <a class="btn btn-pink mx-2" id="ipopersearch">
                                                                <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                                <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP"></ul>
                                                        </div>
                                            </div>
                                            <div class="col-md-5">
                                                <label class="form-label ms-1 mobtop-3">Patient Name </label>
                                                <input id="patientname" type="text" class="form-control clearbox" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-md-5 remove-vis">
                                                <label class="form-label ms-1 mobtop-3">Visitor Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                <input id="visitername" oninput="validateInput()" type="text" class="form-control clearbox" placeholder="Enter the Visitor name" name="" value="" autocomplete="off"/>
                                            </div>
                                            <div class="col-md-5">
                                                <label class="form-label mobtop-3">Attending Physician </label>
                                                <input id="physicianname" type="text" class="form-control clearbox" name="" value="" disabled="disabled"/>
                                            </div>
                                        </div>`);
    }
    else if ($(this).val() == "Employee") {
        $('.Inovolver-menu').html(`<div class="row">
                                            <div class="col">
                                                <div class="my-3 row justify-content-between">
                                                    <div class="col-md-4">
                                                        <label class="form-label  ms-1">Employee ID <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <h5 class="loading d-none">Loading<span class="animated-dots"></span></h5>
                                                        <div class="input-group removeval-emp">
                                                         <input id="values" oninput="validateDoctor()" type="text" class="form-control Filter clearbox" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"/>
                                                            <a class="btn btn-pink mx-2" id="empsearch">
                                                                <span class="empsearchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                         </span>
                                                          <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas empsearchs">
                                                          </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label class="form-label ms-1 mobtop-3">Name</label>
                                                        <input id="empname" type="text" class="form-control clearbox" disabled="disabled" />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label class="form-label mobtop-3">HOD </label>
                                                        <input id="hodname" type="text" class="form-control clearbox" disabled="disabled" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>`);
    }
    else if ($(this).val() == "Doctor") {
        $('.Inovolver-menu').html(`<div class="row">
                                                    <div class="col">
                                                        <div class="my-3 row justify-content-between">
                                                            <div class="col-md-6">
                                                               <label class="form-label  ms-1">Doctor Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                        <h5 class="loading d-none">Loading<span class="animated-dots"></span></h5>
                                                        <div class="input-group removeval-doc">
                                                         <input id="involve-doc-id" oninput="validateDoctor()" type="text" class="form-control Filter clearbox" placeholder="Enter the Doctor Name" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off" />
                                                            <a class="btn btn-pink mx-2" id="involvedoc-search">
                                                                <span class="doc-searchspinner spinner-border spinner-border-sm me-2 d-none" role="status"></span>Search</a>
                                                         </span>
                                                          <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas doc-searchs">
                                                          </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label ms-1">Doctor ID </label>
                                                        <input id="involve-doc-name" type="text" class="form-control clearbox" disabled="disabled" />
                                                    </div>
                                            </div>
                                            </div>`);
    }
    else {
        $(this).prop('checked', true);
        $('.Inovolver-menu').html(`<div class="row">
                                                    <div class="col">
                                                        <div class="my-3 row justify-content-between">
                                                            <div class="col-md-4 removeval-name">
                                                                <label class="form-label">Mobile No <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input id="othersmblno" type="text" class="form-control othernum clearbox" placeholder="Enter the Mobile No" name="" value="" autocomplete="off" />
                                                            </div>
                                                            <div class="col-md-4 removeval-mbl">
                                                                <label class="form-label ms-1 mobtop-3">Name <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input id="othername" oninput="validateInput()" type="text"class="form-control clearbox" placeholder="Enter the Patient name" name="" value="" autocomplete="off" />
                                                            </div>
                                                            <div class="col-md-4 removeval-occpn">
                                                                <label class="form-label mobtop-3">Occupation <i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <input id="occupn" oninput="validateoccpn()" type="text" class="form-control clearbox" placeholder="Enter the Occupation" name="" value="" autocomplete="off" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`);
    }

});
$('body').on('click', '#involvedoc-search', function () {

    $('.doc-searchspinner').removeClass('d-none');
    let input = $('#involve-doc-id').val();
    if ($('input[name="Involver"]:checked').val() == "Doctor" && input != "") {
        $.ajax({
            type: "POST",
            url: "Incident_Reporting.aspx/GetDoctorByName",
            data: "{'doctorname':'" + input + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                $('.doc-searchspinner').addClass('d-none');
                const json = JSON.parse(response.d);
                let data = json.result[0].result.row;
                $('.doctor-search').empty();
                if (data == '' || data == null) {
                    $('.doc-searchspinner').addClass('d-none');
                    $('#exampleModal').modal('show');
                    $('.modal-body').text("The system does not have information you search for.");
                }
                else {
                    data.forEach(function (doctor) {
                        $('.doc-searchs').append('<li class="px-2 py-1 DropOptions hovercolors" ><span>' + doctor["doctor"] + '</span></li>');
                    });
                }
                $('#involve-doc-id').click();
            },
            failure: function (response) {
                alert("Error return from Confirmpayment method" + response);
            }
        });
    }
    else {
        $('.doc-searchspinner').addClass('d-none');
        $('#exampleModal').modal('show');
        $('.modal-body').text("The system does not allow searching for empty values. Please enter at least 3 letters.");
    }
});
$('body').on('click', '#Remarks', function () {
    $("#Remarks").removeClass("is-invalid");
    $('.invalid-feedback').remove();
});
$('body').on('click', '#type', function () {
    $("#type").removeClass("is-invalid");
    $('.invalid-feedback').remove();
});
$('body').on('focus', 'input:text, .datapickerMob, .TimePickerMob, .datapicker', function () {
    $(this).removeClass('is-invalid');
    $(this).parent().find('div').remove();
    ($(this).attr('id') == "value" || $(this).attr('id') == "docname") ? $('#btnsearch').parent().removeClass('align-self-center mt-2').addClass('align-self-end') : '';
});

function validateInput() {

    var id = $('#othername').val() != undefined ? 'othername' : $('#visitername').val() != undefined ? 'visitername' : $('#attendername').val() != undefined ? 'attendername' : $('#others-name').val() != undefined ? 'others-name' : null;

    if (id != null) {
        const inputField = document.getElementById(id);
        const value = inputField.value;
        if (value.startsWith(' ')) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Leading spaces are not allowed!");
            inputField.value = value.slice(0, -1);
        }
        const regex = /^[a-zA-Z\s]*$/;

        if (!regex.test(value)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only Letters.");
            inputField.value = value.slice(0, -1);
        }
    }
}
function validateDoctor() {

    var involver = $('input:radio[name="Involver"]:checked').val();
    if (involver == "Doctor") {
        const inputField = document.getElementById('involve-doc-id');
        const value = inputField.value;
        const regex = /^[a-zA-Z.\s&(),]*$/;

        if (!regex.test(value)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only Letters.");
            inputField.value = value.slice(0, -1);
        }
    }
    else if (involver == "Employee") {
        const inputField = document.getElementById('values');
        const value = inputField.value;
        const regex = /^[0-9]*$/;

        if (!regex.test(value)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only numbers.");
            inputField.value = value.slice(0, -1);
        }
    }
    else {
        const inputField = document.getElementById('docname');
        const value = inputField.value;
        const regex = /^[a-zA-Z.\s&(),]*$/;

        if (!regex.test(value)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only Letters.");
            inputField.value = value.slice(0, -1);
        }
    }
}

function validateIP() {
    const inputField = document.getElementById('ipopervalue');
    const value = inputField.value;
    const regex = /^[a-zA-Z0-9]*$/;

    if (!regex.test(value)) {
        $('#exampleModal').modal('show');
        $('.modal-body').text("Please enter only letters and numbers.");
        inputField.value = value.slice(0, -1);
    }
}
function validateoccpn() {
    const inputField = document.getElementById('occupn');
    const value = inputField.value;
    if (value.startsWith(' ')) {
        $('#exampleModal').modal('show');
        $('.modal-body').text("Leading spaces are not allowed!");
        inputField.value = value.slice(0, -1);
    }
    const regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(value)) {
        $('#exampleModal').modal('show');
        $('.modal-body').text("Please enter only Letters.");
        inputField.value = value.slice(0, -1);
    }
}

$('#Remarks').on('keypress', function (event) {

    if (event.which === 34 || event.which === 92) {
        event.preventDefault();
    }
});


$('body').on('input', '#Remarks', function (e) {
    var mob = $(this).val().replace(/[^a-zA-z\d\s(),.]/g, '');
    $(this).val(mob);

    $('#charCount').text(`Remaining characters: ${(1500 - mob.length)}`);

});
$('body').on('keyup', '#value', function (event) {

    if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
        return true;
    }
    else {
        const inputField = document.getElementById('value');
        const value = inputField.value;
        const regex = /^[0-9]*$/;

        if (!regex.test(value)) {
            $('#exampleModal').modal('show');
            $('.modal-body').text("Please enter only numbers.");
            inputField.value = value.slice(0, -1);
        }
    }
});
    $('body').on('keyup', '#wards', function (event) {        
        if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else {
            const inputField = document.getElementById('wards');
            const value = inputField.value;
            const regex = /[!@#$%^&*()?":{}|<>]/;

            if (regex.test(value)) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("" + value + " - Special charater not allow");
                inputField.value = value.slice(0, -1);
            }
        }
    });
    $('body').on('keyup', "#others-name", function (event) {
        if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else {
            
            const inputField = document.getElementById('others-name');
            const inputFieldValue = inputField.value;
            const value = inputFieldValue[inputFieldValue.length - 1];
            const regex = /[a-zA-Z./\s/g]/;

            if (!regex.test(value)) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Only letters and Dot and Space charaters are allowed");
                inputField.value = inputFieldValue.slice(0, -1);
            }
        }
    });
    $('body').on('keyup', '#othername', function (event) {
        if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else {
            
            const inputField = document.getElementById('othername');
            const inputFieldValue = inputField.value;
            const value = inputFieldValue[inputFieldValue.length - 1];
            const regex = /[a-zA-Z./\s/g]/;

            if (!regex.test(value)) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Only letters and Dot and Space charaters are allowed");
                inputField.value = inputFieldValue.slice(0, -1);
            }
        }
    });
    $('body').on('keyup', '#occupn', function (event) {
        if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else {
            
            const inputField = document.getElementById('occupn');
            const inputFieldValue = inputField.value;
            const value = inputFieldValue[inputFieldValue.length - 1];
            const regex = /[a-zA-Z./\s/g]/;

            if (!regex.test(value)) {
                $('#exampleModal').modal('show');
                $('.modal-body').text("Only letters and Dot and Space charaters are allowed");
                inputField.value = inputFieldValue.slice(0, -1);
            }
        }
    });
});