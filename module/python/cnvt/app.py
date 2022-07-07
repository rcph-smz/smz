from moviepy.editor import *
import os


print("<------------- folderName <mp4 convert_to mp3/find folder> ------------->")
folderName = str(input()).strip()
print("<------------- folderName <export/where to save> ------------->")
pathName = str(input()).strip()

for i in os.listdir(folderName):
    path = f'{pathName}'
    videoclip = VideoFileClip(f'{folderName}/{i}')
    if not os.path.exists(path):
        os.mkdir(path)

    if os.path.isfile(f'{path}/{i[:-4]}.mp3'):
        print(f'file exists at : {path}/{i[:-4]}.mp3')
    else:
        audiofile = videoclip.audio.write_audiofile(f'{i[:-4]}.mp3')
        os.rename(f'{i[:-4]}.mp3',f'{path}/{i[:-4]}.mp3')