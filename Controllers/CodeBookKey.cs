using System.Linq;
using System.Threading.Tasks;
using global::OptomFT.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OptomFT.Models;

namespace OptomFT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CodeBookKeyController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ICodeBookKeyRepository _repo;
        public CodeBookKeyController(DataContext context, ICodeBookKeyRepository repo)
        {
            _repo = repo;
            _context = context;
        }

        [HttpPost("addCodeBookKey")]
        public async Task<IActionResult> AddCodeBookKey(CodeBookKey codeBookKey)
        {
            var codeBookKeyCreate = new CodeBookKey
            {
                CodeBookKeyId = codeBookKey.CodeBookKeyId,
                CodeBookId = codeBookKey.CodeBookId
            };

            var createdCodeBook = await _repo.AddCodeBookKeys(codeBookKeyCreate);
            return StatusCode(201);
        }

        [HttpGet("{parent?}")]
        public async Task<IActionResult> GetCodeBookKeys(int parent = 0)
        {
            var values = await _context.CodeBookKeys
                            .Where(p => p.CodeBookKeyId == parent)
                            .Include(p => p.CodeBook)
                            .ToArrayAsync();
            return Ok(values);
        }
    }
}