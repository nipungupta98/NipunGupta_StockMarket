using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AdminAPI.Services;
using StockMarket.AdminAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace StockMarket.AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AdminController : ControllerBase
    {
        private IAdminService adminservice;
        public AdminController(IAdminService adminservice)
        {
            this.adminservice = adminservice;
        }
        [HttpPost]
        [Route("AddCompany")]
        public IActionResult AddCompany(Company item)
        {
            try
            {
                adminservice.AddCompany(item);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCompany/{CompanyCode}")]
        public IActionResult DeleteCompany(string CompanyCode)
        {
            adminservice.DeleteCompany(CompanyCode);
            return Ok("Record Delete");
        }
        [HttpGet]
        [Route("GetCompany/{CID}")]
        public IActionResult GetCompany(string CID)
        {
            Company company = adminservice.GetCompany(CID);
            return Ok(company);
        }
        [HttpGet]
        [Route("GetAllCompanies")]
        public IActionResult GetAllCompanies()
        {
            List<Company> company = adminservice.GetAllCompanies();
            return Ok(company);
        }
        [HttpPut]
        [Route("UpdateCompany")]
        public IActionResult UpdateCompany(Company company)
        {
            adminservice.UpdateCompany(company);
            return Ok("Company Updated");
        }
        [HttpPost]
        [Route("AddIPO")]
        public IActionResult AddIPO(IPO ipo)
        {
            try
            {
                adminservice.AddIPO(ipo);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateIPO")]
        public IActionResult UpdateIPO(IPO ipo)
        {
            adminservice.UpdateIPO(ipo);
            return Ok("IPO updated");
        }

        [HttpGet]
        [Route("GetAllIPOs")]
        public IActionResult GetAllIPOs()
        {
            List<IPO> IPOs = adminservice.GetIPOs();
            return Ok(IPOs);
        }
    }
}