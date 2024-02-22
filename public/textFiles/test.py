# Python program to convert text file to JSON
''''
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
DrugDict = {}
 
# fields in the sample file 
fields =['generic','brand','use','dea_class']
 
with open(filename) as df:
     
 
     # count variable for id creation
    l = 1
    

    # This is the built-in regex module
    
  
    for line in df:
        linestrp = line.strip()
        words = re.split("[\t\n\f\v]", linestrp) #matches all spaces except single space \s
        attributes = []
        # reading line by line from the text file and splits each attribute
        for word in words:
            attributes.append(word)
         
        # for output see below
        print(attributes) 