<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Incident_Reporting.aspx.cs" Inherits="Incident_Reporting.Incident_ReportingKiosk" EnableViewStateMac="true" ViewStateEncryptionMode="Always" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Security-Policy" content="script-src 'self',object-src 'none', base-uri 'self'" />
    <title>Incident Reporting</title>
    <link href="Content/css/Tabler.css" rel="stylesheet" />
    <link href="Content/fontawesome-free-6.5.1-web/css/all.min.css" rel="stylesheet" />
    <link href="Content/Date_Picker/css/flatpickr.min.css" rel="stylesheet" />
    <link href="Content/css/custom.css" rel="stylesheet" />
    <script src="Content/js/TablerJs.js"></script>
    <script src="Content/Date_Picker/js/flatpickr.js"></script>
    <script src="Content/js/jquery-3.6.4.min.js"></script>
    <script src="Validation/scriptvalid.js"></script>
    <script src="Scripts/Script.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:HiddenField ID="__RequestVerificationToken" runat="server" />
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
                                <div class="row mobmyselfhide">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <label class="form-label fw-bold">Hospital Name<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group">
                                                    <asp:Label ID="lblHospitalName" runat="server" Text='<%# Server.HtmlEncode((Eval("HospitalName") ?? "").ToString()) %>' CssClass="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mt-3 mb-1 mobmyselfhide">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <label class="form-label">Incident Reporting Date & Time</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-icon">
                                                    <div id="DATETIME" placeholder="dd-mm-yy" class="form-control disabled-color" value="17-Sep-24 12:00 PM" readonly="readonly" disabled="disabled"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-3 mb-1">
                                        <div class="row desktop-picker d-flex">
                                            <div class="col-md-6">
                                                <label class="form-label">Incident Occurrence Date & Time<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-icon incident">
                                                    <input type="text" placeholder="dd-mm-yy" class="form-control datapicker clearbox" id="incidentdate" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mob-picker d-none">
                                            <div class="col-md-6">
                                                <label class="form-label">Incident Occurrence Date<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-icon incidentm">
                                                    <input type="text" placeholder="dd-mm-yy" class="form-control datapickerMob clearbox" id="incidentMbldate" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mob-picker d-none">
                                            <div class="col-md-6">
                                                <label class="form-label">Incident Occurrence Time<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-icon incidentm">
                                                    <input type="text" placeholder="HH:MM" class="form-control TimePickerMob clearbox" id="incidentmbltime" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card my-1">
                            <div class="card-body py-0">
                                <div class="my-2">
                                    <div class="row Menutitle-border justify-content-between">
                                        <div class="col-auto p-0 position-relative">
                                            <div class="text-white Menutitle d-flex p-1 px-3 rounded-top edit">
                                                <h4 class="ms-2 mt-1">WHO IS REPORTING?</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-3 margctrl mobmyselfhide">
                                            <div class="radio-inputs">
                                                <label class="empids radio">
                                                    <input id="empid" type="radio" value="Employee" name="ReportorType" checked="checked" />
                                                    <span class="name"><i class="fa-solid fa-check me-2 checkicon"></i>Employee</span>
                                                </label>
                                                <label class="uhid radio">
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
                                    <div class="my-3 mob-marless row justify-content-around">
                                        <div class="col-md-4 align-self-center">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="ReportorTypeclick">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <label class="form-label ms-1">Employee ID<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                                <div class="input-group empidname">
                                                                    <input id="value" type="text" class="form-control Filter clearbox empid" placeholder="Enter the Employee ID" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off" />
                                                                    <span class="input-group-text dropdown-toggle dropdown-toggle-show searchdropdown" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                                    <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas search">
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 align-self-end mobmyselfhide">
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
                                        <div class="col-md-4 align-self-center">
                                            <div class="row">
                                                <div class="col-md-10 mcus-top-3">
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
                                                        <input id="wards" type="text" class="form-control dropdown-toggle Filter clearbox" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off" />
                                                        <span id="incidenttype" class="input-group-text dropdown-toggle dropdown-toggle-show" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                        <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas ward">
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                                             <div class="col-md-3 align-self-center incidentype">
                                            <label class="form-label ms-1">Incident Type<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                            <select id="type" class="form-control">
                                                <option value="select">--- Select ---</option>
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
                        <div class="card my-1">
                            <div class="card-body py-0">
                                <div class="my-2">
                                    <div class="row Menutitle-border justify-content-between">
                                        <div class="col-auto p-0 position-relative">
                                            <div class="text-white Menutitle d-flex p-1 px-3 rounded-top edit">
                                                <h4 class="ms-2 mt-1">WHO WAS INVOLVED?</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6 margctrl align-self-center">
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
                                                <label class="radio docradio">
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

                                    <div class="col Inovolver-menu">
                                        <div class="row">
                                            <div class="my-3 mob-marless row justify-content-between">
                                                <div class="col-md-4 InvolvedOther-first">
                                                    <label class="form-label">IP/OP/ER<i class="fa-solid fa-star-of-life ms-2 fw-bold text-red fa-2xs"></i></label>
                                                    <div class="input-group removevalid-ip">
                                                        <input id="ipopervalue" oninput="validateIP()" type="text" class="form-control Filter clearbox" placeholder="Enter the IP/OP/ER" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off" />
                                                        <a class="btn btn-pink mx-2" id="ipopersearch">
                                                            <span class="searchspinners spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                                                            Search
                                                        </a>

                                                        <ul class="dropdown-menu mt-5 custom-w-h Dropdown-Datas IPOP">
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label ms-1 mobtop-3">Name</label>
                                                    <input id="patientname" type="text" class="form-control clearbox" disabled="disabled" />
                                                </div>
                                                <div class="col-md-4 InvolvedOther-sec">
                                                    <label class="form-label mobtop-3">Attending Physician</label>
                                                    <input id="physicianname" type="text" class="form-control clearbox" disabled="disabled" />
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
                                    <div class="row py-3">
                                        <div class="col  removeval-rem">
                                            <textarea class="form-control clearbox" data-bs-toggle="autosize" id="Remarks" maxlength="1500" name="" placeholder="Type something…"></textarea>
                                        </div>
                                        <div class="character-count" id="charCount">Remaining characters: 1500</div>
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
                                        <button id="allsumit" type="button" class="btn btn-pink"">
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Alert Message</h1>
                    </div>
                    <div class="modal-body">
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
