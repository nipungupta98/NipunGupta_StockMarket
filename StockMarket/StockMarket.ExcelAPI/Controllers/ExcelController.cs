using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using StockMarket.ExcelAPI.DBAccess;
using StockMarket.ExcelAPI.Models;

namespace StockMarket.ExcelAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ExcelController : ControllerBase
    {
        StockDBContext _db = new StockDBContext();
        [HttpGet]
        [Route("ImportStock/{*filepath}")]
        public IList<StockPrice> ImportStock(string filepath)
        {
            FileInfo file = new FileInfo(filepath);
            string filename = file.Name;
            using (ExcelPackage package = new ExcelPackage(file))
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets["Sheet1"];
                int TotalRows = worksheet.Dimension.Rows;
                StockPrice stockPrice = new StockPrice();
                int len = _db.StockPrices.ToList().Count();

                for(int i = 2;i<=TotalRows;i++)
                {
                    stockPrice = new StockPrice
                    {
                        DataID = (i - 1).ToString() + worksheet.Cells[i, 1].Value.ToString().Trim(),
                        CompanyCode = worksheet.Cells[i, 1].Value.ToString().Trim(),
                        CompanyName = worksheet.Cells[i, 2].Value.ToString().Trim(),
                        PricePerShare = worksheet.Cells[i, 3].Value.ToString().Trim(),
                        Date = DateTime.Parse(worksheet.Cells[i, 4].Value.ToString().Trim()),
                        Time = worksheet.Cells[i, 5].Value.ToString().Trim()
                    };

                    if (_db.StockPrices.Contains(stockPrice))
                        continue;
                
                    _db.StockPrices.Add(stockPrice);
                }
                 _db.SaveChanges();

                return _db.StockPrices.ToList();
            }
        }
        [HttpGet]
        [Route("GetData")]
        public IList<StockPrice> GetData()
        {
            return _db.StockPrices.ToList();
        }

        [HttpDelete]
        [Route("Clear")]
        public IActionResult ClearStocks()
        {
            List<string> ids = new List<string>();
            foreach(StockPrice data in _db.StockPrices)
            {
                _db.StockPrices.Remove(data);
            }

            _db.SaveChanges();
            return Ok("Data cleared");
        }
        [HttpGet]
        [Route("GetChartData/{companyID}")]
        public IActionResult GetChartData(string companyID)
        {
            List<StockPrice> StockPriceData = _db.StockPrices.ToList();

            List<float> ChartData = new List<float>();

            foreach(StockPrice data in StockPriceData)
            {
                if(data.CompanyCode == companyID)
                {
                    ChartData.Add(float.Parse(data.PricePerShare));
                }
            }
            if (ChartData.Count() == 0)
            {
                throw new Exception("Enter valid CompanyID");
            }

            return Ok(ChartData);
        }

        [HttpGet]
        [Route("GetChartTime/{companyID}")]
        public IActionResult GetChartTime(string companyID)
        {
            List<StockPrice> StockPriceData = _db.StockPrices.ToList();

            List<string> ChartTimes = new List<string>();

            foreach (StockPrice data in StockPriceData)
            {
                if (data.CompanyCode == companyID)
                {
                    ChartTimes.Add(data.Time);
                }
            }
            if (ChartTimes.Count() == 0)
            {
                throw new Exception("Enter valid CompanyID");
            }

            return Ok(ChartTimes);
        }
    }
}