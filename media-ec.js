def get_media(tweets, type):
    photos = set()
    videos = set()
    for status in tweets:
        # check if tweet as extended entitites (with media files)
        if hasattr(status, 'extended_entities'):
            media = status.extended_entities.get('media', [])
            for i in range(len(media)):
                # check if the media is photo, get photo url
                if media[i]['type'] == 'photo':
                    photos.add(media[i]['media_url'])
                # if media file is video, get .mp4 url
                elif media[i]['type'] == 'video':
                    videos.add(media[i]['video_info'].get('variants')[0]['url'])
        else:
            continue

    if type == 'photo':
        return photos
    elif type == 'video':
        return videos
