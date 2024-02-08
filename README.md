# Infinite Craft Database

This is a small li'l repo I'm making to store all of the items I've found while spamming infinite craft  
So far I have **489** items    
go play the game https://neal.fun/infinite-craft  
   
## Running the scraper
  
run this inside your browser with the console, make sure to not be too spammy with time as you'll get rate limited  

### Loading data from previous runs  
  
if you've ran the code before, you can load saved data like this  
  
Paste the script in first without the looping() call  
  
DO NOT load `items.json`, this is just for the database thing  
  
load `currentRecipes.json` as `currentRecipes`  
load `uniqueRecipes.json` as `recipes`  
load `items.js` as `items`  
  
### Saving data 
  
just JSON.stringify everyting  
  
For items, to keep the relative depth thing with other files you can use this regex  
```
Look for

("emoticon": .*?\n\s+"mostEfficientRecipe": \[\n\s+(.*?),\n\s+(.*?)\n\s+\])

Replace with

$1,\n\t\tget depth\(\) {\n\t\t\treturn Math.max\(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth\) + 1\n\t\t}


Removing the trailing `"depth": #`:

,\n\s+"depth": \d+

Make sure to readd the `"depth": #` to the first 4 elements

```

  
## Data
  
### Items.json
  
This file includes all items with their unicode, the most efficient recipe (so far), and their depth (sub-items you have to make)  
  
### CurrentRecipes.json
  
This file includes all possible recipes I've found so far, including backwards  
  
### UniqueRecipes.json
  
This file includes the first recipe found for each item, and removes all recipes that give the same item  
  
## Contributing
    
use the exact same format as the files from the scraper, I'm too lazy to manually sift through them  
  
