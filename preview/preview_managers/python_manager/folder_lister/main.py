import os
folderName = 'anime'
for i in os.listdir(folderName):
    with open("yieldList.txt",'a') as wf:
        wf.write('\"' + i.strip() + '\",\n')