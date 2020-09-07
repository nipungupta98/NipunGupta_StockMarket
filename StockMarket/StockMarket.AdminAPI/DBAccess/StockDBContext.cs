using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StockMarket.AdminAPI.Models;
namespace StockMarket.AdminAPI.DBAccess
{
    public class StockDBContext:DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<IPO> IPOs { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost,1433; Database=stockMarketDB;User=sa; Password=pass@word1");
        }
    }
}
