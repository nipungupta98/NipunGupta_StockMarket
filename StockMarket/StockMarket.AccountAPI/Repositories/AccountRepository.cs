using StockMarket.AccountAPI.DBAccess;
using StockMarket.AccountAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AccountAPI.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private StockDBContext dbcontext;
        public AccountRepository(StockDBContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        public void AddUser(User item)
        {
            int len = dbcontext.Users.Count();
            item.UserID = (len + 1).ToString();
            item.Confirmed = "User";
            dbcontext.Users.Add(item);
            dbcontext.SaveChanges();
        }

        public void AddUserAdmin(User item)
        {
            int len = dbcontext.Users.Count();
            item.UserID = (len + 1).ToString();
            item.Confirmed = "Admin";
            dbcontext.Users.Add(item);
            dbcontext.SaveChanges();
        }

        public void DeleteUser(string UID)
        {
            User user = dbcontext.Users.Find(UID);
            dbcontext.Users.Remove(user);
            dbcontext.SaveChanges();
        }

        public List<User> GetAllUsers()
        {
            return dbcontext.Users.ToList();
        }

        public User GetUser(string UID)
        {
            User user = dbcontext.Users.Find(UID);
            return user;
        }

        public void UpdateUser(User item)
        {
            dbcontext.Users.Update(item);
            dbcontext.SaveChanges();
        }

        public User Validate(string uname, string pwd)
        {
            User user = dbcontext.Users.SingleOrDefault(i => i.Username == uname && i.Password == pwd);
            return user;
        }
    }
}