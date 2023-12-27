# convert druglist text file to json to upload to mongoDB
 
'''
sources used: https://stackoverflow.com/questions/60199317/python-string-split-but-ignore-single-spaces-e-g-between-words
              https://www.geeksforgeeks.org/convert-text-file-to-json-in-python/
              https://docs.python.org/3/howto/regex.html
              https://stackoverflow.com/questions/62472343/regex-exclude-all-whitespace-except-space
'''
import json
import re
 
# the file to be converted
filename = 'BrandGenericList.txt'
 
# resultant dictionary
Druglist = []
 
# fields in the sample file 
fields =['generic','brand','use','dea_class']
 
with open(filename) as df:
     
 
     # count variable for employee id creation
    l = 1
    

     
    for line in df:
         
        linestrp = line.strip()
        attributes = re.split("[\t\n\f\v]", linestrp) #matches all spaces except single space \s
         
      
       
         
         # for automatic creation of id for each drug
        sno ='drug'+str(l)
     
        # loop variable
        i = 0
        # intermediate dictionary
        oneDrug = {}
        while i<len(fields):
             
                # creating dictionary for each drug
                oneDrug[fields[i]]= attributes[i]
                i = i + 1
                 
        # appending the record of each drug to
        # the main dictionary
        Druglist.append(oneDrug)
        
 
 
# creating json file        
out_file = open("DrugList.json", "w")
json.dump(Druglist, out_file, indent = 4)
out_file.close()
print(Druglist) 