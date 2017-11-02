using FinaxysData.Entities;
using FinaxysData.Repositories;

namespace FinaxysData
{
    public class Program
    {
        static void Main(string[] args)
        {
            BookRepository bookRepository = new BookRepository();
            Book book = new Book { Title = "Les misérables", Price = 15 };
            Author author = new Author { Name = "Victor hugo" };
            book.Author = author;
            System.Console.WriteLine("Before");
            bookRepository.Insert(book);
            System.Console.WriteLine("After");
        }
    }
}
