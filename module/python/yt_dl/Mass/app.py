from pytube import YouTube

print("<------------- textfile name <youtubelinks> ------------->")
file = str(input()).strip()
print("<------------- where to save/folderName ------------->")
path = str(input()).strip()
with open(file,'r') as f:
    for i in f.readlines():
        yt = YouTube(i)
        print(yt.title)
        yt.thumbnail_url
        yt.streams.get_highest_resolution().download(f'./{path}')