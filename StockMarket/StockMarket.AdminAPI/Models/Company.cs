using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Models
{
    [Table("Company")]
    public class Company
    {
        [Key]
        [StringLength(30)]
        public string CompanyCode { get; set; }
        [Required]
        [StringLength(30)]
        public string CompanyName { get; set; }
        [StringLength(30)]
        public float Turnover { get; set; }
        [StringLength(30)]
        public string CEO { get; set; }
        public string BoardofDirectors { get; set; }
        [StringLength(30)]
        public string Sector { get; set; }
        public string StockExs { get; set; }
        [ForeignKey("IPO")]
        public string IPOID { get; set; }
        public string Writeup { get; set; }
    }
}
