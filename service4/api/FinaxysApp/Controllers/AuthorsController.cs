using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using FinaxysData.Entities;
using FinaxysData.Repositories;

namespace FinaxysApp.Controllers
{
    public class AuthorsController : ApiController
    {
        private AuthorRepository authorRepository = new AuthorRepository();

        // GET: api/Authors
        public IEnumerable<Author> GetAuthors()
        {
            return authorRepository.GetAll();
        }

        // GET: api/Authors/5
        [ResponseType(typeof(Author))]
        public IHttpActionResult GetAuthor(int id)
        {
            Author author = authorRepository.GetById(id);
            if (author == null)
            {
                return NotFound();
            }

            return Ok(author);
        }

        // PUT: api/Authors/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAuthor(int id, Author author)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != author.Id)
            {
                return BadRequest();
            }

            authorRepository.Update(author);
         
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Authors
        [ResponseType(typeof(Author))]
        public Author PostAuthor(Author author)
        {
      
            authorRepository.Insert(author);
            return author;
        }

        // DELETE: api/Authors/5
        [ResponseType(typeof(Author))]
        public IHttpActionResult DeleteAuthor(int id)
        {
            Author author =authorRepository.GetById(id);
            if (author == null)
            {
                return NotFound();
            }

            authorRepository.Delete(author);
            return Ok(author);
        }
    }
}