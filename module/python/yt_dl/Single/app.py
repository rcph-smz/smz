from pytube import YouTube

print("<------------- video url ------------->")
url = str(input()).strip()
print("<------------- where to save/folderName ------------->")
path = str(input()).strip()
yt = YouTube(url)
print(yt.title)
yt.thumbnail_url 
yt.streams.get_highest_resolution().download(f'./{path}')