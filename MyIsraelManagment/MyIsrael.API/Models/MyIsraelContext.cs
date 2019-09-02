using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyIsrael.API.Models
{
    public class MyIsraelContext : DbContext
    {
        public MyIsraelContext(DbContextOptions<MyIsraelContext> options)
            : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
    }
}
