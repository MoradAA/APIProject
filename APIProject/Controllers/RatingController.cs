using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using APIProject.Model;

namespace APIProject.Controllers
{
    [Route("api/v1")]
    public class RatingController : Controller
    {
        [Route("rating")]
        [HttpGet]

        // GET: Rating
        public Rating ShowRating()
        {
            //var result = Content("Dit is een rating");
            //result.StatusCode = 200;
            //return result;

            var r1 = new Rating()
            {
                Id = 1,
                Value = 3
            };

            return r1;
        }

        [Route("rating")]
        [HttpPost]

        public IActionResult CreateRating([FromBody] Rating newRating)
        {
            newRating.Id = 2;
            newRating.Value = 1;
            return Created("", newRating);
        }
    }
}