﻿using System;
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