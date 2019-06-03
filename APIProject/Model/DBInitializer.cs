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

            //Moest gecomment worden omdat er anders een foutmelding was ('No coercion operator is defined between types 'System.Int16' and 'System.Boolean'.')
            //Are there already ratings present ?
            //if (!context.Ratings.Any())
            //{
            //    var rating = new Rating()
            //    {
            //        Value = 5,
            //        Title = "The Lord of the Rings: The Fellowship of the Ring"
            //    };

            //    context.Ratings.Add(rating);
            //    context.SaveChanges();
            //}

            //Are there already favourites present ?
            //if (!context.Favourites.Any())
            //{
            //    var favourite = new Favourite()
            //    {
            //        Title = "The Lord of the Rings: The Fellowship of the Ring",
            //        Year = "2001",
            //        Runtime = "178",
            //        Genre = "Adventure, Drama, Fantasy",
            //        imdbRating = "8,8",
            //    };

            //    context.Favourites.Add(favourite);
            //    context.SaveChanges();
            //}
        }
    }
}
