using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using APIProject.Model;

namespace APIProject.Controllers
{
    [Route("api/v1/ratings")]

    public class Rating2Controller : Controller
    {
        private readonly RatingContext context;

        public Rating2Controller(RatingContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Rating> GetAllRatings()
        {
            return context.Ratings.ToList();
        }

        [HttpPost]
        public IActionResult CreateRating([FromBody] Rating newRating)
        {
            context.Ratings.Add(newRating);
            context.SaveChanges();
            return Created("", newRating);
        }
    }
}