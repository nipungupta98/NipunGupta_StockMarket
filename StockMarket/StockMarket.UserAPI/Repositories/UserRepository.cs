using StockMarket.UserAPI.DBAccess;
using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private StockDBContext dbcontext;
        public UserRepository(StockDBContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        public Company GetCompany(string CID)
        {
            return dbcontext.Companies.Find(CID);
        }

        public IPO GetIPO(string IPOID)
        {
            return dbcontext.IPOs.Find(IPOID);
        }
    }
}
