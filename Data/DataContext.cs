using Microsoft.EntityFrameworkCore;
using OptomFT.Models;

namespace OptomFT.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<CodeBook> CodeBook { get; set; }
        public DbSet<CodeBookKey> CodeBookKeys { get; set; }

    }
}