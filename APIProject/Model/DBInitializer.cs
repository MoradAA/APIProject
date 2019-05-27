using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProject.Model
{
    public class DBInitializer
    {
        public static void Initialize(RatingContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Are there already ratings present ?
            if (!context.Ratings.Any())
            {
                var rating = new Rating()
                {
                    Value = 5
                };

                context.Ratings.Add(rating);
                context.SaveChanges();
            }

            //Are there already favourites present ?
            if (!context.Favourites.Any())
            {
                var favourite = new Favourite()
                {
                    Title = "Lord of the rings"
                };

                context.Favourites.Add(favourite);
                context.SaveChanges();
            }
        }
    }
}
