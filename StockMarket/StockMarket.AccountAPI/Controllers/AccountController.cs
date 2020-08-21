using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Repositories;
using StockMarket.AccountAPI.Services;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService accountservice;
        public AccountController(IAccountService accountservice)
        {
            this.accountservice = accountservice;
        }
        [HttpGet]
        [Route("Validate/{uname}/{pwd}")]
        public IActionResult Validate(string uname, string pwd)
        {

            User user = accountservice.Validate(uname, pwd);
            try
            {
                if (user == null)
                {
                    return Content("Invalid user");
                }
                else
                    return Ok(user);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(User item)
        {
            try
            {
                accountservice.AddUser(item);
                return Ok();
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteUser/{UID}")]
        public IActionResult DeleteUser(string UID)
        {
            accountservice.DeleteUser(UID);
            return Ok("Record Delete");
        }
        [HttpGet]
        [Route("GetUser/{UID}")]
        public IActionResult GetUser(string UID)
        {
            User user = accountservice.GetUser(UID);
            return Ok(user);
        }
        [HttpGet]
        [Route("GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            List<User> users = accountservice.GetAllUsers();
            return Ok(users);
        }
        [HttpPost]
        [Route("UpdateUser")]
        public IActionResult UpdateUser(User user)
        {
            accountservice.UpdateUser(user);
            return Ok("User Updated");
        }
    }
}
