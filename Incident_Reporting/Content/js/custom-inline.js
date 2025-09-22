// Moved from inline script in Incident_ReportingKiosk.aspx
// Place all JavaScript code from <script>...</script> blocks here

// CSRF token injection for AJAX requests
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

// ...existing code from other <script> blocks...
// Copy all other inline JS from Incident_ReportingKiosk.aspx here
