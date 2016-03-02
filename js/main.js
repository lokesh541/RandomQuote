$(document).ready(function() {
  var index,index_co,newQuote;
  $(".new").click(newQuote=function() {
   const val = quotes.length;
   index = Math.random() * val|0;

    $(".quote").hide()
    $("body").removeClass(background[index_co])
   index_co = (Math.random() * 11)|0;
    $(".quote").text(quotes[index])//+' '+index+' '+index_co)
    $(".container").css("color", colors[index_co])
    $("body").addClass(background[index_co])
    $(".quote").show(700)
  });
  $(".quote").addClass("animated bounceInLeft")

  newQuote();

  $("#twitter").click(function() {
  var tweet = quotes[index]; // $(".quote").text()

     sendTweet(tweet);
  });


  function sendTweet(tweet) {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet), "_blank")
  }



    $('#fb-btn').click(function() {
      var status = quotes[index];
    FB.api('/me/feed', 'post', {message: status}, function(response) {
      Log.info('API response', response);
      return false;
    });
});

var quotes = [
  "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss",
  "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero",
  "“So many books, so little time.” ― Frank Zappa",
  "“You only live once, but if you do it right, once is enough.” ― Mae West",
  "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
  "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ― J.K. Rowling",
  "“No one can make you feel inferior without your consent.” ― Eleanor Roosevelt, This is My Story",
  "“If you tell the truth, you don't have to remember anything.” ― Mark Twain",
  "“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard",
  "“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi",
  "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.” ― Oscar Wilde",
  "“Without music, life would be a mistake.” ― Friedrich Nietzsche, Twilight of the Idols",
  "“Insanity is doing the same thing, over and over again, but expecting different results.” ― Narcotics Anonymous",
  "“We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower",
  "“It is better to be hated for what you are than to be loved for what you are not.” ― André Gide, Autumn Leaves",
  "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.” ― Jane Austen",
  "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ― John Green",
  "“Life is what happens to you while you're busy making other plans.” ― Allen Saunders",
  "“It is our choices, Harry, that show what we truly are, far more than our abilities.” ― J.K. Rowling",
  "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).” ― Mark Twain",
  "“Good friends, good books, and a sleepy conscience: this is the ideal life.” ― Mark Twain",
  "“The fool doth think he is wise, but the wise man knows himself to be a fool.” ― William Shakespeare, As You Like It",
  "“It does not do to dwell on dreams and forget to live.” ― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  "“A woman is like a tea bag; you never know how strong it is until it's in hot water.” ― Eleanor Roosevelt",
  "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ― Bil Keane",
  "“If you don't stand for something you will fall for anything.” ― Gordon A. Eadie",
  "“We are all in the gutter, but some of us are looking at the stars.” ― Oscar Wilde, Lady Windermere's Fan",
  "“The man who does not read has no advantage over the man who cannot read.” ― Mark Twain",
  "“I have not failed. I've just found 10,000 ways that won't work.” ― Thomas A. Edison",
  "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.” ― Friedrich Nietzsche",
  "“A day without sunshine is like, you know, night.” ― Steve Martin",
  "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.” ― Dr. Seuss",
  "“Never put off till tomorrow what may be done day after tomorrow just as well.” ― Mark Twain",
  "“We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower",
  "“It is better to be hated for what you are than to be loved for what you are not.” ― André Gide",
  "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ― John Green",
  "“Life is what happens to you while you're busy making other plans.” ― Allen Saunders",
  "“It is our choices, Harry, that show what we truly are, far more than our abilities.” ― J.K. Rowling ",
  "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).” ― Mark Twain",
  "“Good friends, good books, and a sleepy conscience: this is the ideal life.” ― Mark Twain",
  "“The fool doth think he is wise, but the wise man knows himself to be a fool.” ― William Shakespeare",
  "“It does not do to dwell on dreams and forget to live.” ― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  "“A woman is like a tea bag; you never know how strong it is until it's in hot water.” ― Eleanor Roosevelt",
  "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ― Bil Keane",
  "“If you don't stand for something you will fall for anything.” ― Gordon A. Eadie",
  "“We are all in the gutter, but some of us are looking at the stars.” ― Oscar Wilde, Lady Windermere's Fan",
  "“The man who does not read has no advantage over the man who cannot read.” ― Mark Twain",
  "“I have not failed. I've just found 10,000 ways that won't work.” ― Thomas A. Edison",
  "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.” ― Friedrich Nietzsche",
  "“A day without sunshine is like, you know, night.” ― Steve Martin",
  "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.” ― Dr. Seuss",
  "“Never put off till tomorrow what may be done day after tomorrow just as well.” ― Mark Twain",
  "“I solemnly swear that I am up to no good.” ― J.K. Rowling, Harry Potter and the Prisoner of Azkaban",
  "“That which does not kill us makes us stronger.” ― Friedrich Nietzsche",
  "“Love all, trust a few, do wrong to none.” ― William Shakespeare, All's Well That Ends Well",
  "“If you judge people, you have no time to love them.” ― Mother Teresa",
  "“For every minute you are angry you lose sixty seconds of happiness.” ― Ralph Waldo Emerson",
  "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” ― Lao Tzu",
  "“My thoughts are stars I cannot fathom into constellations.” ― John Green, The Fault in Our Stars",
  "“I love deadlines. I love the whooshing noise they make as they go by.” ― Douglas Adams, The Salmon of Doubt",
  "“It is never too late to be what you might have been.” ― George Eliot",
  "“I'm not upset that you lied to me, I'm upset that from now on I can't believe you.” ― Friedrich Nietzsche",
  "“If you can't explain it to a six year old, you don't understand it yourself.” ― Albert Einstein",
  "“Women and cats will do as they please, and men and dogs should relax and get used to the idea.” ― Robert A. Heinlein",
  "“Sometimes the questions are complicated and the answers are simple.” ― Dr. Seuss",
  "“I have always imagined that Paradise will be a kind of library.” ― Jorge Luis Borges",
  "“We read to know we're not alone.” ― William Nicholson, Shadowlands",
  "“You love me. Real or not real?\" I tell him, \"Real.” ― Suzanne Collins, Mockingjay",
  "“We don't see things as they are, we see them as we are.” ― Anaïs Nin",
  "“All you need is love. But a little chocolate now and then doesn't hurt.” ― Charles M. Schulz",
  "“Everything you can imagine is real.” ― Pablo Picasso",
  "“Today you are You, that is truer than true. There is no one alive who is Youer than You.” ",
  "“There is no greater agony than bearing an untold story inside you.” ― Maya Angelou",
  "“Whenever I feel the need to exercise, I lie down until it goes away.” ― Paul Terry",
  "“Never trust anyone who has not brought a book with them.” ― Lemony Snicket, Horseradish",
  "“I'm not afraid of death; I just don't want to be there when it happens.” ― Woody Allen",
  "“One good thing about music, when it hits you, you feel no pain.” ― Bob Marley",
  "“Logic will get you from A to Z; imagination will get you everywhere.” ― Albert Einstein",
  "“Not all of us can do great things. But we can do small things with great love.” ― Mother Teresa",
  "“Folks are usually about as happy as they make their minds up to be.” ― Abraham Lincoln",
  "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.” ― Bob Marley",
  "“Love is like the wind, you can't see it but you can feel it.” ― Nicholas Sparks, A Walk to Remember",
  "“The difference between genius and stupidity is: genius has its limits.” ― Alexandre Dumas-fils",
  "“I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.” ― Virginia Woolf",
  "“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.” ― Oscar Wilde",
  "“Do what you can, with what you have, where you are.” ― Theodore Roosevelt"
]
var colors = [
  "#39add1", // light blue
  "#3079ab", // dark blue
  "#c25975", // mauve
  "#e15258", // red
  "#f9845b", // orange
  "#838cc7", // lavender
  "#7d669e", // purple
  "#51b46d", // green
  "#637a91", // dark gray
  "#f092b0", // pink
  "#b7c0c7" // light gray
]
var background = [
  "bg-grey",
  "bg-navy ", //   #001F3F
  "bg-blue ", //   #0074D9
  "bg-aqua ", //   #7FDBFF
  "bg-teal ", //   #39CCCC
  "bg-olive ", //   #3D9970
  "bg-green ", //   #2ECC40
  "bg-lime ", //   #01FF70
  "bg-yellow ", //   #FFDC00
  "bg-orange ", //   #FF851B
  "bg-silver ", //   #DDDDDD
  "bg-black ", //   #111111
]
