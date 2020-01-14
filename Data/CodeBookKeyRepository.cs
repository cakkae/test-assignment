using System.Threading.Tasks;
using OptomFT.Models;

namespace OptomFT.Data
{
    public class CodeBookKeyRepository : ICodeBookKeyRepository
    {
        private readonly DataContext _context;
        public CodeBookKeyRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<CodeBookKey> AddCodeBookKeys(CodeBookKey codeBookKey)
        {
            await _context.CodeBookKeys.AddAsync(codeBookKey);
            await _context.SaveChangesAsync();

            return codeBookKey;
        }
    }
}