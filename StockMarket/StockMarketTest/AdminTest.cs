using System;
using System.Collections.Generic;
using StockMarket.AdminAPI.DBAccess;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Repositories;
using Xunit;

namespace StockMarketTest
{
    public class AdminTest
    {
        private readonly AdminRepository repo;
        public AdminTest()
        {
            repo = new AdminRepository(new StockDBContext());
        }

        [Fact]
        public void TestAddCompany()
        {
            Company company = new Company() { CompanyCode = "10002", CompanyName = "qwert", StockExs = "NYSE", Sector = "IT" };
            repo.AddCompany(company);
            Company testcompany = repo.GetCompany("10002");

            Assert.NotNull(testcompany);
            Assert.Equal("01", testcompany.CompanyCode);
        }

        [Fact]
        public void TestGetAllCompanies()
        {
            List<Company> companies = new List<Company>();

            companies = repo.GetAllCompanies();

            Assert.NotNull(companies);

        }

        [Fact]
        public void TestAddGetIPO()
        {
            IPO ipo = new IPO { IPOID = "01", CompanyName = "AAPL", PricePerS = 200, TotalShares = 150 };

            repo.AddIPO(ipo);
            List<IPO> testipo = repo.GetAllIPOs();

            Assert.NotNull(testipo);
        }
    }
}