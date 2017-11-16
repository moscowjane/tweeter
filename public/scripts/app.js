/*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */


var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },

];

// // loops through tweets
// // calls createTweetElement for each tweet
// // takes return value and appends it to the tweets container
function renderTweets(tweets) {

for (let tweet of tweets) {

let tweetElement = createTweetElement(tweet);
$(tweetElement).appendTo('.tweet-container');

}

    // $('#tweets-container').empty();
    // for(let tweets in data) {
    //   let tweets = data[handleId];
    //   let handle = $('<li>').text(data.type);
    //   .done(() => {
    //   const type = $tweets.find('data[user="type"]').val();
    //   $('#tweets-container').append($data);
    // }
  }

// var $tweet = createTweetElement(tweetData);

function createTweetElement(tweet) {

var $tweet = `
   <article class="tweet">
           <header>
              <img class="logo" src="${tweet.user.avatars.small}">
              <span class="name" >"${tweet.user.name}"</span>
              <span class="handle">"${tweet.user.handle}"</span>
              <div class ="clear-fix" ></div>
          </header>
          <div class="tweet-body">${tweet.content.text}</div>
          <footer> 10 days ago

              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-flag" aria-hidden="true"></i>
          </footer>
        </article>
`;

  return $tweet;
}

function handleNewTweet(event) {
    event.preventDefault();
    const $form = $(this);
    // console.log($form.serialize());
    // how do we handle this?
    $.ajax({
      type: 'POST',
      url:  '/tweets',
      data: $form.serialize()
      // data: { type: $('input#type').val() }
      // data: `type=${$('input#type').val()}`
    })
      // .done(fetchCoffees)

    .success(() => {

      console.log('successful');

    })
    .error(err => alert(err));
  }


$(document).ready(()=>{
  const $form = $('form');
  $form.on('submit', handleNewTweet);
});
