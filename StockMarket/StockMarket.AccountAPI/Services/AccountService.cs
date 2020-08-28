using StockMarket.AccountAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Repositories;

namespace StockMarket.AccountAPI.Services
{
    public class AccountService : IAccountService
    {
        private IAccountRepository accountRepository;
        public AccountService(IAccountRepository repo)
        {
            accountRepository = repo;
        }

        public void AddAdmin(User item)
        {
            accountRepository.AddUserAdmin(item);
        }

        public void AddUser(User item)
        {
            accountRepository.AddUser(item);
        }

        public void DeleteUser(string UID)
        {
            accountRepository.DeleteUser(UID);
        }

        public List<User> GetAllUsers()
        {
            return accountRepository.GetAllUsers();
        }

        public User GetUser(string UID)
        {
            return accountRepository.GetUser(UID);
        }

        public void UpdateUser(User item)
        {
            accountRepository.UpdateUser(item);
        }

        public User Validate(string uname, string pwd)
        {
            return accountRepository.Validate(uname, pwd);
        }
    }
}
