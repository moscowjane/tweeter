
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
  const msg = $(".new-tweet textarea").val();
  if (msg.length === 0)
    $('.error-message').text('Your message is empty')
  else if(msg.length > 140)
    $('.error-message').text('Your message exceeds the allowable maximum of 140 characters')
  else
    $('.error-message').text('')
 $.ajax({
    type: 'POST',
    url:  '/tweets',
    data: $form.serialize()
  })
  .success(() => {
    loadTweets();
    console.log('tweet posted successfully');
  })
   .error(err => {
    console.log("no tweet posted");
  });
}

function loadTweets(){

  // const $form = $(this);
 $.ajax({
    type: 'GET',
    url:  '/tweets',
  })
  .success((tweets) => {
    renderTweets(tweets);
    console.log('tweet loaded');
  })
   .error(err => {
    console.log("tweet not loaded");
  });
}

function renderTweets(tweets) {
  $('.tweet-container').empty();
  for (let tweet of tweets) {
    let tweetElement = createTweetElement(tweet);
    $('.tweet-container').prepend(tweetElement);
  }
}
$(() => {
  loadTweets();
  $('form').submit(handleNewTweet);
  $("button").click(function(){
    $(".new-tweet").toggle(1000);
  });
  $("button").click(function() {
    $("textarea").focus();
  });
});

