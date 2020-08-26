using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelAPI.Models
{
    public class StockPrice
    {
        [Key]
        public string DataID { get; set; }
        [Required]
        public string CompanyCode { get; set; }
        [Required]
        public string CompanyName { get; set; }
        public string PricePerShare { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
    }
}