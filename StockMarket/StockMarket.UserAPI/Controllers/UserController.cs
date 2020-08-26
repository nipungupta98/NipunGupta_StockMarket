using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Services;

namespace StockMarket.UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserController : ControllerBase
    {
        private IUserService userService;
        public UserController(IUserService service)
        {
            this.userService = service;
        }

        [HttpGet]
        [Route("GetCompany/{CID}")]
        public IActionResult GetCompany(string CID)
        {
            Company company = userService.GetCompany(CID);
            try
            {
                if (company == null)
                    return Content("Invalid company");
                else
                    return Ok(company);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("GetIPO/{IPOID}")]
        public IActionResult GetIPO(string IPOID)
        {
            IPO ipo = userService.GetIPO(IPOID);
            try
            {
                if (ipo == null)
                    return Content("Invalid ipo");
                else
                    return Ok(ipo);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
