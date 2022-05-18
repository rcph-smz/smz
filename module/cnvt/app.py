from moviepy.editor import *
import os


print("<------------- folderName <mp4 convert_to mp3> ------------->")
folderName = str(input())

for i in os.listdir(folderName): 
    path = "MaidCat/"
    videoclip = VideoFileClip(folderName + '/' + i)
    audiofile = videoclip.audio.write_audiofile(i[:-4]+".mp3")
    if not os.path.exists(path):
        os.mkdir(path)
    os.rename(i[:-4]+".mp3",path+i[:-4]+".mp3")

