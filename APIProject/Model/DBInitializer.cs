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

            //Are there already books present ?
            if (!context.Ratings.Any())
            {
                var rating = new Rating()
                {
                    Value = 1
                };

                context.Ratings.Add(rating);
                context.SaveChanges();
            }
        }
    }
}
