using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Repositories
{
    public interface IAccountRepository
    {
        void AddUser(User item);
        User Validate(string uname, string pwd);
        User GetUser(string UID);
        List<User> GetAllUsers();
        void DeleteUser(string UID);
        void UpdateUser(User item);
    }
}