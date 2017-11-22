using System.ComponentModel.DataAnnotations.Schema;

namespace FinaxysData.Entities
{
    public class Book
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Title { get; set; }

        public int Price { get; set; }

        public virtual Author Author { get; set; }
    }
}
