using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StockMarket.ExcelAPI.Models;
namespace StockMarket.ExcelAPI.DBAccess
{
    public class StockDBContext:DbContext
    {
        public DbSet<StockPrice> StockPrices { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=socdnet20;Initial Catalog=StockMarketDB;User ID=sa;Password=pass@word1");
        }
    }
}
