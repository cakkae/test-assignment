using System.Threading.Tasks;
using OptomFT.Models;

namespace OptomFT.Data
{
    public class CodeBookRepository : ICodeBookRepository
    {
        private readonly DataContext _context;

        public CodeBookRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<CodeBook> AddCodeBook(CodeBook codeBook)
        {
            await _context.CodeBook.AddAsync(codeBook);
            await _context.SaveChangesAsync();

            return codeBook;
        }
    }
}