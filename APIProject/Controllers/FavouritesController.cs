using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using APIProject.Model;

namespace APIProject.Controllers
{
    [Route("api/v1/favourites")]
    public class FavouritesController : Controller
    {
        private readonly RatingContext context;
        public FavouritesController(RatingContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Favourite> GetAllFavourites()
        {
            return context.Favourites.ToList();
        }

        //Find a favourite based on the id of the favourite
        [Route("{id}")]
        [HttpGet]
        public Favourite GetFavourite(int id)
        {
            return context.Favourites.Find(id);
        }

        [Route("alphabeticalorder")]
        [HttpGet]
        public List<Favourite> GetFavouritesOrdened()
        {
            var list = context.Favourites.ToList();
            var favouritesSortedByAlphabet = list.OrderByDescending(r => r.Title).ToList();
            return favouritesSortedByAlphabet;
        }

        [Route("bestrated")]
        [HttpGet]
        public List<Favourite> GetBestRatedFavourites()
        {
            var list = context.Favourites.ToList();
            //lastig om te sorteren op imdbRating omdat imdbRating van type string is (+ / ParseInt werken niet)
            var SeriesWithGoodRatings = list.Where(favourite => favourite.OwnRating.Value >= 4).ToList();
            return SeriesWithGoodRatings;
        }

        [HttpPost]
        public IActionResult CreateFavourite([FromBody] Favourite newFavourite)
        {
            //Eerst opzoeken of er al een element bestaat met dezelfde Titleproperty? (2 favorieten met dezelfde titel vermijden)
                context.Favourites.Add(newFavourite);
                context.SaveChanges();
                return Created("", newFavourite);
        }

        [Route("d/{id}")]
        [HttpDelete]
        public IActionResult DeleteFavourite(int id)
        {
            var favourite = context.Favourites.Where(r => r.Id == id).First();
            if (favourite == null)
            {
                return NotFound();
            }

            context.Favourites.Remove(favourite);
            context.SaveChanges();
            return NoContent();
        }
    }
}