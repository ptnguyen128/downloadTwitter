def twitter_setup():
    CONSUMER_KEY    = CREDENTIALS['CONSUMER_KEY']
    CONSUMER_SECRET = CREDENTIALS['CONSUMER_SECRET']

    ACCESS_TOKEN  = CREDENTIALS['ACCESS_TOKEN']
    ACCESS_SECRET = CREDENTIALS['ACCESS_SECRET']

    # Authentication and access using keys
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

    # Return API with authentication
    api = tweepy.API(auth)
    return api
