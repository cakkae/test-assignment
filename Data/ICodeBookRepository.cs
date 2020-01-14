using System.Threading.Tasks;
using OptomFT.Models;

namespace OptomFT.Data
{
    public interface ICodeBookRepository
    {
         Task<CodeBook> AddCodeBook (CodeBook codeBook);
    }
}