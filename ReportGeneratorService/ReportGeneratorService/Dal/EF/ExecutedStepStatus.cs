//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReportGeneratorService.Dal.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class ExecutedStepStatus
    {
        public int ID { get; set; }
        public Nullable<int> ExecutedStepID { get; set; }
        public Nullable<int> IterationNumber { get; set; }
        public string SourcesStepsIDs { get; set; }
        public Nullable<int> StatusID { get; set; }
        public Nullable<System.DateTime> StartedAt { get; set; }
        public Nullable<System.DateTime> EndedAt { get; set; }
        public string Message { get; set; }
    
        public virtual ExecutedStep ExecutedStep { get; set; }
    }
}
