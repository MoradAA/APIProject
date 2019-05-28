using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using APIProject.Model;

namespace APIProject.Controllers
{
    [Route("api/v1/ratings")]

    public class RatingController : Controller
    {
        private readonly RatingContext context;

        public RatingController(RatingContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Rating> GetAllRatings()
        {
            return context.Ratings.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Rating> GetRating(int id)
        {
            if (id > 0)
            {
                return context.Ratings.Find(id);
            }
            else
            {
                return NotFound();
            }
        }

        [Route("orderedbyrating")]
        [HttpGet]
        public List<Rating> GetRatingsOrdened()
        {
            var list = context.Ratings.ToList();
            var ratingsSortedByValue = list.OrderByDescending(r => r.Value).ToList();
            return ratingsSortedByValue;
        }

        [Route("bestratings")]
        [HttpGet]
        public List<Rating> GetBestRatings()
        {
            var list = context.Ratings.ToList();
            var SeriesWith5StarRatings = list.Where(rating => rating.Value >= 5).ToList();
            return SeriesWith5StarRatings;
        }

        [HttpPost]
        public IActionResult CreateRating([FromBody] Rating newRating)
        {
            context.Ratings.Add(newRating);
            context.SaveChanges();
            return Created("", newRating);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteRating(int id)
        {
            var rating = context.Ratings.Find(id);
            if (rating == null)
            {
                return NotFound();
            }

            context.Ratings.Remove(rating);
            context.SaveChanges();
            return NoContent();
        }
    }
}