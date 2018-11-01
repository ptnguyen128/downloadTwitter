# Twitter App access keys
# Fill in your credentials, in quotes (i.e. 'abcxyz')
CREDENTIALS = {
'CONSUMER_KEY'    : 'your_consumer_key',
'CONSUMER_SECRET' : 'your_consumer_secret',

'ACCESS_TOKEN'  : 'your_access_token',
'ACCESS_SECRET' : 'your_acess_secret'
}

# Number of tweets to be fetched
# maximum is 200
N_TWEETS = 200

# False if you don't want to fetch tweets continuously
# True if you do
EXTEND_STATE = True

# Enter 'photo' if you want to download photos
# Enter 'video' if you want to fetch video links
FILE_TYPE = 'photo'

# False if you don't want to download videos
# True if you want to download videos
VIDEO_DL = False

# List of users to fetch tweets
USERS = ['user_1']
