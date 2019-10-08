//STEP 1
console.log("Question 1")
let favoriteMovies = ["Titanic","Memento","Avengers","Batman","Spiderman"]
console.log(favoriteMovies[1])
//STEP 2
console.log("Question 2")
var movieCopy = new Array(5), index = 0;

while( index < movieCopy.length)
movieCopy[index] = favoriteMovies[index++]

console.log(movieCopy[0])
//STEP 3 copied code as requested
console.log("Question 3")
var movieCopy = new Array(5), index = 0

while( index < movieCopy.length)
movieCopy[index] = favoriteMovies[index++]

console.log(movieCopy[0])

// new code from here
movieCopy.splice(3,0,"A Few Good Men")
console.log(movieCopy.length)

//STEP 4
console.log("Question 4")
let faveMovies = []
faveMovies = favoriteMovies.map(value => value);
delete faveMovies[0]
console.log(faveMovies)

//STEP 5
console.log("Question 5")
let coolMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]

for(var i = 0 ; i < coolMovies.length ; i++)
console.log(coolMovies[i] + '\n')


//STEP 6
console.log("Question 6")
let awesomeMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]

for(index in awesomeMovies)
console.log(awesomeMovies[index] + '\n')


//STEP 7

console.log("Question 7")
let topMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]

coolMovies = coolMovies.sort();

for(index in coolMovies)
console.log(coolMovies[index] + '\n')

//STEP 8
console.log("Question 8")
let mostFavoriteMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]
var leastFavoriteMovies = ["Blue Lagoon","Suicide Squad","Terminator Genisys"]

console.log("Movies I like:\n")

for(index in mostFavoriteMovies)
console.log(mostFavoriteMovies[index] + '\n')

console.log("Movies I regret watching:\n")

for(let index in leastFavoriteMovies)
console.log(leastFavoriteMovies[index] + '\n')


//STEP 9
console.log("Question 9")
let blockBusterMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]
var leastFavoriteMovies = ["Blue Lagoon","Suicide Squad","Terminator Genisys"]
var mergedMovies = blockBusterMovies.concat(leastFavoriteMovies)

mergedMovies.sort().reverse()

for(index in mergedMovies)
console.log(mergedMovies[index] + '\n')

//STEP 10
console.log("Question 10")
let bestMovies = ["Titanic","Memento","Avengers","Batman","Spiderman","Superman","Daredevil"]
var leastFavoriteMovies = ["Blue Lagoon","Suicide Squad","Terminator Genisys"]
var mergedMovies = bestMovies.concat(leastFavoriteMovies)

console.log(mergedMovies[mergedMovies.length - 1])