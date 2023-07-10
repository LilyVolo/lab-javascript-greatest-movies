// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    let dir = movies.map(item => { 
        return item.director    
})

let unique = dir.filter((x, i) =>dir.indexOf(x) === i);
   
return unique
}

getAllDirectors(movies) 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spilberg = movies.filter(item => item.director === 'Steven Spielberg')
   let count = 0;
    spilberg.forEach(item => {
        if  (item.genre.includes('Drama')) {
            count ++
        }
    })
  return count
  
}

howManyMovies(movies)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(movies) {

   let fin;
   if (movies.length === 0) {
    return 0
   } else {
    let avg = movies.reduce((total,movie) => 

        if (!movie.score ) {
            return r
        } else {
            r + movie.score/movies.length, 0.0);
        
            let res = avg.toFixed(2)
             fin = +res
    }
    return fin
    }*/
    
   
  



scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    let count = [];
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].genre.includes('Drama')) {
            count.push(movies[i].score)
        }
    }
  let score = count.reduce((r,i) => r + i/count.length, 0.0)
  let res = score.toFixed(2)
    score = +res

return score
}

dramaMoviesScore(movies)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const clonedArray =  JSON.parse(JSON.stringify(movies))

    clonedArray.sort(function(a, b){
        return a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title, undefined, {sensitivity: 'base'})

    })
    return clonedArray
 
}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let res;
    const clonedArray =  JSON.parse(JSON.stringify(movies))
    
    if (clonedArray.length <=20)
    {
        res = clonedArray.sort((a, b) => a/title.localeCompare(b.title, undefined, {sensitivity: 'base'}));
        let k = res.map(item => { 
            return item.title    
        })
        return k
    }
   
    else {
      
      res =  clonedArray.sort((a, b) => a.title.localeCompare(b.title,  undefined, {sensitivity: 'base'}));
     
     res.length = 20; 
      console.log(res)
      let k = res.map(item => { 
        return item.title    
    })
    console.log(k)
     return k
      
     }

}
orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
