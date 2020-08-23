using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AdminAPI.Repositories;

namespace StockMarket.AdminAPI.Services
{
    public class AdminService : IAdminService
    {
        private IAdminRepository AdminRepo;
        public AdminService(IAdminRepository repo)
        {
            this.AdminRepo = repo;
        }

        public void AddCompany(Company company)
        {
            AdminRepo.AddCompany(company);
        }

        public void AddIPO(IPO ipo)
        {
            AdminRepo.AddIPO(ipo);
        }

        public void DeleteCompany(string CID)
        {
            AdminRepo.DeleteCompany(CID);
        }

        public List<Company> GetAllCompanies()
        {
            return AdminRepo.GetAllCompanies();
        }

        public Company GetCompany(string CID)
        {
            return AdminRepo.GetCompany(CID);
        }

        public void UpdateCompany(Company company)
        {
            AdminRepo.UpdateCompany(company);
        }

        public void UpdateIPO(IPO ipo)
        {
            AdminRepo.UpdateIPO(ipo);
        }
    }
}
