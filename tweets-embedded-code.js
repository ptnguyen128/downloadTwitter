def get_all_tweets(screen_name, count, extend):
    api = twitter_setup()
    alltweets = []

    #make initial request for most recent tweets (200 is the maximum allowed count)
    new_tweets = api.user_timeline(screen_name = screen_name, count=count,
                                    tweet_mode='extended', include_rts=False, exclude_replies=True)
    #save most recent tweets
    alltweets.extend(new_tweets)
    return alltweets
