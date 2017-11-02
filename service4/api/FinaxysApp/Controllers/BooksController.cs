using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using FinaxysData.Entities;
using FinaxysData.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace FinaxysApp.Controllers
{
    public class BooksController : ApiController
    {
        private BookRepository bookRepository = new BookRepository();

        // GET: api/Books
        public IQueryable<Book> GetBooks()
        {
            return bookRepository.GetAll().AsQueryable<Book>();
        }

        // GET: api/Books/5
        [ResponseType(typeof(Book))]
        public IHttpActionResult GetBook(int id)
        {
            Book book = bookRepository.GetById(id);
            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        // PUT: api/Books/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBook(int id, Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != book.Id)
            {
                return BadRequest();
            }

            bookRepository.GetById(id);
            bookRepository.Update(book);
            return StatusCode(HttpStatusCode.Accepted);
        }

        // POST: api/Books
        [ResponseType(typeof(Book))]
        public Book PostBook(Book book)
        {
            bookRepository.Insert(book);
            return book;
        }

        // DELETE: api/Books/5
        [ResponseType(typeof(Book))]
        public IHttpActionResult DeleteBook(int id)
        {
            Book book = bookRepository.GetById(id);
            if (book == null)
            {
                return NotFound();
            }
            bookRepository.Delete(book);
         
            return Ok(book);
        }
    }
}