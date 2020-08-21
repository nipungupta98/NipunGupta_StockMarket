using System;
using System.Collections.Generic;
using System.Linq;
using StockMarket.AccountAPI.Models;
using System.Threading.Tasks;

namespace StockMarket.AccountAPI.Services
{
    public interface IAccountService
    {
        void AddUser(User item);
        User Validate(string uname, string pwd);
        User GetUser(string UID);
        List<User> GetAllUsers();
        void DeleteUser(string UID);
        void UpdateUser(User item);
    }
}