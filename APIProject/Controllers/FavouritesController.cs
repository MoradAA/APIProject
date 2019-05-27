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

        [HttpPost]
        public IActionResult CreateFavourite([FromBody] Favourite newFavourite)
        {
            context.Favourites.Add(newFavourite);
            context.SaveChanges();
            return Created("", newFavourite);
        }

        [Route("{Id}")]
        [HttpGet]
        public Favourite GetFavourite(int id)
        {
            return new Favourite()
            {
                Id = id,
                Title = ""
            };
        }

        //[Route("{title}")]
        //[HttpPost]
        //public Favourite PostFavourite(string title)
        //{
        //    return new Favourite()
        //    {
        //        //Id = id,
        //        Title = title
        //    };
        //}

        //[HttpGet]       //api/v1/favourites
        //public List<Favourite> GetAllFavourites()
        //{

        //}
    }
}