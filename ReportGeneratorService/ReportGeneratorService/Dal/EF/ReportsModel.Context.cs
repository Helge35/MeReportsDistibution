﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ReportsDBEntities : DbContext
    {
        public ReportsDBEntities()
            : base("name=ReportsDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<ExecutedMission> ExecutedMissions { get; set; }
        public DbSet<ExecutedStep> ExecutedSteps { get; set; }
        public DbSet<ExecutedStepStatus> ExecutedStepStatuses { get; set; }
        public DbSet<MissionPlan> MissionPlans { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<StepType> StepTypes { get; set; }
    }
}