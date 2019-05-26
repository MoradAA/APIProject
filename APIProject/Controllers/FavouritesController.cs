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
        [Route("{Id}")]
        [HttpGet]
        public Favourite GetFavourite(int id)
        {
            return new Favourite()
            {
                Id = id,
                Title = "Game of thrones"
            };
        }

        [Route("{title}")]
        [HttpPost]
        public Favourite PostFavourite(string title)
        {
            return new Favourite()
            {
                //Id = id,
                Title = title
            };
        }

        //[HttpGet]       //api/v1/favourites
        //public List<Favourite> GetAllFavourites()
        //{

        //}
    }
}