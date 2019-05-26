using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProject.Model
{
    public class RatingContext : DbContext
    {
        public RatingContext (DbContextOptions<RatingContext> options): base(options)
        { }

        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Favourite> Favourites { get; set; }
    }
}
