using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Incident_Reporting.Modal
{
    public static class API
    {
        public static string CallGetChoices(string Query)
        {
            var options = new RestClientOptions() { };
            var client = new RestClient(options);
            var request = new RestRequest(AppSettings.GetChoices(), Method.Post);
            request.AddHeader("Content-Type", "application/json");
            var body = "{\r\n\"_parameters\": [\r\n{\r\n\"getchoices\": {\r\n\"axpapp\": \"" + AppSettings.GetDbName() + "\",\r\n\"username\": \""+AppSettings.GetUserName()+"\",\r\n\"password\": \""+AppSettings.GetPassWord()+"\",\r\n\"s\": \"\",\r\n\"sql\": \""+Query+"\",\r\n\"params\": []\r\n}\r\n}\r\n]\r\n}";
            request.AddStringBody(body, DataFormat.Json);
            RestResponse response = client.Execute(request);
            return response.Content;
        }
        public static string CallGetChoicesHr(string Query)
        {
            var options = new RestClientOptions() { };
            var client = new RestClient(options);
            var request = new RestRequest(AppSettings.GetChoicesHr(), Method.Post);
            request.AddHeader("Content-Type", "application/json");
            var body = "{\r\n\"_parameters\": [\r\n{\r\n\"getchoices\": {\r\n\"axpapp\": \"" + AppSettings.GetHrDbName() + "\",\r\n\"username\": \"" + AppSettings.GetHrUserName() + "\",\r\n\"password\": \"" + AppSettings.GetHrPassWord() + "\",\r\n\"s\": \"\",\r\n\"sql\": \"" + Query + "\",\r\n\"params\": []\r\n}\r\n}\r\n]\r\n}";
            request.AddStringBody(body, DataFormat.Json);
            RestResponse response = client.Execute(request);
            return response.Content;
        }
    }
}