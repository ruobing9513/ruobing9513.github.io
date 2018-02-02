var quotes = [
		"The fear of death follows from the fear of life. One who lives life fully is prepared to die at any time. - Mark Twin",
		"When you wake up in the morning you have two choices: go back to sleep, or wake up and chase those dreams",
		"Our greatest weapon against stress is our ability to choose one thought over another. - William James",
		"Success is the ability to go from failure to failure without losing your enthusiasm. - Wilson Churchill",
		"There is no passion to be found playing small, in settling for a life that is less than the one you are capable of living. - Nelson Mandela",
		"A day without laughter is a day wasted. - Charlie Chaplin",
		"We either make ourselves miserable, or we make ourselves strong. The amount of work is the same. - Carols Castaneta",
		"Act as if what you do makes a difference. It does. - William James",
		"What the caterpillar calls the end, the rest of the world calls a butterfly. - Lao Tzu",
		"When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things. - Joe Namath",
	]
	
	function newQuote () {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document. getElementById("getyourquote"). innerHTML = quotes[randomNumber];
	}