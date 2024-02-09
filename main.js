var maxElementReachedForElement = {};
var totalElements = 0;
var firstElement = 0;
var secondElement = 0;
var loops = 0

var currentRecipes = {};
var colour_flag = false

var highlights = []
var colour_highlight = "#00E0C0"
var colour_normal = "#FFFFFF"
var items = {
	"Water": {
		emoticon: "💧",
		depth: 0
	},
	"Fire": {
		emoticon: "🔥",
		depth: 0
	},
	"Wind": {
		emoticon: "🌬️",
		depth: 0
	},
	"Earth": {
		emoticon: "🌍",
		depth: 0
	}
}

var intervalid = null

var embeds = []

var lastRequestData = {}

// Save the original fetch function
const originalFetch = window.fetch;

async function skipOver(response) {
	lastRequestData = await response.json()
	return
}

// Override the fetch function
window.fetch = function (url, options) {
  // Log the request
  console.log(`Intercepted request: ${url}`, options);

  // Call the original fetch function
  return originalFetch.apply(this, arguments)
    .then(response => {
      // Log the response
      
      // You can also access the response body as text or JSON
	  skipOver(response.clone())
      return response; // or response.json();
    })
    .catch(error => {
      console.error(`Error for request: ${url}`, error);
      throw error;
    });
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function looping(ceiling, methods, waittime) {
	while (loops < ceiling) {
			lastRequestData = {}
			console.info(loops, "loop" + (loops == 1 ? "" : "s"))
			if (loops == ceiling) {
				break
			}
			loops += 1
			let secondary = secondElement
			let primary = firstElement
			if (methods[0] == 1 || (methods[0] == 2 && loops % 2 == 1) || (methods[0] == 3 && Math.random() >= 0.5)) {
				secondary = document.getElementsByClassName('mobile-item').length - 1 - secondElement
			}
			else if (methods[0] == 4) {
				secondary = Math.round(Math.random() * (document.getElementsByClassName('mobile-item').length - 1))
			}
			else if (methods[0] == 5) {
				secondary = [secondElement, Math.round(Math.random() * (document.getElementsByClassName('mobile-item').length - 1)), document.getElementsByClassName('mobile-item').length - 1 - secondElement][Math.round(Math.random() * 2)]
			}
			
			if (methods[1] == 1 || (methods[1] == 2 && loops % 2 == 1) || (methods[1] == 3 && Math.random() >= 0.5)) {
				primary = document.getElementsByClassName('mobile-item').length - 1 - firstElement
			}
			else if (methods[1] == 4) {
				primary = Math.round(Math.random() * (document.getElementsByClassName('mobile-item').length - 1))
			}
			else if (methods[1] == 5) {
				primary = [firstElement, Math.round(Math.random() * (document.getElementsByClassName('mobile-item').length - 1)), document.getElementsByClassName('mobile-item').length - 1 - firstElement][Math.round(Math.random() * 2)]
			}
			let element_1 = document.getElementsByClassName('mobile-item')[primary].getElementsByClassName('item')[0]
			let element_2 = document.getElementsByClassName('mobile-item')[secondary].getElementsByClassName('item')[0]
			
			
			let firstName = element_1.id.slice(5)
			let secondName = element_2.id.slice(5)
			if (currentRecipes[secondName] != undefined) {
				if (currentRecipes[secondName][firstName] != undefined) {
					totalElements = document.getElementsByClassName('mobile-item').length;

					secondElement = (secondElement + 1) % totalElements;
					if (secondElement == 0) {
						maxElementReachedForElement[firstElement] = totalElements;	
						if (Object.keys(maxElementReachedForElement).some(item => maxElementReachedForElement[item] < totalElements)) {
							let prevStart = Object.keys(maxElementReachedForElement).find(item => maxElementReachedForElement[item] < totalElements);
							firstElement = Number(prevStart);
							secondElement = maxElementReachedForElement[prevStart]; // Start from previous end
						} else {
							firstElement = (firstElement + 1) % totalElements;
							secondElement = firstElement; // No need to repeat the previous combinations.
						}
					}
					
					var preset_values = items[currentRecipes[secondName][firstName]]

					let depth = Math.max(items[firstName].depth, items[secondName].depth) + 1
					if (depth < preset_values.depth) {
						preset_values.mostEfficientRecipe = {item_1:firstName, item_2:secondName}
						console.log(`More efficient recipe found for ${currentRecipes[secondName][firstName]}
Depth: ${depth}
Item1: firstName
Item2: secondName`)
					}
					continue
				}
			}
			
			element_1.click();
			element_2.click();
			if (waittime == "random") {
				await sleep(300 + Math.random() * 1000)
			} else {
				await sleep(waittime)
			}
			totalElements = document.getElementsByClassName('mobile-item').length;
			let element_3 = document.getElementsByClassName('mobile-item')[totalElements - 1].getElementsByClassName('item')[0]

			secondElement = (secondElement + 1) % totalElements;

			if (secondElement == 0) {
				maxElementReachedForElement[firstElement] = totalElements;	
				if (Object.keys(maxElementReachedForElement).some(item => maxElementReachedForElement[item] < totalElements)) {
					let prevStart = Object.keys(maxElementReachedForElement).find(item => maxElementReachedForElement[item] < totalElements);
					firstElement = Number(prevStart);
					secondElement = maxElementReachedForElement[prevStart]; // Start from previous end
				} else {
					firstElement = (firstElement + 1) % totalElements;
					secondElement = firstElement; // No need to repeat the previous combinations.
				}
			}
			if (currentRecipes[firstName] == undefined) currentRecipes[firstName] = {}
			if (currentRecipes[secondName] == undefined) currentRecipes[secondName] = {}
			let total = document.getElementsByClassName('mobile-item').length
			let result = {
				result: lastRequestData.result,
				emoji: lastRequestData.emoji
				
			}

			console.log(firstName, secondName, items, result.result)
			
			if (result.result in items) {
				if (items[result.result].recipes) {
					if (items[result.result].depth > Math.max(items[firstName].depth, items[secondName].depth) + 1) {
						items[result.result].mostEfficientRecipe = {item_1: firstName, item_2: secondName}
					}
					items[result.result].recipes.push({item_1: firstName, item_2: secondName})					
				}
			}
			currentRecipes[firstName][secondName] = result.result
			currentRecipes[secondName][firstName] = result.result
			if (!(result.result in items)) {
				console.info("new")
				colour_flag = true
				
				var preset_values = {
					emoticon: result.emoji || "⬜",
					mostEfficientRecipe: null,
					recipes: null
				}
				const depthCalc = function () {
					return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1;
				};

				// Use Object.defineProperty to define the 'sum' property with the getter
				Object.defineProperty(preset_values, 'depth', {
					get: depthCalc,
				});
				
				preset_values.mostEfficientRecipe = {item_1: firstName, item_2: secondName}
				preset_values.recipes = [{item_1: firstName, item_2: secondName}]
				items[result.result] = preset_values
			}
			document.title = firstName + '+' + secondName + '|' + result.result + result.emoji;
			if (colour_flag) {
				colour_flag = false
				if (highlights.length >= 10) {
					for (const el of highlights) {
						el.style.background = colour_normal
					}
					highlights = []
					colour_highlight = getRandomColor()
				}
				let this_element = Array.from(document.getElementsByClassName('items')[0].getElementsByClassName("item")).slice(-1)[0]
				this_element.style.background = colour_highlight
				highlights.push(this_element)
			}
			
			
	}
	loops = 0
}

looping(1000, [0, 0], "random")

/*
Param 1 is the amount of loops

Param 2 is an array of how it will scan

0 will make it scan ascendingly
1 will make it scan descendingly
2 will make it alternate between ascending and descending depending on if the loop is odd or even
3 will make it alternate randomly between each
4 will make it choose a random element
5 will make it choose a random method

Param 3 is how much time to wait between loops, random will be a number from 300 to 1300
*/