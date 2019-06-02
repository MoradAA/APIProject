using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using APIProject.Model;
using Microsoft.AspNetCore.Authorization;

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

        [Authorize]
        [HttpGet]
        public List<Rating> GetAllRatings(string title)
        {
            IQueryable<Rating> query = context.Ratings;
            if (!string.IsNullOrWhiteSpace(title))
            {
                query = query.Where(t => t.Title == title);
            }

            return query.ToList();
            //return context.Ratings.ToList();
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
            var SeriesWith5StarRatings = list.Where(rating => rating.Value == 5).ToList();
            return SeriesWith5StarRatings;
        }

        [HttpPost]
        public IActionResult CreateRating([FromBody] Rating newRating)
        {
                context.Ratings.Add(newRating);
                context.SaveChanges();
                return Created("", newRating);
        }

        [HttpPut]
        public IActionResult UpdateRating([FromBody] Rating updateRating)
        {
            var upRating = context.Ratings.Find(updateRating.Id);
            if (upRating == null)
            {
                return NotFound();
            }
             upRating.Value = updateRating.Value;
             upRating.Title = updateRating.Title;
             context.SaveChanges();
             return Ok(upRating);
        }

        //Delete werkt niet, error: '405 HTTP Method Not Supported'
        [Route("d/{id}")]
        [HttpDelete]
        public IActionResult DeleteRating(int id)
        {
            //var rating = context.Ratings.Find(id);
            var rating = context.Ratings.Where(r => r.Id == id).First();
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