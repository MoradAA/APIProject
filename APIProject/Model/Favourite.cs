using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProject.Model
{
    public class Favourite
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string imdbRating { get; set; }
        public Rating OwnRating { get; set; }
    }
}
