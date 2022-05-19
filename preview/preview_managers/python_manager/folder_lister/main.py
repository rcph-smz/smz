import os
print("folder_name")
folderName = str(input())
for i in os.listdir(folderName):
    with open("yieldList.txt",'a') as wf:
        wf.write('\"' + i.strip() + '\",\n')