using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Incident_Reporting.Modal
{
    public class Result
    {
        public Result result { get; set; }
        public List<Row> row { get; set; }
        public Error error { get; set; }

    }
}