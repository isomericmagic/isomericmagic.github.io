// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// establish the number of items in the quotes array
var numberOfQuotes = quotes.length;

var oldQuoteNumber;

//generate a random number based on the size of the quotes array
//and retrieve a random quote based on that number. if the quote
//is the same as the one used previously don't use it and keep
//generating another until a new one is chosen.
function getRandomQuote(upperLimit){
  var quoteNumber = (Math.floor(Math.random() * upperLimit) + 1);
  quoteNumber -= 1;
  while (quoteNumber === oldQuoteNumber && numberOfQuotes > 1) {
    quoteNumber = (Math.floor(Math.random() * upperLimit) + 1);
    quoteNumber -= 1;
  }
  oldQuoteNumber = quoteNumber;
  return (quotes[quoteNumber]);
}

//this function prints out generated html 
function print(message) {
  var div = document.getElementById('quote-box');
  div.innerHTML = message;
}

//generate html based on selected quote object properties and then print it out
function printQuote () {
  var output = '';
  var selectedQuote = getRandomQuote(numberOfQuotes);
  for (var key in selectedQuote){
    if (key === 'quote') {
      output += '<p class="quote">' + selectedQuote[key] + '</p>';	
    }
    if (key === 'source') {
      output += '<p class="source">' + selectedQuote[key];	
    }
    if (key === 'citation') {
      output += '<span class="citation">' + selectedQuote[key] + '</span>';	
    }
    if (key === 'year') {
      output += '<span class="year">' + selectedQuote[key] + '</span>';	
    }
  }
  output += '</p>';
  console.log(output);
  print(output);
}