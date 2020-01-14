using Microsoft.EntityFrameworkCore.Migrations;

namespace OptomFT.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CodeBook",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CodeBookName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodeBook", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CodeBookKeys",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CodeBookKeyId = table.Column<int>(nullable: false),
                    CodeBookId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodeBookKeys", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CodeBookKeys_CodeBook_CodeBookId",
                        column: x => x.CodeBookId,
                        principalTable: "CodeBook",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodeBookKeys_CodeBookId",
                table: "CodeBookKeys",
                column: "CodeBookId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodeBookKeys");

            migrationBuilder.DropTable(
                name: "CodeBook");
        }
    }
}
