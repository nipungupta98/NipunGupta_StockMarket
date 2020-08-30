using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AdminAPI.DBAccess;

namespace StockMarket.AdminAPI.Repositories
{
    public class AdminRepository:IAdminRepository
    {
        private StockDBContext dbcontext;
        public AdminRepository(StockDBContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        public void AddCompany(Company company)
        {
            dbcontext.Companies.Add(company);
            dbcontext.SaveChanges();
        }

        public void AddIPO(IPO ipo)
        {
            ipo.IPOID = (dbcontext.IPOs.Count() + 1).ToString();
            dbcontext.IPOs.Add(ipo);
            dbcontext.SaveChanges();
        }

        public void DeleteCompany(string CompanyCode)
        {
            Company company = dbcontext.Companies.Find(CompanyCode);
            dbcontext.Companies.Remove(company);
            dbcontext.SaveChanges();
        }

        public List<Company> GetAllCompanies()
        {
            return dbcontext.Companies.ToList();

        }

        public Company GetCompany(string CID)
        {
            Company company = dbcontext.Companies.Find(CID);
            return company;
        }

        public void UpdateCompany(Company company)
        {
            dbcontext.Companies.Update(company);
            dbcontext.SaveChanges();
        }

        public void UpdateIPO(IPO ipo)
        {
            dbcontext.IPOs.Update(ipo);
            dbcontext.SaveChanges();
        }
        public List<IPO> GetAllIPOs()
        {
            return dbcontext.IPOs.ToList();
        }
    }
}
