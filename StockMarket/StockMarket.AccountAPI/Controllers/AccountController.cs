using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Repositories;
using StockMarket.AccountAPI.Services;
using StockMarket.AccountAPI.Models;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Net;
using System.Net.Mail;

namespace StockMarket.AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService accountservice;
        private readonly IConfiguration configuration;
        public AccountController(IAccountService accountservice, IConfiguration configuration)
        {
            this.accountservice = accountservice;
            this.configuration = configuration;

        }
        [HttpGet]
        [Route("ValidateUser/{uname}/{pwd}")]
        public IActionResult ValidateUser(string uname, string pwd)
        {

            User user = accountservice.Validate(uname, pwd);
            try
            {
                if (user == null || user.Confirmed!="User")
                {
                    return Content("Invalid user");
                }
                else
                    return Ok(generateJWToken(uname));
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpGet]
        [Route("ValidateAdmin/{uname}/{pwd}")]
        public IActionResult ValidateAdmin(string uname, string pwd)
        {

            User user = accountservice.Validate(uname, pwd);
            try
            {
                if (user == null || user.Confirmed!= "Admin")
                {
                    return Content("Invalid user");
                }
                else
                    return Ok(generateJWToken(uname));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        public Token generateJWToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                Username = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return response;
        }
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(User item)
        {
            try
            {
                accountservice.AddUser(item);
                SendEmailConfirmation(item.Email, item.Username);
                return Ok(generateJWToken(item.Username));
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpPost]
        [Route("AddAdmin")]
        public IActionResult AddAdmin(User item)
        {
            try
            {
                accountservice.AddAdmin(item);
                SendEmailConfirmation(item.Email, item.Username);
                return Ok(generateJWToken(item.Username));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        public void SendEmailConfirmation(string email, string uname)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();

                //Enter your email id
                string FromEmail = "email@gmail.com";

                message.From = new MailAddress(FromEmail);
                message.To.Add(email);
                message.Subject = "Greetings!! Confirmation mail.";
                message.Body = "Thank you for registering \n" +
                    "Your username: " + uname + "\n" + "Have a nice day!!";
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                //Enter password for email account
                smtp.Credentials = new NetworkCredential(FromEmail, "password");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception) { }
        }

        [HttpDelete]
        [Route("DeleteUser/{UID: string}")]
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