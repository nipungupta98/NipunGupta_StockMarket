using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.UserAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    CompanyCode = table.Column<string>(maxLength: 30, nullable: false),
                    CompanyName = table.Column<string>(maxLength: 30, nullable: false),
                    Turnover = table.Column<string>(maxLength: 30, nullable: true),
                    CEO = table.Column<string>(maxLength: 30, nullable: true),
                    BoardofDirectors = table.Column<string>(nullable: true),
                    Sector = table.Column<string>(maxLength: 30, nullable: true),
                    StockExs = table.Column<string>(nullable: true),
                    IPOID = table.Column<string>(nullable: true),
                    Writeup = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.CompanyCode);
                });

            migrationBuilder.CreateTable(
                name: "IPODetails",
                columns: table => new
                {
                    IPOID = table.Column<string>(nullable: false),
                    CompanyName = table.Column<string>(nullable: true),
                    StockExs = table.Column<string>(nullable: true),
                    PricePerShare = table.Column<float>(name: "Price Per Share", nullable: false),
                    TotalShares = table.Column<float>(nullable: false),
                    OpenTime = table.Column<DateTime>(type: "Date", nullable: false),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IPODetails", x => x.IPOID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.DropTable(
                name: "IPODetails");
        }
    }
}
