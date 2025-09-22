using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Incident_Reporting.Modal
{
    public static class AppSettings
    {
        public static string GetUserName() => System.Web.Configuration.WebConfigurationManager.AppSettings["username"];
        public static string GetPassWord() => System.Web.Configuration.WebConfigurationManager.AppSettings["password"];
        public static string GetDbName() => System.Web.Configuration.WebConfigurationManager.AppSettings["dbname"];
        public static string GetChoices() => System.Web.Configuration.WebConfigurationManager.AppSettings["getchoices"];
        public static string GetSaveData() => System.Web.Configuration.WebConfigurationManager.AppSettings["savedata"];
        public static string GetHrUserName() => System.Web.Configuration.WebConfigurationManager.AppSettings["hr_username"];
        public static string GetHrPassWord() => System.Web.Configuration.WebConfigurationManager.AppSettings["hr_password"];
        public static string GetHrDbName() => System.Web.Configuration.WebConfigurationManager.AppSettings["hr_dbname"];
        public static string GetChoicesHr() => System.Web.Configuration.WebConfigurationManager.AppSettings["hr_getchoices"];
        public static string GetBranchId() => System.Web.Configuration.WebConfigurationManager.AppSettings["branchId"];
    }
}