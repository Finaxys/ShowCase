using System.Collections.Generic;

namespace FinaxysData.Repositories
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Insert(T entity);
        void Delete(T entity);
        void Delete(int id);
        T Update(T obj);
        void Save();
    }
}