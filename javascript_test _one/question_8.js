class Star {
    constructor(name, country, age) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
}


class Movie {
    constructor(title, duration, star) {
        this.title = title;
        this.duration = duration;
        this.star = star;
    }

    logMovieInfo() {
        console.log(`${this.title} lasts for ${this.duration} minutes. Star: ${this.star.name} is ${this.star.age} years old and born in ${this.star.country}`);
    }
}

// Create a star 
const starInfo = new Star("Puff", "Uganda", 45);

// Create a movie 
const myFavoriteMovie = new Movie("Puff the Magic Dragon", 30, starInfo);

// Log movie information
myFavoriteMovie.logMovieInfo();  
  
  
  
  
  
  
  
  
  
  
  
  