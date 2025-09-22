using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Incident_Reporting.Modal
{
    public class Row
    {
        public string branchid { get; set; }
        public string branchname { get; set; }
        public string branch_display_name { get; set; }
        public string companyid { get; set; }
        public string ward_name { get; set; }
        public string department_name { get; set; }
        public string patient_name { get; set; }
        public string doctor_name { get; set; }
        public string display_name { get; set; }
        public string reporting_to { get; set; }
    }
}