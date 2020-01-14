using System.ComponentModel.DataAnnotations.Schema;

namespace OptomFT.Models
{
    public class CodeBookKey
    {
        public int Id { get; set; }
        public int CodeBookKeyId { get; set; }
        public int CodeBookId { get; set; }

        public virtual CodeBook CodeBook { get; set; }
    }
}