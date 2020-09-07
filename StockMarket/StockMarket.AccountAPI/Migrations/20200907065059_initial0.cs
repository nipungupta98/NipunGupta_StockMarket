using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarket.AccountAPI.Migrations
{
    public partial class initial0 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "Confirmed",
                table: "User",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Confirmed",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "User",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
