{
    "Water": {
        "emoticon": "💧",
        "depth": 0
    },
    "Fire": {
        "emoticon": "🔥",
        "depth": 0
    },
    "Wind": {
        "emoticon": "🌬️",
        "depth": 0
    },
    "Earth": {
        "emoticon": "🌍",
        "depth": 0
    },
    "Lake": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Water"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Steam": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Water",
            "Fire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wave": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Wind"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Plant": {
        "emoticon": "🌱",
        "mostEfficientRecipe": [
            "Water",
            "Earth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ocean": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Lake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cloud": {
        "emoticon": "☁️",
        "mostEfficientRecipe": [
            "Water",
            "Steam"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tsunami": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Wave"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Swamp": {
        "emoticon": "🐊",
        "mostEfficientRecipe": [
            "Water",
            "Plant"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": [
            "Water",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rain": {
        "emoticon": "🌧️",
        "mostEfficientRecipe": [
            "Water",
            "Cloud"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Marsh": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Water",
            "Swamp"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fishbowl": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Water",
            "Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rainbow": {
        "emoticon": "🌈",
        "mostEfficientRecipe": [
            "Water",
            "Rain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Volcano": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Fire",
            "Fire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoke": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Fire",
            "Wind"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lava": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Fire",
            "Earth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Engine": {
        "emoticon": "🚗",
        "mostEfficientRecipe": [
            "Fire",
            "Steam"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lightning": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": [
            "Fire",
            "Cloud"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dragon": {
        "emoticon": "🐉",
        "mostEfficientRecipe": [
            "Fire",
            "Swamp"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sushi": {
        "emoticon": "🍣",
        "mostEfficientRecipe": [
            "Fire",
            "Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Goldfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Fire",
            "Fishbowl"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sun": {
        "emoticon": "☀️",
        "mostEfficientRecipe": [
            "Fire",
            "Planet"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wasabi": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Fire",
            "Sushi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boiled Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": [
            "Fire",
            "Goldfish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Solar": {
        "emoticon": "☀️",
        "mostEfficientRecipe": [
            "Fire",
            "Sun"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fire Breath": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Wasabi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Campfire": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Wood"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bonfire": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Campfire",
            "Campfire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fog": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": [
            "Water",
            "Smoke"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stone": {
        "emoticon": "🪨",
        "mostEfficientRecipe": [
            "Water",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Electricity": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": [
            "Water",
            "Lightning"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sea Serpent": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Water",
            "Dragon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Soup": {
        "emoticon": "🍲",
        "mostEfficientRecipe": [
            "Fire",
            "Pond"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ice": {
        "emoticon": "❄️",
        "mostEfficientRecipe": [
            "Water",
            "Fog"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rock": {
        "emoticon": "🪨",
        "mostEfficientRecipe": [
            "Water",
            "Stone"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Leviathan": {
        "emoticon": "🐋",
        "mostEfficientRecipe": [
            "Water",
            "Sea Serpent"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Iceberg": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Ice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Whale": {
        "emoticon": "🐳",
        "mostEfficientRecipe": [
            "Earth",
            "Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chili": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Fire",
            "Soup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Chili"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tea": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Water",
            "Hot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Heat": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Hot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chai": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Fire",
            "Tea"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tornado": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": [
            "Wind",
            "Wind"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dust": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": [
            "Wind",
            "Earth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Storm": {
        "emoticon": "⛈️",
        "mostEfficientRecipe": [
            "Wind",
            "Lake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dandelion": {
        "emoticon": "🌼",
        "mostEfficientRecipe": [
            "Wind",
            "Plant"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hurricane": {
        "emoticon": "🌀",
        "mostEfficientRecipe": [
            "Wind",
            "Tsunami"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mist": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": [
            "Wind",
            "Swamp"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flying Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": [
            "Wind",
            "Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Eruption": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Wind",
            "Volcano"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Windmill": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": [
            "Wind",
            "Engine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Kite": {
        "emoticon": "🪁",
        "mostEfficientRecipe": [
            "Wind",
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sunflower": {
        "emoticon": "🌻",
        "mostEfficientRecipe": [
            "Wind",
            "Sun"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fire Storm": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Wind",
            "Fire Breath"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sand": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": [
            "Earth",
            "Wave"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snow": {
        "emoticon": "❄️",
        "mostEfficientRecipe": [
            "Wind",
            "Ice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sail": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": [
            "Wind",
            "Ship"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Air": {
        "emoticon": "🎈",
        "mostEfficientRecipe": [
            "Wind",
            "Warmth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sandstorm": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": [
            "Wind",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Seed": {
        "emoticon": "🌱",
        "mostEfficientRecipe": [
            "Wind",
            "Dandelion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Airplane": {
        "emoticon": "✈️",
        "mostEfficientRecipe": [
            "Wind",
            "Flying Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flying": {
        "emoticon": "✈️",
        "mostEfficientRecipe": [
            "Wind",
            "Kite"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dune": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Wind",
            "Sand"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Blizzard": {
        "emoticon": "❄️",
        "mostEfficientRecipe": [
            "Wind",
            "Snow"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sailboat": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": [
            "Wind",
            "Sail"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dust Storm": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": [
            "Wind",
            "Sandstorm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mud": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Water",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": [
            "Water",
            "Dandelion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Energy": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": [
            "Water",
            "Windmill"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Beach": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": [
            "Water",
            "Sand"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boat": {
        "emoticon": "🚤",
        "mostEfficientRecipe": [
            "Water",
            "Tractor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Oasis": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": [
            "Water",
            "Sandstorm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Earth",
            "Flying Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ship": {
        "emoticon": "🚢",
        "mostEfficientRecipe": [
            "Water",
            "Island"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Holy Water": {
        "emoticon": "💦",
        "mostEfficientRecipe": [
            "Water",
            "Wine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mirage": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Water",
            "Oasis"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Penguin": {
        "emoticon": "🐧",
        "mostEfficientRecipe": [
            "Water",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ash": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Fire",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fireworks": {
        "emoticon": "🎆",
        "mostEfficientRecipe": [
            "Fire",
            "Explosion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Glass": {
        "emoticon": "🥃",
        "mostEfficientRecipe": [
            "Fire",
            "Sand"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pirate": {
        "emoticon": "🏴‍☠️",
        "mostEfficientRecipe": [
            "Fire",
            "Sail"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Balloon": {
        "emoticon": "🎈",
        "mostEfficientRecipe": [
            "Wind",
            "Wine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Crash": {
        "emoticon": "💥",
        "mostEfficientRecipe": [
            "Fire",
            "Airplane"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Phoenix": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Ash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Brick": {
        "emoticon": "🧱",
        "mostEfficientRecipe": [
            "Fire",
            "Mud"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Alcohol": {
        "emoticon": "🍷",
        "mostEfficientRecipe": [
            "Fire",
            "Wine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Explosion": {
        "emoticon": "💥",
        "mostEfficientRecipe": [
            "Fire",
            "Energy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Desert": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": [
            "Earth",
            "Sand"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cannon": {
        "emoticon": "🔫",
        "mostEfficientRecipe": [
            "Fire",
            "Ship"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vampire": {
        "emoticon": "🧛",
        "mostEfficientRecipe": [
            "Fire",
            "Holy Water"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lens": {
        "emoticon": "🔍",
        "mostEfficientRecipe": [
            "Fire",
            "Glass"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pop": {
        "emoticon": "💥",
        "mostEfficientRecipe": [
            "Fire",
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Burn": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Alcohol"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Kiln": {
        "emoticon": "🧱",
        "mostEfficientRecipe": [
            "Fire",
            "Brick"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cannonball": {
        "emoticon": "💦",
        "mostEfficientRecipe": [
            "Fire",
            "Cannon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Magnifying Glass": {
        "emoticon": "🔍",
        "mostEfficientRecipe": [
            "Fire",
            "Lens"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Soda": {
        "emoticon": "🥤",
        "mostEfficientRecipe": [
            "Fire",
            "Pop"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pottery": {
        "emoticon": "🏺",
        "mostEfficientRecipe": [
            "Earth",
            "Clay"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ceramic": {
        "emoticon": "🏺",
        "mostEfficientRecipe": [
            "Fire",
            "Pottery"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Puddle": {
        "emoticon": "💦",
        "mostEfficientRecipe": [
            "Water",
            "Ash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Splash": {
        "emoticon": "💦",
        "mostEfficientRecipe": [
            "Water",
            "Fireworks"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Blood": {
        "emoticon": "🩸",
        "mostEfficientRecipe": [
            "Water",
            "Vampire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Microscope": {
        "emoticon": "🔬",
        "mostEfficientRecipe": [
            "Water",
            "Lens"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Nothing": {
        "emoticon": "⬜",
        "mostEfficientRecipe": [
            "Water",
            "Soda"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vase": {
        "emoticon": "🏺",
        "mostEfficientRecipe": [
            "Water",
            "Pottery"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pot": {
        "emoticon": "🥘",
        "mostEfficientRecipe": [
            "Water",
            "Ceramic"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pond": {
        "emoticon": "🐸",
        "mostEfficientRecipe": [
            "Water",
            "Puddle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Amoeba": {
        "emoticon": "🔬",
        "mostEfficientRecipe": [
            "Water",
            "Microscope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flower": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Earth",
            "Dandelion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lily": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Water",
            "Flower"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Virus": {
        "emoticon": "🦠",
        "mostEfficientRecipe": [
            "Fire",
            "Microscope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cook": {
        "emoticon": "🍳",
        "mostEfficientRecipe": [
            "Fire",
            "Pot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flu": {
        "emoticon": "🤒",
        "mostEfficientRecipe": [
            "Fire",
            "Virus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chef": {
        "emoticon": "👨‍🍳",
        "mostEfficientRecipe": [
            "Fire",
            "Cook"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fever": {
        "emoticon": "🤒",
        "mostEfficientRecipe": [
            "Fire",
            "Flu"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hell": {
        "emoticon": "👿",
        "mostEfficientRecipe": [
            "Fire",
            "Fever"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sick": {
        "emoticon": "🤒",
        "mostEfficientRecipe": [
            "Water",
            "Virus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fluoride": {
        "emoticon": "💦",
        "mostEfficientRecipe": [
            "Water",
            "Flu"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Spring": {
        "emoticon": "♨️",
        "mostEfficientRecipe": [
            "Water",
            "Hell"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Medicine": {
        "emoticon": "💊",
        "mostEfficientRecipe": [
            "Earth",
            "Cure"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Toothpaste": {
        "emoticon": "🦷",
        "mostEfficientRecipe": [
            "Water",
            "Fluoride"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Potion": {
        "emoticon": "🧪",
        "mostEfficientRecipe": [
            "Water",
            "Medicine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mouthwash": {
        "emoticon": "🦷",
        "mostEfficientRecipe": [
            "Water",
            "Toothpaste"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Elixir": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Water",
            "Potion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Devil": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "Fire",
            "Hell"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cure": {
        "emoticon": "💊",
        "mostEfficientRecipe": [
            "Water",
            "Hangover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Alchemy": {
        "emoticon": "🧪",
        "mostEfficientRecipe": [
            "Fire",
            "Elixir"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firefighter": {
        "emoticon": "🚒",
        "mostEfficientRecipe": [
            "Fire",
            "Cure"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Angel": {
        "emoticon": "👼",
        "mostEfficientRecipe": [
            "Wind",
            "Holy Water"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Window": {
        "emoticon": "🪟",
        "mostEfficientRecipe": [
            "Wind",
            "Glass"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "House": {
        "emoticon": "🏠",
        "mostEfficientRecipe": [
            "Wind",
            "Brick"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hangover": {
        "emoticon": "🍷",
        "mostEfficientRecipe": [
            "Wind",
            "Alcohol"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bat": {
        "emoticon": "🦇",
        "mostEfficientRecipe": [
            "Wind",
            "Vampire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Telescope": {
        "emoticon": "🔭",
        "mostEfficientRecipe": [
            "Wind",
            "Lens"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bubble": {
        "emoticon": "💬",
        "mostEfficientRecipe": [
            "Wind",
            "Pop"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fan": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": [
            "Wind",
            "Vase"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paramecium": {
        "emoticon": "🦠",
        "mostEfficientRecipe": [
            "Wind",
            "Amoeba"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sneeze": {
        "emoticon": "🤧",
        "mostEfficientRecipe": [
            "Wind",
            "Flu"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Breeze": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Wind",
            "Cure"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Air": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Wind",
            "Alchemy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Curtain": {
        "emoticon": "🎀",
        "mostEfficientRecipe": [
            "Wind",
            "Window"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hanglider": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Wind",
            "Hangover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Parasail": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Wind",
            "Paramecium"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mermaid": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": [
            "Water",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Aquarium": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Water",
            "Window"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Surfer": {
        "emoticon": "🏄",
        "mostEfficientRecipe": [
            "Water",
            "Hanglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Surf": {
        "emoticon": "🏄",
        "mostEfficientRecipe": [
            "Water",
            "Surfer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fireplace": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "House"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firewater": {
        "emoticon": "🔥💧",
        "mostEfficientRecipe": [
            "Fire",
            "Hangover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cough": {
        "emoticon": "🤧",
        "mostEfficientRecipe": [
            "Fire",
            "Sneeze"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flame": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Curtain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firework": {
        "emoticon": "🎆",
        "mostEfficientRecipe": [
            "Fire",
            "Hanglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Siren": {
        "emoticon": "🚨",
        "mostEfficientRecipe": [
            "Fire",
            "Mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Surfing": {
        "emoticon": "🏄",
        "mostEfficientRecipe": [
            "Fire",
            "Surfer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Warmth": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": [
            "Fire",
            "Fireplace"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lung": {
        "emoticon": "🫁",
        "mostEfficientRecipe": [
            "Water",
            "Cough"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Water": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": [
            "Water",
            "Warmth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ariel": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": [
            "Wind",
            "Mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mountain": {
        "emoticon": "🏔️",
        "mostEfficientRecipe": [
            "Earth",
            "Earth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tree": {
        "emoticon": "🌳",
        "mostEfficientRecipe": [
            "Earth",
            "Plant"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Island": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": [
            "Earth",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tractor": {
        "emoticon": "🚜",
        "mostEfficientRecipe": [
            "Earth",
            "Engine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rice": {
        "emoticon": "🍚",
        "mostEfficientRecipe": [
            "Earth",
            "Sushi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Planet": {
        "emoticon": "🪐",
        "mostEfficientRecipe": [
            "Earth",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dirt": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Earth",
            "Holy Water"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Titan": {
        "emoticon": "🌎",
        "mostEfficientRecipe": [
            "Earth",
            "Leviathan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pepper": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Earth",
            "Chili"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Teapot": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Earth",
            "Tea"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snowman": {
        "emoticon": "☃️",
        "mostEfficientRecipe": [
            "Earth",
            "Snow"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Landing": {
        "emoticon": "🛬",
        "mostEfficientRecipe": [
            "Earth",
            "Airplane"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Clay": {
        "emoticon": "🏺",
        "mostEfficientRecipe": [
            "Earth",
            "Mud"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vineyard": {
        "emoticon": "🍇",
        "mostEfficientRecipe": [
            "Earth",
            "Wine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chicken": {
        "emoticon": "🐔",
        "mostEfficientRecipe": [
            "Earth",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Soil": {
        "emoticon": "🌱",
        "mostEfficientRecipe": [
            "Earth",
            "Ash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bottle": {
        "emoticon": "🍾",
        "mostEfficientRecipe": [
            "Earth",
            "Glass"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Treasure": {
        "emoticon": "💎",
        "mostEfficientRecipe": [
            "Earth",
            "Pirate"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Moon": {
        "emoticon": "🌙",
        "mostEfficientRecipe": [
            "Earth",
            "Planet"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Meteor": {
        "emoticon": "💫",
        "mostEfficientRecipe": [
            "Earth",
            "Crash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dracula": {
        "emoticon": "🧛",
        "mostEfficientRecipe": [
            "Earth",
            "Vampire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fossil": {
        "emoticon": "🦴",
        "mostEfficientRecipe": [
            "Earth",
            "Magnifying Glass"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bacteria": {
        "emoticon": "🦠",
        "mostEfficientRecipe": [
            "Earth",
            "Microscope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Life": {
        "emoticon": "🌱",
        "mostEfficientRecipe": [
            "Earth",
            "Amoeba"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Earthquake": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Earth",
            "Fever"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fluorite": {
        "emoticon": "🔲",
        "mostEfficientRecipe": [
            "Earth",
            "Fluoride"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Farm": {
        "emoticon": "🐄",
        "mostEfficientRecipe": [
            "Earth",
            "Tractor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cave": {
        "emoticon": "🕳️",
        "mostEfficientRecipe": [
            "Earth",
            "Bat"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Parachute": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Earth",
            "Hanglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paratrooper": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Earth",
            "Parasail"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Spring": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Earth",
            "Warmth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Forest": {
        "emoticon": "🌲",
        "mostEfficientRecipe": [
            "Earth",
            "Tree"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wood": {
        "emoticon": "🌲",
        "mostEfficientRecipe": [
            "Forest",
            "Tree"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Jungle": {
        "emoticon": "🌴",
        "mostEfficientRecipe": [
            "Forest",
            "Forest"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Monkey": {
        "emoticon": "🐒",
        "mostEfficientRecipe": [
            "Jungle",
            "Life"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Continent": {
        "emoticon": "🌎",
        "mostEfficientRecipe": [
            "Earth",
            "Island"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paddy": {
        "emoticon": "🍀",
        "mostEfficientRecipe": [
            "Earth",
            "Rice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Atlas": {
        "emoticon": "🌍",
        "mostEfficientRecipe": [
            "Earth",
            "Titan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Spice": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Earth",
            "Pepper"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Egg": {
        "emoticon": "🥚",
        "mostEfficientRecipe": [
            "Earth",
            "Chicken"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Gold": {
        "emoticon": "💛",
        "mostEfficientRecipe": [
            "Earth",
            "Treasure"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Eclipse": {
        "emoticon": "🌑",
        "mostEfficientRecipe": [
            "Earth",
            "Moon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Oil": {
        "emoticon": "🛢️",
        "mostEfficientRecipe": [
            "Earth",
            "Fossil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Human": {
        "emoticon": "👨",
        "mostEfficientRecipe": [
            "Earth",
            "Life"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Field": {
        "emoticon": "🌾",
        "mostEfficientRecipe": [
            "Earth",
            "Farm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mine": {
        "emoticon": "⛏️",
        "mostEfficientRecipe": [
            "Earth",
            "Cave"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Basket": {
        "emoticon": "🏀",
        "mostEfficientRecipe": [
            "Earth",
            "Parachute"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Farmer": {
        "emoticon": "🚜",
        "mostEfficientRecipe": [
            "Earth",
            "Human"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Land": {
        "emoticon": "🌄",
        "mostEfficientRecipe": [
            "Earth",
            "Continent"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Globe": {
        "emoticon": "🌎",
        "mostEfficientRecipe": [
            "Earth",
            "Atlas"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Curry": {
        "emoticon": "🍛",
        "mostEfficientRecipe": [
            "Earth",
            "Spice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Money": {
        "emoticon": "💵",
        "mostEfficientRecipe": [
            "Earth",
            "Gold"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fuel": {
        "emoticon": "⛽",
        "mostEfficientRecipe": [
            "Earth",
            "Oil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Potato": {
        "emoticon": "🥔",
        "mostEfficientRecipe": [
            "Earth",
            "Basket"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "World": {
        "emoticon": "🌎",
        "mostEfficientRecipe": [
            "Earth",
            "Globe"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "India": {
        "emoticon": "🇮🇳",
        "mostEfficientRecipe": [
            "Earth",
            "Curry"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vodka": {
        "emoticon": "🍸",
        "mostEfficientRecipe": [
            "Earth",
            "Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taj Mahal": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": [
            "Earth",
            "India"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "River": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Tree"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tide": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Moon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Meteorite": {
        "emoticon": "💫",
        "mostEfficientRecipe": [
            "Water",
            "Meteor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fluorine": {
        "emoticon": "⚛️",
        "mostEfficientRecipe": [
            "Water",
            "Fluorite"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fountain": {
        "emoticon": "⛲",
        "mostEfficientRecipe": [
            "Water",
            "Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Titanic": {
        "emoticon": "🚢",
        "mostEfficientRecipe": [
            "Water",
            "Atlas"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Emulsion": {
        "emoticon": "💧",
        "mostEfficientRecipe": [
            "Water",
            "Oil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Well": {
        "emoticon": "🚰",
        "mostEfficientRecipe": [
            "Water",
            "Mine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fisherman": {
        "emoticon": "🎣",
        "mostEfficientRecipe": [
            "Water",
            "Farmer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Gasoline": {
        "emoticon": "⛽️",
        "mostEfficientRecipe": [
            "Water",
            "Fuel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ganges": {
        "emoticon": "🛶",
        "mostEfficientRecipe": [
            "Water",
            "India"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hydrofluoric Acid": {
        "emoticon": "💧",
        "mostEfficientRecipe": [
            "Water",
            "Fluorine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Milk": {
        "emoticon": "🥛",
        "mostEfficientRecipe": [
            "Water",
            "Emulsion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pump": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "Water",
            "Well"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Prometheus": {
        "emoticon": "👽",
        "mostEfficientRecipe": [
            "Fire",
            "Titan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Spicy": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Fire",
            "Pepper"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Roast": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Chicken"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bomb": {
        "emoticon": "💣",
        "mostEfficientRecipe": [
            "Fire",
            "Bottle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dinosaur": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "Fire",
            "Fossil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Barbecue": {
        "emoticon": "🍖",
        "mostEfficientRecipe": [
            "Fire",
            "Farm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Omelette": {
        "emoticon": "🍳",
        "mostEfficientRecipe": [
            "Fire",
            "Egg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Midas": {
        "emoticon": "👑",
        "mostEfficientRecipe": [
            "Fire",
            "Gold"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’more": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Bonfire",
            "Lake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mores": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smore": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Campfire",
            "S’more"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smores": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Farm",
            "S’more"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snake": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "S’more",
            "Jungle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Corn": {
        "emoticon": "🌽",
        "mostEfficientRecipe": [
            "Farm",
            "Jungle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Toast": {
        "emoticon": "🍞",
        "mostEfficientRecipe": [
            "S’more",
            "Fire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Marshmallow": {
        "emoticon": "🍡",
        "mostEfficientRecipe": [
            "S’more",
            "Splash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Unicorn": {
        "emoticon": "🦄",
        "mostEfficientRecipe": [
            "S’more",
            "Rainbow"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lava Cake": {
        "emoticon": "🍮",
        "mostEfficientRecipe": [
            "S’more",
            "Volcano"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rocket": {
        "emoticon": "🚀",
        "mostEfficientRecipe": [
            "S’more",
            "Engine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mushi": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Sushi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moresabi": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Wasabi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moresaurus": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "S’more",
            "Sea Serpent"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morgoth": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "S’more",
            "Leviathan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ice Cream": {
        "emoticon": "🍦",
        "mostEfficientRecipe": [
            "S’more",
            "Iceberg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mwhale": {
        "emoticon": "🐳",
        "mostEfficientRecipe": [
            "S’more",
            "Whale"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smorea": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Tea"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoreicane": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Hurricane"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sandwich": {
        "emoticon": "🥪",
        "mostEfficientRecipe": [
            "S’more",
            "Dune"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mud Pie": {
        "emoticon": "🍰",
        "mostEfficientRecipe": [
            "S’more",
            "Mud"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Camera": {
        "emoticon": "📷",
        "mostEfficientRecipe": [
            "S’more",
            "Lens"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pop’n’S’more": {
        "emoticon": "🍿",
        "mostEfficientRecipe": [
            "S’more",
            "Pop"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cup": {
        "emoticon": "🍶",
        "mostEfficientRecipe": [
            "S’more",
            "Ceramic"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mud": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Puddle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ant": {
        "emoticon": "🐜",
        "mostEfficientRecipe": [
            "S’more",
            "Microscope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mamoeba": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Amoeba"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Chocolate": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Hot Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morepill": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Medicine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mint": {
        "emoticon": "🍫🍪🌱",
        "mostEfficientRecipe": [
            "S’more",
            "Toothpaste"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Love Potion": {
        "emoticon": "🧪",
        "mostEfficientRecipe": [
            "S’more",
            "Potion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoresh": {
        "emoticon": "🔥🍫🍪",
        "mostEfficientRecipe": [
            "S’more",
            "Mouthwash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smore’": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoreover": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Hangover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Astronomer": {
        "emoticon": "🔭",
        "mostEfficientRecipe": [
            "S’more",
            "Telescope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paras’more": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "S’more",
            "Paramecium"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’neeze": {
        "emoticon": "🤧",
        "mostEfficientRecipe": [
            "S’more",
            "Sneeze"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mermaid": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": [
            "S’more",
            "Mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smore’n": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Siren"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Surfmore": {
        "emoticon": "🏄",
        "mostEfficientRecipe": [
            "S’more",
            "Surfing"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoker": {
        "emoticon": "🚬",
        "mostEfficientRecipe": [
            "S’more",
            "Lung"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mars": {
        "emoticon": "🪐",
        "mostEfficientRecipe": [
            "S’more",
            "Planet"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Golem": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": [
            "S’more",
            "Clay"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bear": {
        "emoticon": "🐻",
        "mostEfficientRecipe": [
            "S’more",
            "Cave"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "America": {
        "emoticon": "🇺🇸",
        "mostEfficientRecipe": [
            "S’more",
            "Continent"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rich": {
        "emoticon": "💰",
        "mostEfficientRecipe": [
            "S’more",
            "Gold"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Baked Potato": {
        "emoticon": "🥔",
        "mostEfficientRecipe": [
            "S’more",
            "Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Samosa": {
        "emoticon": "🥙",
        "mostEfficientRecipe": [
            "S’more",
            "India"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moretini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": [
            "S’more",
            "Vodka"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreganic": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Tide"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flamingo": {
        "emoticon": "🦩",
        "mostEfficientRecipe": [
            "S’more",
            "Fluorine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morgasbord": {
        "emoticon": "🍫🔥🍪",
        "mostEfficientRecipe": [
            "S’more",
            "Hydrofluoric Acid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pumpkin": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "S’more",
            "Pump"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dino-mite": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "S’more",
            "Dinosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’momelette": {
        "emoticon": "🍳",
        "mostEfficientRecipe": [
            "S’more",
            "Omelette"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Popcorn": {
        "emoticon": "🍿",
        "mostEfficientRecipe": [
            "S’more",
            "Corn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morcorn": {
        "emoticon": "🌽",
        "mostEfficientRecipe": [
            "S’more",
            "Unicorn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moresabis": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Smore",
            "S’moresabi"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moresaurus Rex": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "Smore",
            "S’moresaurus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mores Ice Cream": {
        "emoticon": "🍨",
        "mostEfficientRecipe": [
            "S’more",
            "Ice Cream"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morea": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Smorea"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreicane": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "S’more",
            "Smoreicane"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreswich": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Sandwich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pop’n’s’more": {
        "emoticon": "🍿",
        "mostEfficientRecipe": [
            "Snake",
            "Pop’n’S’more"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morepillow": {
        "emoticon": "🍫🔥🛏️",
        "mostEfficientRecipe": [
            "Smore",
            "S’morepill"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Love": {
        "emoticon": "❤️",
        "mostEfficientRecipe": [
            "Smore",
            "Love Potion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreover": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Smoreover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mermore": {
        "emoticon": "🍌",
        "mostEfficientRecipe": [
            "S’more",
            "S’mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mars": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Mars"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smokey": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "S’more",
            "Bear"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’mosa": {
        "emoticon": "🍹",
        "mostEfficientRecipe": [
            "S’more",
            "Samosa"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’more-gasbord": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "S’more",
            "S’morgasbord"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pie": {
        "emoticon": "🥧",
        "mostEfficientRecipe": [
            "Smore",
            "Pumpkin"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’more-saurus": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "Dino-mite"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Movie": {
        "emoticon": "🎥",
        "mostEfficientRecipe": [
            "S’more",
            "Popcorn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’morewich": {
        "emoticon": "🍪",
        "mostEfficientRecipe": [
            "S’more",
            "S’moreswich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreovermore": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "S’more",
            "S’moreover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreovermoreovermore": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "Smore",
            "S’moreovermore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Selfie": {
        "emoticon": "🤳",
        "mostEfficientRecipe": [
            "Smore",
            "Camera"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoreshmore": {
        "emoticon": "🔥🍫🍪",
        "mostEfficientRecipe": [
            "Smore",
            "Smoresh"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smore’s": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Smore",
            "Smore’"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Star": {
        "emoticon": "⭐️",
        "mostEfficientRecipe": [
            "Smore",
            "Astronomer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Teddy": {
        "emoticon": "🧸",
        "mostEfficientRecipe": [
            "Smore",
            "Bear"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Richmore": {
        "emoticon": "💵",
        "mostEfficientRecipe": [
            "Smore",
            "Rich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreorgasbord": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "Smore",
            "S’morgasbord"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’momore": {
        "emoticon": "🍫🔥🍪",
        "mostEfficientRecipe": [
            "Smore",
            "S’momelette"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreovermoreovermoreovermore": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "S’more",
            "S’moreovermoreovermore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Selfmore": {
        "emoticon": "🍌",
        "mostEfficientRecipe": [
            "S’more",
            "Selfie"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Richsmore": {
        "emoticon": "🏰",
        "mostEfficientRecipe": [
            "Smore",
            "Richmore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’moreovermoreovermoreovermoreovermore": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "S’more",
            "S’moreovermoreovermoreovermore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Richmores’more": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "S’more",
            "Richmore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Richmores’mores’more": {
        "emoticon": "🍫🔥🏕️",
        "mostEfficientRecipe": [
            "Smore",
            "Richmores’more"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hydra": {
        "emoticon": "🐉",
        "mostEfficientRecipe": [
            "Snake",
            "Snake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cobra": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "Corn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snake Whale": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "S’mwhale"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Medusa": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "Golem"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Anaconda": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "Sandwich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Photographer": {
        "emoticon": "📷",
        "mostEfficientRecipe": [
            "Snake",
            "Camera"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Poison": {
        "emoticon": "☠️",
        "mostEfficientRecipe": [
            "Snake",
            "Cup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Centipede": {
        "emoticon": "🦟",
        "mostEfficientRecipe": [
            "Snake",
            "Ant"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cocoa": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Snake",
            "Hot Chocolate"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snake’s Mint": {
        "emoticon": "🐍🌿",
        "mostEfficientRecipe": [
            "Snake",
            "S’mint"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ophiuchus": {
        "emoticon": "⛎",
        "mostEfficientRecipe": [
            "Snake",
            "Astronomer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "S’snake": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "S’mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Surfboard": {
        "emoticon": "🏄",
        "mostEfficientRecipe": [
            "Snake",
            "Surfmore"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Smoking Snake": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "Smoker"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ares": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Snake",
            "Mars"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bald Eagle": {
        "emoticon": "🦅",
        "mostEfficientRecipe": [
            "Snake",
            "America"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Riches": {
        "emoticon": "💰",
        "mostEfficientRecipe": [
            "Snake",
            "Rich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Potato Salad": {
        "emoticon": "🥔",
        "mostEfficientRecipe": [
            "Snake",
            "Baked Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snakebite": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "S’moretini"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snakebord": {
        "emoticon": "🐍🛹",
        "mostEfficientRecipe": [
            "Snake",
            "S’morgasbord"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Jack-o-Lantern": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "Snake",
            "Pumpkin"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "T-Rex": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "Snake",
            "Dino-mite"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snake in the Grass": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "S’mores Ice Cream"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snakewich": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Snake",
            "S’moreswich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Ice": {
        "emoticon": "🧊",
        "mostEfficientRecipe": [
            "Ice",
            "Hot Chocolate"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chimpunk": {
        "emoticon": "🐒",
        "mostEfficientRecipe": [
            "Monkey",
            "Hot Chocolate"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Gorgon": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Monkey",
            "Medusa"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chocolate": {
        "emoticon": "🍫",
        "mostEfficientRecipe": [
            "Monkey",
            "Cocoa"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chimpanzee": {
        "emoticon": "🐒",
        "mostEfficientRecipe": [
            "Monkey",
            "Chocolate"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    }
}