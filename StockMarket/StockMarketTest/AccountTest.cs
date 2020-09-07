using System;
using System.Collections.Generic;
using StockMarket.AccountAPI.DBAccess;
using StockMarket.AccountAPI.Models;
using StockMarket.AccountAPI.Repositories;
using Xunit;

namespace StockMarketTest
{
    public class AccountTest
    { 
        private readonly AccountRepository repo;
        public AccountTest() {
            repo = new AccountRepository(new StockDBContext());
        }

        [Fact]
        public void TestAddUser()
        {
            User user = new User() { UserID = "10002", Password = "12345", Username = "user100", Email = "qwertyu@qwer", Confirmed = "User" };
            repo.AddUser(user);
            User testuser = repo.GetUser("10002");

            Assert.Equal("10002", testuser.UserID);
        }

        [Fact]
        public void TestGetAllUsers()
        {
            List<User> users = new List<User>();

            users = repo.GetAllUsers();

            Assert.NotNull(users);

        }
    }
}