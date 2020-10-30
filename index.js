const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quotes = [
  {
    quote:
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley",
  },
  {
    quote:
      "Always bear in mind that your own resolution to success is more important than any other one thing.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else. ",
    author: "Margaret Mead",
  },
  { quote: "An unexamined life is not worth living.", author: "Socrates" },
  {
    quote: "Before anything else, preparation is the key to success.",
    author: "Alexander Graham Bell",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Do not let making a living prevent you from making a life.",
    author: "John Wooden",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Don't be distracted by criticism. Remember --  the only taste of success some people get is to take a bite out of you.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
    author: "Robert Louis Stevenson",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    quote:
      "I alone cannot change the world, but I can cast a stone across the water to create many ripples. ",
    author: "Mother Teresa",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "I didn't fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  { quote: "I failed my way to success.", author: "Thomas Edison" },
  {
    quote: "I find that the harder I work, the more luck I seem to have. ",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    quote:
      "If you genuinely want something, don't wait for it --  teach yourself to be impatient.",
    author: "Gurbaksh Chahal",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote:
      "If you want to achieve excellence, you can get there today. As of this second, quit doing less - than - excellent work.",
    author: "Thomas J. Watson",
  },
  {
    quote:
      "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  { quote: "Life is a long lesson in humility.", author: "James M. Barrie" },
  {
    quote:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    quote: "Life is ours to be spent, not to be saved.",
    author: "D. H. Lawrence",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "May you live all the days of your life.",
    author: "Jonathan Swift",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "Nothing is impossible, the word itself says, ‘I'm possible!'",
    author: "Audrey Hepburn",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote:
      "People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self -- fulfilling prophecy.",
    author: "Tony Robbins",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts. ",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
    author: "Conrad Hilton",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched  they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote:
      "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote:
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author: "Barack Obama",
  },
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
  },
  {
    quote:
      "Things work out best for those who make the best of how things work out.",
    author: "John Wooden",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote: "Winning isn't everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  { quote: "You become what you believe.", author: "Oprah Winfrey" },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "You know you are on the road to success if you would do your job and not be paid for it.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: "Beverly Sills",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
    author: "Steve Jobs",
  },
];

//generate random number
function RandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

//generate random quotes when function calls
function Generate() {
  let num = RandomNumber(0, 99);
  quote.innerHTML = quotes[num]["quote"];
  author.innerHTML = quotes[num]["author"];
}
