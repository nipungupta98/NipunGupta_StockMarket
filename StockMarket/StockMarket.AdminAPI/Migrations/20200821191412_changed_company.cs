using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.AdminAPI.Migrations
{
    public partial class changed_company : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Turnover",
                table: "Company",
                maxLength: 30,
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real",
                oldMaxLength: 30);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Turnover",
                table: "Company",
                type: "real",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 30,
                oldNullable: true);
        }
    }
}
