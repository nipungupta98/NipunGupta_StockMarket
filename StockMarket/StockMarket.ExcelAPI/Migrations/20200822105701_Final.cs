using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.ExcelAPI.Migrations
{
    public partial class Final : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StockPrices",
                table: "StockPrices");

            migrationBuilder.DropColumn(
                name: "CompanyID",
                table: "StockPrices");

            migrationBuilder.AddColumn<string>(
                name: "DataID",
                table: "StockPrices",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CompanyCode",
                table: "StockPrices",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StockPrices",
                table: "StockPrices",
                column: "DataID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StockPrices",
                table: "StockPrices");

            migrationBuilder.DropColumn(
                name: "DataID",
                table: "StockPrices");

            migrationBuilder.DropColumn(
                name: "CompanyCode",
                table: "StockPrices");

            migrationBuilder.AddColumn<string>(
                name: "CompanyID",
                table: "StockPrices",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StockPrices",
                table: "StockPrices",
                column: "CompanyID");
        }
    }
}
