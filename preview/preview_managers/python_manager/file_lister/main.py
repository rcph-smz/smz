fileName = 'list.txt'
with open(fileName,'r') as rf:
    for fline in rf.readlines():
        with open('yieldList.txt','a') as wf:
            wf.write('\"' + fline.strip() + '\",\n')