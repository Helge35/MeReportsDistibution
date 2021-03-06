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
    
    public partial class MissionPlan
    {
        public MissionPlan()
        {
            this.ExecutedMissions = new HashSet<ExecutedMission>();
            this.Steps = new HashSet<Step>();
        }
    
        public int ID { get; set; }
        public string Title { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> CreateBy { get; set; }
        public Nullable<bool> IsSubMission { get; set; }
        public Nullable<int> InstrumentTypeID { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    
        public virtual ICollection<ExecutedMission> ExecutedMissions { get; set; }
        public virtual ICollection<Step> Steps { get; set; }
    }
}
