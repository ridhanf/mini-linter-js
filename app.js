let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

console.log('Initial paragraph:');
console.log(story);
console.log(' ');

// gather some information about the individual words and 
// sentences in the string. Split the string into individual words 
// and save them in a new array called storyWords.
let storyWords = story.split(' ');

// Iterate over array to filter out these words. 
// Save the remaining words in an array called betterWords.
let betterWords = storyWords.filter((word) => {
  return unnecessaryWords.indexOf(word) < 0;
});

// How many times they have used these overused words.
const numOfOverusedWords = betterWords.reduce((accumulator, currentWord) => {
  if (overusedWords.indexOf(currentWord) > -1) {
    accumulator++;
  }
  return accumulator;
}, 0);

// Count how many sentences are in the paragraph.
const numOfSentences = betterWords.reduce((sentence, currentWord) => {
  if (['.', '!'].indexOf(currentWord[currentWord.length-1]) > -1) {
    sentence++;
  }
  return sentence;
}, 0);


// Log these items to the console:
// - The word count
// - The sentence count
// - The number of times each overused word appears
const result = [
  `word count              = ${betterWords.length}`, 
  `sentence count          = ${numOfSentences}`, 
  `overused word apperance = ${numOfOverusedWords}`
]

const printResult = (res) => {
  console.log(res);
}

result.forEach(printResult);

// Log the betterWords array to the console as a single string.
console.log(' ');
console.log('Final paragraph:');
console.log(betterWords.join(' '));
