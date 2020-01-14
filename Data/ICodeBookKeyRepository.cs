using System.Threading.Tasks;
using OptomFT.Models;

namespace OptomFT.Data
{
    public interface ICodeBookKeyRepository
    {
         Task<CodeBookKey> AddCodeBookKeys (CodeBookKey codeBookKey);
    }
}