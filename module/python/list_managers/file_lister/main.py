print("folder_name")
fileName = str(input())
with open(fileName,'r') as rf:
    for fline in rf.readlines():
        with open('yieldList.txt','a') as wf:
            wf.write('\"' + fline.strip() + '\",\n')