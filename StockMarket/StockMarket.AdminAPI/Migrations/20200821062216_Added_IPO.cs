using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.AdminAPI.Migrations
{
    public partial class Added_IPO : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IPOID",
                table: "Company",
                nullable: true);

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
                name: "IPODetails");

            migrationBuilder.DropColumn(
                name: "IPOID",
                table: "Company");
        }
    }
}
