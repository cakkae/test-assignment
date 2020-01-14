using System.ComponentModel.DataAnnotations;

namespace OptomFT.Models
{
    public class CodeBook
    {
        public int Id { get; set; }
        [Required]
        public string CodeBookName { get; set; }
    }
}