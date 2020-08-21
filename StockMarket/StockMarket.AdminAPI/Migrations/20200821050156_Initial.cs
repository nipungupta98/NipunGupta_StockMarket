using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.AdminAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    CompanyCode = table.Column<string>(maxLength: 30, nullable: false),
                    CompanyName = table.Column<string>(maxLength: 30, nullable: false),
                    Turnover = table.Column<float>(maxLength: 30, nullable: false),
                    CEO = table.Column<string>(maxLength: 30, nullable: true),
                    BoardofDirectors = table.Column<string>(nullable: true),
                    Sector = table.Column<string>(maxLength: 30, nullable: true),
                    StockExs = table.Column<string>(nullable: true),
                    Writeup = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.CompanyCode);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Company");
        }
    }
}
