def title_case(title, minor_words=''):
   results = []
   list_of_words=minor_words.lower().split(' ')
   minWrds = {}
   for num in list_of_words:
      if num in minWrds:
        minWrds[num] +=1
      else:
        minWrds[num] = 1
   if len(title)==0:
      print('')
      
   if(len(title)>0):      
    tWrds = title.lower().split(' ')
     
    for w in range(len(tWrds)):
       if tWrds[w] in minWrds:
         results.append(tWrds[w].lower())
       else:
        first_Char = tWrds[w][0:1].upper()
        word = first_Char + tWrds[w][1:]
        results.append(word)
   inProStr = ' '.join(results)
   return inProStr[0:1].upper() + inProStr[1:]

print(title_case(''))##--> ''
print(title_case('a clash of KINGS', 'a an the of'))#--> 'A Clash of Kings'
print(title_case('THE WIND IN THE WILLOWS', 'The In'))#--> 'The Wind in the Willows'
print(title_case('the quick brown fox'))#--> 'The Quick Brown Fox'