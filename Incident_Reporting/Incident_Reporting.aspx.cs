using Incident_Reporting.Modal;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Configuration;
using System.Web.Services;

namespace Incident_Reporting
{
    public partial class Incident_ReportingKiosk : System.Web.UI.Page
    {
        public void Page_Load(object sender, EventArgs e)
        {
            lblHospitalName.Text = ConfigurationManager.AppSettings["unit"];
        }

        [WebMethod]
        public static Branch GetBranch()
        {
            string Query = "select Branchid,Branchname,branch_display_name,Companyid from branch where BRANCH_DISPLAY_NAME is not null";
            String response = API.CallGetChoices(Query);
            Branch branch = JsonConvert.DeserializeObject<Branch>(response.ToString());
            return branch;
        }

        [WebMethod]
        public static Ward GetWord()
        {
            string Query = "select WARD_NAME From cm_ward where cancel = 'F' and active = 'T' order by ward_name";
            String response = API.CallGetChoices(Query);
            Ward ward = JsonConvert.DeserializeObject<Ward>(response.ToString());
            return ward;
        }

        [WebMethod]
        public static Department GetDepartment()
        {
            string Query = "select DEPARTMENT_NAME from cm_department where cancel = 'F' and Active = 'T'  order by department_name";
            //string Query = "select DEPARTMENT_NAME from cm_department where cancel = 'F' and Active = 'T' and dept_type = 'Non Clinical' order by department_name";
            String response = API.CallGetChoices(Query);
            Department department = JsonConvert.DeserializeObject<Department>(response.ToString());
            return department;
        }
        [WebMethod]
        public static Search GetSerarchEmpId(string input)
        {
            var branchId = AppSettings.GetBranchId();
            string Query = "select new_empno||'-'||first_name as DISPLAY_NAME ," +
                "REPORTING_TO from profile@dbl_khrmis where working_branch = " + branchId + " and status = '0' and  new_empno like '%" + input + "%'";
            String response = API.CallGetChoicesHr(Query);
            Search search = JsonConvert.DeserializeObject<Search>(response.ToString());
            return search;
        }
        [WebMethod]
        public static Search GetSerarchUhid(string input)
        {
            string Query = "select r.uhid||' '||r.PATIENT_NAME  as PATIENT_NAME,d.doctor_name  From registration r join ip_admission ip on r.uhid = ip.uhid join cm_doctor d on d.cm_doctorid = ip.attending_physician where r.cancel = 'F' and r.uhid like '%" + input + "%'";
            String response = API.CallGetChoices(Query);
            Search search = JsonConvert.DeserializeObject<Search>(response.ToString());
            return search;
        }
        [WebMethod]
        public static string GetDoctor(string doctorname)
        {
            string Query = "select distinct DOCTOR_NAME as doctor from cm_doctor where active = 'T' and lower(doctorname) like lower('%" + doctorname + "%')";
            String response = API.CallGetChoices(Query);
            return response;
        }
        [WebMethod]
        public static string GetDoctorByName(string doctorname)
        {
            string Query = "select DOCTOR_NAME||'-'||cm_doctorid as doctor from cm_doctor where active = 'T' and lower(doctorname) like lower('%" + doctorname + "%')";
            String response = API.CallGetChoices(Query);
            return response;
        }
        [WebMethod]
        public static string GetPatientIpOpEr(string ipoper)
        {
            string Query = "select ip.ip_no||'-'||ip.patient_name as ip_no,trim(d.DRSALUTE) || '' || trim(d.DOCTORNAME) doctorname from ip_admission ip join cm_doctor d on ip.attending_physician = d.cm_doctorid where ip.discharge_date is null and ip.cancel = 'F' and lower(ip.ip_no) like lower('%" + ipoper + "%') " +
                           "union " +
                           "select op_no||'-'||PATIENT_NAME as ip_no,trim(d.DRSALUTE) || '' || trim(d.DOCTORNAME) doctorname from visit_entry ve join cm_doctor d on ve.attending_physician = d.cm_doctorid where ve.cancel = 'F' and trunc(REGISTRATION_DATE) = trunc(sysdate) and lower(op_no) like lower('%" + ipoper + "%') " +
                           "union " +
                           "select er.ip_no||'-'||er.patient_name as ip_no,trim(d.DRSALUTE) || '' || trim(d.DOCTORNAME) doctorname From er_admission er join cm_doctor d on er.attending_physician = d.cm_doctorid where er.cancel = 'F' and er.discharge_date is null and lower(er.ip_no) like lower('%" + ipoper + "%')";

            String response = API.CallGetChoices(Query);
            return response;
        }

        [WebMethod]
        public static RestResponse SaveIncident(DateTime incident_date, string reportedby, string mobileno, string empid,
        string doc, string others_name, string others_mblno, string ward, string location, string other_ward_dep, string opno, string type,
        string involver, string patient_name, string involved_docname, string involved_empid
        , string reporting_to, string attender, string visitor, string involved_othersname, string occupation, string attending_physician, string incident)
        {
            RestResponse ss = new RestResponse();

            if (reportedby == "Others")
            {
                string Query = $"SELECT count(*) as coun FROM incident_entry WHERE username = 'webuser' AND reportby = '{reportedby}' AND mobileno = '{mobileno}' and trunc(createdon) = trunc(sysdate)";

                String responses = API.CallGetChoices(Query);
                Root s = JsonConvert.DeserializeObject<Root>(responses.ToString());
                string value = s.result[0].result.row[0].coun;
                if(int.Parse(value) > 2)
                {
                    ss.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    ss.Content = "With this mobile number you should not entry more then two time";
                    return ss;
                }
            }
            var options = new RestClientOptions() { };
            var client = new RestClient(options);
            var request = new RestRequest(AppSettings.GetSaveData(), Method.Post);
            request.AddHeader("Content-Type", "application/json");
            var body = "{\r\n\"_parameters\": [\r\n {\r\n\"savedata\": {\r\n\"axpapp\": \"" + AppSettings.GetDbName() + "\"," +
                                             "\r\n\"changedrows\": {},\r\n\"username\": \"" + AppSettings.GetUserName() + "\",\r\n\"password\": \"" + AppSettings.GetPassWord() + "\",\r\n\"transid\": \"incdd\",\r\n\"recordid\": \"0\",\r\n" +
                                             "\"trace\": \"t\",\r\n\"recdata\": [\r\n{\r\n\"axp_recid1\": [\r\n{\r\n\"rowno\": \"001\",\r\n\"text\": \"0\",\r\n\"columns\": {\r\n\"INCIDENT_DATE\": \"" + incident_date.ToString("dd/MM/yyyy") + "\",\r\n\"TYPE\": \"" + type + "\"," +
                                             "\r\n\n\"ward\":\"" + ward + "\",\r\n\"LOCATION\":\"" + location + "\",\r\n\"OTHER_DEPT_WARD\":\"" + other_ward_dep + "\",\r\n\"IS_EQUIPMENT\": \"\",\r\n\"INCIDENT\": \"" + incident + "\",\r\n\"REPORTBY\":\"" + reportedby + "\"," +
                                             "\r\n\"INVOLEDBY\":\"" + involver + "\",\r\n\"OPIPNO\":\"" + opno + "\",\r\n\"MOBILENO\":\"" + mobileno + "\",\r\n\"HDN_EMPID\":\"" + empid + "\",\r\n\"DOCTORNAME\":\"" + doc + "\"," +
                                             "\r\n\"OTHERSNAME\":\"" + others_name + "\",\r\n\"PAT_DETAILS\":\"" + patient_name + "\",\r\n\"ATTENDER\":\"" + attender + "\",\r\n\"VISITOR\":\"" + visitor + "\"," +
                                             "\r\n\"INVOLE_MOBILENO\":\"" + others_mblno + "\",\r\n\"HDN_INVOLE_EMPID\":\"" + involved_empid + "\",\r\n\"OCCUPATION\":\"" + occupation + "\",\r\n\"INVOLE_HOD\":\"" + reporting_to + "\",\r\n\"INVOLE_DOCTORNAME\":\"" + involved_docname + "\",\r\n\"INVOLE_OTHERSNAME\":\"" + involved_othersname + "\"," +
                                             "\r\n\"attending_physician\":\"" + attending_physician + "\"\r\n}\r\n}\r\n]\r\n}\r\n],\r\n\"afiles\": \"\",\r\n\"attachmode\": \"\",\r\n                \"params\": []\r\n            }\r\n        }\r\n    ]\r\n}";
            request.AddStringBody(body, DataFormat.Json);
            RestResponse response = client.Execute(request);

            return response;
        }

    }
}