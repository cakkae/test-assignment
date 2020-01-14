using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OptomFT.Data;
using OptomFT.Models;

namespace OptomFT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CodeBookController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ICodeBookRepository _codeBookRepo;
        private readonly ICodeBookKeyRepository _codeBookKeyRepo;
        public CodeBookController(DataContext context, ICodeBookRepository codeBookRepo, ICodeBookKeyRepository codeBookKeyRepo)
        {
            _codeBookKeyRepo = codeBookKeyRepo;
            _codeBookRepo = codeBookRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetCodeBook()
        {
            var values = await _context.CodeBook.ToArrayAsync();
            var keys = await _context.CodeBookKeys.ToArrayAsync();
            return Ok(values);
        }

        [HttpPost("addCodeBook")]
        public async Task<IActionResult> AddCodeBook(CodeBook codeBook)
        {
            var codeBookCreate = new CodeBook
            {
                CodeBookName = codeBook.CodeBookName
            };

            var createdCodeBook = await _codeBookRepo.AddCodeBook(codeBookCreate);

            var codeBookKeyCreate = new CodeBookKey
            {
                CodeBookKeyId = codeBook.Id,
                CodeBookId = createdCodeBook.Id
            };

            var createdCodeBookKey = await _codeBookKeyRepo.AddCodeBookKeys(codeBookKeyCreate);
            return Ok(createdCodeBookKey);
        }
    }
}