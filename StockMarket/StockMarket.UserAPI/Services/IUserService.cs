using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    public interface IUserService
    {
        Company GetCompany(string CID);
        IPO GetIPO(string IPOID);
    }
}
