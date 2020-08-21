using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Models
{[Table("IPODetails")]
    public class IPO
    {
        [Key]
        public string IPOID { get; set; }
        public string CompanyName { get; set; }
        public string StockExs { get; set; }
        [Column("Price Per Share")]
        public float PricePerS { get; set; }
        public float TotalShares { get; set; }
        [Column(TypeName ="Date")]
        public DateTime OpenTime { get; set; }
        public string Remarks { get; set; }
    }
}
