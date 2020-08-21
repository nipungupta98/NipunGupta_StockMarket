﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AdminAPI.Models;

namespace StockMarket.AdminAPI.Services
{
    public interface IAdminService
    {
        void AddCompany(Company company);
        Company GetCompany(string CID);
        List<Company> GetAllCompanies();
        void DeleteCompany(string CID);
        void UpdateCompany(Company company);
        void UpdateIPO(IPO ipo);
    }
}