{
    "420": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Plant",
            "Lotus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
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
    "Steam": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Fire",
            "Ocean"
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
    "Lava": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Fire",
            "Volcano"
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
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fire Breath": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Water",
            "Volcano"
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
    "Sea Serpent": {
        "emoticon": "🐍",
        "mostEfficientRecipe": [
            "Water",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Soup": {
        "emoticon": "🍲",
        "mostEfficientRecipe": [
            "Water",
            "Fire Breath"
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
    "Whale": {
        "emoticon": "🐳",
        "mostEfficientRecipe": [
            "Fire",
            "Fog"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lightning": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": [
            "Fire",
            "Sea Serpent"
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
    "Sun": {
        "emoticon": "☀️",
        "mostEfficientRecipe": [
            "Fire",
            "Lightning"
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
            "Volcano"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Kite": {
        "emoticon": "🪁",
        "mostEfficientRecipe": [
            "Wind",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Windmill": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": [
            "Wind",
            "Boiled Fish"
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
    "Snow": {
        "emoticon": "❄️",
        "mostEfficientRecipe": [
            "Wind",
            "Leviathan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sail": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": [
            "Wind",
            "Whale"
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
    "Hot Air": {
        "emoticon": "🎈",
        "mostEfficientRecipe": [
            "Wind",
            "Tornado"
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
            "Kite"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Blizzard": {
        "emoticon": "❄️",
        "mostEfficientRecipe": [
            "Wind",
            "Hot Air"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hurricane": {
        "emoticon": "🌀",
        "mostEfficientRecipe": [
            "Water",
            "Tornado"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tsunami": {
        "emoticon": "🌊",
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
            "Hot Air"
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
    "Boat": {
        "emoticon": "🚤",
        "mostEfficientRecipe": [
            "Water",
            "Hurricane"
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
    "Wave": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Energy"
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
    "Ship": {
        "emoticon": "🚢",
        "mostEfficientRecipe": [
            "Fire",
            "Tornado"
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
            "Kite"
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
            "Fire",
            "Hot Air"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Crash": {
        "emoticon": "💥",
        "mostEfficientRecipe": [
            "Fire",
            "Hurricane"
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
            "Fire",
            "Oasis"
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
            "Crash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sand": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": [
            "Fire",
            "Desert"
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
    "Glass": {
        "emoticon": "🥃",
        "mostEfficientRecipe": [
            "Fire",
            "Cannonball"
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
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Blood": {
        "emoticon": "🩸",
        "mostEfficientRecipe": [
            "Water",
            "Cannon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Beach": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": [
            "Water",
            "Cannonball"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Microscope": {
        "emoticon": "🔬",
        "mostEfficientRecipe": [
            "Water",
            "Puddle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Magnifying Glass": {
        "emoticon": "🔍",
        "mostEfficientRecipe": [
            "Fire",
            "Puddle"
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
    "Flu": {
        "emoticon": "🤒",
        "mostEfficientRecipe": [
            "Water",
            "Magnifying Glass"
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
    "Medicine": {
        "emoticon": "💊",
        "mostEfficientRecipe": [
            "Water",
            "Fluoride"
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
    "Toothpaste": {
        "emoticon": "🦷",
        "mostEfficientRecipe": [
            "Fire",
            "Fluoride"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cure": {
        "emoticon": "💊",
        "mostEfficientRecipe": [
            "Fire",
            "Medicine"
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
    "Potion": {
        "emoticon": "🧪",
        "mostEfficientRecipe": [
            "Water",
            "Fever"
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
    "Alchemy": {
        "emoticon": "🧪",
        "mostEfficientRecipe": [
            "Wind",
            "Tsunami"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Angel": {
        "emoticon": "👼",
        "mostEfficientRecipe": [
            "Wind",
            "Ship"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hangover": {
        "emoticon": "🍷",
        "mostEfficientRecipe": [
            "Wind",
            "Desert"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bat": {
        "emoticon": "🦇",
        "mostEfficientRecipe": [
            "Wind",
            "Cannon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bubble": {
        "emoticon": "💬",
        "mostEfficientRecipe": [
            "Wind",
            "Cannonball"
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
    "Telescope": {
        "emoticon": "🔭",
        "mostEfficientRecipe": [
            "Wind",
            "Puddle"
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
            "Hell"
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
    "Flying": {
        "emoticon": "✈️",
        "mostEfficientRecipe": [
            "Wind",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hanglider": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Wind",
            "Bat"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Curtain": {
        "emoticon": "🎀",
        "mostEfficientRecipe": [
            "Water",
            "Alchemy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Aquarium": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Water",
            "Telescope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Fire",
            "Alchemy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firewater": {
        "emoticon": "🔥💧",
        "mostEfficientRecipe": [
            "Fire",
            "Bat"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fireplace": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Telescope"
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
    "Hot Water": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": [
            "Wind",
            "Bird"
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
    "Mud": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Earth",
            "Volcano"
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
    "Pond": {
        "emoticon": "🐸",
        "mostEfficientRecipe": [
            "Earth",
            "Goldfish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stone": {
        "emoticon": "🪨",
        "mostEfficientRecipe": [
            "Earth",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tractor": {
        "emoticon": "🚜",
        "mostEfficientRecipe": [
            "Earth",
            "Fire Breath"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dirt": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Earth",
            "Soup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Titan": {
        "emoticon": "🌎",
        "mostEfficientRecipe": [
            "Earth",
            "Whale"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pepper": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Earth",
            "Tornado"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Planet": {
        "emoticon": "🪐",
        "mostEfficientRecipe": [
            "Earth",
            "Storm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flower": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Earth",
            "Flying Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Snowman": {
        "emoticon": "☃️",
        "mostEfficientRecipe": [
            "Earth",
            "Hot Air"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dune": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Earth",
            "Sandstorm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Landing": {
        "emoticon": "🛬",
        "mostEfficientRecipe": [
            "Earth",
            "Hurricane"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vineyard": {
        "emoticon": "🍇",
        "mostEfficientRecipe": [
            "Earth",
            "Ship"
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
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Meteor": {
        "emoticon": "💫",
        "mostEfficientRecipe": [
            "Earth",
            "Alcohol"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dracula": {
        "emoticon": "🧛",
        "mostEfficientRecipe": [
            "Earth",
            "Cannon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bottle": {
        "emoticon": "🍾",
        "mostEfficientRecipe": [
            "Earth",
            "Puddle"
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
    "Life": {
        "emoticon": "🌱",
        "mostEfficientRecipe": [
            "Earth",
            "Flu"
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
    "Earthquake": {
        "emoticon": "🌋",
        "mostEfficientRecipe": [
            "Earth",
            "Alchemy"
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
    "House": {
        "emoticon": "🏠",
        "mostEfficientRecipe": [
            "Earth",
            "Telescope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Parachute": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Earth",
            "Curtain"
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
    "Spring": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Earth",
            "Mountain"
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
    "Paddy": {
        "emoticon": "🍀",
        "mostEfficientRecipe": [
            "Earth",
            "Pond"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rock": {
        "emoticon": "🪨",
        "mostEfficientRecipe": [
            "Earth",
            "Stone"
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
            "Earthquake"
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
    "Egg": {
        "emoticon": "🥚",
        "mostEfficientRecipe": [
            "Earth",
            "Spring"
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
            "Eclipse"
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
            "Egg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vase": {
        "emoticon": "🏺",
        "mostEfficientRecipe": [
            "Earth",
            "Pottery"
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
    "Pot": {
        "emoticon": "🥘",
        "mostEfficientRecipe": [
            "Earth",
            "Vase"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taj Mahal": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": [
            "Water",
            "Mountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lily": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Water",
            "Snowman"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Meteorite": {
        "emoticon": "💫",
        "mostEfficientRecipe": [
            "Water",
            "Dracula"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fluorine": {
        "emoticon": "⚛️",
        "mostEfficientRecipe": [
            "Water",
            "Earthquake"
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
            "Spice"
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
            "Egg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vodka": {
        "emoticon": "🍸",
        "mostEfficientRecipe": [
            "Water",
            "Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ganges": {
        "emoticon": "🛶",
        "mostEfficientRecipe": [
            "Water",
            "Taj Mahal"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hydrofluoric Acid": {
        "emoticon": "💧",
        "mostEfficientRecipe": [
            "Water",
            "Fountain"
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
    "River": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Fire",
            "Mountain"
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
            "Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Barbecue": {
        "emoticon": "🍖",
        "mostEfficientRecipe": [
            "Fire",
            "Spice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Midas": {
        "emoticon": "👑",
        "mostEfficientRecipe": [
            "Fire",
            "Eclipse"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Popcorn": {
        "emoticon": "🍿",
        "mostEfficientRecipe": [
            "Fire",
            "Basket"
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
    "Crop": {
        "emoticon": "🌾",
        "mostEfficientRecipe": [
            "Fire",
            "Curry"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cook": {
        "emoticon": "🍳",
        "mostEfficientRecipe": [
            "Fire",
            "Taj Mahal"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fireball": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Vodka"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Agni": {
        "emoticon": "🔥",
        "mostEfficientRecipe": [
            "Fire",
            "Ganges"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cheese": {
        "emoticon": "🧀",
        "mostEfficientRecipe": [
            "Fire",
            "River"
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
    "Human": {
        "emoticon": "👨",
        "mostEfficientRecipe": [
            "Fire",
            "Spicy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Grill": {
        "emoticon": "🍖",
        "mostEfficientRecipe": [
            "Fire",
            "Omelette"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Toast": {
        "emoticon": "🍞",
        "mostEfficientRecipe": [
            "Fire",
            "Crop"
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
    "Burnt Toast": {
        "emoticon": "🍞",
        "mostEfficientRecipe": [
            "Water",
            "Brick"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pandora": {
        "emoticon": "🌌",
        "mostEfficientRecipe": [
            "Water",
            "Prometheus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Sauce": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Water",
            "Spicy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Plesiosaur": {
        "emoticon": "🦕",
        "mostEfficientRecipe": [
            "Water",
            "Dinosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Coffee": {
        "emoticon": "☕️",
        "mostEfficientRecipe": [
            "Water",
            "Hot Sauce"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Loch Ness Monster": {
        "emoticon": "🐊",
        "mostEfficientRecipe": [
            "Water",
            "Plesiosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Nessie": {
        "emoticon": "🐙",
        "mostEfficientRecipe": [
            "Water",
            "Loch Ness Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Box": {
        "emoticon": "📦",
        "mostEfficientRecipe": [
            "Fire",
            "Hot Sauce"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sea Monster": {
        "emoticon": "🐙",
        "mostEfficientRecipe": [
            "Fire",
            "Loch Ness Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Oven": {
        "emoticon": "🍳",
        "mostEfficientRecipe": [
            "Fire",
            "Box"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Kraken": {
        "emoticon": "🐙",
        "mostEfficientRecipe": [
            "Fire",
            "Sea Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pizza": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Water",
            "Box"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Poseidon": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Water",
            "Sea Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Squid": {
        "emoticon": "🦑",
        "mostEfficientRecipe": [
            "Water",
            "Pizza"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ink": {
        "emoticon": "🖋️",
        "mostEfficientRecipe": [
            "Water",
            "Squid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Calamari": {
        "emoticon": "🦑",
        "mostEfficientRecipe": [
            "Fire",
            "Squid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tattoo": {
        "emoticon": "💉",
        "mostEfficientRecipe": [
            "Fire",
            "Ink"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Octopus": {
        "emoticon": "🐙",
        "mostEfficientRecipe": [
            "Water",
            "Tattoo"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Avalanche": {
        "emoticon": "🌨️",
        "mostEfficientRecipe": [
            "Wind",
            "Mountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Leaf": {
        "emoticon": "🍃",
        "mostEfficientRecipe": [
            "Wind",
            "Tree"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fan": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": [
            "Wind",
            "Stone"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Zeus": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": [
            "Wind",
            "Pepper"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Werewolf": {
        "emoticon": "🐺",
        "mostEfficientRecipe": [
            "Wind",
            "Dracula"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paraglider": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "Wind",
            "Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chip": {
        "emoticon": "🍟",
        "mostEfficientRecipe": [
            "Wind",
            "Taj Mahal"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Butter": {
        "emoticon": "🧈",
        "mostEfficientRecipe": [
            "Wind",
            "River"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pterodactyl": {
        "emoticon": "🦖",
        "mostEfficientRecipe": [
            "Wind",
            "Dinosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fart": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Wind",
            "Cheese"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ghost": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Water",
            "Fire"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mermaid": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": [
            "Butter",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pizza Hut": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Pterodactyl",
            "Fire Breath"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Monster": {
        "emoticon": "👾",
        "mostEfficientRecipe": [
            "Lake",
            "Nessie"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flatulence": {
        "emoticon": "💨",
        "mostEfficientRecipe": [
            "Lake",
            "Coffee"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Poltergeist": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Lake",
            "Hot Sauce"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ariel": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": [
            "Lake",
            "Pandora"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chili Pizza": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Lake",
            "Cook"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Yeti": {
        "emoticon": "🧊",
        "mostEfficientRecipe": [
            "Lake",
            "River"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Martini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": [
            "Lake",
            "Titanic"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ghost Ship": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Lake",
            "Taj Mahal"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Urn": {
        "emoticon": "⚱️",
        "mostEfficientRecipe": [
            "Lake",
            "Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Potato Chip": {
        "emoticon": "🍟",
        "mostEfficientRecipe": [
            "Lake",
            "Egg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fishing": {
        "emoticon": "🎣",
        "mostEfficientRecipe": [
            "Lake",
            "Mine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Diamond": {
        "emoticon": "💎",
        "mostEfficientRecipe": [
            "Lake",
            "Clay"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ghostbuster": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Lake",
            "Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Philosopher’s Stone": {
        "emoticon": "🧙‍♂️",
        "mostEfficientRecipe": [
            "Lake",
            "Earthquake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pringle": {
        "emoticon": "🍟",
        "mostEfficientRecipe": [
            "Lake",
            "Life"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Astronomy": {
        "emoticon": "🌌",
        "mostEfficientRecipe": [
            "Lake",
            "Dracula"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Jewel": {
        "emoticon": "💎",
        "mostEfficientRecipe": [
            "Lake",
            "Vineyard"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fireman": {
        "emoticon": "🚒",
        "mostEfficientRecipe": [
            "Lake",
            "Snowman"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Golem": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": [
            "Lake",
            "Planet"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Salt": {
        "emoticon": "🧂",
        "mostEfficientRecipe": [
            "Lake",
            "Pepper"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Plow": {
        "emoticon": "🚜",
        "mostEfficientRecipe": [
            "Lake",
            "Tractor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lighthouse": {
        "emoticon": "🌅",
        "mostEfficientRecipe": [
            "Lake",
            "Tree"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Springs": {
        "emoticon": "♨️",
        "mostEfficientRecipe": [
            "Lake",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Allergy": {
        "emoticon": "🤧",
        "mostEfficientRecipe": [
            "Golem",
            "Atlas"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sodium Auoride": {
        "emoticon": "🧂",
        "mostEfficientRecipe": [
            "Lake",
            "Splash"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mirror": {
        "emoticon": "🪞",
        "mostEfficientRecipe": [
            "Lake",
            "Phoenix"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firebird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Lake",
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cup": {
        "emoticon": "🍶",
        "mostEfficientRecipe": [
            "Lake",
            "Sandstorm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hay": {
        "emoticon": "🌾",
        "mostEfficientRecipe": [
            "Lake",
            "Plant"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Loch Ness": {
        "emoticon": "🐊",
        "mostEfficientRecipe": [
            "Lake",
            "Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Penguin": {
        "emoticon": "🐧",
        "mostEfficientRecipe": [
            "Lake",
            "Fart"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Butterfly": {
        "emoticon": "🦋",
        "mostEfficientRecipe": [
            "Lake",
            "Paraglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dustbin": {
        "emoticon": "🗑️",
        "mostEfficientRecipe": [
            "Lake",
            "Leaf"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sea": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Hay",
            "Fire Storm"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boxer": {
        "emoticon": "🥊",
        "mostEfficientRecipe": [
            "Lake",
            "Plesiosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bread": {
        "emoticon": "🍞",
        "mostEfficientRecipe": [
            "Lake",
            "Human"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Limburger": {
        "emoticon": "🧀",
        "mostEfficientRecipe": [
            "Lake",
            "Dinosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Salsa": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Lake",
            "Ganges"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Seasick": {
        "emoticon": "🤢",
        "mostEfficientRecipe": [
            "Lake",
            "Fountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lotus": {
        "emoticon": "🌺",
        "mostEfficientRecipe": [
            "Lake",
            "Spice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lunar": {
        "emoticon": "🌕",
        "mostEfficientRecipe": [
            "Lake",
            "Soil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dock": {
        "emoticon": "🪜",
        "mostEfficientRecipe": [
            "Lake",
            "Mountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Salsa Verde": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": [
            "Lake",
            "Tsunami"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Mess": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Lake",
            "Hot Air"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Buddha": {
        "emoticon": "🧘‍♂️",
        "mostEfficientRecipe": [
            "Lake",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Astronaut": {
        "emoticon": "🚀",
        "mostEfficientRecipe": [
            "Lake",
            "Smoke"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pier": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": [
            "Lake",
            "Lake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taco": {
        "emoticon": "🌮",
        "mostEfficientRecipe": [
            "Lake",
            "Salsa Verde"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cactus": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Plant",
            "Hot Mess"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Nirvana": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Astronaut",
            "Lava"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dragonfly": {
        "emoticon": "🐛",
        "mostEfficientRecipe": [
            "Lake",
            "Butterfly"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tux": {
        "emoticon": "🐧",
        "mostEfficientRecipe": [
            "Lake",
            "Cup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hay Fever": {
        "emoticon": "🌾",
        "mostEfficientRecipe": [
            "Lake",
            "Lighthouse"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Saguaro": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Lake",
            "Salt"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hot Dog": {
        "emoticon": "🌭",
        "mostEfficientRecipe": [
            "Lake",
            "Astronomy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Teapot": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Lake",
            "Philosopher’s Stone"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Groom": {
        "emoticon": "🤵",
        "mostEfficientRecipe": [
            "Lake",
            "Yeti"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dust Bowl": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": [
            "Lake",
            "Ghost"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stage": {
        "emoticon": "🎤",
        "mostEfficientRecipe": [
            "Hot Dog",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pigeon": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Teapot",
            "Rice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sake": {
        "emoticon": "🍶",
        "mostEfficientRecipe": [
            "Teapot",
            "Pond"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Statue": {
        "emoticon": "🗽",
        "mostEfficientRecipe": [
            "Groom",
            "Stone"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tank": {
        "emoticon": "🛢️",
        "mostEfficientRecipe": [
            "Dust Bowl",
            "Tractor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Drama": {
        "emoticon": "🎭",
        "mostEfficientRecipe": [
            "Pigeon",
            "Fossil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pepperoni": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Sake",
            "Spice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Japan": {
        "emoticon": "🗾",
        "mostEfficientRecipe": [
            "Statue",
            "Eclipse"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Venus": {
        "emoticon": "♀️",
        "mostEfficientRecipe": [
            "Statue",
            "Oil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Minecraft": {
        "emoticon": "🏰",
        "mostEfficientRecipe": [
            "Tank",
            "Mine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hamlet": {
        "emoticon": "🎭",
        "mostEfficientRecipe": [
            "Pepperoni",
            "Bomb"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pumpkin": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "Pepperoni",
            "Dinosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Yakiniku": {
        "emoticon": "🍢",
        "mostEfficientRecipe": [
            "Venus",
            "Crop"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Aphrodite": {
        "emoticon": "💘",
        "mostEfficientRecipe": [
            "Minecraft",
            "Fireball"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "TNT": {
        "emoticon": "💣",
        "mostEfficientRecipe": [
            "Minecraft",
            "Agni"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shakespeare": {
        "emoticon": "📜",
        "mostEfficientRecipe": [
            "Hamlet",
            "Human"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Jack-o-Lantern": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "Yakiniku",
            "Pandora"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pandora Box": {
        "emoticon": "🎁",
        "mostEfficientRecipe": [
            "Aphrodite",
            "Sea Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Baklava": {
        "emoticon": "🧿",
        "mostEfficientRecipe": [
            "TNT",
            "Kraken"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pizza Bomb": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "TNT",
            "Pizza"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "The Tempest": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Jack-o-Lantern",
            "Squid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cthulhu": {
        "emoticon": "🐙",
        "mostEfficientRecipe": [
            "Pandora Box",
            "Mermaid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Evil": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "Baklava",
            "Yeti"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cyclops": {
        "emoticon": "👁️",
        "mostEfficientRecipe": [
            "Pizza Bomb",
            "Sea"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pizza Boxer": {
        "emoticon": "🍕🥊",
        "mostEfficientRecipe": [
            "Pizza Bomb",
            "Boxer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Prospero": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Cthulhu",
            "Dock"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cthulhu Verde": {
        "emoticon": "🐙🌿",
        "mostEfficientRecipe": [
            "Cthulhu",
            "Salsa Verde"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Satan": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "Cyclops",
            "Buddha"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Monk": {
        "emoticon": "🧘‍♂️",
        "mostEfficientRecipe": [
            "Pizza Boxer",
            "Nirvana"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cactus Pizza": {
        "emoticon": "🌵🍕",
        "mostEfficientRecipe": [
            "Prospero",
            "Teapot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Magician": {
        "emoticon": "🎩",
        "mostEfficientRecipe": [
            "Cthulhu Verde",
            "Cactus Pizza"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taco Bell": {
        "emoticon": "🌮",
        "mostEfficientRecipe": [
            "Magician",
            "Taco"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chihuahua": {
        "emoticon": "🐶",
        "mostEfficientRecipe": [
            "Taco Bell",
            "Cactus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Teacup": {
        "emoticon": "🍵",
        "mostEfficientRecipe": [
            "Chihuahua",
            "Groom"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cupid": {
        "emoticon": "💘",
        "mostEfficientRecipe": [
            "Teacup",
            "Venus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Herobrine": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Cupid",
            "Minecraft"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Creeper": {
        "emoticon": "💣",
        "mostEfficientRecipe": [
            "Herobrine",
            "Cthulhu"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Griefer": {
        "emoticon": "🔪",
        "mostEfficientRecipe": [
            "Creeper",
            "Evil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Hacker": {
        "emoticon": "👾",
        "mostEfficientRecipe": [
            "Griefer",
            "Prospero"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ninja": {
        "emoticon": "🥷",
        "mostEfficientRecipe": [
            "Hacker",
            "Monk"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cactus Ninja": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Ninja",
            "Magician"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taco Ninja": {
        "emoticon": "🌮",
        "mostEfficientRecipe": [
            "Cactus Ninja",
            "Teacup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taco Creeper": {
        "emoticon": "🌮👻",
        "mostEfficientRecipe": [
            "Taco Ninja",
            "Groom"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tuxedo Ninja": {
        "emoticon": "🥷",
        "mostEfficientRecipe": [
            "Taco Ninja",
            "Dust Bowl"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Taco Boxer": {
        "emoticon": "🌮🥊",
        "mostEfficientRecipe": [
            "Tuxedo Ninja",
            "Satan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Satan Ninja": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "Cactus Ninja",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Weed": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Plant",
            "Taco Bell"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Salad": {
        "emoticon": "🥗",
        "mostEfficientRecipe": [
            "Plant",
            "Evil"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Caliban": {
        "emoticon": "👹",
        "mostEfficientRecipe": [
            "Plant",
            "Pizza Bomb"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rainbow Ninja": {
        "emoticon": "🌈",
        "mostEfficientRecipe": [
            "Plant",
            "Groom"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sunflower Taco": {
        "emoticon": "🌻",
        "mostEfficientRecipe": [
            "Plant",
            "Astronaut"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Jesus": {
        "emoticon": "😇",
        "mostEfficientRecipe": [
            "Plant",
            "Lunar"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stink": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Plant",
            "Limburger"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Coca-Cola": {
        "emoticon": "🥤",
        "mostEfficientRecipe": [
            "Plant",
            "Cup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Coral": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Sunflower Taco",
            "Bat"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sneezeweed": {
        "emoticon": "🌼",
        "mostEfficientRecipe": [
            "Plant",
            "Fart"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Santa Claus": {
        "emoticon": "🎅",
        "mostEfficientRecipe": [
            "Plant",
            "Paraglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wolfsbane": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Jesus",
            "Fireplace"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Skunk": {
        "emoticon": "🦨",
        "mostEfficientRecipe": [
            "Plant",
            "Werewolf"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mountain Dew": {
        "emoticon": "💧",
        "mostEfficientRecipe": [
            "Plant",
            "Avalanche"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Reef": {
        "emoticon": "🐠",
        "mostEfficientRecipe": [
            "Plant",
            "Plesiosaur"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sneezing": {
        "emoticon": "🤧",
        "mostEfficientRecipe": [
            "Sneezeweed",
            "Bottle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rudolph": {
        "emoticon": "🦌",
        "mostEfficientRecipe": [
            "Plant",
            "River"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Poison": {
        "emoticon": "☠️",
        "mostEfficientRecipe": [
            "Plant",
            "Taj Mahal"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fruit": {
        "emoticon": "🍇",
        "mostEfficientRecipe": [
            "Skunk",
            "River"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mountain Prometheus": {
        "emoticon": "🗻",
        "mostEfficientRecipe": [
            "Mountain Dew",
            "Prometheus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Money Tree": {
        "emoticon": "🌳",
        "mostEfficientRecipe": [
            "Plant",
            "Spring"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bonsai": {
        "emoticon": "🌳",
        "mostEfficientRecipe": [
            "Plant",
            "Cave"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boxing Day": {
        "emoticon": "🎁",
        "mostEfficientRecipe": [
            "Plant",
            "Earthquake"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Toxic": {
        "emoticon": "☠️",
        "mostEfficientRecipe": [
            "Plant",
            "Bottle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pineapple": {
        "emoticon": "🍍",
        "mostEfficientRecipe": [
            "Plant",
            "Mountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fire Flower": {
        "emoticon": "🌸",
        "mostEfficientRecipe": [
            "Plant",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rich": {
        "emoticon": "💰",
        "mostEfficientRecipe": [
            "Plant",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Haybonsai": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Boxing Day",
            "Dustbin"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boxing Bin": {
        "emoticon": "🥊",
        "mostEfficientRecipe": [
            "Plant",
            "Microscope"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Green": {
        "emoticon": "💚",
        "mostEfficientRecipe": [
            "Plant",
            "Puddle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Camera": {
        "emoticon": "📷",
        "mostEfficientRecipe": [
            "Plant",
            "Phoenix"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Firefly": {
        "emoticon": "🦋",
        "mostEfficientRecipe": [
            "Plant",
            "Ship"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Bill Gates": {
        "emoticon": "💸",
        "mostEfficientRecipe": [
            "Plant",
            "Oasis"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boom": {
        "emoticon": "💥",
        "mostEfficientRecipe": [
            "Plant",
            "Tornado"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Boxing Gloves": {
        "emoticon": "🥊",
        "mostEfficientRecipe": [
            "Plant",
            "Lightning"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Green Taco": {
        "emoticon": "🌮",
        "mostEfficientRecipe": [
            "Plant",
            "Ice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Photograph": {
        "emoticon": "📷",
        "mostEfficientRecipe": [
            "Plant",
            "Fire Breath"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Glowing": {
        "emoticon": "💡",
        "mostEfficientRecipe": [
            "Plant",
            "Smoke"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mario": {
        "emoticon": "🍄",
        "mostEfficientRecipe": [
            "Plant",
            "Volcano"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Lantern": {
        "emoticon": "🏮",
        "mostEfficientRecipe": [
            "Boom",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Punch": {
        "emoticon": "👊",
        "mostEfficientRecipe": [
            "Plant",
            "Rudolph"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Unicorn": {
        "emoticon": "🦄",
        "mostEfficientRecipe": [
            "Green Taco",
            "Lightning"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sunburn": {
        "emoticon": "🌞",
        "mostEfficientRecipe": [
            "Glowing",
            "Dust"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chandelier": {
        "emoticon": "💡",
        "mostEfficientRecipe": [
            "Glowing",
            "Dandelion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flying Mario": {
        "emoticon": "🎮",
        "mostEfficientRecipe": [
            "Mario",
            "Flying Fish"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rose": {
        "emoticon": "🌹",
        "mostEfficientRecipe": [
            "Lantern",
            "Wine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Knockout": {
        "emoticon": "🥊",
        "mostEfficientRecipe": [
            "Punch",
            "Cannonball"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tragedy": {
        "emoticon": "💔",
        "mostEfficientRecipe": [
            "Unicorn",
            "Beach"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tan": {
        "emoticon": "🌞",
        "mostEfficientRecipe": [
            "Plant",
            "Dust Bowl"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Genie": {
        "emoticon": "🧞‍♂️",
        "mostEfficientRecipe": [
            "Chandelier",
            "Angel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Batman": {
        "emoticon": "🦇",
        "mostEfficientRecipe": [
            "Flying Mario",
            "Hanglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Parrot": {
        "emoticon": "🦜",
        "mostEfficientRecipe": [
            "Plant",
            "Boxer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Compost": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Rose",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Horse": {
        "emoticon": "🐴",
        "mostEfficientRecipe": [
            "Tragedy",
            "Mountain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tanning": {
        "emoticon": "🌞",
        "mostEfficientRecipe": [
            "Plant",
            "Hay"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "John Deere": {
        "emoticon": "🚜",
        "mostEfficientRecipe": [
            "Plant",
            "Mirror"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Spa": {
        "emoticon": "💆",
        "mostEfficientRecipe": [
            "Genie",
            "Tractor"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pluto": {
        "emoticon": "🌌",
        "mostEfficientRecipe": [
            "Plant",
            "Hot Springs"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Manure": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Plant",
            "Jewel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Centaur": {
        "emoticon": "🦄",
        "mostEfficientRecipe": [
            "Plant",
            "Pringle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Venus Flytrap": {
        "emoticon": "🪲",
        "mostEfficientRecipe": [
            "Plant",
            "Ghostbuster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Paratrooper": {
        "emoticon": "🪂",
        "mostEfficientRecipe": [
            "John Deere",
            "Rock"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Massage": {
        "emoticon": "💆",
        "mostEfficientRecipe": [
            "Plant",
            "Ghost"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Plutato": {
        "emoticon": "🌌",
        "mostEfficientRecipe": [
            "Pluto",
            "Potato"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fertilizer": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Plant",
            "Kraken"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Kelp": {
        "emoticon": "🌿",
        "mostEfficientRecipe": [
            "Manure",
            "Fluorine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flypaper": {
        "emoticon": "🕸️",
        "mostEfficientRecipe": [
            "Plant",
            "Coffee"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Wall": {
        "emoticon": "🧱",
        "mostEfficientRecipe": [
            "Plant",
            "Hot Sauce"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cereal": {
        "emoticon": "🥣",
        "mostEfficientRecipe": [
            "Plant",
            "Cheese"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Absinthe": {
        "emoticon": "🍸",
        "mostEfficientRecipe": [
            "Plutato",
            "Sea Monster"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Seaweed": {
        "emoticon": "🌊",
        "mostEfficientRecipe": [
            "Plant",
            "Egg"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Sea Salt": {
        "emoticon": "🧂",
        "mostEfficientRecipe": [
            "Flypaper",
            "Cup"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Flytrap": {
        "emoticon": "🪴",
        "mostEfficientRecipe": [
            "Wall",
            "Butterfly"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cocoon": {
        "emoticon": "🦋",
        "mostEfficientRecipe": [
            "Wall",
            "Boxer"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stinky": {
        "emoticon": "💩",
        "mostEfficientRecipe": [
            "Cereal",
            "Limburger"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tequila": {
        "emoticon": "🍹",
        "mostEfficientRecipe": [
            "Seaweed",
            "Dock"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Seaweed Salad": {
        "emoticon": "🍱",
        "mostEfficientRecipe": [
            "Seaweed",
            "Hot Mess"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dead Astronaut": {
        "emoticon": "👽",
        "mostEfficientRecipe": [
            "Flytrap",
            "Cactus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Christmas": {
        "emoticon": "🎄",
        "mostEfficientRecipe": [
            "Flytrap",
            "Santa Claus"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Moth": {
        "emoticon": "🦋",
        "mostEfficientRecipe": [
            "Stinky",
            "Bill Gates"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Polly": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Stinky",
            "Parrot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mezcal": {
        "emoticon": "🌵",
        "mostEfficientRecipe": [
            "Tequila",
            "Compost"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Margarita": {
        "emoticon": "🍹",
        "mostEfficientRecipe": [
            "Mezcal",
            "Unicorn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Vacation": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": [
            "Margarita",
            "Chandelier"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Comedy": {
        "emoticon": "😂",
        "mostEfficientRecipe": [
            "Vacation",
            "Tragedy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Djinn": {
        "emoticon": "🧞‍♂️",
        "mostEfficientRecipe": [
            "Comedy",
            "Genie"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Iago": {
        "emoticon": "🐦",
        "mostEfficientRecipe": [
            "Djinn",
            "Parrot"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Fly": {
        "emoticon": "🪰",
        "mostEfficientRecipe": [
            "Iago",
            "Sea Salt"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Zombie": {
        "emoticon": "🧟",
        "mostEfficientRecipe": [
            "Fly",
            "Margarita"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Zombie Apocalypse": {
        "emoticon": "🧟‍♂️",
        "mostEfficientRecipe": [
            "Zombie",
            "Vacation"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun of the Dead": {
        "emoticon": "🧟‍♂️",
        "mostEfficientRecipe": [
            "Zombie Apocalypse",
            "Comedy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Djinn": {
        "emoticon": "🧞‍♂️",
        "mostEfficientRecipe": [
            "Shaun of the Dead",
            "Djinn"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Dead": {
        "emoticon": "🧟‍♂️",
        "mostEfficientRecipe": [
            "Shaun Of The Djinn",
            "Zombie"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Rose": {
        "emoticon": "🐑🌹",
        "mostEfficientRecipe": [
            "Shaun Of The Djinn",
            "Tragedy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Tan": {
        "emoticon": "🐑🏖️",
        "mostEfficientRecipe": [
            "Shaun Of The Dead",
            "Batman"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Cereal": {
        "emoticon": "🥣",
        "mostEfficientRecipe": [
            "Shaun Of The Rose",
            "Seaweed"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dead Shaun": {
        "emoticon": "💀👻",
        "mostEfficientRecipe": [
            "Shaun Of The Rose",
            "Moth"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Thorns": {
        "emoticon": "🌾🌹🗡️",
        "mostEfficientRecipe": [
            "Shaun Of The Djinn",
            "Ocean"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Soup": {
        "emoticon": "🍜",
        "mostEfficientRecipe": [
            "Shaun Of The Djinn",
            "Leviathan"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Rainbow": {
        "emoticon": "🌈",
        "mostEfficientRecipe": [
            "Shaun Of The Dead",
            "Rainbow"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dustin": {
        "emoticon": "👦",
        "mostEfficientRecipe": [
            "Shaun Of The Rose",
            "Dandelion"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Wine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": [
            "Shaun Of The Tan",
            "Oasis"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Boat": {
        "emoticon": "🚣‍♂️",
        "mostEfficientRecipe": [
            "Shaun Of The Cereal",
            "Balloon"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Skeleton": {
        "emoticon": "💀",
        "mostEfficientRecipe": [
            "Shaun Of The Thorns",
            "Medicine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Tooth": {
        "emoticon": "🦷",
        "mostEfficientRecipe": [
            "Shaun Of The Thorns",
            "Hell"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Alchemy Soup": {
        "emoticon": "🍲🔮",
        "mostEfficientRecipe": [
            "Shaun Of The Soup",
            "Hangover"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rainbow Dash": {
        "emoticon": "🌈",
        "mostEfficientRecipe": [
            "Shaun Of The Rainbow",
            "Hanglider"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Stranger Things": {
        "emoticon": "🎃",
        "mostEfficientRecipe": [
            "Dustin",
            "Curtain"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Sea": {
        "emoticon": "🐑🌊",
        "mostEfficientRecipe": [
            "Shaun Of The Wine",
            "Bird"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Mountain": {
        "emoticon": "🏔️",
        "mostEfficientRecipe": [
            "Skeleton",
            "Island"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Rice Pudding": {
        "emoticon": "🍚",
        "mostEfficientRecipe": [
            "Skeleton",
            "Rice"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Eclipse Of The Tooth": {
        "emoticon": "🌑🦷",
        "mostEfficientRecipe": [
            "Shaun Of The Tooth",
            "Mine"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Movie": {
        "emoticon": "🎥",
        "mostEfficientRecipe": [
            "Alchemy Soup",
            "Omelette"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pinkie Pie": {
        "emoticon": "🐰",
        "mostEfficientRecipe": [
            "Rainbow Dash",
            "Ceramic"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Eleven": {
        "emoticon": "️⃣",
        "mostEfficientRecipe": [
            "Stranger Things",
            "Crop"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Shaun Of The Kraken": {
        "emoticon": "🦑",
        "mostEfficientRecipe": [
            "Shaun Of The Mountain",
            "Squid"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Chip Shaun": {
        "emoticon": "🐿️",
        "mostEfficientRecipe": [
            "Shaun Of The Mountain",
            "Pterodactyl"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pizza Rice": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Rice Pudding",
            "Pizza Hut"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ghostbuster 2": {
        "emoticon": "👻",
        "mostEfficientRecipe": [
            "Eclipse Of The Tooth",
            "Pringle"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Star Wars": {
        "emoticon": "🌌",
        "mostEfficientRecipe": [
            "Movie",
            "Astronomy"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Diamond Tiara": {
        "emoticon": "👑",
        "mostEfficientRecipe": [
            "Pinkie Pie",
            "Jewel"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Twelve": {
        "emoticon": "🔟",
        "mostEfficientRecipe": [
            "Eleven",
            "Mirror"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pigeon Of The Kraken": {
        "emoticon": "🐦🦑",
        "mostEfficientRecipe": [
            "Shaun Of The Kraken",
            "Statue"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Tank Shaun": {
        "emoticon": "🐢🚀",
        "mostEfficientRecipe": [
            "Chip Shaun",
            "Pepperoni"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Cyclops Pizza": {
        "emoticon": "🍕",
        "mostEfficientRecipe": [
            "Ghostbuster 2",
            "Rainbow Ninja"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Ghostbuster 2: Satan Ninja": {
        "emoticon": "👻👨‍🚀",
        "mostEfficientRecipe": [
            "Ghostbuster 2",
            "Coral"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Darth Vader": {
        "emoticon": "😈",
        "mostEfficientRecipe": [
            "Star Wars",
            "Skunk"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Mountain Dew Diamond": {
        "emoticon": "💎",
        "mostEfficientRecipe": [
            "Diamond Tiara",
            "Rudolph"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Olympus": {
        "emoticon": "🏔️",
        "mostEfficientRecipe": [
            "Twelve",
            "Rich"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Pigeon Of The Mario": {
        "emoticon": "🐦🍄👨",
        "mostEfficientRecipe": [
            "Pigeon Of The Kraken",
            "Genie"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Batmobile": {
        "emoticon": "🦇",
        "mostEfficientRecipe": [
            "Tank Shaun",
            "Tanning"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    },
    "Dustmobile": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": [
            "Batmobile",
            "Dustin"
        ],
		get depth() {
			return Math.max(items[this.mostEfficientRecipe[0]].depth, items[this.mostEfficientRecipe[1]].depth) + 1
		}
    }
}