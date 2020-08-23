using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    public class UserService : IUserService
    {
        private IUserRepository userRepository; 
        public UserService(IUserRepository repo)
        {
            userRepository = repo;
        }
        public Company GetCompany(string CID)
        {
            return userRepository.GetCompany(CID);
        }

        public IPO GetIPO(string IPOID)
        {
            return userRepository.GetIPO(IPOID);
        }
    }
}
