using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.ExcelAPI.Migrations
{
    public partial class AddStockPrice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StockPrices",
                columns: table => new
                {
                    CompanyCode = table.Column<string>(nullable: false),
                    CompanyName = table.Column<string>(nullable: false),
                    PricePerShare = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Time = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StockPrices", x => x.CompanyCode);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StockPrices");
        }
    }
}
