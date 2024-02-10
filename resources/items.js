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
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Pond"
            },
            {
                "item_1": "Water",
                "item_2": "Mountain"
            },
            {
                "item_1": "Water",
                "item_2": "Cave"
            },
            {
                "item_1": "Water",
                "item_2": "River"
            },
            {
                "item_1": "Water",
                "item_2": "Tombstone"
            },
            {
                "item_1": "Lake",
                "item_2": "Spain"
            },
            {
                "item_1": "Water",
                "item_2": "Obsidian"
            }
        ]
    },
    "Steam": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Wave"
            },
            {
                "item_1": "Fire",
                "item_2": "Ocean"
            },
            {
                "item_1": "Fire",
                "item_2": "Engine"
            },
            {
                "item_1": "Water",
                "item_2": "Engine"
            },
            {
                "item_1": "Water",
                "item_2": "Heat"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Water",
                "item_2": "Burn"
            },
            {
                "item_1": "Fire",
                "item_2": "Puddle"
            },
            {
                "item_1": "Water",
                "item_2": "Medicine"
            },
            {
                "item_1": "Water",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Water",
                "item_2": "Flame"
            },
            {
                "item_1": "Water",
                "item_2": "Grill"
            },
            {
                "item_1": "Sea",
                "item_2": "Fire"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Earth"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Rain"
            },
            {
                "item_1": "Wind",
                "item_2": "Landslide"
            },
            {
                "item_1": "Water",
                "item_2": "Jabba the Hutt"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Springs"
            },
            {
                "item_1": "Fire",
                "item_2": "Waterfall"
            },
            {
                "item_1": "Water",
                "item_2": "Worker"
            },
            {
                "item_1": "Water",
                "item_2": "Day"
            }
        ]
    },
    "Wave": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Energy"
            },
            {
                "item_1": "Water",
                "item_2": "Breeze"
            },
            {
                "item_1": "Water",
                "item_2": "Surf"
            },
            {
                "item_1": "Parting",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Water",
                "item_2": "Love"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Wave"
            },
            {
                "item_1": "Allergy",
                "item_2": "Garnet"
            }
        ]
    },
    "Plant": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Earth"
            },
            {
                "item_1": "Water",
                "item_2": "Seed"
            },
            {
                "item_1": "Fire",
                "item_2": "Seed"
            },
            {
                "item_1": "Earth",
                "item_2": "Rain"
            },
            {
                "item_1": "Earth",
                "item_2": "Sun"
            },
            {
                "item_1": "Earth",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Earth",
                "item_2": "Airplane"
            },
            {
                "item_1": "Earth",
                "item_2": "Flower"
            },
            {
                "item_1": "Earth",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Earth",
                "item_2": "Lung"
            },
            {
                "item_1": "Earth",
                "item_2": "Pot"
            },
            {
                "item_1": "Earth",
                "item_2": "Soil"
            },
            {
                "item_1": "Earth",
                "item_2": "Farmer"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Airship",
                "item_2": "Seed"
            },
            {
                "item_1": "Earth",
                "item_2": "Coca Cola"
            },
            {
                "item_1": "Earth",
                "item_2": "Algae"
            },
            {
                "item_1": "Earth",
                "item_2": "Piranha"
            },
            {
                "item_1": "Earth",
                "item_2": "Sealion"
            },
            {
                "item_1": "Earth",
                "item_2": "Scarecrow"
            },
            {
                "item_1": "Earth",
                "item_2": "Dance"
            }
        ]
    },
    "Ocean": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Water",
                "item_2": "Solar"
            },
            {
                "item_1": "Water",
                "item_2": "Beach"
            },
            {
                "item_1": "Water",
                "item_2": "Whale"
            },
            {
                "item_1": "Water",
                "item_2": "Planet"
            },
            {
                "item_1": "Water",
                "item_2": "Continent"
            },
            {
                "item_1": "Water",
                "item_2": "Tide"
            },
            {
                "item_1": "Sea",
                "item_2": "Lake"
            },
            {
                "item_1": "Sea",
                "item_2": "Water"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Satellite"
            },
            {
                "item_1": "Lake",
                "item_2": "Tide"
            },
            {
                "item_1": "Water",
                "item_2": "BP"
            },
            {
                "item_1": "Water",
                "item_2": "Big Bang"
            },
            {
                "item_1": "Water",
                "item_2": "Universe"
            },
            {
                "item_1": "Water",
                "item_2": "Solar Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Star"
            }
        ]
    },
    "Cloud": {
        "emoticon": "☁️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Steam"
            },
            {
                "item_1": "Wind",
                "item_2": "Steam"
            },
            {
                "item_1": "Wind",
                "item_2": "Smoke"
            },
            {
                "item_1": "Wind",
                "item_2": "Electricity"
            },
            {
                "item_1": "Wind",
                "item_2": "Mist"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Wind",
                "item_2": "Fog"
            },
            {
                "item_1": "Sea",
                "item_2": "Steam"
            },
            {
                "item_1": "Hot Air Balloon",
                "item_2": "Fog"
            },
            {
                "item_1": "Lamb",
                "item_2": "Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Vapor"
            },
            {
                "item_1": "Lake",
                "item_2": "Vapor"
            },
            {
                "item_1": "Wind",
                "item_2": "Dream"
            },
            {
                "item_1": "Wind",
                "item_2": "Database"
            }
        ]
    },
    "Tsunami": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Wave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Wave"
            },
            {
                "item_1": "Water",
                "item_2": "Tornado"
            },
            {
                "item_1": "Water",
                "item_2": "Mist"
            },
            {
                "item_1": "Water",
                "item_2": "Crash"
            },
            {
                "item_1": "Water",
                "item_2": "Cannon"
            },
            {
                "item_1": "Water",
                "item_2": "Soda"
            },
            {
                "item_1": "Water",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Water",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Wave"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Water"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Lake"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Wave"
            },
            {
                "item_1": "Frankenstein",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sunami",
                "item_2": "Ocean"
            },
            {
                "item_1": "Sunami",
                "item_2": "Plant"
            },
            {
                "item_1": "Sunami",
                "item_2": "Wave"
            },
            {
                "item_1": "Sunami",
                "item_2": "Steam"
            },
            {
                "item_1": "Sunami",
                "item_2": "Lake"
            },
            {
                "item_1": "Sunami",
                "item_2": "Earth"
            },
            {
                "item_1": "Sunami",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Katana"
            },
            {
                "item_1": "Rainforest",
                "item_2": "Wave"
            },
            {
                "item_1": "Tire",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Water",
                "item_2": "Landslide"
            },
            {
                "item_1": "Pollution",
                "item_2": "Wave"
            },
            {
                "item_1": "Vapor",
                "item_2": "Penguin"
            },
            {
                "item_1": "Lake",
                "item_2": "Landslide"
            },
            {
                "item_1": "Jabba",
                "item_2": "Wave"
            },
            {
                "item_1": "Lake",
                "item_2": "Force"
            },
            {
                "item_1": "Lake",
                "item_2": "Disaster"
            },
            {
                "item_1": "Lake",
                "item_2": "Boom"
            },
            {
                "item_1": "Water",
                "item_2": "Omelette"
            }
        ]
    },
    "Swamp": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Plant"
            },
            {
                "item_1": "Water",
                "item_2": "Marsh"
            },
            {
                "item_1": "Fire",
                "item_2": "Marsh"
            },
            {
                "item_1": "Water",
                "item_2": "Mud"
            },
            {
                "item_1": "Earth",
                "item_2": "Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Marsh"
            },
            {
                "item_1": "Earth",
                "item_2": "Pond"
            },
            {
                "item_1": "Water",
                "item_2": "Forest"
            },
            {
                "item_1": "Water",
                "item_2": "Field"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Marsh"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Rain"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Water"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Storm"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Dust"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Heat"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Chili"
            },
            {
                "item_1": "Sea",
                "item_2": "Swamp Thing"
            },
            {
                "item_1": "Swamp Salad",
                "item_2": "Energy"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Swamp"
            },
            {
                "item_1": "Alligator",
                "item_2": "Plant"
            },
            {
                "item_1": "Alligator",
                "item_2": "Marsh"
            },
            {
                "item_1": "Water",
                "item_2": "Cemetery"
            },
            {
                "item_1": "Lake",
                "item_2": "Politician"
            },
            {
                "item_1": "Pink",
                "item_2": "Marsh"
            },
            {
                "item_1": "Moisture",
                "item_2": "Marsh"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Wave"
            },
            {
                "item_1": "Noodles",
                "item_2": "Marsh"
            },
            {
                "item_1": "Wind",
                "item_2": "Ramen"
            },
            {
                "item_1": "BP",
                "item_2": "Flipper"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Emperor"
            },
            {
                "item_1": "Lake",
                "item_2": "Wet Sweater"
            },
            {
                "item_1": "Lake",
                "item_2": "Moisture"
            },
            {
                "item_1": "Lake",
                "item_2": "Poison"
            },
            {
                "item_1": "Lake",
                "item_2": "Sweat"
            },
            {
                "item_1": "Lake",
                "item_2": "Slim"
            },
            {
                "item_1": "Lake",
                "item_2": "Bribe"
            },
            {
                "item_1": "Lake",
                "item_2": "Swamp Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Methane"
            },
            {
                "item_1": "Water",
                "item_2": "Swamp Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Scarecrow"
            },
            {
                "item_1": "Earth",
                "item_2": "Soggy"
            },
            {
                "item_1": "Water",
                "item_2": "Zombie"
            },
            {
                "item_1": "Water",
                "item_2": "Sinkhole"
            },
            {
                "item_1": "Water",
                "item_2": "Lawn"
            }
        ]
    },
    "Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ocean"
            },
            {
                "item_1": "Water",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Fire",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Sushi"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Balloon"
            },
            {
                "item_1": "Water",
                "item_2": "Explosion"
            },
            {
                "item_1": "Water",
                "item_2": "Bubble"
            },
            {
                "item_1": "Water",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Water",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Fire",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Water",
                "item_2": "Lung"
            },
            {
                "item_1": "Wind",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Earth",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Water",
                "item_2": "Life"
            },
            {
                "item_1": "Water",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Water",
                "item_2": "Human"
            },
            {
                "item_1": "Water",
                "item_2": "Basket"
            },
            {
                "item_1": "Water",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Fire",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Water",
                "item_2": "Bomb"
            },
            {
                "item_1": "Water",
                "item_2": "Chip"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Marsh"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Fish"
            },
            {
                "item_1": "Prayer",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Water"
            },
            {
                "item_1": "Thunder",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Shark",
                "item_2": "Fish"
            },
            {
                "item_1": "Ninja",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Star Wars"
            },
            {
                "item_1": "Fire",
                "item_2": "Fish Tank"
            },
            {
                "item_1": "Water",
                "item_2": "God"
            },
            {
                "item_1": "Lake",
                "item_2": "Lightning"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Lake",
                "item_2": "Crash"
            },
            {
                "item_1": "Fishing",
                "item_2": "Ram"
            },
            {
                "item_1": "Lake",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Lake",
                "item_2": "Bomb"
            },
            {
                "item_1": "Lake",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Lake",
                "item_2": "Seaplane"
            },
            {
                "item_1": "Lake",
                "item_2": "GPS"
            },
            {
                "item_1": "Water",
                "item_2": "Fishing Rod"
            },
            {
                "item_1": "Water",
                "item_2": "Cygnus"
            },
            {
                "item_1": "Water",
                "item_2": "Oil Spill"
            },
            {
                "item_1": "Water",
                "item_2": "Piranha"
            },
            {
                "item_1": "Fire",
                "item_2": "Piranha"
            },
            {
                "item_1": "Water",
                "item_2": "Baseball"
            },
            {
                "item_1": "Water",
                "item_2": "Knight"
            },
            {
                "item_1": "Water",
                "item_2": "Egg"
            }
        ]
    },
    "Rain": {
        "emoticon": "🌧️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Cloud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fire",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Wind",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Water",
                "item_2": "Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Splash"
            },
            {
                "item_1": "Water",
                "item_2": "Curtain"
            },
            {
                "item_1": "Earth",
                "item_2": "Cloud"
            },
            {
                "item_1": "Earth",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Cloud"
            },
            {
                "item_1": "Thunder",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Alligator",
                "item_2": "Cloud"
            },
            {
                "item_1": "Grave",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Amazon",
                "item_2": "Fire"
            },
            {
                "item_1": "Acid",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Ocean"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Sauna",
                "item_2": "Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Oyster"
            },
            {
                "item_1": "Wind",
                "item_2": "Wet"
            },
            {
                "item_1": "Water",
                "item_2": "Grass"
            }
        ]
    },
    "Marsh": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Swamp"
            },
            {
                "item_1": "Lake",
                "item_2": "Tar"
            }
        ]
    },
    "Fishbowl": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Earth",
                "item_2": "Dracula"
            }
        ]
    },
    "Rainbow": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Rain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Rain"
            },
            {
                "item_1": "Fire",
                "item_2": "Rain"
            },
            {
                "item_1": "Water",
                "item_2": "Sun"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Cloud"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Ocean"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Plant"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Wave"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Steam"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Lake"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Earth"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Wind"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Fire"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Water"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Mud"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Flying"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Airplane"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Windmill"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Eruption"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Volcano"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Marsh"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Rain"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Swamp"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Parting",
                "item_2": "Rain"
            },
            {
                "item_1": "Sunami",
                "item_2": "Cloud"
            },
            {
                "item_1": "Prism",
                "item_2": "Cannon"
            },
            {
                "item_1": "Prism",
                "item_2": "Vampire"
            },
            {
                "item_1": "Prism",
                "item_2": "Explosion"
            },
            {
                "item_1": "Prism",
                "item_2": "Brick"
            },
            {
                "item_1": "Prism",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Prism",
                "item_2": "Crash"
            },
            {
                "item_1": "Prism",
                "item_2": "Balloon"
            },
            {
                "item_1": "Prism",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Prism",
                "item_2": "Ash"
            },
            {
                "item_1": "Prism",
                "item_2": "Penguin"
            },
            {
                "item_1": "Prism",
                "item_2": "Ship"
            },
            {
                "item_1": "Prism",
                "item_2": "Mirage"
            },
            {
                "item_1": "Prism",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Prism",
                "item_2": "Bird"
            },
            {
                "item_1": "Prism",
                "item_2": "Boat"
            },
            {
                "item_1": "Prism",
                "item_2": "Energy"
            },
            {
                "item_1": "Prism",
                "item_2": "Wine"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Swamp"
            },
            {
                "item_1": "Wind",
                "item_2": "Prism"
            },
            {
                "item_1": "Lake",
                "item_2": "Prism"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Rain"
            },
            {
                "item_1": "Jet",
                "item_2": "Rain"
            },
            {
                "item_1": "Earth",
                "item_2": "Darth Rainbow"
            },
            {
                "item_1": "Tan",
                "item_2": "Plant"
            },
            {
                "item_1": "Eel",
                "item_2": "Cloud"
            },
            {
                "item_1": "Sunset",
                "item_2": "Splash"
            },
            {
                "item_1": "Water",
                "item_2": "Baptism"
            },
            {
                "item_1": "Water",
                "item_2": "Light"
            },
            {
                "item_1": "Wind",
                "item_2": "Waterfall"
            },
            {
                "item_1": "Wind",
                "item_2": "Sunrise"
            },
            {
                "item_1": "Wind",
                "item_2": "Light"
            }
        ]
    },
    "Volcano": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Fire",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fire",
                "item_2": "Lava"
            },
            {
                "item_1": "Fire",
                "item_2": "Rock"
            },
            {
                "item_1": "Wind",
                "item_2": "Lava"
            },
            {
                "item_1": "Wind",
                "item_2": "Eruption"
            },
            {
                "item_1": "Fire",
                "item_2": "Tornado"
            },
            {
                "item_1": "Fire",
                "item_2": "Storm"
            },
            {
                "item_1": "Fire",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Fire",
                "item_2": "Eruption"
            },
            {
                "item_1": "Fire",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Fire",
                "item_2": "Surf"
            },
            {
                "item_1": "Earth",
                "item_2": "Smoke"
            },
            {
                "item_1": "Earth",
                "item_2": "Lightning"
            },
            {
                "item_1": "Earth",
                "item_2": "Windmill"
            },
            {
                "item_1": "Earth",
                "item_2": "Energy"
            },
            {
                "item_1": "Earth",
                "item_2": "Sand"
            },
            {
                "item_1": "Earth",
                "item_2": "Hell"
            },
            {
                "item_1": "Earth",
                "item_2": "Bubble"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Earth",
                "item_2": "Firework"
            },
            {
                "item_1": "Earth",
                "item_2": "Flame"
            },
            {
                "item_1": "Earth",
                "item_2": "Mountain"
            },
            {
                "item_1": "Fire",
                "item_2": "Mountain"
            },
            {
                "item_1": "Fire",
                "item_2": "Island"
            },
            {
                "item_1": "Fire",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Fire",
                "item_2": "Spring"
            },
            {
                "item_1": "Fire",
                "item_2": "Continent"
            },
            {
                "item_1": "Fire",
                "item_2": "Soil"
            },
            {
                "item_1": "Fire",
                "item_2": "Mine"
            },
            {
                "item_1": "Fire",
                "item_2": "Land"
            },
            {
                "item_1": "Fire",
                "item_2": "River"
            },
            {
                "item_1": "Fire",
                "item_2": "Tide"
            },
            {
                "item_1": "Fire",
                "item_2": "Fountain"
            },
            {
                "item_1": "Fire",
                "item_2": "Well"
            },
            {
                "item_1": "Water",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Rocket",
                "item_2": "Lava"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Fish"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Lava"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Fire"
            },
            {
                "item_1": "Fireball",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Lava"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Fire"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Eruption"
            },
            {
                "item_1": "Zeppelin",
                "item_2": "Eruption"
            },
            {
                "item_1": "Politician",
                "item_2": "Eruption"
            },
            {
                "item_1": "Disaster",
                "item_2": "Dust"
            },
            {
                "item_1": "Sunami",
                "item_2": "Fire"
            },
            {
                "item_1": "Thunder",
                "item_2": "Lava"
            },
            {
                "item_1": "Thunder",
                "item_2": "Smoke"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Lake",
                "item_2": "Ninja"
            },
            {
                "item_1": "Fire",
                "item_2": "Geode"
            },
            {
                "item_1": "Wind",
                "item_2": "Aphrodite"
            },
            {
                "item_1": "Fire",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Labyrinth",
                "item_2": "Ocean"
            },
            {
                "item_1": "Fire",
                "item_2": "Pollution"
            },
            {
                "item_1": "Fire Ocean",
                "item_2": "Fire"
            },
            {
                "item_1": "Lake",
                "item_2": "Fish Tank"
            },
            {
                "item_1": "Ramen",
                "item_2": "Lava"
            },
            {
                "item_1": "Lake",
                "item_2": "Ship"
            },
            {
                "item_1": "Lake",
                "item_2": "Fire Ocean"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Springs"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Springs"
            },
            {
                "item_1": "Fire",
                "item_2": "French Onion Soup"
            },
            {
                "item_1": "Fire",
                "item_2": "Sealion"
            },
            {
                "item_1": "Fire",
                "item_2": "Drain"
            },
            {
                "item_1": "Wind",
                "item_2": "Obsidian"
            },
            {
                "item_1": "Fire",
                "item_2": "Fire Tornado"
            },
            {
                "item_1": "Earth",
                "item_2": "Napalm"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Earth",
                "item_2": "Chlorine"
            },
            {
                "item_1": "Earth",
                "item_2": "Bonfire"
            },
            {
                "item_1": "Earth",
                "item_2": "Power"
            },
            {
                "item_1": "Earth",
                "item_2": "Underworld"
            }
        ]
    },
    "Smoke": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Plant"
            },
            {
                "item_1": "Fire",
                "item_2": "Fog"
            },
            {
                "item_1": "Fire",
                "item_2": "Mist"
            },
            {
                "item_1": "Fire",
                "item_2": "Flower"
            },
            {
                "item_1": "Wind",
                "item_2": "Firefighter"
            },
            {
                "item_1": "Fire",
                "item_2": "Breeze"
            },
            {
                "item_1": "Fire",
                "item_2": "Cough"
            },
            {
                "item_1": "Fire",
                "item_2": "Lung"
            },
            {
                "item_1": "Wind",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Fire",
                "item_2": "Cave"
            },
            {
                "item_1": "Fire",
                "item_2": "Forest"
            },
            {
                "item_1": "Lake",
                "item_2": "Incense"
            },
            {
                "item_1": "Fire",
                "item_2": "Exhaust"
            },
            {
                "item_1": "Fire",
                "item_2": "Rainforest"
            },
            {
                "item_1": "Fire",
                "item_2": "Wet Sweater"
            },
            {
                "item_1": "Toxic",
                "item_2": "Earth"
            },
            {
                "item_1": "Fire",
                "item_2": "Toadstool"
            },
            {
                "item_1": "Lake",
                "item_2": "Dirt"
            },
            {
                "item_1": "Fire",
                "item_2": "Moonshine"
            },
            {
                "item_1": "Wind",
                "item_2": "Information"
            },
            {
                "item_1": "Wind",
                "item_2": "Bonfire"
            },
            {
                "item_1": "Fire",
                "item_2": "Metal"
            }
        ]
    },
    "Lava": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Earth"
            },
            {
                "item_1": "Fire",
                "item_2": "Volcano"
            },
            {
                "item_1": "Water",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Stone"
            },
            {
                "item_1": "Water",
                "item_2": "Eruption"
            },
            {
                "item_1": "Fire",
                "item_2": "Vase"
            },
            {
                "item_1": "Earth",
                "item_2": "Volcano"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot"
            },
            {
                "item_1": "Earth",
                "item_2": "Heat"
            },
            {
                "item_1": "Earth",
                "item_2": "Cough"
            },
            {
                "item_1": "Rocket",
                "item_2": "Volcano"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Volcano"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Volcano"
            },
            {
                "item_1": "Golem",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Sonar"
            },
            {
                "item_1": "Honeymoon",
                "item_2": "Volcano"
            },
            {
                "item_1": "Crystal",
                "item_2": "Hot"
            },
            {
                "item_1": "Fire",
                "item_2": "Crystal"
            },
            {
                "item_1": "Dada",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Obsidian"
            },
            {
                "item_1": "Earth",
                "item_2": "Data Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Hoth"
            }
        ]
    },
    "Engine": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Steam"
            },
            {
                "item_1": "Fire",
                "item_2": "Fuel"
            }
        ]
    },
    "Lightning": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cloud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Fire",
                "item_2": "Electricity"
            },
            {
                "item_1": "Earth",
                "item_2": "Electricity"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Stone"
            },
            {
                "item_1": "Thunder",
                "item_2": "Sushi"
            },
            {
                "item_1": "Thunder",
                "item_2": "Engine"
            },
            {
                "item_1": "Thunder",
                "item_2": "Volcano"
            },
            {
                "item_1": "Thunder",
                "item_2": "Marsh"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Tornado"
            },
            {
                "item_1": "Lake",
                "item_2": "Thunder"
            },
            {
                "item_1": "Coca-Cola",
                "item_2": "Electricity"
            },
            {
                "item_1": "Crystal",
                "item_2": "Storm"
            },
            {
                "item_1": "Fire",
                "item_2": "Electric Eel"
            },
            {
                "item_1": "Electric Eel",
                "item_2": "Rain"
            },
            {
                "item_1": "Fire",
                "item_2": "Home Run"
            },
            {
                "item_1": "Water",
                "item_2": "Firefly"
            }
        ]
    },
    "Dragon": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Swamp"
            },
            {
                "item_1": "Fire",
                "item_2": "Sushi"
            },
            {
                "item_1": "Fire",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Fire",
                "item_2": "Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Fire",
                "item_2": "Whale"
            },
            {
                "item_1": "Fire",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Fire",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Fire",
                "item_2": "Tattoo"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Plant"
            },
            {
                "item_1": "Swamp Salad",
                "item_2": "Oasis"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Dragon"
            },
            {
                "item_1": "Alligator",
                "item_2": "Lava"
            },
            {
                "item_1": "Grave",
                "item_2": "Dragon"
            },
            {
                "item_1": "Fire",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Darth Rainbow",
                "item_2": "Chili"
            },
            {
                "item_1": "Fire",
                "item_2": "Jaws"
            },
            {
                "item_1": "Fire",
                "item_2": "Tanning"
            },
            {
                "item_1": "Fire",
                "item_2": "Wizard"
            },
            {
                "item_1": "Fire",
                "item_2": "Knight"
            },
            {
                "item_1": "Wind",
                "item_2": "Plow"
            }
        ]
    },
    "Sushi": {
        "emoticon": "🍣",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Rice"
            },
            {
                "item_1": "Fire",
                "item_2": "Rice"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Toast"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Cheese"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Chip"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Crop"
            },
            {
                "item_1": "Fruit Salad",
                "item_2": "Fish"
            },
            {
                "item_1": "Twister",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Miso",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Miso",
                "item_2": "Sushi"
            },
            {
                "item_1": "Water",
                "item_2": "Samurai"
            },
            {
                "item_1": "Wind",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Ramen",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Noodles",
                "item_2": "Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Sauna"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Binks"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Steam Monster"
            },
            {
                "item_1": "Pasta",
                "item_2": "Gungan"
            }
        ]
    },
    "Goldfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fishbowl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Shrimp",
                "item_2": "Gold"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Thunder",
                "item_2": "Goldfish"
            }
        ]
    },
    "Sun": {
        "emoticon": "☀️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Planet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Lightning"
            },
            {
                "item_1": "Fire",
                "item_2": "Solar"
            },
            {
                "item_1": "Fire",
                "item_2": "Heat"
            },
            {
                "item_1": "Fire",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Fire",
                "item_2": "Beach"
            },
            {
                "item_1": "Fire",
                "item_2": "Telescope"
            },
            {
                "item_1": "Fire",
                "item_2": "Warmth"
            },
            {
                "item_1": "Fire",
                "item_2": "Planet"
            },
            {
                "item_1": "Fire",
                "item_2": "Meteor"
            },
            {
                "item_1": "Fire",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Fire",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Kettle",
                "item_2": "Solar"
            },
            {
                "item_1": "Fireball",
                "item_2": "Window"
            },
            {
                "item_1": "Duck Sauce",
                "item_2": "Sun"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Kite"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Laser",
                "item_2": "Fire"
            },
            {
                "item_1": "Alien",
                "item_2": "Hot"
            },
            {
                "item_1": "Hot Air Balloon",
                "item_2": "Solar"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Engine"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Lava"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Smoke"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Rain"
            },
            {
                "item_1": "Burning Love",
                "item_2": "Solar"
            },
            {
                "item_1": "Wind",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Tan",
                "item_2": "Earth"
            },
            {
                "item_1": "Lake",
                "item_2": "Lens"
            },
            {
                "item_1": "Lake",
                "item_2": "Solar Flare"
            },
            {
                "item_1": "Lake",
                "item_2": "Sunflower"
            },
            {
                "item_1": "Lake",
                "item_2": "Monet"
            },
            {
                "item_1": "Lake",
                "item_2": "Baptism"
            },
            {
                "item_1": "Fire",
                "item_2": "Sunset"
            },
            {
                "item_1": "Fire",
                "item_2": "Googol"
            },
            {
                "item_1": "Fire",
                "item_2": "Baptist"
            },
            {
                "item_1": "Fire",
                "item_2": "Light"
            },
            {
                "item_1": "Fire",
                "item_2": "Galaxy"
            },
            {
                "item_1": "Fire",
                "item_2": "Solar System"
            },
            {
                "item_1": "Fire",
                "item_2": "Day"
            },
            {
                "item_1": "Fire",
                "item_2": "Star"
            }
        ]
    },
    "undefined": {
        "emoticon": "⬜",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Dust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Dragon"
            },
            {
                "item_1": "Water",
                "item_2": "Electricity"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Wind",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Fog"
            },
            {
                "item_1": "Wind",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Soup"
            },
            {
                "item_1": "Wind",
                "item_2": "Rock"
            },
            {
                "item_1": "Wind",
                "item_2": "Dust"
            },
            {
                "item_1": "Wind",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Water",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Fire",
                "item_2": "Oasis"
            },
            {
                "item_1": "Fire",
                "item_2": "Ship"
            },
            {
                "item_1": "Fire",
                "item_2": "Penguin"
            },
            {
                "item_1": "Fire",
                "item_2": "Ash"
            },
            {
                "item_1": "Water",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Water",
                "item_2": "Glass"
            },
            {
                "item_1": "Water",
                "item_2": "Lens"
            },
            {
                "item_1": "Water",
                "item_2": "Puddle"
            },
            {
                "item_1": "Fire",
                "item_2": "Splash"
            },
            {
                "item_1": "Fire",
                "item_2": "Microscope"
            },
            {
                "item_1": "Water",
                "item_2": "Sick"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Fire",
                "item_2": "Sick"
            },
            {
                "item_1": "Fire",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Wind",
                "item_2": "Kiln"
            },
            {
                "item_1": "Wind",
                "item_2": "Curtain"
            },
            {
                "item_1": "Water",
                "item_2": "Angel"
            },
            {
                "item_1": "Water",
                "item_2": "Window"
            },
            {
                "item_1": "Fire",
                "item_2": "Fan"
            },
            {
                "item_1": "Fire",
                "item_2": "Siren"
            },
            {
                "item_1": "Wind",
                "item_2": "Cough"
            },
            {
                "item_1": "Wind",
                "item_2": "Firework"
            },
            {
                "item_1": "Wind",
                "item_2": "Flame"
            },
            {
                "item_1": "Wind",
                "item_2": "Siren"
            },
            {
                "item_1": "Wind",
                "item_2": "Surfing"
            },
            {
                "item_1": "Earth",
                "item_2": "Lava"
            },
            {
                "item_1": "Earth",
                "item_2": "Eruption"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Earth",
                "item_2": "Seed"
            },
            {
                "item_1": "Earth",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Boat"
            },
            {
                "item_1": "Earth",
                "item_2": "Mirage"
            },
            {
                "item_1": "Earth",
                "item_2": "Ship"
            },
            {
                "item_1": "Earth",
                "item_2": "Penguin"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Earth",
                "item_2": "Balloon"
            },
            {
                "item_1": "Earth",
                "item_2": "Crash"
            },
            {
                "item_1": "Earth",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Earth",
                "item_2": "Brick"
            },
            {
                "item_1": "Earth",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Earth",
                "item_2": "Explosion"
            },
            {
                "item_1": "Earth",
                "item_2": "Desert"
            },
            {
                "item_1": "Earth",
                "item_2": "Vampire"
            },
            {
                "item_1": "Earth",
                "item_2": "Cannon"
            },
            {
                "item_1": "Earth",
                "item_2": "Pop"
            },
            {
                "item_1": "Earth",
                "item_2": "Burn"
            },
            {
                "item_1": "Earth",
                "item_2": "Kiln"
            },
            {
                "item_1": "Earth",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Earth",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Earth",
                "item_2": "Firewater"
            },
            {
                "item_1": "Earth",
                "item_2": "Planet"
            },
            {
                "item_1": "Earth",
                "item_2": "Snow"
            },
            {
                "item_1": "Fire",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Fire",
                "item_2": "Parachute"
            },
            {
                "item_1": "Fire",
                "item_2": "Money"
            },
            {
                "item_1": "Fire",
                "item_2": "Kraken"
            },
            {
                "item_1": "Water",
                "item_2": "Ink"
            },
            {
                "item_1": "Wind",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Wind",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Wind",
                "item_2": "Treasure"
            },
            {
                "item_1": "Wind",
                "item_2": "Forest"
            },
            {
                "item_1": "Wind",
                "item_2": "Oil"
            },
            {
                "item_1": "Wind",
                "item_2": "Gold"
            },
            {
                "item_1": "Wind",
                "item_2": "Land"
            },
            {
                "item_1": "Wind",
                "item_2": "Fuel"
            },
            {
                "item_1": "Wind",
                "item_2": "Potato"
            },
            {
                "item_1": "Kettle",
                "item_2": "Ice"
            },
            {
                "item_1": "Kettle",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Kettle",
                "item_2": "Stone"
            },
            {
                "item_1": "Kettle",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Kettle",
                "item_2": "Sushi"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Rain"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Swamp"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Lake"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Chai"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Hot"
            },
            {
                "item_1": "Swamp Fish",
                "item_2": "Engine"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Smoke"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Fish"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Lake"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Earth"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Fire"
            },
            {
                "item_1": "Sea",
                "item_2": "Jetpack"
            },
            {
                "item_1": "Sea",
                "item_2": "Paraglider"
            },
            {
                "item_1": "Sea",
                "item_2": "Kettle"
            },
            {
                "item_1": "Sea",
                "item_2": "Leaf"
            },
            {
                "item_1": "Steamboat",
                "item_2": "Avalanche"
            },
            {
                "item_1": "Subtank",
                "item_2": "Coffee"
            },
            {
                "item_1": "Subtank",
                "item_2": "Soggy Toast"
            },
            {
                "item_1": "Starbucks",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Vape",
                "item_2": "Burnt Cookie"
            },
            {
                "item_1": "Vape",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Vape",
                "item_2": "Cookie"
            },
            {
                "item_1": "Spicy Aquaman",
                "item_2": "Grill"
            },
            {
                "item_1": "Spicy Boat",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Spicy Boat",
                "item_2": "Cook"
            },
            {
                "item_1": "Spicy Boat",
                "item_2": "Bomb"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Spicy"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Pump"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Milk"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Gasoline"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Emulsion"
            },
            {
                "item_1": "Dab",
                "item_2": "Fountain"
            },
            {
                "item_1": "Dab",
                "item_2": "Fluorine"
            },
            {
                "item_1": "Dab",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Dab",
                "item_2": "River"
            },
            {
                "item_1": "Dab",
                "item_2": "Vodka"
            },
            {
                "item_1": "Dab",
                "item_2": "Potato"
            },
            {
                "item_1": "Dab",
                "item_2": "Fuel"
            },
            {
                "item_1": "Dab",
                "item_2": "Land"
            },
            {
                "item_1": "Shrimp",
                "item_2": "Basket"
            },
            {
                "item_1": "Spicy Dinosaur",
                "item_2": "Mine"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Spring"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Treasure"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Moon"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Life"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Lung"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Pirate"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Surf"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Surfer"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Parasail"
            },
            {
                "item_1": "Eurovision",
                "item_2": "Curtain"
            },
            {
                "item_1": "Eurovision",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Fireball",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Fireball",
                "item_2": "Telescope"
            },
            {
                "item_1": "Fireball",
                "item_2": "Bubble"
            },
            {
                "item_1": "Fireball",
                "item_2": "Sail"
            },
            {
                "item_1": "Hades",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Hades",
                "item_2": "Sick"
            },
            {
                "item_1": "Hades",
                "item_2": "Devil"
            },
            {
                "item_1": "Parasite",
                "item_2": "Virus"
            },
            {
                "item_1": "Parasite",
                "item_2": "Amoeba"
            },
            {
                "item_1": "ABBA",
                "item_2": "Flower"
            },
            {
                "item_1": "ABBA",
                "item_2": "Pond"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Microscope"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Blood"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Fluids",
                "item_2": "Lens"
            },
            {
                "item_1": "Fluids",
                "item_2": "Pottery"
            },
            {
                "item_1": "Fluids",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Fluids",
                "item_2": "Sand"
            },
            {
                "item_1": "Fluids",
                "item_2": "Burn"
            },
            {
                "item_1": "Fluids",
                "item_2": "Cannon"
            },
            {
                "item_1": "Fluids",
                "item_2": "Vampire"
            },
            {
                "item_1": "Symbiosis",
                "item_2": "Desert"
            },
            {
                "item_1": "Symbiosis",
                "item_2": "Explosion"
            },
            {
                "item_1": "Symbiosis",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Skier",
                "item_2": "Brick"
            },
            {
                "item_1": "Skier",
                "item_2": "Balloon"
            },
            {
                "item_1": "Skier",
                "item_2": "Penguin"
            },
            {
                "item_1": "Water Gun",
                "item_2": "Bird"
            },
            {
                "item_1": "Water Gun",
                "item_2": "Boat"
            },
            {
                "item_1": "Prickle",
                "item_2": "Flying"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Seed"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Windmill"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Mist"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Tornado"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Tea"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Chili"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Rock"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Electricity"
            },
            {
                "item_1": "Fruit",
                "item_2": "Fog"
            },
            {
                "item_1": "Duck Sauce",
                "item_2": "Solar"
            },
            {
                "item_1": "Duck Sauce",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Duck Sauce",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Porcupine",
                "item_2": "Dragon"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Swamp"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Cloud"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Ocean"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Wave"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Steam"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Earth"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Wind"
            },
            {
                "item_1": "Dragon Sauce",
                "item_2": "Water"
            },
            {
                "item_1": "Swamp Salad",
                "item_2": "Boat"
            },
            {
                "item_1": "Swamp Salad",
                "item_2": "Wine"
            },
            {
                "item_1": "Swamp Salad",
                "item_2": "Mud"
            },
            {
                "item_1": "Swamp Wine",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Swamp Wine",
                "item_2": "Airplane"
            },
            {
                "item_1": "Sunfish",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Mist"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Storm"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Dust"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Chai"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Heat"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Hot"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Chili"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Rock"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Ice"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Electricity"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Fog"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Solar"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Dragon"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Lightning"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Engine"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Smoke"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Volcano"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Marsh"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Swamp"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Ocean"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Plant"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Wave"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Lake"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Earth"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Balloon"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Ash"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Ship"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Mirage"
            },
            {
                "item_1": "Laser",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Laser",
                "item_2": "Bird"
            },
            {
                "item_1": "Laser",
                "item_2": "Oasis"
            },
            {
                "item_1": "Laser",
                "item_2": "Wine"
            },
            {
                "item_1": "Beam",
                "item_2": "Flying"
            },
            {
                "item_1": "Beam",
                "item_2": "Airplane"
            },
            {
                "item_1": "Zeppelin",
                "item_2": "Mist"
            },
            {
                "item_1": "Crop Circle",
                "item_2": "Dust"
            },
            {
                "item_1": "Blimp",
                "item_2": "Tornado"
            },
            {
                "item_1": "Alien",
                "item_2": "Heat"
            },
            {
                "item_1": "Alien",
                "item_2": "Soup"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Sun"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Lightning"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Engine"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Rain"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Swamp"
            },
            {
                "item_1": "Reef",
                "item_2": "Lake"
            },
            {
                "item_1": "Reef",
                "item_2": "Kiln"
            },
            {
                "item_1": "Reef",
                "item_2": "Cannon"
            },
            {
                "item_1": "Reef",
                "item_2": "Brick"
            },
            {
                "item_1": "Eagle",
                "item_2": "Wine"
            },
            {
                "item_1": "Paradise",
                "item_2": "Mud"
            },
            {
                "item_1": "Drunk",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Drunk",
                "item_2": "Seed"
            },
            {
                "item_1": "Politician",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Politician",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Heat"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Chili"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Lightning"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Volcano"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Marsh"
            },
            {
                "item_1": "Alligator",
                "item_2": "Solar"
            },
            {
                "item_1": "Alligator",
                "item_2": "Sushi"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Parasail"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Curtain"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Fan"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Telescope"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Window"
            },
            {
                "item_1": "Alligator",
                "item_2": "Bat"
            },
            {
                "item_1": "Nile",
                "item_2": "House"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Medicine"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Sick"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Devil"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Fever"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Virus"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Lily"
            },
            {
                "item_1": "Dracula",
                "item_2": "Flower"
            },
            {
                "item_1": "Dracula",
                "item_2": "Microscope"
            },
            {
                "item_1": "Croco-virus",
                "item_2": "Soda"
            },
            {
                "item_1": "Croco-virus",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Prism",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Mud"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Flying"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Airplane"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Seed"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Kite"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Windmill"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Storm"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Dust"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Chai"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Tea"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Hot"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Rock"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Ice"
            },
            {
                "item_1": "Periscope",
                "item_2": "Soup"
            },
            {
                "item_1": "Periscope",
                "item_2": "Electricity"
            },
            {
                "item_1": "Clay",
                "item_2": "Fog"
            },
            {
                "item_1": "Earth",
                "item_2": "Miso Tsunami"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Lightning"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Lava"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Rain"
            },
            {
                "item_1": "Earth",
                "item_2": "Aspirin"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Cloud"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Plant"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Steam"
            },
            {
                "item_1": "Earth",
                "item_2": "Alka-seltzer"
            },
            {
                "item_1": "Radar",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Croco-virus"
            },
            {
                "item_1": "Tombstone",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Water",
                "item_2": "Croco-cola"
            },
            {
                "item_1": "Water",
                "item_2": "Ice-cold Croco-cola"
            },
            {
                "item_1": "Grave",
                "item_2": "Ocean"
            },
            {
                "item_1": "Water",
                "item_2": "Monster"
            },
            {
                "item_1": "Grave",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Dolphin"
            },
            {
                "item_1": "Grave",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Alka-Seltzer"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Swamp"
            },
            {
                "item_1": "Wind",
                "item_2": "Croco-paramecium"
            },
            {
                "item_1": "Wind",
                "item_2": "Pyramid"
            },
            {
                "item_1": "Grave",
                "item_2": "Engine"
            },
            {
                "item_1": "Wind",
                "item_2": "Croco-cola"
            },
            {
                "item_1": "Grave",
                "item_2": "Marsh"
            },
            {
                "item_1": "Wind",
                "item_2": "Ice-cold Croco-cola"
            },
            {
                "item_1": "Wind",
                "item_2": "Monster"
            },
            {
                "item_1": "Grave",
                "item_2": "Ocean"
            },
            {
                "item_1": "Wind",
                "item_2": "Tombstone"
            },
            {
                "item_1": "Fire",
                "item_2": "Flipper"
            },
            {
                "item_1": "Flipper",
                "item_2": "Vase"
            },
            {
                "item_1": "Flipper",
                "item_2": "Blood"
            },
            {
                "item_1": "Lake",
                "item_2": "Sunfish"
            },
            {
                "item_1": "Turtle",
                "item_2": "Lens"
            },
            {
                "item_1": "Lake",
                "item_2": "Red Sea"
            },
            {
                "item_1": "Venus",
                "item_2": "Ship"
            },
            {
                "item_1": "Crocodile Hunter",
                "item_2": "Airplane"
            },
            {
                "item_1": "Crocodile Hunter",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Crocodile Hunter",
                "item_2": "Eruption"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Lake",
                "item_2": "Croco-virus"
            },
            {
                "item_1": "Lake",
                "item_2": "Croco-cola"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Lake",
                "item_2": "Ice-cold Croco-cola"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Dolphin"
            },
            {
                "item_1": "Lake",
                "item_2": "Flipper"
            },
            {
                "item_1": "Honeymoon",
                "item_2": "Lava"
            },
            {
                "item_1": "Google Chrome",
                "item_2": "Cloud"
            },
            {
                "item_1": "Jedi",
                "item_2": "Plant"
            },
            {
                "item_1": "Darth Hydrous",
                "item_2": "Sushi"
            },
            {
                "item_1": "Darth Hydrous",
                "item_2": "Lightning"
            },
            {
                "item_1": "Darth Hydrous",
                "item_2": "Lava"
            },
            {
                "item_1": "Darth Magma",
                "item_2": "Smoke"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Fish"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Ocean"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Stingray"
            },
            {
                "item_1": "Fire",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Crack",
                "item_2": "Rock"
            },
            {
                "item_1": "Fire",
                "item_2": "Love Boat"
            },
            {
                "item_1": "Fire",
                "item_2": "Crocodile Hunter"
            },
            {
                "item_1": "Fire",
                "item_2": "Google"
            },
            {
                "item_1": "Gem",
                "item_2": "Goldfish"
            },
            {
                "item_1": "FireFox",
                "item_2": "Lightning"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Cloud"
            },
            {
                "item_1": "Fire",
                "item_2": "iPhone"
            },
            {
                "item_1": "Fire",
                "item_2": "Darth Hydrous"
            },
            {
                "item_1": "Fire",
                "item_2": "Pink"
            },
            {
                "item_1": "Sapphire",
                "item_2": "Smoke"
            },
            {
                "item_1": "Water",
                "item_2": "Google Fire"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Swamp"
            },
            {
                "item_1": "Water",
                "item_2": "Iphone 7 Plus"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Firecracker"
            },
            {
                "item_1": "Water",
                "item_2": "Rainfox"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Bird"
            },
            {
                "item_1": "Wind",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Wine"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Love Boat"
            },
            {
                "item_1": "Dust Bunny",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Global Warming",
                "item_2": "Eruption"
            },
            {
                "item_1": "Wind",
                "item_2": "Crack"
            },
            {
                "item_1": "Wind",
                "item_2": "Geode"
            },
            {
                "item_1": "Wind",
                "item_2": "Gem"
            },
            {
                "item_1": "Flying Tea",
                "item_2": "Engine"
            },
            {
                "item_1": "Wind",
                "item_2": "Pink"
            },
            {
                "item_1": "Iphone 6s",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Iphone 6s",
                "item_2": "Wave"
            },
            {
                "item_1": "Wind",
                "item_2": "Iphone 6"
            },
            {
                "item_1": "Iphone 6s",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Iphone 6s Plus"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Pig"
            },
            {
                "item_1": "Water",
                "item_2": "Iphone 6"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Wind"
            },
            {
                "item_1": "Aries",
                "item_2": "Marsh"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Rain"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Swamp"
            },
            {
                "item_1": "Sweater",
                "item_2": "Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Stingray"
            },
            {
                "item_1": "Earth",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Wet Sweater",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Earth",
                "item_2": "Love Boat"
            },
            {
                "item_1": "Wet Sweater",
                "item_2": "Kiln"
            },
            {
                "item_1": "Coca Plant",
                "item_2": "Pop"
            },
            {
                "item_1": "Slingshot",
                "item_2": "Vampire"
            },
            {
                "item_1": "Coca Cola",
                "item_2": "Brick"
            },
            {
                "item_1": "Earth",
                "item_2": "Love"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Cloud"
            },
            {
                "item_1": "Star Wars",
                "item_2": "Balloon"
            },
            {
                "item_1": "Earth",
                "item_2": "Steamroller"
            },
            {
                "item_1": "Star Wars",
                "item_2": "Ash"
            },
            {
                "item_1": "Earth",
                "item_2": "Pina Colada"
            },
            {
                "item_1": "Earth",
                "item_2": "Darth Hydrous"
            },
            {
                "item_1": "Ugly Duckling",
                "item_2": "Boat"
            },
            {
                "item_1": "Earth",
                "item_2": "Crack"
            },
            {
                "item_1": "Earth",
                "item_2": "Gem"
            },
            {
                "item_1": "Crystal",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Crystal",
                "item_2": "Windmill"
            },
            {
                "item_1": "Earth",
                "item_2": "Garnet"
            },
            {
                "item_1": "Earth",
                "item_2": "Icefox"
            },
            {
                "item_1": "Crystal",
                "item_2": "Tornado"
            },
            {
                "item_1": "Crystal",
                "item_2": "Tea"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Pig"
            },
            {
                "item_1": "Crystal",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Earth",
                "item_2": "Jet"
            },
            {
                "item_1": "Crystal",
                "item_2": "Solar"
            },
            {
                "item_1": "Earth",
                "item_2": "Aries"
            },
            {
                "item_1": "Tire",
                "item_2": "Dragon"
            },
            {
                "item_1": "Tire",
                "item_2": "Engine"
            },
            {
                "item_1": "Earth",
                "item_2": "Wet Sweater"
            },
            {
                "item_1": "Earth",
                "item_2": "Coca Plant"
            },
            {
                "item_1": "Earth",
                "item_2": "Slingshot"
            },
            {
                "item_1": "Google Bean",
                "item_2": "Cloud"
            },
            {
                "item_1": "Earth",
                "item_2": "Wall"
            },
            {
                "item_1": "Earth",
                "item_2": "Mudslide"
            },
            {
                "item_1": "Fertilizer",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Tatooine"
            },
            {
                "item_1": "Water",
                "item_2": "Gnome"
            },
            {
                "item_1": "Moisture",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Water",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Google Ocean",
                "item_2": "Swamp"
            },
            {
                "item_1": "Google Swamp",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Wave"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Lake"
            },
            {
                "item_1": "Labyrinth",
                "item_2": "Earth"
            },
            {
                "item_1": "Labyrinth",
                "item_2": "Fire"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Sushi"
            },
            {
                "item_1": "Fire",
                "item_2": "Gnome"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Lava"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Earth"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Bean"
            },
            {
                "item_1": "Fire",
                "item_2": "Landslide"
            },
            {
                "item_1": "Fire Ocean",
                "item_2": "Earth"
            },
            {
                "item_1": "Fire",
                "item_2": "Toxic"
            },
            {
                "item_1": "Water",
                "item_2": "Toxic"
            },
            {
                "item_1": "Water",
                "item_2": "Venom"
            },
            {
                "item_1": "Wind",
                "item_2": "Gnome"
            },
            {
                "item_1": "Poison",
                "item_2": "Solar"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Earth"
            },
            {
                "item_1": "Battery",
                "item_2": "Sushi"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Engine"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Smoke"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Marsh"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Toxic"
            },
            {
                "item_1": "Wind",
                "item_2": "Poison"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Earth, Wind & Fire"
            },
            {
                "item_1": "Wind",
                "item_2": "Gas"
            },
            {
                "item_1": "Water",
                "item_2": "Sunburn"
            },
            {
                "item_1": "Water",
                "item_2": "Electric Eel"
            },
            {
                "item_1": "Water",
                "item_2": "Tan"
            },
            {
                "item_1": "Gas",
                "item_2": "Steam"
            },
            {
                "item_1": "Google Earth, Wind & Fire",
                "item_2": "Smoke"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Ocean"
            },
            {
                "item_1": "Google Earth, Wind & Fire",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Electric Eel",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Gas",
                "item_2": "Fish"
            },
            {
                "item_1": "Gas",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Tan",
                "item_2": "Cloud"
            },
            {
                "item_1": "Earth",
                "item_2": "Battery"
            },
            {
                "item_1": "Tan",
                "item_2": "Steam"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Water"
            },
            {
                "item_1": "Google Earth, Wind, Fire & Smoke",
                "item_2": "Water"
            },
            {
                "item_1": "Gas",
                "item_2": "Vase"
            },
            {
                "item_1": "Lake",
                "item_2": "Burning Love"
            },
            {
                "item_1": "Trash",
                "item_2": "Pop"
            },
            {
                "item_1": "Lake",
                "item_2": "Rainfox"
            },
            {
                "item_1": "Lake",
                "item_2": "Global Warming"
            },
            {
                "item_1": "Lake",
                "item_2": "Force"
            },
            {
                "item_1": "Lake",
                "item_2": "Sweater"
            },
            {
                "item_1": "Lake",
                "item_2": "Cold"
            },
            {
                "item_1": "Seaplane",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Lake",
                "item_2": "Gnome"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Bean"
            },
            {
                "item_1": "Sauna",
                "item_2": "Tornado"
            },
            {
                "item_1": "Yarn",
                "item_2": "Heat"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Ocean"
            },
            {
                "item_1": "Yarn",
                "item_2": "Soup"
            },
            {
                "item_1": "Naboo",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Naboo",
                "item_2": "Solar"
            },
            {
                "item_1": "Lake",
                "item_2": "Poison"
            },
            {
                "item_1": "Dada",
                "item_2": "Lava"
            },
            {
                "item_1": "Dada",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Lake",
                "item_2": "Culture"
            },
            {
                "item_1": "Dada",
                "item_2": "Rain"
            },
            {
                "item_1": "Lake",
                "item_2": "Mushroom"
            },
            {
                "item_1": "Sweat",
                "item_2": "Ocean"
            },
            {
                "item_1": "Lake",
                "item_2": "Naboo"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Earth, Wind & Fire & Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Finland"
            },
            {
                "item_1": "Lake",
                "item_2": "Ramen"
            },
            {
                "item_1": "Water",
                "item_2": "Culture"
            },
            {
                "item_1": "Ramen",
                "item_2": "Rain"
            },
            {
                "item_1": "Noodles",
                "item_2": "Wave"
            },
            {
                "item_1": "Noodles",
                "item_2": "Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Tub"
            },
            {
                "item_1": "Fire",
                "item_2": "Yarn"
            },
            {
                "item_1": "Fire",
                "item_2": "Jabba"
            },
            {
                "item_1": "Fire",
                "item_2": "Jabba The Hutt"
            },
            {
                "item_1": "Fart",
                "item_2": "Steam"
            },
            {
                "item_1": "Slim",
                "item_2": "Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Fart"
            },
            {
                "item_1": "Water",
                "item_2": "Skinny"
            },
            {
                "item_1": "Fire",
                "item_2": "Skinny"
            },
            {
                "item_1": "Slim",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Wind",
                "item_2": "?"
            },
            {
                "item_1": "Skinny",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Mushroom"
            },
            {
                "item_1": "Skinny",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Wind",
                "item_2": "Naboo"
            },
            {
                "item_1": "Wind",
                "item_2": "Dada"
            },
            {
                "item_1": "Wind",
                "item_2": "Noodle"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Earth, Wind & Fire & Water"
            },
            {
                "item_1": "Slim Serpent",
                "item_2": "Marsh"
            },
            {
                "item_1": "Slim Serpent",
                "item_2": "Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Painting"
            },
            {
                "item_1": "Flying Noodle",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Water",
                "item_2": "Slim Serpent"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Plant"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Steam"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Binks"
            },
            {
                "item_1": "Steam Monster",
                "item_2": "Water"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Ocean"
            },
            {
                "item_1": "Fire",
                "item_2": "Eel"
            },
            {
                "item_1": "Fire",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Pasta",
                "item_2": "Steam Monster"
            },
            {
                "item_1": "Earth",
                "item_2": "Vapor"
            },
            {
                "item_1": "Pasta",
                "item_2": "Boom"
            },
            {
                "item_1": "Pasta",
                "item_2": "Heat"
            },
            {
                "item_1": "Pasta",
                "item_2": "Seaplane"
            },
            {
                "item_1": "Earth",
                "item_2": "Mushroom"
            },
            {
                "item_1": "Pasta",
                "item_2": "Sauna"
            },
            {
                "item_1": "Earth",
                "item_2": "Yarn"
            },
            {
                "item_1": "Pasta",
                "item_2": "Fog"
            },
            {
                "item_1": "Pasta",
                "item_2": "Sun"
            },
            {
                "item_1": "Pasta",
                "item_2": "Sushi"
            },
            {
                "item_1": "Pasta",
                "item_2": "Engine"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Jabba The Hutt"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Fart"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Slim"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Fish"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Flying Noodle"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Pasta"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Jabba The Spaghetti"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Jabba The Spaghetti"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Jabba The Hut"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Dragon"
            },
            {
                "item_1": "Lake",
                "item_2": "Painting"
            },
            {
                "item_1": "Steam Monster",
                "item_2": "Jar Jar"
            },
            {
                "item_1": "Steam Monster",
                "item_2": "Jabba The Hutt"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Smoke"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Skinny"
            },
            {
                "item_1": "Lake",
                "item_2": "Slim Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Snake"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Eel"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Binks"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Wave"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Steam"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Water"
            },
            {
                "item_1": "God",
                "item_2": "Flying Spaghetti Dragon"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Wave"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Lake",
                "item_2": "Eel"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Volcano"
            },
            {
                "item_1": "Lake",
                "item_2": "Slim"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Lava"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Jar Jar"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Jabba the Hutt"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Fog"
            },
            {
                "item_1": "Lake",
                "item_2": "Stone"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Toadstool"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Google Earth, Wind & Fire & Water"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Jabba"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Mushroom"
            },
            {
                "item_1": "Lake",
                "item_2": "Tea"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Storm"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Hot Tub"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Eruption"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Vapor"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Trash"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Google Earth, Wind, Fire & Smoke"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Battery"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Venom"
            },
            {
                "item_1": "Lake",
                "item_2": "Oasis"
            },
            {
                "item_1": "Lake",
                "item_2": "Fire Ocean"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Lake",
                "item_2": "Ash"
            },
            {
                "item_1": "Lake",
                "item_2": "Balloon"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Smog"
            },
            {
                "item_1": "Sunset",
                "item_2": "Burn"
            },
            {
                "item_1": "Sunset",
                "item_2": "Google Bean"
            },
            {
                "item_1": "Sunset",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Sunset",
                "item_2": "Google Earth"
            },
            {
                "item_1": "Lake",
                "item_2": "Wall"
            },
            {
                "item_1": "Sunset",
                "item_2": "Beach"
            },
            {
                "item_1": "Sunset",
                "item_2": "Cold"
            },
            {
                "item_1": "Jabba The Ramen",
                "item_2": "Sponge"
            },
            {
                "item_1": "Lake",
                "item_2": "Flu"
            },
            {
                "item_1": "Flying Spaghetti Phoenix",
                "item_2": "Lamb"
            },
            {
                "item_1": "Fishing",
                "item_2": "Iphone 6s Plus"
            },
            {
                "item_1": "Religion",
                "item_2": "Angel"
            },
            {
                "item_1": "Lake",
                "item_2": "Fan"
            },
            {
                "item_1": "Lake",
                "item_2": "Breeze"
            },
            {
                "item_1": "Christianity",
                "item_2": "Parasail"
            },
            {
                "item_1": "Christianity",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Lake",
                "item_2": "Dust Bunny"
            },
            {
                "item_1": "Lake",
                "item_2": "Cough"
            },
            {
                "item_1": "Lake",
                "item_2": "Sapphire"
            },
            {
                "item_1": "Lake",
                "item_2": "Surfing"
            },
            {
                "item_1": "Parachristianity",
                "item_2": "Diamond"
            },
            {
                "item_1": "Lake",
                "item_2": "Ruby"
            },
            {
                "item_1": "Parachristianity",
                "item_2": "Iphone 7 Plus"
            },
            {
                "item_1": "Lake",
                "item_2": "Flamingo"
            },
            {
                "item_1": "Lake",
                "item_2": "Exhaust"
            },
            {
                "item_1": "Parachristianity",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Lake",
                "item_2": "Gem"
            },
            {
                "item_1": "Lake",
                "item_2": "Crack"
            },
            {
                "item_1": "Nap",
                "item_2": "Darth Magma"
            },
            {
                "item_1": "Lake",
                "item_2": "Cave"
            },
            {
                "item_1": "Nap",
                "item_2": "Parachute"
            },
            {
                "item_1": "Lake",
                "item_2": "Treasure"
            },
            {
                "item_1": "Hay Fever",
                "item_2": "Steamroller"
            },
            {
                "item_1": "Data Lake",
                "item_2": "Swan"
            },
            {
                "item_1": "Lake",
                "item_2": "Fountain"
            },
            {
                "item_1": "Lake",
                "item_2": "Gasoline"
            },
            {
                "item_1": "Swan Lake",
                "item_2": "Pig"
            },
            {
                "item_1": "Lake",
                "item_2": "Samurai"
            },
            {
                "item_1": "Oil Spill",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Googolplex",
                "item_2": "Lightsaber"
            },
            {
                "item_1": "Lake",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Cemetery"
            },
            {
                "item_1": "BP",
                "item_2": "Loch Ness"
            },
            {
                "item_1": "Lake",
                "item_2": "Werewolf"
            },
            {
                "item_1": "BP",
                "item_2": "Satellite"
            },
            {
                "item_1": "Lake",
                "item_2": "Jetpack"
            },
            {
                "item_1": "Piglet",
                "item_2": "Optimus Prime"
            },
            {
                "item_1": "Jaws",
                "item_2": "Ice-cold Croco-cola"
            },
            {
                "item_1": "Jaws",
                "item_2": "Alka-seltzer"
            },
            {
                "item_1": "Jaws",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Jaws",
                "item_2": "Croco-cola"
            },
            {
                "item_1": "Lake",
                "item_2": "Alka-Seltzer"
            },
            {
                "item_1": "Jaws",
                "item_2": "Aspirin"
            },
            {
                "item_1": "Jaws",
                "item_2": "Alligator"
            },
            {
                "item_1": "Jaws",
                "item_2": "Miso Tsunami"
            },
            {
                "item_1": "Jaws",
                "item_2": "Spicy Aquaman"
            },
            {
                "item_1": "Death Star",
                "item_2": "Miso"
            },
            {
                "item_1": "Death Star",
                "item_2": "Twister"
            },
            {
                "item_1": "Lake",
                "item_2": "Barista"
            },
            {
                "item_1": "Death Star",
                "item_2": "Snow Golem"
            },
            {
                "item_1": "Lake",
                "item_2": "Vulture"
            },
            {
                "item_1": "Death Star",
                "item_2": "Pluto"
            },
            {
                "item_1": "Death Star",
                "item_2": "Snowboarding"
            },
            {
                "item_1": "Optimus Pig",
                "item_2": "Parasite"
            },
            {
                "item_1": "Lake",
                "item_2": "Skiing"
            },
            {
                "item_1": "Lake",
                "item_2": "ABBA"
            },
            {
                "item_1": "Sharknado",
                "item_2": "Moses"
            },
            {
                "item_1": "Sharknado",
                "item_2": "Rose"
            },
            {
                "item_1": "French Onion Soup",
                "item_2": "Water Gun"
            },
            {
                "item_1": "French Onion Soup",
                "item_2": "Cactus"
            },
            {
                "item_1": "Lake",
                "item_2": "Jesus"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Duck"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Resurrection"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Fruit"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Duck Sauce"
            },
            {
                "item_1": "Styx",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Lake",
                "item_2": "Pterodactyl"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Blimp"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Crop Circle"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Swamp Wine"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Pilot"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Flying Sunfish"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Airship"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Pteranodon"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Fruit Salad"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Pterodactyl"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Fish Balloon"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Sphinx"
            },
            {
                "item_1": "Lake",
                "item_2": "Psittacine"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Resurrection"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Lake",
                "item_2": "Jesus"
            },
            {
                "item_1": "Lake",
                "item_2": "Symbiosis"
            },
            {
                "item_1": "Lake",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Lake",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Skiing"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Parasite"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Eagle"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Eurovision"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Snowboarding"
            },
            {
                "item_1": "French Onion Soup Gun",
                "item_2": "Politician"
            },
            {
                "item_1": "French Onion Soup Gun",
                "item_2": "Pluto"
            },
            {
                "item_1": "Darth Maul",
                "item_2": "Shipwreck"
            },
            {
                "item_1": "Charon",
                "item_2": "Snow Golem"
            },
            {
                "item_1": "Lake",
                "item_2": "French Fries"
            },
            {
                "item_1": "Charon",
                "item_2": "Frankenstein"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Spicy Dinosaur"
            },
            {
                "item_1": "Lake",
                "item_2": "Godzilla"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Dracula"
            },
            {
                "item_1": "Lake",
                "item_2": "Dab"
            },
            {
                "item_1": "Lake",
                "item_2": "Spicy Aquaman"
            },
            {
                "item_1": "Lake",
                "item_2": "Starbucks"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Alka-seltzer"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Poseidon"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Narwhal"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Flipper"
            },
            {
                "item_1": "Lake",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Locomotive"
            },
            {
                "item_1": "Lake",
                "item_2": "Stingray"
            },
            {
                "item_1": "Lake",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Steam Engine"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Steve Irwin"
            },
            {
                "item_1": "Bribe",
                "item_2": "Kettle"
            },
            {
                "item_1": "Lake",
                "item_2": "Crocodile Hunter"
            },
            {
                "item_1": "Lake",
                "item_2": "Pig"
            },
            {
                "item_1": "Lake",
                "item_2": "Aphrodite"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Hydrous"
            },
            {
                "item_1": "Lake",
                "item_2": "Geode"
            },
            {
                "item_1": "Lake",
                "item_2": "Car"
            },
            {
                "item_1": "Lake",
                "item_2": "Icefox"
            },
            {
                "item_1": "Lake",
                "item_2": "Heart"
            },
            {
                "item_1": "Lake",
                "item_2": "Ram"
            },
            {
                "item_1": "Lake",
                "item_2": "Coca Plant"
            },
            {
                "item_1": "Lake",
                "item_2": "Coca Cola"
            },
            {
                "item_1": "Lake",
                "item_2": "Tire"
            },
            {
                "item_1": "Lake",
                "item_2": "Venom"
            },
            {
                "item_1": "Lake",
                "item_2": "Culture"
            },
            {
                "item_1": "Lake",
                "item_2": "Art"
            },
            {
                "item_1": "Lake",
                "item_2": "Jar Jar"
            },
            {
                "item_1": "Lake",
                "item_2": "Snake"
            },
            {
                "item_1": "Lake",
                "item_2": "Spaghetti"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Spaghetti Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Steam Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Spaghetti Dragon"
            },
            {
                "item_1": "Lake",
                "item_2": "Jar Jar Binks"
            },
            {
                "item_1": "Lake",
                "item_2": "Jabba The Ramen"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Spaghetti Phoenix"
            },
            {
                "item_1": "Lake",
                "item_2": "Winter"
            },
            {
                "item_1": "Lake",
                "item_2": "Lamborghini"
            },
            {
                "item_1": "Lake",
                "item_2": "Christianity"
            },
            {
                "item_1": "Lake",
                "item_2": "Galileo"
            },
            {
                "item_1": "Lake",
                "item_2": "Allergy"
            },
            {
                "item_1": "Lake",
                "item_2": "Parachristianity"
            },
            {
                "item_1": "Lake",
                "item_2": "Nap"
            },
            {
                "item_1": "Lake",
                "item_2": "Parachurch"
            },
            {
                "item_1": "Lake",
                "item_2": "Sleep"
            },
            {
                "item_1": "Lake",
                "item_2": "Hay"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Dream"
            },
            {
                "item_1": "Lake",
                "item_2": "Googol"
            },
            {
                "item_1": "Lake",
                "item_2": "Fondue"
            },
            {
                "item_1": "Lake",
                "item_2": "BP"
            },
            {
                "item_1": "Lake",
                "item_2": "Soggy Bread"
            },
            {
                "item_1": "Lake",
                "item_2": "Optimus Pig"
            },
            {
                "item_1": "Lake",
                "item_2": "Sharknado"
            },
            {
                "item_1": "Lake",
                "item_2": "Porkimus Prime"
            },
            {
                "item_1": "Lake",
                "item_2": "Rose Shark"
            },
            {
                "item_1": "Lake",
                "item_2": "Charon"
            },
            {
                "item_1": "Lake",
                "item_2": "Ice Golem"
            },
            {
                "item_1": "Lake",
                "item_2": "Industrial Revolution"
            },
            {
                "item_1": "Lake",
                "item_2": "Coke"
            },
            {
                "item_1": "Lake",
                "item_2": "Tanning"
            },
            {
                "item_1": "Lake",
                "item_2": "Sunrise"
            },
            {
                "item_1": "Lake",
                "item_2": "Data"
            },
            {
                "item_1": "Lake",
                "item_2": "Ballet"
            },
            {
                "item_1": "Lake",
                "item_2": "Mountain Dew"
            },
            {
                "item_1": "Water",
                "item_2": "Jabba The Ramen"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Spaghetti Phoenix"
            },
            {
                "item_1": "Water",
                "item_2": "SpongeBob"
            },
            {
                "item_1": "Water",
                "item_2": "Siesta"
            },
            {
                "item_1": "Water",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Water",
                "item_2": "Parachurch"
            },
            {
                "item_1": "Water",
                "item_2": "Sleep"
            },
            {
                "item_1": "Water",
                "item_2": "Tar"
            },
            {
                "item_1": "Water",
                "item_2": "Slave"
            },
            {
                "item_1": "Water",
                "item_2": "Asphalt"
            },
            {
                "item_1": "Water",
                "item_2": "Waterfall"
            },
            {
                "item_1": "Water",
                "item_2": "Swine Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Googolplex"
            },
            {
                "item_1": "Water",
                "item_2": "French Onion Soup"
            },
            {
                "item_1": "Water",
                "item_2": "Darth Snow"
            },
            {
                "item_1": "Water",
                "item_2": "Porkimus Prime"
            },
            {
                "item_1": "Water",
                "item_2": "French Onion Soup Gun"
            },
            {
                "item_1": "Water",
                "item_2": "Darth Maul"
            },
            {
                "item_1": "Water",
                "item_2": "Eurovision Song Contest"
            },
            {
                "item_1": "Water",
                "item_2": "Bribe"
            },
            {
                "item_1": "Water",
                "item_2": "Coke"
            },
            {
                "item_1": "Water",
                "item_2": "Tanning"
            },
            {
                "item_1": "Water",
                "item_2": "Monet"
            },
            {
                "item_1": "Water",
                "item_2": "Sunrise"
            },
            {
                "item_1": "Water",
                "item_2": "Baptist"
            },
            {
                "item_1": "Water",
                "item_2": "Data"
            },
            {
                "item_1": "Water",
                "item_2": "Google Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Cottage"
            },
            {
                "item_1": "Water",
                "item_2": "Green"
            },
            {
                "item_1": "Water",
                "item_2": "Pitch"
            },
            {
                "item_1": "Water",
                "item_2": "Sink"
            },
            {
                "item_1": "Water",
                "item_2": "Leather"
            },
            {
                "item_1": "Water",
                "item_2": "Oyster"
            },
            {
                "item_1": "Fire",
                "item_2": "Jabba The Ramen"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Spaghetti Phoenix"
            },
            {
                "item_1": "Fire",
                "item_2": "Winter"
            },
            {
                "item_1": "Fire",
                "item_2": "Lamborghini"
            },
            {
                "item_1": "Fire",
                "item_2": "Siesta"
            },
            {
                "item_1": "Fire",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Fire",
                "item_2": "Nap"
            },
            {
                "item_1": "Fire",
                "item_2": "Parachurch"
            },
            {
                "item_1": "Fire",
                "item_2": "Hay"
            },
            {
                "item_1": "Fire",
                "item_2": "Swine Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "GPS"
            },
            {
                "item_1": "Fire",
                "item_2": "French Onion Soup Gun"
            },
            {
                "item_1": "Fire",
                "item_2": "Charon"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Toddies"
            },
            {
                "item_1": "Fire",
                "item_2": "Bribe"
            },
            {
                "item_1": "Fire",
                "item_2": "Industrial Revolution"
            },
            {
                "item_1": "Fire",
                "item_2": "Swamp Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Monet"
            },
            {
                "item_1": "Fire",
                "item_2": "Sunrise"
            },
            {
                "item_1": "Fire",
                "item_2": "Baptism"
            },
            {
                "item_1": "Fire",
                "item_2": "Data"
            },
            {
                "item_1": "Fire",
                "item_2": "Database"
            },
            {
                "item_1": "Fire",
                "item_2": "Pearl"
            },
            {
                "item_1": "Fire",
                "item_2": "Sink"
            },
            {
                "item_1": "Fire",
                "item_2": "Wet Haystack"
            },
            {
                "item_1": "Fire",
                "item_2": "Worker"
            },
            {
                "item_1": "Fire",
                "item_2": "Information"
            },
            {
                "item_1": "Fire",
                "item_2": "Fire Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Torch"
            },
            {
                "item_1": "Water",
                "item_2": "Data Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Bp"
            },
            {
                "item_1": "Water",
                "item_2": "Warm Toddies"
            },
            {
                "item_1": "Water",
                "item_2": "Information"
            },
            {
                "item_1": "Water",
                "item_2": "Fireboat"
            },
            {
                "item_1": "Water",
                "item_2": "Bonfire"
            },
            {
                "item_1": "Water",
                "item_2": "Bleach"
            },
            {
                "item_1": "Water",
                "item_2": "Sword"
            },
            {
                "item_1": "Water",
                "item_2": "Steel"
            },
            {
                "item_1": "Water",
                "item_2": "Iron"
            },
            {
                "item_1": "Fire",
                "item_2": "Rust"
            },
            {
                "item_1": "Wind",
                "item_2": "Jabba The Ramen"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying Spaghetti Phoenix"
            },
            {
                "item_1": "Wind",
                "item_2": "Winter"
            },
            {
                "item_1": "Wind",
                "item_2": "Lamborghini"
            },
            {
                "item_1": "Wind",
                "item_2": "Christianity"
            },
            {
                "item_1": "Wind",
                "item_2": "Siesta"
            },
            {
                "item_1": "Wind",
                "item_2": "Allergy"
            },
            {
                "item_1": "Wind",
                "item_2": "Parachristianity"
            },
            {
                "item_1": "Wind",
                "item_2": "Nap"
            },
            {
                "item_1": "Wind",
                "item_2": "Hay Fever"
            },
            {
                "item_1": "Wind",
                "item_2": "Parachurch"
            },
            {
                "item_1": "Wind",
                "item_2": "Tar"
            },
            {
                "item_1": "Wind",
                "item_2": "GPS"
            },
            {
                "item_1": "Wind",
                "item_2": "Sharknado"
            },
            {
                "item_1": "Wind",
                "item_2": "Styx"
            },
            {
                "item_1": "Wind",
                "item_2": "Rose Shark"
            },
            {
                "item_1": "Wind",
                "item_2": "French Onion Soup Gun"
            },
            {
                "item_1": "Wind",
                "item_2": "Darth Maul"
            },
            {
                "item_1": "Wind",
                "item_2": "Charon"
            },
            {
                "item_1": "Wind",
                "item_2": "Bribe"
            },
            {
                "item_1": "Wind",
                "item_2": "Monet"
            },
            {
                "item_1": "Wind",
                "item_2": "Ballet"
            },
            {
                "item_1": "Wind",
                "item_2": "Whiskey"
            },
            {
                "item_1": "Wind",
                "item_2": "Sink"
            },
            {
                "item_1": "Wind",
                "item_2": "Leather"
            },
            {
                "item_1": "Wind",
                "item_2": "Leak"
            },
            {
                "item_1": "Wind",
                "item_2": "Wet Haystack"
            },
            {
                "item_1": "Wind",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Wind",
                "item_2": "Warm Toddies"
            },
            {
                "item_1": "Wind",
                "item_2": "Campfire"
            },
            {
                "item_1": "Wind",
                "item_2": "Fire Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Church"
            },
            {
                "item_1": "Wind",
                "item_2": "Swine Flu"
            },
            {
                "item_1": "Wind",
                "item_2": "Pearl Diver"
            },
            {
                "item_1": "Water",
                "item_2": "Swine Flu"
            },
            {
                "item_1": "Water",
                "item_2": "Darth Blizzard"
            },
            {
                "item_1": "Water",
                "item_2": "Gust"
            },
            {
                "item_1": "Water",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Water",
                "item_2": "Solar System"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Witch"
            },
            {
                "item_1": "Wind",
                "item_2": "Witch"
            },
            {
                "item_1": "Wind",
                "item_2": "Wizard"
            },
            {
                "item_1": "Earth",
                "item_2": "Sunset"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Spaghetti Phoenix"
            },
            {
                "item_1": "Earth",
                "item_2": "Fishing"
            },
            {
                "item_1": "Earth",
                "item_2": "Religion"
            },
            {
                "item_1": "Earth",
                "item_2": "Lamborghini"
            },
            {
                "item_1": "Earth",
                "item_2": "Christianity"
            },
            {
                "item_1": "Earth",
                "item_2": "Allergy"
            },
            {
                "item_1": "Earth",
                "item_2": "Parachristianity"
            },
            {
                "item_1": "Earth",
                "item_2": "Nap"
            },
            {
                "item_1": "Earth",
                "item_2": "Necklace"
            },
            {
                "item_1": "Earth",
                "item_2": "Parachurch"
            },
            {
                "item_1": "Earth",
                "item_2": "Sleep"
            },
            {
                "item_1": "Earth",
                "item_2": "Tar"
            },
            {
                "item_1": "Earth",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Dream"
            },
            {
                "item_1": "Earth",
                "item_2": "Swine Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Movie"
            },
            {
                "item_1": "Earth",
                "item_2": "Fondue"
            },
            {
                "item_1": "Earth",
                "item_2": "Soggy Bread"
            },
            {
                "item_1": "Earth",
                "item_2": "Death Star"
            },
            {
                "item_1": "Earth",
                "item_2": "Rose Shark"
            },
            {
                "item_1": "Earth",
                "item_2": "Bribe"
            },
            {
                "item_1": "Earth",
                "item_2": "Industrial Revolution"
            },
            {
                "item_1": "Earth",
                "item_2": "Onyx"
            },
            {
                "item_1": "Earth",
                "item_2": "Monet"
            },
            {
                "item_1": "Earth",
                "item_2": "Baptism"
            },
            {
                "item_1": "Earth",
                "item_2": "Cottage"
            },
            {
                "item_1": "Earth",
                "item_2": "Pepsi"
            },
            {
                "item_1": "Earth",
                "item_2": "Mountain Dew"
            },
            {
                "item_1": "Earth",
                "item_2": "Pitch"
            },
            {
                "item_1": "Earth",
                "item_2": "Sink"
            },
            {
                "item_1": "Earth",
                "item_2": "Worker"
            },
            {
                "item_1": "Earth",
                "item_2": "Death"
            },
            {
                "item_1": "Earth",
                "item_2": "Mummy"
            },
            {
                "item_1": "Earth",
                "item_2": "Information"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireboat"
            },
            {
                "item_1": "Earth",
                "item_2": "Hack"
            },
            {
                "item_1": "Earth",
                "item_2": "Roast"
            },
            {
                "item_1": "Earth",
                "item_2": "Knowledge"
            },
            {
                "item_1": "Earth",
                "item_2": "Hacker"
            },
            {
                "item_1": "Earth",
                "item_2": "Clean"
            },
            {
                "item_1": "Earth",
                "item_2": "Cinema"
            },
            {
                "item_1": "Earth",
                "item_2": "Gust"
            },
            {
                "item_1": "Earth",
                "item_2": "Solar System"
            },
            {
                "item_1": "Earth",
                "item_2": "Patrick"
            },
            {
                "item_1": "Earth",
                "item_2": "Easter"
            },
            {
                "item_1": "Earth",
                "item_2": "Hoth"
            },
            {
                "item_1": "Earth",
                "item_2": "Zombie"
            },
            {
                "item_1": "Earth",
                "item_2": "Grass"
            },
            {
                "item_1": "Earth",
                "item_2": "Sinkhole"
            },
            {
                "item_1": "Earth",
                "item_2": "Chicken"
            },
            {
                "item_1": "Water",
                "item_2": "Eden"
            },
            {
                "item_1": "Water",
                "item_2": "Hoth"
            },
            {
                "item_1": "Water",
                "item_2": "Coal"
            },
            {
                "item_1": "Water",
                "item_2": "Dance"
            },
            {
                "item_1": "Water",
                "item_2": "Spongebob"
            },
            {
                "item_1": "Fire",
                "item_2": "Tartarus"
            },
            {
                "item_1": "Fire",
                "item_2": "Baseball"
            },
            {
                "item_1": "Fire",
                "item_2": "Plow"
            },
            {
                "item_1": "Fire",
                "item_2": "River Styx"
            },
            {
                "item_1": "Fire",
                "item_2": "Venice"
            },
            {
                "item_1": "Fire",
                "item_2": "Firefly"
            },
            {
                "item_1": "Fire",
                "item_2": "Luke"
            },
            {
                "item_1": "Water",
                "item_2": "Bunny"
            },
            {
                "item_1": "Water",
                "item_2": "Home Run"
            },
            {
                "item_1": "Water",
                "item_2": "Luke"
            },
            {
                "item_1": "Water",
                "item_2": "Skywalker"
            },
            {
                "item_1": "Water",
                "item_2": "Rabbit"
            },
            {
                "item_1": "Fire",
                "item_2": "Rabbit"
            },
            {
                "item_1": "Wind",
                "item_2": "Rich"
            },
            {
                "item_1": "Wind",
                "item_2": "Coal"
            },
            {
                "item_1": "Wind",
                "item_2": "Day"
            },
            {
                "item_1": "Wind",
                "item_2": "Grass"
            },
            {
                "item_1": "Wind",
                "item_2": "Knight"
            },
            {
                "item_1": "Wind",
                "item_2": "Metal"
            }
        ]
    },
    "Boiled Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Goldfish"
            }
        ]
    },
    "Solar": {
        "emoticon": "☀️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sun"
            },
            {
                "item_1": "Wind",
                "item_2": "Eclipse"
            }
        ]
    },
    "Fog": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Smoke"
            },
            {
                "item_1": "Kettle",
                "item_2": "Mist"
            },
            {
                "item_1": "Zeppelin",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Mist"
            },
            {
                "item_1": "Coca-Cola",
                "item_2": "Fog"
            },
            {
                "item_1": "Global Warming",
                "item_2": "Mist"
            },
            {
                "item_1": "Art",
                "item_2": "Mist"
            },
            {
                "item_1": "Pasta",
                "item_2": "Solar"
            }
        ]
    },
    "Stone": {
        "emoticon": "🪨",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Lava"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Lava"
            },
            {
                "item_1": "Water",
                "item_2": "Rock"
            },
            {
                "item_1": "Earth",
                "item_2": "Engine"
            },
            {
                "item_1": "Kettle",
                "item_2": "Rock"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Soup"
            },
            {
                "item_1": "Earth",
                "item_2": "Emerald"
            }
        ]
    },
    "Electricity": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Lightning"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Lightning"
            },
            {
                "item_1": "Wind",
                "item_2": "Windmill"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Windmill"
            },
            {
                "item_1": "Tan",
                "item_2": "Fire"
            },
            {
                "item_1": "Electric Eel",
                "item_2": "Water"
            },
            {
                "item_1": "Wind",
                "item_2": "Eel"
            },
            {
                "item_1": "Lightning",
                "item_2": "Tesla"
            }
        ]
    },
    "Sea Serpent": {
        "emoticon": "🐍",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Dragon"
            }
        ]
    },
    "Soup": {
        "emoticon": "🍲",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Boiled Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Soup"
            },
            {
                "item_1": "Water",
                "item_2": "Pepper"
            },
            {
                "item_1": "Water",
                "item_2": "Pot"
            },
            {
                "item_1": "Water",
                "item_2": "Cook"
            },
            {
                "item_1": "Water",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Water",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Water",
                "item_2": "Chef"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Miso",
                "item_2": "Sun"
            },
            {
                "item_1": "Earth",
                "item_2": "Shark"
            },
            {
                "item_1": "Water",
                "item_2": "Mutton"
            },
            {
                "item_1": "Water",
                "item_2": "Trash"
            },
            {
                "item_1": "Water",
                "item_2": "Mushroom"
            },
            {
                "item_1": "Noodles",
                "item_2": "Ocean"
            },
            {
                "item_1": "Water",
                "item_2": "Noodle"
            },
            {
                "item_1": "Noodles",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Pot"
            },
            {
                "item_1": "Lake",
                "item_2": "Vape"
            },
            {
                "item_1": "Lake",
                "item_2": "Cappuccino"
            },
            {
                "item_1": "Lake",
                "item_2": "Miso"
            },
            {
                "item_1": "Water",
                "item_2": "Soggy Bread"
            },
            {
                "item_1": "Water",
                "item_2": "Styx"
            },
            {
                "item_1": "Water",
                "item_2": "Charon"
            },
            {
                "item_1": "Water",
                "item_2": "Campfire"
            },
            {
                "item_1": "Water",
                "item_2": "Knowledge"
            },
            {
                "item_1": "Water",
                "item_2": "Tauntaun"
            },
            {
                "item_1": "Water",
                "item_2": "Chicken"
            }
        ]
    },
    "Ice": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fog"
            },
            {
                "item_1": "Water",
                "item_2": "Penguin"
            },
            {
                "item_1": "Earth",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Water",
                "item_2": "Snow"
            },
            {
                "item_1": "Laser",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Diamond"
            },
            {
                "item_1": "Water",
                "item_2": "Pressure"
            },
            {
                "item_1": "Fire",
                "item_2": "Icefox"
            },
            {
                "item_1": "Cold",
                "item_2": "Water"
            },
            {
                "item_1": "Cold",
                "item_2": "Burn"
            },
            {
                "item_1": "Lake",
                "item_2": "Tatooine"
            },
            {
                "item_1": "Lake",
                "item_2": "Crystal"
            },
            {
                "item_1": "Lake",
                "item_2": "Snow"
            },
            {
                "item_1": "Lake",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Lake",
                "item_2": "Crack"
            },
            {
                "item_1": "Lake",
                "item_2": "Cold"
            },
            {
                "item_1": "Lake",
                "item_2": "SpongeBob"
            },
            {
                "item_1": "Water",
                "item_2": "Winter"
            },
            {
                "item_1": "Water",
                "item_2": "Pigimus Prime"
            },
            {
                "item_1": "Water",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Water",
                "item_2": "Hack"
            },
            {
                "item_1": "Water",
                "item_2": "Zephyr"
            },
            {
                "item_1": "Water",
                "item_2": "Wizard"
            },
            {
                "item_1": "Water",
                "item_2": "Tartarus"
            },
            {
                "item_1": "Water",
                "item_2": "Wampa"
            }
        ]
    },
    "Rock": {
        "emoticon": "🪨",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Stone"
            },
            {
                "item_1": "Earth",
                "item_2": "Stone"
            }
        ]
    },
    "Iceberg": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ice"
            },
            {
                "item_1": "Water",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Ocean"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Wave"
            },
            {
                "item_1": "Lake",
                "item_2": "Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Lake",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Lake",
                "item_2": "Titanic"
            },
            {
                "item_1": "Lake",
                "item_2": "Piranha"
            }
        ]
    },
    "Chili": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Soup"
            },
            {
                "item_1": "Kettle",
                "item_2": "Chili"
            }
        ]
    },
    "Hot": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Chili"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Chili"
            },
            {
                "item_1": "Fire",
                "item_2": "Spicy"
            }
        ]
    },
    "Heat": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Chili"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Chili"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot"
            }
        ]
    },
    "Tea": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hot Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hot"
            },
            {
                "item_1": "Water",
                "item_2": "Tea"
            },
            {
                "item_1": "Fire",
                "item_2": "Chai"
            },
            {
                "item_1": "Water",
                "item_2": "Chai"
            },
            {
                "item_1": "Wind",
                "item_2": "Chai"
            },
            {
                "item_1": "Water",
                "item_2": "Fever"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Chai"
            },
            {
                "item_1": "Earth",
                "item_2": "Teapot"
            },
            {
                "item_1": "Water",
                "item_2": "Teapot"
            },
            {
                "item_1": "Fire",
                "item_2": "Teapot"
            },
            {
                "item_1": "Kettle",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Kettle",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Kettle",
                "item_2": "Storm"
            },
            {
                "item_1": "Kettle",
                "item_2": "Dust"
            },
            {
                "item_1": "Kettle",
                "item_2": "Chai"
            },
            {
                "item_1": "Kettle",
                "item_2": "Heat"
            },
            {
                "item_1": "Kettle",
                "item_2": "Hot"
            },
            {
                "item_1": "Kettle",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Kettle",
                "item_2": "Soup"
            },
            {
                "item_1": "Kettle",
                "item_2": "Electricity"
            },
            {
                "item_1": "Kettle",
                "item_2": "Fog"
            },
            {
                "item_1": "Kettle",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Kettle",
                "item_2": "Dragon"
            },
            {
                "item_1": "Kettle",
                "item_2": "Lightning"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Tea"
            },
            {
                "item_1": "Sea",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Tea"
            },
            {
                "item_1": "Fire",
                "item_2": "Sunburn"
            },
            {
                "item_1": "Water",
                "item_2": "Tea Bag"
            },
            {
                "item_1": "Tea",
                "item_2": "Tea"
            }
        ]
    },
    "Chai": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Tea"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Tea"
            }
        ]
    },
    "Tornado": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Wind",
                "item_2": "Sushi"
            },
            {
                "item_1": "Wind",
                "item_2": "Ice"
            },
            {
                "item_1": "Wind",
                "item_2": "Chili"
            },
            {
                "item_1": "Wind",
                "item_2": "Tornado"
            },
            {
                "item_1": "Wind",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Energy"
            },
            {
                "item_1": "Wind",
                "item_2": "Crash"
            },
            {
                "item_1": "Wind",
                "item_2": "Explosion"
            },
            {
                "item_1": "Wind",
                "item_2": "Cannon"
            },
            {
                "item_1": "Wind",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Wind",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Wind",
                "item_2": "Microscope"
            },
            {
                "item_1": "Wind",
                "item_2": "Devil"
            },
            {
                "item_1": "Wind",
                "item_2": "House"
            },
            {
                "item_1": "Wind",
                "item_2": "Fan"
            },
            {
                "item_1": "Wind",
                "item_2": "Parasail"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Soup"
            },
            {
                "item_1": "Wind",
                "item_2": "Curtain"
            },
            {
                "item_1": "Earth",
                "item_2": "Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Wind",
                "item_2": "Island"
            },
            {
                "item_1": "Wind",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Wind",
                "item_2": "Bottle"
            },
            {
                "item_1": "Wind",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Wind",
                "item_2": "Cave"
            },
            {
                "item_1": "Wind",
                "item_2": "Continent"
            },
            {
                "item_1": "Wind",
                "item_2": "Farmer"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Wind"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Chai"
            },
            {
                "item_1": "Crop Circle",
                "item_2": "Storm"
            },
            {
                "item_1": "Blimp",
                "item_2": "Chai"
            },
            {
                "item_1": "Disaster",
                "item_2": "Storm"
            },
            {
                "item_1": "Twister",
                "item_2": "Fog"
            },
            {
                "item_1": "Twister",
                "item_2": "Solar"
            },
            {
                "item_1": "Sunami",
                "item_2": "Wind"
            },
            {
                "item_1": "Radar",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Clay"
            },
            {
                "item_1": "Wind",
                "item_2": "Satellite"
            },
            {
                "item_1": "Turtle",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Cemetery"
            },
            {
                "item_1": "Lake",
                "item_2": "Twister"
            },
            {
                "item_1": "Rainforest",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Crocodile Hunter"
            },
            {
                "item_1": "Wind",
                "item_2": "Fairy"
            },
            {
                "item_1": "Flying Pig",
                "item_2": "Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Steamroller"
            },
            {
                "item_1": "Heart",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Poison",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Star Wars"
            },
            {
                "item_1": "Gas",
                "item_2": "Lake"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Wind"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Lightning"
            },
            {
                "item_1": "Wind",
                "item_2": "Snake"
            },
            {
                "item_1": "Binks",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Fishing Rod"
            },
            {
                "item_1": "Wind",
                "item_2": "Data Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Death Star"
            },
            {
                "item_1": "Wind",
                "item_2": "Ice Golem"
            },
            {
                "item_1": "Wind",
                "item_2": "Emerald"
            },
            {
                "item_1": "Wind",
                "item_2": "Nightmare"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Cottage"
            },
            {
                "item_1": "Wind",
                "item_2": "Pitch"
            },
            {
                "item_1": "Wind",
                "item_2": "Cruise"
            },
            {
                "item_1": "Wind",
                "item_2": "Drain"
            },
            {
                "item_1": "Wind",
                "item_2": "Zephyr"
            },
            {
                "item_1": "Wind",
                "item_2": "Gust"
            },
            {
                "item_1": "Wind",
                "item_2": "Fire Tornado"
            },
            {
                "item_1": "Wind",
                "item_2": "Dry"
            },
            {
                "item_1": "Earth",
                "item_2": "Jabba The Ramen"
            },
            {
                "item_1": "Earth",
                "item_2": "Sharknado"
            },
            {
                "item_1": "Wind",
                "item_2": "Tartarus"
            },
            {
                "item_1": "Wind",
                "item_2": "Underworld"
            },
            {
                "item_1": "Wind",
                "item_2": "Dance"
            },
            {
                "item_1": "Wind",
                "item_2": "Sinkhole"
            }
        ]
    },
    "Dust": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Earth"
            },
            {
                "item_1": "Wind",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Wind",
                "item_2": "Mud"
            },
            {
                "item_1": "Wind",
                "item_2": "Ash"
            },
            {
                "item_1": "Wind",
                "item_2": "Pond"
            },
            {
                "item_1": "Wind",
                "item_2": "Rock"
            },
            {
                "item_1": "Earth",
                "item_2": "Tornado"
            },
            {
                "item_1": "Earth",
                "item_2": "Mist"
            },
            {
                "item_1": "Earth",
                "item_2": "Angel"
            },
            {
                "item_1": "Earth",
                "item_2": "Fan"
            },
            {
                "item_1": "Earth",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Earth",
                "item_2": "Breeze"
            },
            {
                "item_1": "Wind",
                "item_2": "Dirt"
            },
            {
                "item_1": "Wind",
                "item_2": "Fossil"
            },
            {
                "item_1": "Wind",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Wind",
                "item_2": "Soil"
            },
            {
                "item_1": "Airship",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Dust Bunny",
                "item_2": "Windmill"
            },
            {
                "item_1": "Heart",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Exhaust"
            },
            {
                "item_1": "Water",
                "item_2": "Dust Bunny"
            },
            {
                "item_1": "Fire",
                "item_2": "Dust Bunny"
            },
            {
                "item_1": "Earth",
                "item_2": "Smog"
            },
            {
                "item_1": "Wind",
                "item_2": "Trash"
            },
            {
                "item_1": "Wind",
                "item_2": "Africa"
            },
            {
                "item_1": "Wind",
                "item_2": "Hay"
            },
            {
                "item_1": "Wind",
                "item_2": "Asphalt"
            },
            {
                "item_1": "Wind",
                "item_2": "Haystack"
            },
            {
                "item_1": "Wind",
                "item_2": "Death"
            },
            {
                "item_1": "Wind",
                "item_2": "Bleach"
            },
            {
                "item_1": "Wind",
                "item_2": "Rust"
            },
            {
                "item_1": "Earth",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Earth",
                "item_2": "Zephyr"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Tornado"
            },
            {
                "item_1": "Wind",
                "item_2": "Road"
            },
            {
                "item_1": "Wind",
                "item_2": "Zombie"
            },
            {
                "item_1": "Wind",
                "item_2": "Baseball"
            }
        ]
    },
    "Storm": {
        "emoticon": "⛈️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Wave"
            },
            {
                "item_1": "Wind",
                "item_2": "Ocean"
            },
            {
                "item_1": "Wind",
                "item_2": "Cloud"
            },
            {
                "item_1": "Wind",
                "item_2": "Rain"
            },
            {
                "item_1": "Wind",
                "item_2": "Lightning"
            },
            {
                "item_1": "Wind",
                "item_2": "Siren"
            },
            {
                "item_1": "Wind",
                "item_2": "Planet"
            },
            {
                "item_1": "Thunder",
                "item_2": "Lightning"
            },
            {
                "item_1": "Thunder",
                "item_2": "Rain"
            },
            {
                "item_1": "Wind",
                "item_2": "Knowledge"
            },
            {
                "item_1": "Wind",
                "item_2": "Power"
            },
            {
                "item_1": "Wind",
                "item_2": "Soggy"
            },
            {
                "item_1": "Wind",
                "item_2": "Easter"
            }
        ]
    },
    "Dandelion": {
        "emoticon": "🌼",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Plant"
            },
            {
                "item_1": "Wind",
                "item_2": "Seed"
            },
            {
                "item_1": "Wind",
                "item_2": "Flower"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Tornado"
            },
            {
                "item_1": "Buddha",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Lava"
            }
        ]
    },
    "Hurricane": {
        "emoticon": "🌀",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Fever"
            },
            {
                "item_1": "Wind",
                "item_2": "Sick"
            },
            {
                "item_1": "Wind",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Wind",
                "item_2": "Breeze"
            },
            {
                "item_1": "Wind",
                "item_2": "Warmth"
            },
            {
                "item_1": "Wind",
                "item_2": "Ariel"
            },
            {
                "item_1": "Wind",
                "item_2": "Cough"
            },
            {
                "item_1": "Alligator",
                "item_2": "Wind"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Wind",
                "item_2": "Pina Colada"
            },
            {
                "item_1": "Wind",
                "item_2": "Googolplex"
            },
            {
                "item_1": "Wind",
                "item_2": "Jaws"
            },
            {
                "item_1": "Wind",
                "item_2": "Baptist"
            },
            {
                "item_1": "Wind",
                "item_2": "Hack"
            },
            {
                "item_1": "Wind",
                "item_2": "Hacker"
            }
        ]
    },
    "Mist": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Swamp"
            },
            {
                "item_1": "Wind",
                "item_2": "Marsh"
            },
            {
                "item_1": "Earth",
                "item_2": "Fog"
            },
            {
                "item_1": "Fairy",
                "item_2": "Fog"
            },
            {
                "item_1": "Wind",
                "item_2": "Swamp Lake"
            }
        ]
    },
    "Flying Fish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Fish"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Sushi"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Rain"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Fish"
            },
            {
                "item_1": "Politician",
                "item_2": "Mist"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Naboo"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Mushroom"
            },
            {
                "item_1": "Wind",
                "item_2": "Piranha"
            }
        ]
    },
    "Eruption": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Volcano"
            },
            {
                "item_1": "Prayer",
                "item_2": "Volcano"
            },
            {
                "item_1": "Genie",
                "item_2": "Volcano"
            }
        ]
    },
    "Windmill": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Engine"
            },
            {
                "item_1": "Wind",
                "item_2": "Farm"
            },
            {
                "item_1": "Wind",
                "item_2": "Human"
            },
            {
                "item_1": "Wind",
                "item_2": "Mine"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Lightning"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Smoke"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Marsh"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Rain"
            },
            {
                "item_1": "Wind",
                "item_2": "Battery"
            },
            {
                "item_1": "Wind",
                "item_2": "Industrial Revolution"
            },
            {
                "item_1": "Wind",
                "item_2": "Wheel"
            }
        ]
    },
    "Kite": {
        "emoticon": "🪁",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sand"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sun"
            },
            {
                "item_1": "Wind",
                "item_2": "Solar"
            },
            {
                "item_1": "Wind",
                "item_2": "Tea"
            },
            {
                "item_1": "Wind",
                "item_2": "Airplane"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying"
            },
            {
                "item_1": "Wind",
                "item_2": "Bird"
            },
            {
                "item_1": "Wind",
                "item_2": "Balloon"
            },
            {
                "item_1": "Wind",
                "item_2": "Sand"
            },
            {
                "item_1": "Wind",
                "item_2": "Telescope"
            },
            {
                "item_1": "Wind",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Wind",
                "item_2": "Surfer"
            },
            {
                "item_1": "Wind",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Wind",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Kiln"
            },
            {
                "item_1": "Wind",
                "item_2": "Surfing"
            },
            {
                "item_1": "Wind",
                "item_2": "Pot"
            },
            {
                "item_1": "Wind",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Wind",
                "item_2": "Basket"
            },
            {
                "item_1": "Wind",
                "item_2": "Stingray"
            },
            {
                "item_1": "Heart",
                "item_2": "Solar"
            },
            {
                "item_1": "Wind",
                "item_2": "Jewel"
            },
            {
                "item_1": "Wind",
                "item_2": "Culture"
            },
            {
                "item_1": "Wind",
                "item_2": "Tea Bag"
            },
            {
                "item_1": "Wind",
                "item_2": "Soggy Bread"
            },
            {
                "item_1": "Wind",
                "item_2": "Optimus Pig"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Water"
            }
        ]
    },
    "Hot Air": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Hot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Hot"
            },
            {
                "item_1": "Wind",
                "item_2": "Heat"
            }
        ]
    },
    "Sandstorm": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Dust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Storm"
            },
            {
                "item_1": "Fire",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Oasis"
            },
            {
                "item_1": "Wind",
                "item_2": "Mirage"
            },
            {
                "item_1": "Wind",
                "item_2": "Desert"
            },
            {
                "item_1": "Wind",
                "item_2": "Dust"
            },
            {
                "item_1": "Swamp Wine",
                "item_2": "Flying"
            },
            {
                "item_1": "Steamship",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Golem",
                "item_2": "Wind"
            },
            {
                "item_1": "Drunk",
                "item_2": "Flying"
            },
            {
                "item_1": "Seaplane",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Sandwich"
            }
        ]
    },
    "Seed": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Wind",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Crop Circle",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Earth",
                "item_2": "Bleach"
            }
        ]
    },
    "Airplane": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Seaplane",
                "item_2": "Kite"
            },
            {
                "item_1": "Wind",
                "item_2": "Hollywood"
            }
        ]
    },
    "Flying": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Kite"
            },
            {
                "item_1": "Wind",
                "item_2": "Angel"
            },
            {
                "item_1": "Drunken",
                "item_2": "Kite"
            }
        ]
    },
    "Dust Storm": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sandstorm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Wind",
                "item_2": "Google"
            },
            {
                "item_1": "Wind",
                "item_2": "Dust Bunny"
            }
        ]
    },
    "Mud": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Dust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Dust"
            },
            {
                "item_1": "Water",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Steam"
            },
            {
                "item_1": "Earth",
                "item_2": "Swamp"
            },
            {
                "item_1": "Earth",
                "item_2": "Splash"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Vodka"
            },
            {
                "item_1": "Water",
                "item_2": "Dirt"
            },
            {
                "item_1": "Water",
                "item_2": "Soil"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Puddle"
            },
            {
                "item_1": "Steamship",
                "item_2": "Mud"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Tire",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fart",
                "item_2": "Earth"
            },
            {
                "item_1": "Lake",
                "item_2": "Mudslide"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot Springs"
            },
            {
                "item_1": "Earth",
                "item_2": "GPS"
            },
            {
                "item_1": "Earth",
                "item_2": "Swamp Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Baptist"
            },
            {
                "item_1": "Earth",
                "item_2": "Wet Haystack"
            },
            {
                "item_1": "Earth",
                "item_2": "Wet"
            }
        ]
    },
    "Wine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Water",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Water",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Water",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Earth",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Earth",
                "item_2": "Bottle"
            },
            {
                "item_1": "Water",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Water",
                "item_2": "Bottle"
            },
            {
                "item_1": "Fire",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Wind",
                "item_2": "Meteor"
            },
            {
                "item_1": "Yeti",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Ramen",
                "item_2": "Volcano"
            }
        ]
    },
    "Energy": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Windmill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Windmill"
            },
            {
                "item_1": "Fire",
                "item_2": "Windmill"
            },
            {
                "item_1": "Politician",
                "item_2": "Windmill"
            },
            {
                "item_1": "Fire",
                "item_2": "Power"
            },
            {
                "item_1": "Water",
                "item_2": "Google Wind"
            }
        ]
    },
    "Oasis": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Sandstorm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Water",
                "item_2": "Mirage"
            },
            {
                "item_1": "Water",
                "item_2": "Desert"
            },
            {
                "item_1": "Reef",
                "item_2": "Desert"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Mirage"
            },
            {
                "item_1": "Lake",
                "item_2": "Sphinx"
            },
            {
                "item_1": "Gnome",
                "item_2": "Desert"
            }
        ]
    },
    "Boat": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Airplane"
            },
            {
                "item_1": "Water",
                "item_2": "Ship"
            },
            {
                "item_1": "Water",
                "item_2": "Sail"
            },
            {
                "item_1": "Lake",
                "item_2": "Exhaust"
            },
            {
                "item_1": "Water",
                "item_2": "Shoe"
            }
        ]
    },
    "Bird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Flying"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Flying"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Wind",
                "item_2": "Egg"
            }
        ]
    },
    "Holy Water": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Wine"
            }
        ]
    },
    "Mirage": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Oasis"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Oasis"
            },
            {
                "item_1": "Laser",
                "item_2": "Energy"
            },
            {
                "item_1": "Mirror",
                "item_2": "Sand"
            },
            {
                "item_1": "Prism",
                "item_2": "Desert"
            },
            {
                "item_1": "Prism",
                "item_2": "Oasis"
            }
        ]
    },
    "Ship": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Island"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Boat"
            },
            {
                "item_1": "Water",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Water",
                "item_2": "Pirate"
            },
            {
                "item_1": "Earth",
                "item_2": "Sail"
            },
            {
                "item_1": "Water",
                "item_2": "Island"
            },
            {
                "item_1": "Sea",
                "item_2": "Steam Engine"
            },
            {
                "item_1": "Water",
                "item_2": "Cruise"
            }
        ]
    },
    "Penguin": {
        "emoticon": "🐧",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Bird"
            },
            {
                "item_1": "Wind",
                "item_2": "Penguin"
            },
            {
                "item_1": "Skier",
                "item_2": "Ship"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Penguin"
            },
            {
                "item_1": "Cocaine",
                "item_2": "Penguin"
            }
        ]
    },
    "Ash": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Dust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Dust"
            },
            {
                "item_1": "Fire",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Fire",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Fire",
                "item_2": "Vampire"
            },
            {
                "item_1": "Fire",
                "item_2": "Burn"
            },
            {
                "item_1": "Water",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Fire",
                "item_2": "Tree"
            },
            {
                "item_1": "Fire",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Fire",
                "item_2": "Burnt Cookie"
            },
            {
                "item_1": "Ninja",
                "item_2": "Burn"
            },
            {
                "item_1": "Trash",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Death"
            },
            {
                "item_1": "Fire",
                "item_2": "Bleach"
            },
            {
                "item_1": "Fire",
                "item_2": "Clean"
            }
        ]
    },
    "Fireworks": {
        "emoticon": "🎆",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Kite"
            },
            {
                "item_1": "Fire",
                "item_2": "Explosion"
            },
            {
                "item_1": "Fire",
                "item_2": "Blood"
            },
            {
                "item_1": "Fire",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Fire",
                "item_2": "Sleep"
            },
            {
                "item_1": "Fire",
                "item_2": "Hollywood"
            }
        ]
    },
    "Balloon": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sandstorm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Wine"
            },
            {
                "item_1": "Earth",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Airship",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Airship",
                "item_2": "Kite"
            },
            {
                "item_1": "Drunken",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Eruption"
            }
        ]
    },
    "Crash": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Airplane"
            },
            {
                "item_1": "Fire",
                "item_2": "Car"
            },
            {
                "item_1": "Wall",
                "item_2": "Airplane"
            }
        ]
    },
    "Phoenix": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Angel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Flying"
            },
            {
                "item_1": "Fire",
                "item_2": "Bird"
            },
            {
                "item_1": "Fire",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Fire",
                "item_2": "Lily"
            },
            {
                "item_1": "Fire",
                "item_2": "Angel"
            },
            {
                "item_1": "Fire",
                "item_2": "Surfing"
            },
            {
                "item_1": "Fire",
                "item_2": "Life"
            },
            {
                "item_1": "Fire",
                "item_2": "Human"
            },
            {
                "item_1": "Fireball",
                "item_2": "Angel"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Airplane"
            },
            {
                "item_1": "Vulture",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Fire",
                "item_2": "Tomb"
            },
            {
                "item_1": "Fire",
                "item_2": "Grave"
            },
            {
                "item_1": "Tortoise",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Fairy"
            },
            {
                "item_1": "Fire",
                "item_2": "Swan"
            },
            {
                "item_1": "Fire",
                "item_2": "Flamingo"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Oasis"
            },
            {
                "item_1": "Lake",
                "item_2": "FireFox"
            },
            {
                "item_1": "Lake",
                "item_2": "Firefox"
            },
            {
                "item_1": "Fire",
                "item_2": "Cygnus"
            },
            {
                "item_1": "Fire",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Mummy"
            },
            {
                "item_1": "Fire",
                "item_2": "Holy Spirit"
            }
        ]
    },
    "Brick": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Mud"
            },
            {
                "item_1": "Fire",
                "item_2": "Dirt"
            },
            {
                "item_1": "Skier",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Wall",
                "item_2": "Wine"
            },
            {
                "item_1": "Hay",
                "item_2": "Gold"
            }
        ]
    },
    "Alcohol": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Wine"
            }
        ]
    },
    "Explosion": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Energy"
            },
            {
                "item_1": "Fire",
                "item_2": "Firework"
            },
            {
                "item_1": "Fire",
                "item_2": "Emulsion"
            },
            {
                "item_1": "Fire",
                "item_2": "Gasoline"
            },
            {
                "item_1": "Fire",
                "item_2": "Bomb"
            },
            {
                "item_1": "Fire",
                "item_2": "Periscope"
            },
            {
                "item_1": "Fire",
                "item_2": "Alka-seltzer"
            },
            {
                "item_1": "Fire",
                "item_2": "Iphone 6s Plus"
            },
            {
                "item_1": "Acid",
                "item_2": "Fire"
            },
            {
                "item_1": "Gas",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Boom"
            },
            {
                "item_1": "Fire",
                "item_2": "Fart"
            },
            {
                "item_1": "Fire",
                "item_2": "Pepsi"
            },
            {
                "item_1": "Fire",
                "item_2": "Napalm"
            }
        ]
    },
    "Desert": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Boat"
            },
            {
                "item_1": "Fire",
                "item_2": "Mirage"
            },
            {
                "item_1": "Earth",
                "item_2": "Oasis"
            },
            {
                "item_1": "Earth",
                "item_2": "Ash"
            },
            {
                "item_1": "Cactus",
                "item_2": "Oasis"
            },
            {
                "item_1": "Seagull",
                "item_2": "Oasis"
            },
            {
                "item_1": "Fire",
                "item_2": "Africa"
            },
            {
                "item_1": "Earth",
                "item_2": "Dry"
            }
        ]
    },
    "Vampire": {
        "emoticon": "🧛",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Water",
                "item_2": "Blood"
            },
            {
                "item_1": "Wind",
                "item_2": "Blood"
            },
            {
                "item_1": "Wind",
                "item_2": "Bat"
            },
            {
                "item_1": "Water",
                "item_2": "Bat"
            },
            {
                "item_1": "Fire",
                "item_2": "Bat"
            },
            {
                "item_1": "Earth",
                "item_2": "Blood"
            },
            {
                "item_1": "Parasite",
                "item_2": "Lily"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Splash"
            },
            {
                "item_1": "Dracula",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Dracula",
                "item_2": "Pond"
            },
            {
                "item_1": "Dracula",
                "item_2": "Vase"
            },
            {
                "item_1": "Dracula",
                "item_2": "Beach"
            },
            {
                "item_1": "Dracula",
                "item_2": "Blood"
            },
            {
                "item_1": "Dracula",
                "item_2": "Splash"
            },
            {
                "item_1": "Dracula",
                "item_2": "Puddle"
            },
            {
                "item_1": "Dracula",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Dracula",
                "item_2": "Lens"
            },
            {
                "item_1": "Dracula",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Fire",
                "item_2": "Dracula"
            },
            {
                "item_1": "Stake",
                "item_2": "Penguin"
            },
            {
                "item_1": "?",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Stake"
            },
            {
                "item_1": "Lake",
                "item_2": "Blood"
            }
        ]
    },
    "Cannon": {
        "emoticon": "🔫",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fireworks"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Fire",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Fire",
                "item_2": "Pirate"
            },
            {
                "item_1": "Fluids",
                "item_2": "Kiln"
            }
        ]
    },
    "Pop": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Balloon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Balloon"
            },
            {
                "item_1": "Fire",
                "item_2": "Bubble"
            }
        ]
    },
    "Burn": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Alcohol"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Crash"
            },
            {
                "item_1": "Fire",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Fire",
                "item_2": "Vodka"
            }
        ]
    },
    "Kiln": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Brick"
            }
        ]
    },
    "Sand": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Wave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Desert"
            },
            {
                "item_1": "Wind",
                "item_2": "Beach"
            },
            {
                "item_1": "Wind",
                "item_2": "Stone"
            },
            {
                "item_1": "Earth",
                "item_2": "Wave"
            },
            {
                "item_1": "Earth",
                "item_2": "Mud"
            },
            {
                "item_1": "Earth",
                "item_2": "Beach"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Beach"
            },
            {
                "item_1": "Wind",
                "item_2": "Tatooine"
            },
            {
                "item_1": "Wind",
                "item_2": "Onyx"
            }
        ]
    },
    "Cannonball": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cannon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cannon"
            }
        ]
    },
    "Soda": {
        "emoticon": "🥤",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pop"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pop"
            },
            {
                "item_1": "Fire",
                "item_2": "Soda"
            },
            {
                "item_1": "Water",
                "item_2": "Pop"
            },
            {
                "item_1": "Ice-cold Croco-cola",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Coke"
            },
            {
                "item_1": "Wind",
                "item_2": "Pepsi"
            }
        ]
    },
    "Pottery": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Kiln"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Kiln"
            },
            {
                "item_1": "Fire",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Wind",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Clay",
                "item_2": "Sun"
            },
            {
                "item_1": "Water",
                "item_2": "Clay"
            },
            {
                "item_1": "Tan",
                "item_2": "Ceramic"
            }
        ]
    },
    "Glass": {
        "emoticon": "🥃",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sand"
            },
            {
                "item_1": "Water",
                "item_2": "Brick"
            },
            {
                "item_1": "Water",
                "item_2": "Kiln"
            }
        ]
    },
    "Ceramic": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pottery"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pottery"
            }
        ]
    },
    "Lens": {
        "emoticon": "🔍",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Glass"
            }
        ]
    },
    "Magnifying Glass": {
        "emoticon": "🔍",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Lens"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Lens"
            }
        ]
    },
    "Puddle": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ash"
            },
            {
                "item_1": "Wind",
                "item_2": "Puddle"
            },
            {
                "item_1": "Water",
                "item_2": "Snowman"
            },
            {
                "item_1": "Steamroller",
                "item_2": "Water"
            },
            {
                "item_1": "Gas",
                "item_2": "Pond"
            },
            {
                "item_1": "Lake",
                "item_2": "Steamroller"
            },
            {
                "item_1": "Water",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Leak"
            },
            {
                "item_1": "Water",
                "item_2": "Wet"
            }
        ]
    },
    "Splash": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fireworks"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Water",
                "item_2": "Firework"
            },
            {
                "item_1": "Water",
                "item_2": "Parachute"
            },
            {
                "item_1": "Water",
                "item_2": "Death Star"
            }
        ]
    },
    "Blood": {
        "emoticon": "🩸",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Vampire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Vampire"
            },
            {
                "item_1": "Water",
                "item_2": "Heart"
            }
        ]
    },
    "Beach": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Sand"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sand"
            },
            {
                "item_1": "Earth",
                "item_2": "Surfer"
            },
            {
                "item_1": "Earth",
                "item_2": "Surf"
            },
            {
                "item_1": "Earth",
                "item_2": "Surfing"
            },
            {
                "item_1": "Reef",
                "item_2": "Sand"
            },
            {
                "item_1": "Earth",
                "item_2": "Vacation"
            }
        ]
    },
    "Vase": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Pottery"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Pottery"
            },
            {
                "item_1": "Wind",
                "item_2": "Pottery"
            },
            {
                "item_1": "Earth",
                "item_2": "Pottery"
            },
            {
                "item_1": "Fluids",
                "item_2": "Soda"
            },
            {
                "item_1": "Aspirin",
                "item_2": "Pottery"
            },
            {
                "item_1": "Clay",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Clay",
                "item_2": "Goldfish"
            }
        ]
    },
    "Microscope": {
        "emoticon": "🔬",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Magnifying Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Fluids",
                "item_2": "Ceramic"
            }
        ]
    },
    "Pond": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Splash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Splash"
            },
            {
                "item_1": "Water",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Water",
                "item_2": "Lily"
            },
            {
                "item_1": "Earth",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Water",
                "item_2": "Garden"
            }
        ]
    },
    "Flower": {
        "emoticon": "🌸",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Vase"
            },
            {
                "item_1": "Wind",
                "item_2": "Lily"
            },
            {
                "item_1": "Earth",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Earth",
                "item_2": "Lily"
            },
            {
                "item_1": "Earth",
                "item_2": "Spring"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Seed"
            }
        ]
    },
    "Amoeba": {
        "emoticon": "🔬",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Microscope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Microscope"
            },
            {
                "item_1": "Water",
                "item_2": "Paramecium"
            }
        ]
    },
    "Lily": {
        "emoticon": "🌸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Flower"
            },
            {
                "item_1": "Lake",
                "item_2": "Plant"
            }
        ]
    },
    "Virus": {
        "emoticon": "🦠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pond"
            },
            {
                "item_1": "Fire",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Parasite",
                "item_2": "Flu"
            }
        ]
    },
    "Flu": {
        "emoticon": "🤒",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Virus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Virus"
            },
            {
                "item_1": "Wind",
                "item_2": "Virus"
            }
        ]
    },
    "Fever": {
        "emoticon": "🤒",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Flu"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Flu"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Spring"
            }
        ]
    },
    "Hell": {
        "emoticon": "👿",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Church"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fever"
            },
            {
                "item_1": "Fire",
                "item_2": "Devil"
            },
            {
                "item_1": "Water",
                "item_2": "Devil"
            },
            {
                "item_1": "Earth",
                "item_2": "Devil"
            },
            {
                "item_1": "Hades",
                "item_2": "Fever"
            },
            {
                "item_1": "Fire",
                "item_2": "Religion"
            },
            {
                "item_1": "Fire",
                "item_2": "Christianity"
            },
            {
                "item_1": "Fire",
                "item_2": "Eurovision Song Contest"
            },
            {
                "item_1": "Fire",
                "item_2": "Church"
            },
            {
                "item_1": "Fire",
                "item_2": "Eden"
            },
            {
                "item_1": "Fire",
                "item_2": "Underworld"
            }
        ]
    },
    "Devil": {
        "emoticon": "😈",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hell"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hell"
            },
            {
                "item_1": "Wind",
                "item_2": "Hell"
            }
        ]
    },
    "Sick": {
        "emoticon": "🤒",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Virus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Virus"
            },
            {
                "item_1": "Water",
                "item_2": "Bacteria"
            }
        ]
    },
    "Fluoride": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Flu"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Flu"
            },
            {
                "item_1": "Wind",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Hades",
                "item_2": "Hell"
            }
        ]
    },
    "Hot Spring": {
        "emoticon": "♨️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hell"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hell"
            }
        ]
    },
    "Medicine": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Water",
                "item_2": "Cure"
            },
            {
                "item_1": "Earth",
                "item_2": "Cure"
            }
        ]
    },
    "Cure": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Medicine"
            },
            {
                "item_1": "Water",
                "item_2": "Hangover"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Cough"
            },
            {
                "item_1": "Fireball",
                "item_2": "Medicine"
            }
        ]
    },
    "Firefighter": {
        "emoticon": "🚒",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cure"
            },
            {
                "item_1": "Fire",
                "item_2": "Pump"
            },
            {
                "item_1": "Fireball",
                "item_2": "Cure"
            },
            {
                "item_1": "Fire",
                "item_2": "Leak"
            }
        ]
    },
    "Sail": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Whale"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Boat"
            },
            {
                "item_1": "Wind",
                "item_2": "Ship"
            },
            {
                "item_1": "Wind",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Wind",
                "item_2": "Pirate"
            },
            {
                "item_1": "Wind",
                "item_2": "Lung"
            },
            {
                "item_1": "Wind",
                "item_2": "Whale"
            },
            {
                "item_1": "Sea",
                "item_2": "Wind"
            },
            {
                "item_1": "Reef",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Car"
            },
            {
                "item_1": "Water",
                "item_2": "Boot"
            },
            {
                "item_1": "Wind",
                "item_2": "Slave"
            },
            {
                "item_1": "Wind",
                "item_2": "BP"
            },
            {
                "item_1": "Wind",
                "item_2": "Cleopatra"
            },
            {
                "item_1": "Wind",
                "item_2": "Ferry"
            },
            {
                "item_1": "Wind",
                "item_2": "Bp"
            },
            {
                "item_1": "Wind",
                "item_2": "Shoe"
            }
        ]
    },
    "Angel": {
        "emoticon": "👼",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Rose",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Prayer",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Wind",
                "item_2": "Holy Spirit"
            },
            {
                "item_1": "Earth",
                "item_2": "Holy Spirit"
            },
            {
                "item_1": "Flying",
                "item_2": "Human"
            }
        ]
    },
    "House": {
        "emoticon": "🏠",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Brick"
            },
            {
                "item_1": "Earth",
                "item_2": "Window"
            },
            {
                "item_1": "Stingray",
                "item_2": "Brick"
            },
            {
                "item_1": "Fire",
                "item_2": "Cottage"
            },
            {
                "item_1": "Earth",
                "item_2": "Obsidian"
            }
        ]
    },
    "Hangover": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Alcohol"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Earth",
                "item_2": "Hangover"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Radar"
            }
        ]
    },
    "Bat": {
        "emoticon": "🦇",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Vampire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Vampire"
            }
        ]
    },
    "Bubble": {
        "emoticon": "💬",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Pop"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Pop"
            },
            {
                "item_1": "Wind",
                "item_2": "Soda"
            },
            {
                "item_1": "Wind",
                "item_2": "Bubble"
            }
        ]
    },
    "Window": {
        "emoticon": "🪟",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Glass"
            }
        ]
    },
    "Telescope": {
        "emoticon": "🔭",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Lens"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Lens"
            },
            {
                "item_1": "Earth",
                "item_2": "Lens"
            },
            {
                "item_1": "Mirror",
                "item_2": "Kiln"
            },
            {
                "item_1": "Lake",
                "item_2": "Beam"
            },
            {
                "item_1": "Lake",
                "item_2": "Water Ski"
            }
        ]
    },
    "Fan": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Rice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Vase"
            },
            {
                "item_1": "Wind",
                "item_2": "Rice"
            },
            {
                "item_1": "Wind",
                "item_2": "Seal"
            },
            {
                "item_1": "Wind",
                "item_2": "Sword"
            },
            {
                "item_1": "Wind",
                "item_2": "Iron"
            }
        ]
    },
    "Paramecium": {
        "emoticon": "🦠",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Amoeba"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Amoeba"
            }
        ]
    },
    "Sneeze": {
        "emoticon": "🤧",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Water Ski"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Flu"
            },
            {
                "item_1": "Wind",
                "item_2": "Medicine"
            },
            {
                "item_1": "Wind",
                "item_2": "Pepper"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Chef"
            },
            {
                "item_1": "Fireball",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Water",
                "item_2": "Allergy"
            },
            {
                "item_1": "Water",
                "item_2": "Hay Fever"
            },
            {
                "item_1": "Fire",
                "item_2": "Allergy"
            },
            {
                "item_1": "Fire",
                "item_2": "Hay Fever"
            },
            {
                "item_1": "Wind",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Springs"
            }
        ]
    },
    "Breeze": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Cure"
            },
            {
                "item_1": "Wind",
                "item_2": "Life"
            },
            {
                "item_1": "Wind",
                "item_2": "Vacation"
            },
            {
                "item_1": "Wind",
                "item_2": "Clean"
            }
        ]
    },
    "Sailboat": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sail"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sail"
            }
        ]
    },
    "Hanglider": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Hangover"
            }
        ]
    },
    "Curtain": {
        "emoticon": "🎀",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Window"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Window"
            }
        ]
    },
    "Parasail": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Paramecium"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Water",
                "item_2": "Parasail"
            }
        ]
    },
    "Mermaid": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "House"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "House"
            },
            {
                "item_1": "Water",
                "item_2": "Siren"
            },
            {
                "item_1": "Water",
                "item_2": "Ariel"
            },
            {
                "item_1": "Earth",
                "item_2": "Siren"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Rainbow Fish"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Swamp Fish"
            },
            {
                "item_1": "Sea",
                "item_2": "Werewolf"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Nessie"
            },
            {
                "item_1": "Statue",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Lake",
                "item_2": "Pilot"
            },
            {
                "item_1": "Nymph",
                "item_2": "Boat"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Fairy",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Lake",
                "item_2": "Nymph"
            },
            {
                "item_1": "Love",
                "item_2": "Lake"
            },
            {
                "item_1": "Pina Colada",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Crystal",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Crystal",
                "item_2": "Stone"
            },
            {
                "item_1": "Lake",
                "item_2": "Jewel"
            },
            {
                "item_1": "Wind",
                "item_2": "Scarecrow"
            }
        ]
    },
    "Aquarium": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fishbowl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Telescope"
            },
            {
                "item_1": "Earth",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Reef",
                "item_2": "Glass"
            },
            {
                "item_1": "Alligator",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Rainfox",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Earth",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Earth",
                "item_2": "Fish Tank"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Earth, Wind, Fire & Smoke"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Cannon"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Desert"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Fish Tank",
                "item_2": "Balloon"
            },
            {
                "item_1": "Lake",
                "item_2": "Tea Bag"
            }
        ]
    },
    "Surfer": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Parachristianity"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Water",
                "item_2": "Parachristianity"
            }
        ]
    },
    "Surf": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Surfer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Surfer"
            },
            {
                "item_1": "Reef",
                "item_2": "Wave"
            },
            {
                "item_1": "Water",
                "item_2": "Smog"
            },
            {
                "item_1": "Binks",
                "item_2": "Wave"
            }
        ]
    },
    "Pirate": {
        "emoticon": "🏴‍☠️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sail"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sail"
            },
            {
                "item_1": "Fire",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Water",
                "item_2": "Treasure"
            },
            {
                "item_1": "Fireball",
                "item_2": "Firefighter"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Ship"
            },
            {
                "item_1": "Parrotfish",
                "item_2": "Boat"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Lake",
                "item_2": "Sailor"
            },
            {
                "item_1": "Water",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Plant"
            },
            {
                "item_1": "Lake",
                "item_2": "iPhone"
            },
            {
                "item_1": "Lake",
                "item_2": "Airship"
            },
            {
                "item_1": "Lake",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Fire",
                "item_2": "Cruise"
            }
        ]
    },
    "Fireplace": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "House"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "House"
            },
            {
                "item_1": "Fire",
                "item_2": "Window"
            },
            {
                "item_1": "Fireball",
                "item_2": "House"
            },
            {
                "item_1": "Fire",
                "item_2": "Sweater"
            }
        ]
    },
    "Firewater": {
        "emoticon": "🔥💧",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hangover"
            }
        ]
    },
    "Cough": {
        "emoticon": "🤧",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sneeze"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sneeze"
            }
        ]
    },
    "Firework": {
        "emoticon": "🎆",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hanglider"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Fire",
                "item_2": "Parasail"
            },
            {
                "item_1": "Rocket",
                "item_2": "Smoke"
            }
        ]
    },
    "Flame": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Curtain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Curtain"
            },
            {
                "item_1": "Fire",
                "item_2": "Ariel"
            },
            {
                "item_1": "Fire",
                "item_2": "Fluorine"
            },
            {
                "item_1": "Fire",
                "item_2": "Ballet"
            },
            {
                "item_1": "Fire",
                "item_2": "Sword"
            },
            {
                "item_1": "Fire",
                "item_2": "Zephyr"
            },
            {
                "item_1": "Fire",
                "item_2": "Gust"
            },
            {
                "item_1": "Fire",
                "item_2": "Dance"
            }
        ]
    },
    "Siren": {
        "emoticon": "🚨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Mermaid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Bribe",
                "item_2": "Nymph"
            }
        ]
    },
    "Surfing": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Surfer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Surfer"
            },
            {
                "item_1": "Water",
                "item_2": "Surfing"
            },
            {
                "item_1": "Wind",
                "item_2": "Surf"
            }
        ]
    },
    "Warmth": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fireplace"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fireplace"
            }
        ]
    },
    "Lung": {
        "emoticon": "🫁",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Cough"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Cough"
            }
        ]
    },
    "Hot Water": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Warmth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Warmth"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Firewater"
            }
        ]
    },
    "Ariel": {
        "emoticon": "🧜‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Mermaid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Mermaid"
            }
        ]
    },
    "Mountain": {
        "emoticon": "🏔️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Earth"
            },
            {
                "item_1": "Earth",
                "item_2": "Dragon"
            },
            {
                "item_1": "Earth",
                "item_2": "Rock"
            },
            {
                "item_1": "Earth",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Golem",
                "item_2": "Earth"
            },
            {
                "item_1": "Earth",
                "item_2": "Pearl"
            }
        ]
    },
    "Tree": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Plant"
            },
            {
                "item_1": "Earth",
                "item_2": "Forest"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Plant"
            },
            {
                "item_1": "Rainforest",
                "item_2": "Seed"
            },
            {
                "item_1": "Earth",
                "item_2": "Heart"
            },
            {
                "item_1": "Zeus",
                "item_2": "Plant"
            }
        ]
    },
    "Island": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Ocean"
            },
            {
                "item_1": "Earth",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Earth",
                "item_2": "Bird"
            },
            {
                "item_1": "Earth",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Earth",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Earth",
                "item_2": "Whale"
            },
            {
                "item_1": "Water",
                "item_2": "Land"
            },
            {
                "item_1": "Sea",
                "item_2": "Earth"
            }
        ]
    },
    "Whale": {
        "emoticon": "🐳",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Leviathan"
            }
        ]
    },
    "Rice": {
        "emoticon": "🍚",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sushi"
            },
            {
                "item_1": "Earth",
                "item_2": "Paddy"
            },
            {
                "item_1": "Water",
                "item_2": "Farm"
            },
            {
                "item_1": "Water",
                "item_2": "Paddy"
            },
            {
                "item_1": "Fire",
                "item_2": "Paddy"
            },
            {
                "item_1": "Water",
                "item_2": "Crop"
            },
            {
                "item_1": "Wind",
                "item_2": "Paddy"
            }
        ]
    },
    "Planet": {
        "emoticon": "🪐",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Dust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Solar"
            },
            {
                "item_1": "Earth",
                "item_2": "Dust"
            },
            {
                "item_1": "Earth",
                "item_2": "Jabba The Hut"
            },
            {
                "item_1": "Lake",
                "item_2": "Emperor"
            },
            {
                "item_1": "Earth",
                "item_2": "Googol"
            },
            {
                "item_1": "Earth",
                "item_2": "Universe"
            },
            {
                "item_1": "Earth",
                "item_2": "Galaxy"
            },
            {
                "item_1": "Earth",
                "item_2": "Solar Wind"
            }
        ]
    },
    "Leviathan": {
        "emoticon": "🐋",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sea Serpent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Dragon"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Lava"
            },
            {
                "item_1": "Naboo",
                "item_2": "Stone"
            }
        ]
    },
    "Dirt": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Soup"
            },
            {
                "item_1": "Earth",
                "item_2": "Kite"
            },
            {
                "item_1": "Earth",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Flu"
            },
            {
                "item_1": "Earth",
                "item_2": "Sick"
            },
            {
                "item_1": "Earth",
                "item_2": "Medicine"
            },
            {
                "item_1": "Earth",
                "item_2": "Curtain"
            },
            {
                "item_1": "Earth",
                "item_2": "Ariel"
            },
            {
                "item_1": "Earth",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Earth",
                "item_2": "French Onion Soup"
            },
            {
                "item_1": "Earth",
                "item_2": "Data"
            },
            {
                "item_1": "Earth",
                "item_2": "Sandwich"
            }
        ]
    },
    "Snow": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Ice"
            },
            {
                "item_1": "Earth",
                "item_2": "Snowman"
            },
            {
                "item_1": "Wind",
                "item_2": "Snowman"
            },
            {
                "item_1": "Skier",
                "item_2": "Ash"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Ice"
            },
            {
                "item_1": "Earth",
                "item_2": "Alka-Seltzer"
            },
            {
                "item_1": "Earth",
                "item_2": "Rainforest"
            },
            {
                "item_1": "Fire",
                "item_2": "SpongeBob"
            },
            {
                "item_1": "Wind",
                "item_2": "SpongeBob"
            },
            {
                "item_1": "Wind",
                "item_2": "Hoth"
            }
        ]
    },
    "Pepper": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Chili"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Chili"
            }
        ]
    },
    "Teapot": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tea"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Tea"
            },
            {
                "item_1": "Kettle",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Kettle",
                "item_2": "Tornado"
            },
            {
                "item_1": "Kettle",
                "item_2": "Tea"
            },
            {
                "item_1": "Blimp",
                "item_2": "Tea"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Tornado"
            }
        ]
    },
    "Vineyard": {
        "emoticon": "🍇",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Wine"
            }
        ]
    },
    "Meteor": {
        "emoticon": "💫",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Soda"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Soda"
            },
            {
                "item_1": "Alien",
                "item_2": "Rock"
            },
            {
                "item_1": "Tire",
                "item_2": "Fish"
            },
            {
                "item_1": "Lake",
                "item_2": "Meteorite"
            }
        ]
    },
    "Bottle": {
        "emoticon": "🍾",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Glass"
            },
            {
                "item_1": "Fluids",
                "item_2": "Glass"
            },
            {
                "item_1": "Water",
                "item_2": "Genie"
            },
            {
                "item_1": "Wind",
                "item_2": "Coke"
            }
        ]
    },
    "Pot": {
        "emoticon": "🥘",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ceramic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Earth",
                "item_2": "Vase"
            }
        ]
    },
    "Fossil": {
        "emoticon": "🦴",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Puddle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Puddle"
            },
            {
                "item_1": "Fruit",
                "item_2": "Stone"
            }
        ]
    },
    "Bacteria": {
        "emoticon": "🦠",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Microscope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Microscope"
            },
            {
                "item_1": "Toothpaste",
                "item_2": "Vase"
            }
        ]
    },
    "Life": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Virus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Earth",
                "item_2": "Virus"
            },
            {
                "item_1": "Gas",
                "item_2": "Earth"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Lake"
            }
        ]
    },
    "Earthquake": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fever"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fever"
            },
            {
                "item_1": "Earth",
                "item_2": "French Onion Soup Gun"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot Toddies"
            }
        ]
    },
    "Fluorite": {
        "emoticon": "🔲",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fluoride"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Earth",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Lake",
                "item_2": "Fluorite"
            }
        ]
    },
    "Farm": {
        "emoticon": "🐄",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "House"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "House"
            },
            {
                "item_1": "Earth",
                "item_2": "Field"
            },
            {
                "item_1": "Earth",
                "item_2": "Hay"
            },
            {
                "item_1": "Earth",
                "item_2": "Haystack"
            }
        ]
    },
    "Cave": {
        "emoticon": "🕳️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Bat"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Bat"
            },
            {
                "item_1": "Earth",
                "item_2": "Knight"
            }
        ]
    },
    "Moon": {
        "emoticon": "🌙",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Leviathan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Telescope"
            },
            {
                "item_1": "Earth",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Earth",
                "item_2": "Meteor"
            },
            {
                "item_1": "Earth",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Water",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Earth",
                "item_2": "Mirror"
            },
            {
                "item_1": "Earth",
                "item_2": "Galileo"
            },
            {
                "item_1": "Earth",
                "item_2": "Dream"
            },
            {
                "item_1": "Earth",
                "item_2": "Night"
            },
            {
                "item_1": "Water",
                "item_2": "Night"
            },
            {
                "item_1": "Fire",
                "item_2": "Night"
            }
        ]
    },
    "Parachute": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Hanglider"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Wind",
                "item_2": "Spring"
            },
            {
                "item_1": "Skier",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Wind",
                "item_2": "Sleep"
            }
        ]
    },
    "Paratrooper": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Parasail"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Parasail"
            }
        ]
    },
    "Treasure": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pirate"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pirate"
            }
        ]
    },
    "Spring": {
        "emoticon": "🌸",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Warmth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Warmth"
            }
        ]
    },
    "Forest": {
        "emoticon": "🌲",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Tree"
            }
        ]
    },
    "Continent": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Island"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Island"
            },
            {
                "item_1": "Earth",
                "item_2": "Land"
            }
        ]
    },
    "Paddy": {
        "emoticon": "🍀",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Rice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Rice"
            }
        ]
    },
    "Soil": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Dirt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Dirt"
            },
            {
                "item_1": "Earth",
                "item_2": "Shoe"
            },
            {
                "item_1": "Earth",
                "item_2": "Rust"
            }
        ]
    },
    "Snowman": {
        "emoticon": "☃️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pepper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pepper"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Parachute"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Cave"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Farm"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Fossil"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Pot"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Bottle"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Warmth"
            },
            {
                "item_1": "Snowball",
                "item_2": "Siren"
            },
            {
                "item_1": "Lake",
                "item_2": "Snowball"
            }
        ]
    },
    "Oil": {
        "emoticon": "🛢️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fossil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fossil"
            },
            {
                "item_1": "Earth",
                "item_2": "Fuel"
            },
            {
                "item_1": "Water",
                "item_2": "Fossil"
            },
            {
                "item_1": "Water",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Water",
                "item_2": "Gasoline"
            },
            {
                "item_1": "Lake",
                "item_2": "Asphalt"
            },
            {
                "item_1": "Lake",
                "item_2": "Piglet"
            },
            {
                "item_1": "Water",
                "item_2": "Death"
            },
            {
                "item_1": "Earth",
                "item_2": "BP"
            },
            {
                "item_1": "Earth",
                "item_2": "Bp"
            }
        ]
    },
    "Human": {
        "emoticon": "👨",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Life"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Life"
            }
        ]
    },
    "Field": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Farm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Farm"
            },
            {
                "item_1": "Earth",
                "item_2": "Plow"
            }
        ]
    },
    "Mine": {
        "emoticon": "⛏️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Cave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Cave"
            }
        ]
    },
    "Eclipse": {
        "emoticon": "🌑",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Moon"
            },
            {
                "item_1": "Fire",
                "item_2": "Moon"
            }
        ]
    },
    "Basket": {
        "emoticon": "🏀",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Parachute"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Parachute"
            }
        ]
    },
    "Farmer": {
        "emoticon": "🚜",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Human"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Earth",
                "item_2": "Human"
            },
            {
                "item_1": "Earth",
                "item_2": "Ninja"
            },
            {
                "item_1": "Earth",
                "item_2": "Slave"
            },
            {
                "item_1": "Earth",
                "item_2": "Big Bang"
            }
        ]
    },
    "Gold": {
        "emoticon": "💛",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Rich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Treasure"
            },
            {
                "item_1": "Earth",
                "item_2": "Mine"
            },
            {
                "item_1": "Earth",
                "item_2": "Money"
            },
            {
                "item_1": "Fire",
                "item_2": "Treasure"
            },
            {
                "item_1": "Fire",
                "item_2": "Midas"
            },
            {
                "item_1": "Water",
                "item_2": "Midas"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Midas"
            },
            {
                "item_1": "Fire",
                "item_2": "Aphrodite"
            },
            {
                "item_1": "Fire",
                "item_2": "Rich"
            }
        ]
    },
    "Land": {
        "emoticon": "🌄",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Continent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Continent"
            },
            {
                "item_1": "Earth",
                "item_2": "Dolphin"
            },
            {
                "item_1": "Earth",
                "item_2": "Seal"
            },
            {
                "item_1": "Earth",
                "item_2": "Ferry"
            },
            {
                "item_1": "Earth",
                "item_2": "Leak"
            }
        ]
    },
    "Fuel": {
        "emoticon": "⛽",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Oil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Oil"
            },
            {
                "item_1": "Fire",
                "item_2": "Oil"
            }
        ]
    },
    "Potato": {
        "emoticon": "🥔",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Rich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Basket"
            },
            {
                "item_1": "French Fries",
                "item_2": "Soil"
            },
            {
                "item_1": "French Fries",
                "item_2": "Paddy"
            },
            {
                "item_1": "Earth",
                "item_2": "Rich"
            }
        ]
    },
    "Money": {
        "emoticon": "💵",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Methane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Gold"
            },
            {
                "item_1": "Water",
                "item_2": "Gold"
            },
            {
                "item_1": "Wind",
                "item_2": "Methane"
            },
            {
                "item_1": "Earth",
                "item_2": "Methane"
            }
        ]
    },
    "Vodka": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Firewater"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Potato"
            },
            {
                "item_1": "Water",
                "item_2": "Potato"
            },
            {
                "item_1": "Water",
                "item_2": "Money"
            },
            {
                "item_1": "Lake",
                "item_2": "Firewater"
            }
        ]
    },
    "River": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Tree"
            },
            {
                "item_1": "Water",
                "item_2": "Amazon"
            },
            {
                "item_1": "Lake",
                "item_2": "Amazon"
            },
            {
                "item_1": "Lake",
                "item_2": "Styx"
            },
            {
                "item_1": "Water",
                "item_2": "Googol"
            },
            {
                "item_1": "Water",
                "item_2": "GPS"
            }
        ]
    },
    "Meteorite": {
        "emoticon": "💫",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Meteor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Meteor"
            }
        ]
    },
    "Fluorine": {
        "emoticon": "⚛️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Farm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Water",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Fire",
                "item_2": "Farm"
            },
            {
                "item_1": "Fire",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Lake",
                "item_2": "Fluorine"
            }
        ]
    },
    "Tide": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Moon"
            }
        ]
    },
    "Fountain": {
        "emoticon": "⛲",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Spring"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Spring"
            },
            {
                "item_1": "Water",
                "item_2": "Fountain"
            },
            {
                "item_1": "Water",
                "item_2": "Pump"
            }
        ]
    },
    "Emulsion": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Oil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Oil"
            }
        ]
    },
    "Well": {
        "emoticon": "🚰",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Mine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Mine"
            }
        ]
    },
    "Fisherman": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Farmer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Farmer"
            },
            {
                "item_1": "Kettle",
                "item_2": "Sun"
            }
        ]
    },
    "Gasoline": {
        "emoticon": "⛽️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fuel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fuel"
            }
        ]
    },
    "Hydrofluoric Acid": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fluorine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Fluorine"
            }
        ]
    },
    "Milk": {
        "emoticon": "🥛",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Emulsion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Emulsion"
            },
            {
                "item_1": "Water",
                "item_2": "Milk"
            },
            {
                "item_1": "Water",
                "item_2": "Cheese"
            },
            {
                "item_1": "Water",
                "item_2": "Cookie"
            }
        ]
    },
    "Pump": {
        "emoticon": "🎃",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Well"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Well"
            }
        ]
    },
    "Spicy": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pepper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pepper"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Sauce"
            }
        ]
    },
    "Bomb": {
        "emoticon": "💣",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Bottle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Bottle"
            }
        ]
    },
    "Cook": {
        "emoticon": "🍳",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pot"
            },
            {
                "item_1": "Fire",
                "item_2": "Chef"
            }
        ]
    },
    "Dinosaur": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fossil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fossil"
            },
            {
                "item_1": "Alligator",
                "item_2": "Volcano"
            },
            {
                "item_1": "Nap",
                "item_2": "Fossil"
            },
            {
                "item_1": "Google Dream",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Lake",
                "item_2": "T-Rex"
            }
        ]
    },
    "Crop": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Field"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Field"
            },
            {
                "item_1": "Wind",
                "item_2": "Field"
            }
        ]
    },
    "Popcorn": {
        "emoticon": "🍿",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Basket"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Basket"
            },
            {
                "item_1": "Fire",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Mirror",
                "item_2": "Pop"
            },
            {
                "item_1": "Fire",
                "item_2": "Cinema"
            }
        ]
    },
    "Barbecue": {
        "emoticon": "🍖",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Dinosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Farmer"
            },
            {
                "item_1": "Fire",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Fire",
                "item_2": "Grill"
            },
            {
                "item_1": "Wind",
                "item_2": "Smog"
            },
            {
                "item_1": "Fire",
                "item_2": "Lawn"
            },
            {
                "item_1": "Fire",
                "item_2": "Garden"
            }
        ]
    },
    "Midas": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Gold"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Gold"
            }
        ]
    },
    "Chip": {
        "emoticon": "🍟",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Potato"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Potato"
            }
        ]
    },
    "Cheese": {
        "emoticon": "🧀",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Milk"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Milk"
            },
            {
                "item_1": "Lake",
                "item_2": "Googolplex"
            },
            {
                "item_1": "Water",
                "item_2": "Fondue"
            },
            {
                "item_1": "Fire",
                "item_2": "Fondue"
            },
            {
                "item_1": "Wind",
                "item_2": "Fondue"
            }
        ]
    },
    "Chef": {
        "emoticon": "👨‍🍳",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cook"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cook"
            }
        ]
    },
    "Toast": {
        "emoticon": "🍞",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Crop"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Crop"
            },
            {
                "item_1": "Fire",
                "item_2": "Cheese"
            },
            {
                "item_1": "Fire",
                "item_2": "Soggy Bread"
            },
            {
                "item_1": "Fire",
                "item_2": "Roast"
            },
            {
                "item_1": "Fire",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Fire",
                "item_2": "Soggy"
            },
            {
                "item_1": "Fire",
                "item_2": "Bunny"
            }
        ]
    },
    "Grill": {
        "emoticon": "🍖",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Barbecue"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Barbecue"
            }
        ]
    },
    "Cookie": {
        "emoticon": "🍪",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Chip"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Chip"
            },
            {
                "item_1": "Water",
                "item_2": "Burnt Cookie"
            }
        ]
    },
    "Burnt Toast": {
        "emoticon": "🍞",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Toast"
            },
            {
                "item_1": "Fire",
                "item_2": "Soggy Toast"
            }
        ]
    },
    "Burnt Cookie": {
        "emoticon": "🍪",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cookie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cookie"
            }
        ]
    },
    "Hot Sauce": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Spicy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Spicy"
            },
            {
                "item_1": "Alien",
                "item_2": "Chili"
            }
        ]
    },
    "Plesiosaur": {
        "emoticon": "🦕",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Dinosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Dinosaur"
            }
        ]
    },
    "Soggy Toast": {
        "emoticon": "🥞",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Death Star"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Toast"
            },
            {
                "item_1": "Water",
                "item_2": "Soggy Toast"
            },
            {
                "item_1": "Lake",
                "item_2": "Death Star"
            }
        ]
    },
    "Coffee": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Burnt Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Water",
                "item_2": "Coffee"
            },
            {
                "item_1": "Fire",
                "item_2": "Coffee"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Field"
            },
            {
                "item_1": "Death Star",
                "item_2": "Drunken"
            },
            {
                "item_1": "Lake",
                "item_2": "Periscope"
            },
            {
                "item_1": "Water",
                "item_2": "Roast"
            },
            {
                "item_1": "Earth",
                "item_2": "Blacksmith"
            }
        ]
    },
    "Loch Ness Monster": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Plesiosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Water",
                "item_2": "Nessie"
            },
            {
                "item_1": "Fire",
                "item_2": "Nessie"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Cloud"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Wind"
            },
            {
                "item_1": "Lake",
                "item_2": "Crop Circle"
            },
            {
                "item_1": "Lake",
                "item_2": "Golem"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Flying Noodle"
            },
            {
                "item_1": "Lake",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Kraken"
            },
            {
                "item_1": "Lake",
                "item_2": "Slim Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Noodle"
            },
            {
                "item_1": "Lake",
                "item_2": "God"
            }
        ]
    },
    "Nessie": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Leaf"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Ghost"
            },
            {
                "item_1": "Fairy",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Lake",
                "item_2": "Genie"
            },
            {
                "item_1": "Seaplane",
                "item_2": "Eruption"
            },
            {
                "item_1": "Binks",
                "item_2": "Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Leaf"
            },
            {
                "item_1": "Lake",
                "item_2": "Gnome"
            }
        ]
    },
    "Sea Monster": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Loch Ness Monster"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Loch Ness Monster"
            }
        ]
    },
    "Kraken": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sea Monster"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Water",
                "item_2": "Octopus"
            },
            {
                "item_1": "Fire",
                "item_2": "Octopus"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Octopus"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Squid"
            },
            {
                "item_1": "Shipwreck",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Octopus"
            }
        ]
    },
    "Squid": {
        "emoticon": "🦑",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Kraken"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Kraken"
            }
        ]
    },
    "Ink": {
        "emoticon": "🖋️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Squid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Squid"
            }
        ]
    },
    "Tattoo": {
        "emoticon": "💉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Squid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Squid"
            },
            {
                "item_1": "Fire",
                "item_2": "Ink"
            }
        ]
    },
    "Octopus": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Tattoo"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Tattoo"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Ink"
            }
        ]
    },
    "Avalanche": {
        "emoticon": "🌨️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Mountain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Mountain"
            },
            {
                "item_1": "Skier",
                "item_2": "Crash"
            }
        ]
    },
    "Leaf": {
        "emoticon": "🍃",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Tree"
            },
            {
                "item_1": "Wind",
                "item_2": "Green"
            }
        ]
    },
    "Blizzard": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Snow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Snow"
            },
            {
                "item_1": "Wind",
                "item_2": "Icefox"
            }
        ]
    },
    "Kettle": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Teapot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Teapot"
            }
        ]
    },
    "Werewolf": {
        "emoticon": "🐺",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Moon"
            },
            {
                "item_1": "Lake",
                "item_2": "Sonar"
            }
        ]
    },
    "Paraglider": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Parachute"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Parachute"
            }
        ]
    },
    "Steam Engine": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Kettle",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kettle",
                "item_2": "Engine"
            },
            {
                "item_1": "Water",
                "item_2": "Industrial Revolution"
            },
            {
                "item_1": "Fire",
                "item_2": "Swine"
            }
        ]
    },
    "Transformer": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Werewolf",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Werewolf",
                "item_2": "Engine"
            },
            {
                "item_1": "Optimus Prime",
                "item_2": "Engine"
            }
        ]
    },
    "Jetpack": {
        "emoticon": "🛸",
        "mostEfficientRecipe": {
            "item_1": "Paraglider",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paraglider",
                "item_2": "Engine"
            }
        ]
    },
    "Train": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Steam Engine",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam Engine",
                "item_2": "Engine"
            },
            {
                "item_1": "Alligator",
                "item_2": "Engine"
            },
            {
                "item_1": "Pasta",
                "item_2": "Painting"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Lightsaber"
            }
        ]
    },
    "Optimus Prime": {
        "emoticon": "🚚",
        "mostEfficientRecipe": {
            "item_1": "Transformer",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Transformer",
                "item_2": "Engine"
            },
            {
                "item_1": "Sea",
                "item_2": "Optimus Prime"
            },
            {
                "item_1": "Lake",
                "item_2": "French Onion Soup"
            },
            {
                "item_1": "Fire",
                "item_2": "Pigimus Prime"
            },
            {
                "item_1": "Earth",
                "item_2": "Optimus Pig"
            }
        ]
    },
    "Rocket": {
        "emoticon": "🚀",
        "mostEfficientRecipe": {
            "item_1": "Jetpack",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jetpack",
                "item_2": "Engine"
            },
            {
                "item_1": "Sapphire",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Jet"
            }
        ]
    },
    "Locomotive": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Train",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Train",
                "item_2": "Engine"
            }
        ]
    },
    "Volcanicus": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Optimus Prime",
            "item_2": "Lava"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Optimus Prime",
                "item_2": "Lava"
            }
        ]
    },
    "Unicorn": {
        "emoticon": "🦄",
        "mostEfficientRecipe": {
            "item_1": "Rocket",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rocket",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Volcano"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Marsh"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Rain"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Fish"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Swamp"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Cloud"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Ocean"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Plant"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Wave"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Steam"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Earth"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Wind"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Fire"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Water"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Lake"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Kite"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Rock"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Ice"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Soup"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Electricity"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Stone"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Fog"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Solar"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Sun"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Sushi"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Lightning"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Narwhal"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Lake",
                "item_2": "Swamp Thing"
            }
        ]
    },
    "Rainbow Train": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Locomotive",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Locomotive",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Rainbow Train",
                "item_2": "Wine"
            }
        ]
    },
    "Nothing": {
        "emoticon": "⬜",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Coca-Cola"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Volcanicus",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Marsh"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Water"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Spicy Latte",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Shrimp",
                "item_2": "Farmer"
            },
            {
                "item_1": "Shrimp",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Alien",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Ghost",
                "item_2": "Dragon"
            },
            {
                "item_1": "Thunder",
                "item_2": "Dragon"
            },
            {
                "item_1": "Fire",
                "item_2": "Ninja"
            },
            {
                "item_1": "Sweater",
                "item_2": "Soda"
            },
            {
                "item_1": "Earth",
                "item_2": "Google"
            },
            {
                "item_1": "Earth",
                "item_2": "Dust Bunny"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Lightning"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Earth, Wind, Fire & Smoke"
            },
            {
                "item_1": "Google Earth, Wind, Fire & Smoke",
                "item_2": "Wind"
            },
            {
                "item_1": "Lake",
                "item_2": "Coca-Cola"
            },
            {
                "item_1": "Google Earth, Wind, Fire & Smoke",
                "item_2": "Soda"
            },
            {
                "item_1": "Google Earth, Wind, Fire & Smoke",
                "item_2": "Sand"
            },
            {
                "item_1": "Google Earth, Wind, Fire & Smoke",
                "item_2": "Burn"
            },
            {
                "item_1": "Hot Tub",
                "item_2": "Wine"
            },
            {
                "item_1": "Dada",
                "item_2": "Sushi"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Earth, Wind, Fire & Smoke"
            },
            {
                "item_1": "Google Earth, Wind & Fire & Water",
                "item_2": "Steam"
            },
            {
                "item_1": "Google Earth, Wind & Fire & Water",
                "item_2": "Earth"
            },
            {
                "item_1": "Slim Serpent",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Aspirin"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Earth, Wind & Fire & Water"
            },
            {
                "item_1": "Wind",
                "item_2": "Mummy"
            },
            {
                "item_1": "Mario",
                "item_2": "Tea"
            },
            {
                "item_1": "Super Mario Divorce Party",
                "item_2": "Yaoi Yuri"
            },
            {
                "item_1": "Super Mario Divorce Party",
                "item_2": "Yaoi"
            },
            {
                "item_1": "Super Mario Divorce Party",
                "item_2": "Yaoi Yuri Manga"
            },
            {
                "item_1": "Mario Party 9",
                "item_2": "Super Gay Yaoi Yuri Mario Party"
            }
        ]
    },
    "Swamp Thing": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Volcanicus",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Volcanicus",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Tornado"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Plant"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Steam"
            },
            {
                "item_1": "Ice Swamp Thing",
                "item_2": "Wind"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Ice Swamp Thing"
            },
            {
                "item_1": "Jaws",
                "item_2": "Ice Swamp Thing"
            },
            {
                "item_1": "Lake",
                "item_2": "Ice Swamp Thing"
            }
        ]
    },
    "Narwhal": {
        "emoticon": "🐳",
        "mostEfficientRecipe": {
            "item_1": "Unicorn",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Unicorn",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sea",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Whale"
            }
        ]
    },
    "Swamp Fish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Swamp Thing",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Thing",
                "item_2": "Fish"
            },
            {
                "item_1": "Swamp Fish",
                "item_2": "Water"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Mist"
            }
        ]
    },
    "Rainbow Fish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Train",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Train",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Sea",
                "item_2": "Rainbow Train"
            }
        ]
    },
    "Ice Swamp Thing": {
        "emoticon": "🧊🌿",
        "mostEfficientRecipe": {
            "item_1": "Swamp Thing",
            "item_2": "Iceberg"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Thing",
                "item_2": "Iceberg"
            }
        ]
    },
    "Submarine": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Narwhal",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Narwhal",
                "item_2": "Engine"
            },
            {
                "item_1": "Sea",
                "item_2": "Locomotive"
            },
            {
                "item_1": "Sea",
                "item_2": "Rocket"
            },
            {
                "item_1": "Sea",
                "item_2": "Train"
            },
            {
                "item_1": "Sea",
                "item_2": "Transformer"
            },
            {
                "item_1": "Periscope",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Robot"
            },
            {
                "item_1": "Jet",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Lake",
                "item_2": "Train"
            },
            {
                "item_1": "Lake",
                "item_2": "Submarine"
            }
        ]
    },
    "Tank": {
        "emoticon": "🛢️",
        "mostEfficientRecipe": {
            "item_1": "Swamp Fish",
            "item_2": "Lava"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Fish",
                "item_2": "Lava"
            },
            {
                "item_1": "Tank",
                "item_2": "Tank"
            }
        ]
    },
    "Poseidon": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Zeus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Fish",
                "item_2": "Ocean"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Tattoo"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Kraken"
            },
            {
                "item_1": "Atlantis",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Aquaman",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Ocean"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Vape"
            },
            {
                "item_1": "Lake",
                "item_2": "Zeus"
            }
        ]
    },
    "Sea": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poseidon",
                "item_2": "Lake"
            },
            {
                "item_1": "Parting",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Ocean"
            }
        ]
    },
    "Steamboat": {
        "emoticon": "🛳️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Chlorine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poseidon",
                "item_2": "Steam"
            },
            {
                "item_1": "Steamboat",
                "item_2": "Water"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Engine"
            },
            {
                "item_1": "Steampunk",
                "item_2": "Lake"
            },
            {
                "item_1": "Reef",
                "item_2": "Steam"
            },
            {
                "item_1": "Alligator",
                "item_2": "Steam"
            },
            {
                "item_1": "Water",
                "item_2": "Chlorine"
            }
        ]
    },
    "Atlantis": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Poseidon",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poseidon",
                "item_2": "Earth"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Submarine"
            },
            {
                "item_1": "Sea",
                "item_2": "Volcanicus"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Ocean"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Earth"
            }
        ]
    },
    "Subtank": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Tank",
            "item_2": "Submarine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tank",
                "item_2": "Submarine"
            }
        ]
    },
    "Aquaman": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Poseidon",
            "item_2": "Swamp Thing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poseidon",
                "item_2": "Swamp Thing"
            }
        ]
    },
    "Kelp": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Sea",
            "item_2": "Avalanche"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea",
                "item_2": "Avalanche"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Plant"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Water"
            }
        ]
    },
    "Titanic": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Steamboat",
            "item_2": "Octopus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamboat",
                "item_2": "Octopus"
            },
            {
                "item_1": "Shipwreck",
                "item_2": "Electricity"
            },
            {
                "item_1": "Water",
                "item_2": "Love Boat"
            },
            {
                "item_1": "Heart",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Earth",
                "item_2": "Cruise"
            },
            {
                "item_1": "Water",
                "item_2": "Hollywood"
            }
        ]
    },
    "Starbucks": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Atlantis",
            "item_2": "Coffee"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Atlantis",
                "item_2": "Coffee"
            }
        ]
    },
    "Vape": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Subtank",
            "item_2": "Plesiosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Subtank",
                "item_2": "Plesiosaur"
            }
        ]
    },
    "Spicy Aquaman": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Aquaman",
            "item_2": "Hot Sauce"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Aquaman",
                "item_2": "Hot Sauce"
            }
        ]
    },
    "Wasabi": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Kelp",
            "item_2": "Hot Sauce"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kelp",
                "item_2": "Hot Sauce"
            }
        ]
    },
    "Spicy Boat": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Titanic",
            "item_2": "Hot Sauce"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Titanic",
                "item_2": "Hot Sauce"
            }
        ]
    },
    "Spicy Latte": {
        "emoticon": "🌶️☕️",
        "mostEfficientRecipe": {
            "item_1": "Starbucks",
            "item_2": "Burnt Cookie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Starbucks",
                "item_2": "Burnt Cookie"
            }
        ]
    },
    "Dab": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Vape",
            "item_2": "Grill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Vape",
                "item_2": "Grill"
            },
            {
                "item_1": "Dab",
                "item_2": "Money"
            }
        ]
    },
    "Shrimp": {
        "emoticon": "🍤",
        "mostEfficientRecipe": {
            "item_1": "Spicy Aquaman",
            "item_2": "Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spicy Aquaman",
                "item_2": "Toast"
            }
        ]
    },
    "Godzilla": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Wasabi",
            "item_2": "Dinosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wasabi",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Charon",
                "item_2": "Kaiju"
            }
        ]
    },
    "Spicy Dinosaur": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Spicy Boat",
            "item_2": "Spicy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spicy Boat",
                "item_2": "Spicy"
            }
        ]
    },
    "Cappuccino": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Spicy Latte",
            "item_2": "Fountain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spicy Latte",
                "item_2": "Fountain"
            }
        ]
    },
    "Mashed Potato": {
        "emoticon": "🥔",
        "mostEfficientRecipe": {
            "item_1": "Dab",
            "item_2": "Gold"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dab",
                "item_2": "Gold"
            },
            {
                "item_1": "Mashed Potato",
                "item_2": "Human"
            }
        ]
    },
    "Minecraft": {
        "emoticon": "🏰",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Light"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Shrimp",
                "item_2": "Mine"
            },
            {
                "item_1": "Minecraft",
                "item_2": "Oil"
            },
            {
                "item_1": "Earth",
                "item_2": "Light"
            }
        ]
    },
    "Kaiju": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Godzilla",
            "item_2": "Mine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Godzilla",
                "item_2": "Mine"
            }
        ]
    },
    "T-Rex": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Jaws"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spicy Dinosaur",
                "item_2": "Field"
            },
            {
                "item_1": "Earth",
                "item_2": "Jaws"
            }
        ]
    },
    "Barista": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Cappuccino",
            "item_2": "Human"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cappuccino",
                "item_2": "Human"
            }
        ]
    },
    "French Fries": {
        "emoticon": "🍟",
        "mostEfficientRecipe": {
            "item_1": "Mashed Potato",
            "item_2": "Oil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mashed Potato",
                "item_2": "Oil"
            }
        ]
    },
    "Snow Golem": {
        "emoticon": "☃️",
        "mostEfficientRecipe": {
            "item_1": "Minecraft",
            "item_2": "Snowman"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Minecraft",
                "item_2": "Snowman"
            }
        ]
    },
    "Yeti": {
        "emoticon": "🧊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Snowman"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kaiju",
                "item_2": "Snowman"
            },
            {
                "item_1": "French Fries",
                "item_2": "Snowman"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Continent"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Forest"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Planet"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Rice"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Island"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Tree"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Mountain"
            },
            {
                "item_1": "Abominable Snowman",
                "item_2": "Ariel"
            },
            {
                "item_1": "Lake",
                "item_2": "Snowman"
            },
            {
                "item_1": "Charon",
                "item_2": "T-Rex"
            }
        ]
    },
    "Abominable Snowman": {
        "emoticon": "🐻",
        "mostEfficientRecipe": {
            "item_1": "Yeti",
            "item_2": "Meteor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "T-Rex",
                "item_2": "Snowman"
            },
            {
                "item_1": "Yeti",
                "item_2": "Meteor"
            },
            {
                "item_1": "Yeti",
                "item_2": "Teapot"
            },
            {
                "item_1": "Yeti",
                "item_2": "Pepper"
            },
            {
                "item_1": "Yeti",
                "item_2": "Snow"
            },
            {
                "item_1": "Yeti",
                "item_2": "Dirt"
            },
            {
                "item_1": "Yeti",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Alien",
                "item_2": "Ice"
            }
        ]
    },
    "Snowflake": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Barista",
            "item_2": "Snowman"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Barista",
                "item_2": "Snowman"
            },
            {
                "item_1": "Snow Golem",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Wind",
                "item_2": "Crystal"
            }
        ]
    },
    "Europe": {
        "emoticon": "🇪🇺",
        "mostEfficientRecipe": {
            "item_1": "French Fries",
            "item_2": "Continent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "French Fries",
                "item_2": "Continent"
            }
        ]
    },
    "Snowball": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Paradise"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Snow Golem",
                "item_2": "Meteor"
            },
            {
                "item_1": "Lake",
                "item_2": "Paradise"
            }
        ]
    },
    "Pluto": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Yeti",
            "item_2": "Planet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Yeti",
                "item_2": "Planet"
            }
        ]
    },
    "Hot Toddy": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Abominable Snowman",
            "item_2": "Lung"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Abominable Snowman",
                "item_2": "Lung"
            }
        ]
    },
    "Snowboarding": {
        "emoticon": "🏂",
        "mostEfficientRecipe": {
            "item_1": "Snowflake",
            "item_2": "Surfing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Snowflake",
                "item_2": "Surfing"
            },
            {
                "item_1": "Snowball",
                "item_2": "Surfing"
            }
        ]
    },
    "Eurovision": {
        "emoticon": "🇪🇺",
        "mostEfficientRecipe": {
            "item_1": "Europe",
            "item_2": "Surfing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Europe",
                "item_2": "Surfing"
            },
            {
                "item_1": "Eurovision",
                "item_2": "Hanglider"
            }
        ]
    },
    "Fireball": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fishing Rod"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Snowball",
                "item_2": "Flame"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Flame"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Firework"
            },
            {
                "item_1": "Hot Toddy",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Fireball",
                "item_2": "Hangover"
            },
            {
                "item_1": "Sponge",
                "item_2": "Fire"
            },
            {
                "item_1": "Spaghetti",
                "item_2": "Fire"
            },
            {
                "item_1": "GPS",
                "item_2": "Fireball"
            },
            {
                "item_1": "Fire",
                "item_2": "Fishing Rod"
            },
            {
                "item_1": "Fire",
                "item_2": "Whiskey"
            },
            {
                "item_1": "Fire",
                "item_2": "Omelette"
            }
        ]
    },
    "Hades": {
        "emoticon": "👹",
        "mostEfficientRecipe": {
            "item_1": "Pluto",
            "item_2": "Flame"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pluto",
                "item_2": "Flame"
            },
            {
                "item_1": "Fire",
                "item_2": "Styx"
            },
            {
                "item_1": "Fire",
                "item_2": "Canal"
            }
        ]
    },
    "Parasite": {
        "emoticon": "🦠",
        "mostEfficientRecipe": {
            "item_1": "Hot Toddy",
            "item_2": "Curtain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hot Toddy",
                "item_2": "Curtain"
            }
        ]
    },
    "Skiing": {
        "emoticon": "⛷️",
        "mostEfficientRecipe": {
            "item_1": "Snowboarding",
            "item_2": "Curtain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Snowboarding",
                "item_2": "Curtain"
            }
        ]
    },
    "ABBA": {
        "emoticon": "🎶",
        "mostEfficientRecipe": {
            "item_1": "Eurovision",
            "item_2": "Breeze"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Eurovision",
                "item_2": "Breeze"
            }
        ]
    },
    "Toothpaste": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Fireball",
            "item_2": "Fluoride"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fireball",
                "item_2": "Fluoride"
            }
        ]
    },
    "Fluids": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Hades",
            "item_2": "Flu"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hades",
                "item_2": "Flu"
            }
        ]
    },
    "Symbiosis": {
        "emoticon": "💞",
        "mostEfficientRecipe": {
            "item_1": "Parasite",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Parasite",
                "item_2": "Flower"
            }
        ]
    },
    "Skier": {
        "emoticon": "⛷️",
        "mostEfficientRecipe": {
            "item_1": "Skiing",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skiing",
                "item_2": "Flower"
            },
            {
                "item_1": "Skier",
                "item_2": "Mirage"
            }
        ]
    },
    "Rose": {
        "emoticon": "🌹",
        "mostEfficientRecipe": {
            "item_1": "ABBA",
            "item_2": "Microscope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "ABBA",
                "item_2": "Microscope"
            },
            {
                "item_1": "Earth",
                "item_2": "Aphrodite"
            }
        ]
    },
    "Dentist": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Toothpaste",
            "item_2": "Lens"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Toothpaste",
                "item_2": "Lens"
            }
        ]
    },
    "Water Gun": {
        "emoticon": "🔫",
        "mostEfficientRecipe": {
            "item_1": "Fluids",
            "item_2": "Desert"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fluids",
                "item_2": "Desert"
            }
        ]
    },
    "Cactus": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Symbiosis",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Symbiosis",
                "item_2": "Brick"
            },
            {
                "item_1": "Prickle",
                "item_2": "Wine"
            },
            {
                "item_1": "Prickle",
                "item_2": "Mud"
            },
            {
                "item_1": "Prickle",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Earth",
                "item_2": "Periscope"
            }
        ]
    },
    "Jesus": {
        "emoticon": "😇",
        "mostEfficientRecipe": {
            "item_1": "Skier",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skier",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Resurrection",
                "item_2": "Kite"
            },
            {
                "item_1": "Laser",
                "item_2": "Boat"
            }
        ]
    },
    "Parrot": {
        "emoticon": "🦜",
        "mostEfficientRecipe": {
            "item_1": "Porkimus Prime",
            "item_2": "Duck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rose",
                "item_2": "Bird"
            },
            {
                "item_1": "Toucan",
                "item_2": "Energy"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Eruption"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Storm"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Dust"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Heat"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Hot"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Ice"
            },
            {
                "item_1": "Psittacine",
                "item_2": "Soup"
            },
            {
                "item_1": "Parrotfish",
                "item_2": "Bird"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Duck"
            }
        ]
    },
    "Toucan": {
        "emoticon": "🐦",
        "mostEfficientRecipe": {
            "item_1": "Dentist",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dentist",
                "item_2": "Bird"
            }
        ]
    },
    "Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hay Fever"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water Gun",
                "item_2": "Oasis"
            },
            {
                "item_1": "Lake",
                "item_2": "Dada"
            },
            {
                "item_1": "Lake",
                "item_2": "Hay Fever"
            }
        ]
    },
    "Prickle": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Cactus",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cactus",
                "item_2": "Energy"
            }
        ]
    },
    "Resurrection": {
        "emoticon": "🌹",
        "mostEfficientRecipe": {
            "item_1": "Jesus",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jesus",
                "item_2": "Energy"
            }
        ]
    },
    "Psittacine": {
        "emoticon": "🦜",
        "mostEfficientRecipe": {
            "item_1": "Parrot",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Parrot",
                "item_2": "Energy"
            }
        ]
    },
    "Fruit": {
        "emoticon": "🍇",
        "mostEfficientRecipe": {
            "item_1": "Toucan",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Toucan",
                "item_2": "Wine"
            }
        ]
    },
    "Duck Sauce": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Duck",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Duck",
                "item_2": "Wine"
            },
            {
                "item_1": "Duck Sauce",
                "item_2": "Sushi"
            }
        ]
    },
    "Porcupine": {
        "emoticon": "🦔",
        "mostEfficientRecipe": {
            "item_1": "Prickle",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Prickle",
                "item_2": "Airplane"
            }
        ]
    },
    "Don Quixote": {
        "emoticon": "🐴",
        "mostEfficientRecipe": {
            "item_1": "Resurrection",
            "item_2": "Eruption"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Resurrection",
                "item_2": "Eruption"
            }
        ]
    },
    "Pterodactyl": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Psittacine",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Psittacine",
                "item_2": "Stone"
            }
        ]
    },
    "Fruit Salad": {
        "emoticon": "🍉",
        "mostEfficientRecipe": {
            "item_1": "Fruit",
            "item_2": "Solar"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fruit",
                "item_2": "Solar"
            }
        ]
    },
    "Dragon Sauce": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Duck Sauce",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Duck Sauce",
                "item_2": "Dragon"
            }
        ]
    },
    "Hedgehog": {
        "emoticon": "🦔",
        "mostEfficientRecipe": {
            "item_1": "Porcupine",
            "item_2": "Lightning"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Porcupine",
                "item_2": "Lightning"
            }
        ]
    },
    "Swordfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Don Quixote",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Don Quixote",
                "item_2": "Fish"
            }
        ]
    },
    "Pteranodon": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Pterodactyl",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pterodactyl",
                "item_2": "Fish"
            }
        ]
    },
    "Swamp Salad": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Fruit Salad",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fruit Salad",
                "item_2": "Swamp"
            }
        ]
    },
    "Swamp Wine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Swamp Salad",
            "item_2": "Dust Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Salad",
                "item_2": "Dust Storm"
            }
        ]
    },
    "Pilot": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Swamp Wine",
            "item_2": "Seed"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Wine",
                "item_2": "Seed"
            },
            {
                "item_1": "Drunk",
                "item_2": "Airplane"
            }
        ]
    },
    "Sunflower": {
        "emoticon": "🌻",
        "mostEfficientRecipe": {
            "item_1": "Pilot",
            "item_2": "Seed"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pilot",
                "item_2": "Seed"
            },
            {
                "item_1": "Sunflower",
                "item_2": "Seed"
            }
        ]
    },
    "Sunfish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Sunflower",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sunflower",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Sun"
            },
            {
                "item_1": "Flying Sunfish",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Sushi"
            },
            {
                "item_1": "Solar Flare",
                "item_2": "Fish"
            }
        ]
    },
    "Flying Sunfish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Sunfish",
            "item_2": "Mist"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sunfish",
                "item_2": "Mist"
            }
        ]
    },
    "Manta Ray": {
        "emoticon": "🐡",
        "mostEfficientRecipe": {
            "item_1": "Flying Sunfish",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Sunfish",
                "item_2": "Steam"
            }
        ]
    },
    "Steam Ray": {
        "emoticon": "🌀",
        "mostEfficientRecipe": {
            "item_1": "Manta Ray",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Manta Ray",
                "item_2": "Steam"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Steam"
            },
            {
                "item_1": "Steam Ray",
                "item_2": "Penguin"
            }
        ]
    },
    "Laser": {
        "emoticon": "🔦",
        "mostEfficientRecipe": {
            "item_1": "Steam Ray",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam Ray",
                "item_2": "Fire"
            }
        ]
    },
    "Steamship": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Steam Ray",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam Ray",
                "item_2": "Holy Water"
            }
        ]
    },
    "Beam": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Laser",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Laser",
                "item_2": "Mud"
            }
        ]
    },
    "Airship": {
        "emoticon": "🛩️",
        "mostEfficientRecipe": {
            "item_1": "Steamship",
            "item_2": "Flying"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamship",
                "item_2": "Flying"
            },
            {
                "item_1": "Zeppelin",
                "item_2": "Windmill"
            },
            {
                "item_1": "Zeppelin",
                "item_2": "Flying Fish"
            }
        ]
    },
    "UFO": {
        "emoticon": "🛸",
        "mostEfficientRecipe": {
            "item_1": "Beam",
            "item_2": "Seed"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Beam",
                "item_2": "Seed"
            },
            {
                "item_1": "Alien",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Alien",
                "item_2": "Electricity"
            },
            {
                "item_1": "Lake",
                "item_2": "Alien"
            }
        ]
    },
    "Zeppelin": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Airship",
            "item_2": "Windmill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Airship",
                "item_2": "Windmill"
            }
        ]
    },
    "Crop Circle": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "UFO",
            "item_2": "Windmill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "UFO",
                "item_2": "Windmill"
            }
        ]
    },
    "Blimp": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Zeppelin",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Zeppelin",
                "item_2": "Dandelion"
            }
        ]
    },
    "Alien": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "UFO"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crop Circle",
                "item_2": "Tornado"
            },
            {
                "item_1": "Lake",
                "item_2": "UFO"
            }
        ]
    },
    "Hot Air Balloon": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Hot Toddies"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Blimp",
                "item_2": "Heat"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Toddies"
            }
        ]
    },
    "Statue": {
        "emoticon": "🗽",
        "mostEfficientRecipe": {
            "item_1": "Alien",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alien",
                "item_2": "Stone"
            },
            {
                "item_1": "Hot Air Balloon",
                "item_2": "Stone"
            },
            {
                "item_1": "Golem",
                "item_2": "Water"
            },
            {
                "item_1": "Shipwreck",
                "item_2": "Stone"
            },
            {
                "item_1": "Clay",
                "item_2": "Stone"
            }
        ]
    },
    "Fish Balloon": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Hot Air Balloon",
            "item_2": "Boiled Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hot Air Balloon",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Fish Balloon",
                "item_2": "Lava"
            }
        ]
    },
    "Sphinx": {
        "emoticon": "🐫",
        "mostEfficientRecipe": {
            "item_1": "Statue",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Statue",
                "item_2": "Sun"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Cloud"
            },
            {
                "item_1": "Nile",
                "item_2": "Sail"
            }
        ]
    },
    "Frog": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Toadstool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fish Balloon",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Lake",
                "item_2": "Toadstool"
            }
        ]
    },
    "Steampunk": {
        "emoticon": "🕯️",
        "mostEfficientRecipe": {
            "item_1": "Sphinx",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sphinx",
                "item_2": "Steam"
            },
            {
                "item_1": "Steampunk",
                "item_2": "Steam"
            }
        ]
    },
    "Prince": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Frog",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Frog",
                "item_2": "Steam"
            }
        ]
    },
    "Robot": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Electricity",
            "item_2": "Mechanic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steampunk",
                "item_2": "Earth"
            },
            {
                "item_1": "Electricity",
                "item_2": "Mechanic"
            },
            {
                "item_1": "Human",
                "item_2": "Tesla"
            },
            {
                "item_1": "Cyborg",
                "item_2": "Human"
            },
            {
                "item_1": "Human",
                "item_2": "Mechanic"
            }
        ]
    },
    "King": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Prince",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Prince",
                "item_2": "Earth"
            }
        ]
    },
    "Golem": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Wizard"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Robot",
                "item_2": "Earth"
            },
            {
                "item_1": "Clay",
                "item_2": "Solar"
            },
            {
                "item_1": "Clay",
                "item_2": "Sushi"
            },
            {
                "item_1": "Earth",
                "item_2": "Wizard"
            }
        ]
    },
    "Kingdom": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "King",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "King",
                "item_2": "Earth"
            }
        ]
    },
    "Incense": {
        "emoticon": "🕯️",
        "mostEfficientRecipe": {
            "item_1": "Kingdom",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kingdom",
                "item_2": "Smoke"
            },
            {
                "item_1": "Prayer",
                "item_2": "Smoke"
            }
        ]
    },
    "Prayer": {
        "emoticon": "🙏",
        "mostEfficientRecipe": {
            "item_1": "Incense",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Incense",
                "item_2": "Smoke"
            },
            {
                "item_1": "Wind",
                "item_2": "Religion"
            },
            {
                "item_1": "Wind",
                "item_2": "Google Wind"
            }
        ]
    },
    "Moses": {
        "emoticon": "🐫",
        "mostEfficientRecipe": {
            "item_1": "Prayer",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Prayer",
                "item_2": "Marsh"
            },
            {
                "item_1": "Parting",
                "item_2": "Fish"
            },
            {
                "item_1": "Parting",
                "item_2": "Swamp"
            },
            {
                "item_1": "Parting",
                "item_2": "Cloud"
            },
            {
                "item_1": "Red Sea",
                "item_2": "Ocean"
            },
            {
                "item_1": "Cocaine",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Lake",
                "item_2": "Parting"
            },
            {
                "item_1": "Lake",
                "item_2": "Red Sea"
            }
        ]
    },
    "Parting": {
        "emoticon": "👋",
        "mostEfficientRecipe": {
            "item_1": "Moses",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Moses",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Moses"
            }
        ]
    },
    "Red Sea": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Parting",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Parting",
                "item_2": "Ocean"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Ocean"
            }
        ]
    },
    "Coral": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Ruby",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Red Sea",
                "item_2": "Plant"
            },
            {
                "item_1": "Reef",
                "item_2": "Plant"
            },
            {
                "item_1": "Reef",
                "item_2": "Earth"
            },
            {
                "item_1": "Reef",
                "item_2": "Fire"
            },
            {
                "item_1": "Reef",
                "item_2": "Water"
            },
            {
                "item_1": "Reef",
                "item_2": "Flower"
            },
            {
                "item_1": "Reef",
                "item_2": "Pond"
            },
            {
                "item_1": "Reef",
                "item_2": "Microscope"
            },
            {
                "item_1": "Reef",
                "item_2": "Vase"
            },
            {
                "item_1": "Reef",
                "item_2": "Beach"
            },
            {
                "item_1": "Reef",
                "item_2": "Blood"
            },
            {
                "item_1": "Reef",
                "item_2": "Splash"
            },
            {
                "item_1": "Reef",
                "item_2": "Puddle"
            },
            {
                "item_1": "Reef",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Reef",
                "item_2": "Lens"
            },
            {
                "item_1": "Reef",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Reef",
                "item_2": "Pottery"
            },
            {
                "item_1": "Reef",
                "item_2": "Soda"
            },
            {
                "item_1": "Reef",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Reef",
                "item_2": "Burn"
            },
            {
                "item_1": "Reef",
                "item_2": "Pop"
            },
            {
                "item_1": "Reef",
                "item_2": "Vampire"
            },
            {
                "item_1": "Reef",
                "item_2": "Explosion"
            },
            {
                "item_1": "Reef",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Reef",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Reef",
                "item_2": "Crash"
            },
            {
                "item_1": "Reef",
                "item_2": "Balloon"
            },
            {
                "item_1": "Reef",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Reef",
                "item_2": "Ash"
            },
            {
                "item_1": "Lake",
                "item_2": "Reef"
            },
            {
                "item_1": "Ruby",
                "item_2": "Ocean"
            }
        ]
    },
    "Reef": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Coral",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coral",
                "item_2": "Plant"
            },
            {
                "item_1": "Coral",
                "item_2": "Wave"
            },
            {
                "item_1": "Coral",
                "item_2": "Steam"
            },
            {
                "item_1": "Coral",
                "item_2": "Lake"
            },
            {
                "item_1": "Coral",
                "item_2": "Earth"
            }
        ]
    },
    "Coral Reef": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Coral",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coral",
                "item_2": "Wind"
            }
        ]
    },
    "Anemone": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Coral",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coral",
                "item_2": "Flower"
            }
        ]
    },
    "Emperor": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Reef",
            "item_2": "Penguin"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Reef",
                "item_2": "Penguin"
            }
        ]
    },
    "Parrotfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Coral Reef",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coral Reef",
                "item_2": "Bird"
            }
        ]
    },
    "Seagull": {
        "emoticon": "🐦",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Dust Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Anemone",
                "item_2": "Bird"
            },
            {
                "item_1": "Lake",
                "item_2": "Eagle"
            },
            {
                "item_1": "Lake",
                "item_2": "Dust Storm"
            }
        ]
    },
    "Eagle": {
        "emoticon": "🦅",
        "mostEfficientRecipe": {
            "item_1": "Emperor",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Emperor",
                "item_2": "Bird"
            },
            {
                "item_1": "Death Star",
                "item_2": "Eagle"
            }
        ]
    },
    "Paradise": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": {
            "item_1": "Sunset",
            "item_2": "Microscope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Parrotfish",
                "item_2": "Oasis"
            },
            {
                "item_1": "Sunset",
                "item_2": "Microscope"
            }
        ]
    },
    "Drunk": {
        "emoticon": "🍺",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Darth Vader"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Seagull",
                "item_2": "Wine"
            },
            {
                "item_1": "Wind",
                "item_2": "Darth Vader"
            },
            {
                "item_1": "Gnome",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Earth",
                "item_2": "Whiskey"
            }
        ]
    },
    "Vulture": {
        "emoticon": "🦅",
        "mostEfficientRecipe": {
            "item_1": "Eagle",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Eagle",
                "item_2": "Mud"
            }
        ]
    },
    "Lotus": {
        "emoticon": "🌺",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Lily"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paradise",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Lake",
                "item_2": "Croco-paramecium"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Storm"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Hot"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Ice"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Stone"
            },
            {
                "item_1": "Lake",
                "item_2": "Water Lily"
            },
            {
                "item_1": "Lake",
                "item_2": "Lily"
            }
        ]
    },
    "Drunken": {
        "emoticon": "🍺",
        "mostEfficientRecipe": {
            "item_1": "Drunk",
            "item_2": "Sandstorm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Drunk",
                "item_2": "Sandstorm"
            }
        ]
    },
    "Politician": {
        "emoticon": "🗳️",
        "mostEfficientRecipe": {
            "item_1": "Vulture",
            "item_2": "Hot Air"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Vulture",
                "item_2": "Hot Air"
            }
        ]
    },
    "Buddha": {
        "emoticon": "🧘‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Lotus",
            "item_2": "Hot Air"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lotus",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Tornado"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Chai"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Tea"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Rock"
            },
            {
                "item_1": "Lake",
                "item_2": "Enlightenment"
            },
            {
                "item_1": "Enlightenment",
                "item_2": "Human"
            }
        ]
    },
    "Sailor": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": {
            "item_1": "Drunken",
            "item_2": "Windmill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Drunken",
                "item_2": "Windmill"
            },
            {
                "item_1": "Shipwreck",
                "item_2": "Soup"
            },
            {
                "item_1": "Lake",
                "item_2": "Slave"
            },
            {
                "item_1": "Wind",
                "item_2": "Worker"
            }
        ]
    },
    "Disaster": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Politician",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Politician",
                "item_2": "Dandelion"
            }
        ]
    },
    "Enlightenment": {
        "emoticon": "💡",
        "mostEfficientRecipe": {
            "item_1": "Buddha",
            "item_2": "Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Buddha",
                "item_2": "Storm"
            }
        ]
    },
    "Shipwreck": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Sailor",
            "item_2": "Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sailor",
                "item_2": "Storm"
            }
        ]
    },
    "Twister": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Flying Pig",
            "item_2": "Tornado"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Disaster",
                "item_2": "Tornado"
            },
            {
                "item_1": "Flying Pig",
                "item_2": "Tornado"
            }
        ]
    },
    "Miso": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Enlightenment",
            "item_2": "Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Enlightenment",
                "item_2": "Soup"
            }
        ]
    },
    "Ghost": {
        "emoticon": "👻",
        "mostEfficientRecipe": {
            "item_1": "Shipwreck",
            "item_2": "Fog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Shipwreck",
                "item_2": "Fog"
            },
            {
                "item_1": "Grave",
                "item_2": "Smoke"
            },
            {
                "item_1": "Wind",
                "item_2": "Loch Ness"
            },
            {
                "item_1": "Grave",
                "item_2": "Steam"
            },
            {
                "item_1": "Cemetery",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Skinny",
                "item_2": "Fog"
            },
            {
                "item_1": "Wind",
                "item_2": "Skeleton"
            }
        ]
    },
    "Solar Flare": {
        "emoticon": "🌞",
        "mostEfficientRecipe": {
            "item_1": "Twister",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Twister",
                "item_2": "Sun"
            },
            {
                "item_1": "Fire",
                "item_2": "Solar Wind"
            }
        ]
    },
    "Miso Soup": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Miso",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Miso",
                "item_2": "Dragon"
            }
        ]
    },
    "Frankenstein": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Electricity",
            "item_2": "Human"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ghost",
                "item_2": "Lightning"
            },
            {
                "item_1": "Electricity",
                "item_2": "Human"
            }
        ]
    },
    "Sunami": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Solar Flare",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Solar Flare",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Tsunami"
            }
        ]
    },
    "Miso Tsunami": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Miso Soup",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Miso Soup",
                "item_2": "Tsunami"
            }
        ]
    },
    "Thunder": {
        "emoticon": "⛈️",
        "mostEfficientRecipe": {
            "item_1": "Frankenstein",
            "item_2": "Cloud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Frankenstein",
                "item_2": "Cloud"
            }
        ]
    },
    "Shark": {
        "emoticon": "🦈",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Jaws"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Thunder",
                "item_2": "Fish"
            },
            {
                "item_1": "Flipper",
                "item_2": "Puddle"
            },
            {
                "item_1": "Jaws",
                "item_2": "Mirror"
            },
            {
                "item_1": "Jaws",
                "item_2": "Pyramid"
            },
            {
                "item_1": "Lake",
                "item_2": "Jaws"
            },
            {
                "item_1": "Water",
                "item_2": "Jaws"
            },
            {
                "item_1": "Water",
                "item_2": "Sharknado"
            },
            {
                "item_1": "Fire",
                "item_2": "Sharknado"
            },
            {
                "item_1": "Water",
                "item_2": "Power"
            },
            {
                "item_1": "Water",
                "item_2": "Sharkicane"
            }
        ]
    },
    "Crocodile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Swamp Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Shark",
                "item_2": "Swamp"
            },
            {
                "item_1": "Alligator",
                "item_2": "Swamp"
            },
            {
                "item_1": "Alligator",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Alligator",
                "item_2": "Ocean"
            },
            {
                "item_1": "Alligator",
                "item_2": "Wave"
            },
            {
                "item_1": "Alligator",
                "item_2": "Lake"
            },
            {
                "item_1": "Alligator",
                "item_2": "Earth"
            },
            {
                "item_1": "Alligator",
                "item_2": "Fire"
            },
            {
                "item_1": "Alligator",
                "item_2": "Water"
            },
            {
                "item_1": "Alligator",
                "item_2": "Boiled Fish"
            },
            {
                "item_1": "Alligator",
                "item_2": "Sun"
            },
            {
                "item_1": "Alligator",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Alligator",
                "item_2": "Dragon"
            },
            {
                "item_1": "Alligator",
                "item_2": "Lightning"
            },
            {
                "item_1": "Alligator",
                "item_2": "Smoke"
            },
            {
                "item_1": "Alligator",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Alligator",
                "item_2": "Rain"
            },
            {
                "item_1": "Alligator",
                "item_2": "Fish"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Alligator",
                "item_2": "Bubble"
            },
            {
                "item_1": "Nile",
                "item_2": "Firefighter"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Heat"
            },
            {
                "item_1": "Water",
                "item_2": "Prism"
            },
            {
                "item_1": "Grave",
                "item_2": "Fish"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Tea"
            },
            {
                "item_1": "Lake",
                "item_2": "Clay"
            },
            {
                "item_1": "Lake",
                "item_2": "Steve Irwin"
            },
            {
                "item_1": "Geode",
                "item_2": "Electricity"
            },
            {
                "item_1": "Jaws",
                "item_2": "Periscope"
            },
            {
                "item_1": "Lake",
                "item_2": "Swamp Fish"
            },
            {
                "item_1": "Jaws",
                "item_2": "Nile"
            },
            {
                "item_1": "Jaws",
                "item_2": "Aquaman"
            },
            {
                "item_1": "Lake",
                "item_2": "Croco-virus"
            }
        ]
    },
    "Alligator": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Crocodile",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crocodile",
                "item_2": "Swamp"
            },
            {
                "item_1": "Firecracker",
                "item_2": "Swamp"
            }
        ]
    },
    "Egypt": {
        "emoticon": "🇪🇬",
        "mostEfficientRecipe": {
            "item_1": "Crocodile",
            "item_2": "Solar"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crocodile",
                "item_2": "Solar"
            },
            {
                "item_1": "Nile",
                "item_2": "Water"
            },
            {
                "item_1": "Nile",
                "item_2": "Hangover"
            },
            {
                "item_1": "Nile",
                "item_2": "Cure"
            }
        ]
    },
    "Nile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Egypt",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Egypt",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Egypt"
            },
            {
                "item_1": "Lake",
                "item_2": "Cleopatra"
            },
            {
                "item_1": "Water",
                "item_2": "Cleopatra"
            }
        ]
    },
    "Croco-paramecium": {
        "emoticon": "🐊🦠",
        "mostEfficientRecipe": {
            "item_1": "Crocodile",
            "item_2": "Bubble"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crocodile",
                "item_2": "Bubble"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Hell"
            },
            {
                "item_1": "Croco-paramecium",
                "item_2": "Flu"
            },
            {
                "item_1": "Wind",
                "item_2": "Croco-virus"
            }
        ]
    },
    "Dracula": {
        "emoticon": "🧛",
        "mostEfficientRecipe": {
            "item_1": "Stingray",
            "item_2": "Vampire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alligator",
                "item_2": "Hangover"
            },
            {
                "item_1": "Stingray",
                "item_2": "Vampire"
            }
        ]
    },
    "Pyramid": {
        "emoticon": "🗿",
        "mostEfficientRecipe": {
            "item_1": "Egypt",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Egypt",
                "item_2": "Hangover"
            },
            {
                "item_1": "Nile",
                "item_2": "Angel"
            },
            {
                "item_1": "Earth",
                "item_2": "Nile"
            },
            {
                "item_1": "Earth",
                "item_2": "Cleopatra"
            }
        ]
    },
    "Aspirin": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Nile",
            "item_2": "Medicine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Nile",
                "item_2": "Medicine"
            }
        ]
    },
    "Croco-virus": {
        "emoticon": "🐊💀🦠",
        "mostEfficientRecipe": {
            "item_1": "Croco-paramecium",
            "item_2": "Amoeba"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Croco-paramecium",
                "item_2": "Amoeba"
            }
        ]
    },
    "Mirror": {
        "emoticon": "🪞",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Obsidian"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dracula",
                "item_2": "Glass"
            },
            {
                "item_1": "Fire",
                "item_2": "Reflection"
            },
            {
                "item_1": "Reflection",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Obsidian"
            }
        ]
    },
    "Prism": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Pyramid",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pyramid",
                "item_2": "Glass"
            },
            {
                "item_1": "Earth",
                "item_2": "Iphone 6s Plus"
            },
            {
                "item_1": "Crystal",
                "item_2": "Sun"
            }
        ]
    },
    "Alka-Seltzer": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Aspirin",
            "item_2": "Soda"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Aspirin",
                "item_2": "Soda"
            }
        ]
    },
    "Croco-cola": {
        "emoticon": "🐊🥤",
        "mostEfficientRecipe": {
            "item_1": "Croco-virus",
            "item_2": "Sand"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Croco-virus",
                "item_2": "Sand"
            },
            {
                "item_1": "Croco-cola",
                "item_2": "Chili"
            }
        ]
    },
    "Periscope": {
        "emoticon": "📡",
        "mostEfficientRecipe": {
            "item_1": "Mirror",
            "item_2": "Cannon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mirror",
                "item_2": "Cannon"
            }
        ]
    },
    "Clay": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Prism",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Prism",
                "item_2": "Mud"
            },
            {
                "item_1": "Tan",
                "item_2": "Pottery"
            }
        ]
    },
    "Alka-seltzer": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Alka-Seltzer",
            "item_2": "Hurricane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alka-Seltzer",
                "item_2": "Hurricane"
            }
        ]
    },
    "Ice-cold Croco-cola": {
        "emoticon": "🥤🐊❄️",
        "mostEfficientRecipe": {
            "item_1": "Croco-cola",
            "item_2": "Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Croco-cola",
                "item_2": "Soup"
            },
            {
                "item_1": "Grave",
                "item_2": "Wave"
            }
        ]
    },
    "Radar": {
        "emoticon": "📡",
        "mostEfficientRecipe": {
            "item_1": "Periscope",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Periscope",
                "item_2": "Stone"
            }
        ]
    },
    "Monster": {
        "emoticon": "👾",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Amoeba"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Frankenstein"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Loch Ness"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Volcano"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Rain"
            },
            {
                "item_1": "Fire",
                "item_2": "Radar"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Cloud"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Steam"
            },
            {
                "item_1": "Loch Ness",
                "item_2": "Earth"
            },
            {
                "item_1": "Lake",
                "item_2": "Loch Ness"
            },
            {
                "item_1": "Lake",
                "item_2": "Amoeba"
            }
        ]
    },
    "Fire Breath": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Alka-seltzer",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alka-seltzer",
                "item_2": "Dragon"
            }
        ]
    },
    "Satellite": {
        "emoticon": "🛰️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Optimus Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Radar"
            },
            {
                "item_1": "Fire",
                "item_2": "Optimus Pig"
            }
        ]
    },
    "Sonar": {
        "emoticon": "🔭",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Croco-paramecium"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Croco-paramecium"
            }
        ]
    },
    "Dolphin": {
        "emoticon": "🐬",
        "mostEfficientRecipe": {
            "item_1": "Honeymoon",
            "item_2": "Lightning"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sonar",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Wind",
                "item_2": "Flipper"
            },
            {
                "item_1": "Flipper",
                "item_2": "Water"
            },
            {
                "item_1": "Grave",
                "item_2": "Plant"
            },
            {
                "item_1": "Honeymoon",
                "item_2": "Lightning"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Turtle"
            }
        ]
    },
    "Tomb": {
        "emoticon": "🪦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Pyramid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Pyramid"
            },
            {
                "item_1": "Lake",
                "item_2": "Pyramid"
            },
            {
                "item_1": "Earth",
                "item_2": "Campfire"
            }
        ]
    },
    "Tombstone": {
        "emoticon": "🪦",
        "mostEfficientRecipe": {
            "item_1": "Tomb",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tomb",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Grave",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Fire",
                "item_2": "Aspirin"
            }
        ]
    },
    "Grave": {
        "emoticon": "🪦",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Church"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tombstone",
                "item_2": "Rain"
            },
            {
                "item_1": "Earth",
                "item_2": "Tombstone"
            },
            {
                "item_1": "Earth",
                "item_2": "Warm Toddies"
            },
            {
                "item_1": "Earth",
                "item_2": "Church"
            }
        ]
    },
    "Loch Ness": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Firework"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Grave",
                "item_2": "Wind"
            },
            {
                "item_1": "Lake",
                "item_2": "Tombstone"
            },
            {
                "item_1": "Lake",
                "item_2": "Firework"
            },
            {
                "item_1": "Lake",
                "item_2": "Tomb"
            },
            {
                "item_1": "Lake",
                "item_2": "Grave"
            },
            {
                "item_1": "Lake",
                "item_2": "Electric Eel"
            }
        ]
    },
    "Reflection": {
        "emoticon": "💫",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Mirror"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Mirror"
            }
        ]
    },
    "Flipper": {
        "emoticon": "🐬",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Dolphin"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Dolphin"
            }
        ]
    },
    "Cemetery": {
        "emoticon": "🪦",
        "mostEfficientRecipe": {
            "item_1": "Grave",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Grave",
                "item_2": "Earth"
            }
        ]
    },
    "Turtle": {
        "emoticon": "🐢",
        "mostEfficientRecipe": {
            "item_1": "Sponge",
            "item_2": "Ceramic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Flipper"
            },
            {
                "item_1": "Water",
                "item_2": "Tortoise"
            },
            {
                "item_1": "Wind",
                "item_2": "Tortoise"
            },
            {
                "item_1": "Tortoise",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Tortoise",
                "item_2": "Kiln"
            },
            {
                "item_1": "Lake",
                "item_2": "Turtle"
            },
            {
                "item_1": "Sponge",
                "item_2": "Ceramic"
            }
        ]
    },
    "Tortoise": {
        "emoticon": "🐢",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Turtle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Turtle"
            },
            {
                "item_1": "Turtle",
                "item_2": "Water"
            },
            {
                "item_1": "Turtle",
                "item_2": "Glass"
            }
        ]
    },
    "Ninja": {
        "emoticon": "🥷",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Cookie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Turtle"
            },
            {
                "item_1": "Samurai",
                "item_2": "Mirage"
            },
            {
                "item_1": "Samurai",
                "item_2": "Bird"
            },
            {
                "item_1": "Katana",
                "item_2": "Ice"
            },
            {
                "item_1": "Wind",
                "item_2": "Samurai"
            },
            {
                "item_1": "Earth",
                "item_2": "Samurai"
            },
            {
                "item_1": "Lake",
                "item_2": "Katana"
            },
            {
                "item_1": "Lake",
                "item_2": "Cookie"
            }
        ]
    },
    "Stingray": {
        "emoticon": "🐡",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Manta Ray"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Manta Ray"
            },
            {
                "item_1": "Stingray",
                "item_2": "Explosion"
            },
            {
                "item_1": "Water",
                "item_2": "Stingray"
            }
        ]
    },
    "Lightsaber": {
        "emoticon": "🗡️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Laser"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Laser"
            }
        ]
    },
    "Cocaine": {
        "emoticon": "💊",
        "mostEfficientRecipe": {
            "item_1": "Tire",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Turtle",
                "item_2": "Soda"
            },
            {
                "item_1": "Tire",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Slingshot"
            }
        ]
    },
    "Venus": {
        "emoticon": "♀️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Statue"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Statue"
            },
            {
                "item_1": "Water",
                "item_2": "Aphrodite"
            }
        ]
    },
    "Samurai": {
        "emoticon": "🥷",
        "mostEfficientRecipe": {
            "item_1": "Ninja",
            "item_2": "Cannon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ninja",
                "item_2": "Cannon"
            }
        ]
    },
    "Steve Irwin": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Miso Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Stingray",
                "item_2": "Crash"
            },
            {
                "item_1": "Crocodile Hunter",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Lake",
                "item_2": "Miso Soup"
            },
            {
                "item_1": "Crocodile Hunter",
                "item_2": "Kite"
            },
            {
                "item_1": "Water",
                "item_2": "Crocodile Hunter"
            },
            {
                "item_1": "Lake",
                "item_2": "Fairy"
            }
        ]
    },
    "Darth Vader": {
        "emoticon": "😈",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lightsaber",
                "item_2": "Balloon"
            },
            {
                "item_1": "Darth Hydrous",
                "item_2": "Sun"
            },
            {
                "item_1": "Water",
                "item_2": "Fairy"
            },
            {
                "item_1": "Water",
                "item_2": "Pig"
            },
            {
                "item_1": "Water",
                "item_2": "Yoda"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Marsh"
            },
            {
                "item_1": "Water",
                "item_2": "iPhone"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Wave"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Darth Rainbow"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Water"
            },
            {
                "item_1": "Flamingo",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fire",
                "item_2": "Darth Rainbow"
            },
            {
                "item_1": "Wind",
                "item_2": "Darth Hydrous"
            },
            {
                "item_1": "Ugly Duckling",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Fire",
                "item_2": "Star Wars"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Magma"
            },
            {
                "item_1": "Wind",
                "item_2": "Jar Jar Binks"
            },
            {
                "item_1": "Lake",
                "item_2": "Moon"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Vader"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Prickle"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Rainbow"
            },
            {
                "item_1": "Earth",
                "item_2": "Darth Maul"
            },
            {
                "item_1": "Fire",
                "item_2": "Skywalker"
            }
        ]
    },
    "Nymph": {
        "emoticon": "🧚",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Swan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Anemone"
            },
            {
                "item_1": "Lake",
                "item_2": "Swan"
            }
        ]
    },
    "Love Boat": {
        "emoticon": "🛳️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Parrotfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Parrotfish"
            }
        ]
    },
    "Swim": {
        "emoticon": "🏊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Drunk"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Drunk"
            }
        ]
    },
    "Crocodile Hunter": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Steve Irwin",
            "item_2": "Boat"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steve Irwin",
                "item_2": "Boat"
            }
        ]
    },
    "Water Lily": {
        "emoticon": "🌸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Lotus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Lotus"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Tornado"
            }
        ]
    },
    "Fairy": {
        "emoticon": "🧚",
        "mostEfficientRecipe": {
            "item_1": "Nymph",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Nymph",
                "item_2": "Energy"
            }
        ]
    },
    "Honeymoon": {
        "emoticon": "💑",
        "mostEfficientRecipe": {
            "item_1": "Love Boat",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Love Boat",
                "item_2": "Wine"
            }
        ]
    },
    "Pig": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Swim",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swim",
                "item_2": "Mud"
            },
            {
                "item_1": "Bacon",
                "item_2": "Swamp"
            },
            {
                "item_1": "Lake",
                "item_2": "Bacon"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Cloud"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Earth"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Fire"
            },
            {
                "item_1": "Crystal",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Water",
                "item_2": "Piglet"
            },
            {
                "item_1": "Water",
                "item_2": "Swine"
            },
            {
                "item_1": "Wind",
                "item_2": "Piglet"
            },
            {
                "item_1": "Wind",
                "item_2": "Swine"
            },
            {
                "item_1": "Earth",
                "item_2": "Googolplex"
            },
            {
                "item_1": "Earth",
                "item_2": "Piglet"
            },
            {
                "item_1": "Earth",
                "item_2": "Swine Flu"
            }
        ]
    },
    "Steve": {
        "emoticon": "👨",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Crocodile"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Crocodile"
            }
        ]
    },
    "Google": {
        "emoticon": "🔍",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Swine Flu"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Satellite"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Swamp"
            },
            {
                "item_1": "Fire",
                "item_2": "Swine Flu"
            }
        ]
    },
    "Dragonfly": {
        "emoticon": "🐛",
        "mostEfficientRecipe": {
            "item_1": "Fairy",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fairy",
                "item_2": "Dragon"
            }
        ]
    },
    "Yoda": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Lightsaber"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Lightsaber"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Chrome"
            },
            {
                "item_1": "Lake",
                "item_2": "Jedi"
            }
        ]
    },
    "Bacon": {
        "emoticon": "🥓",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Porkimus Prime"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pig",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fire",
                "item_2": "Pig"
            },
            {
                "item_1": "Fire",
                "item_2": "Piglet"
            },
            {
                "item_1": "Fire",
                "item_2": "Porkimus Prime"
            }
        ]
    },
    "Aphrodite": {
        "emoticon": "💘",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Venus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Venus"
            }
        ]
    },
    "Google Chrome": {
        "emoticon": "💻",
        "mostEfficientRecipe": {
            "item_1": "Google",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Google",
                "item_2": "Rainbow"
            }
        ]
    },
    "Swan": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Swim"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Swim"
            },
            {
                "item_1": "Lake",
                "item_2": "Leda"
            },
            {
                "item_1": "Leda",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Swan"
            },
            {
                "item_1": "Wind",
                "item_2": "Swan"
            },
            {
                "item_1": "Ugly Duckling",
                "item_2": "Energy"
            },
            {
                "item_1": "Moisture",
                "item_2": "Fish"
            },
            {
                "item_1": "Lake",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Pig"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Tub"
            },
            {
                "item_1": "Lake",
                "item_2": "Cygnus"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Cottage"
            },
            {
                "item_1": "Water",
                "item_2": "Movie"
            },
            {
                "item_1": "Water",
                "item_2": "Ballet"
            },
            {
                "item_1": "Wind",
                "item_2": "Cygnus"
            },
            {
                "item_1": "Wind",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Cygnus"
            },
            {
                "item_1": "Earth",
                "item_2": "Waterfall"
            }
        ]
    },
    "Jedi": {
        "emoticon": "🤺",
        "mostEfficientRecipe": {
            "item_1": "Yoda",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Yoda",
                "item_2": "Fish"
            },
            {
                "item_1": "Fire",
                "item_2": "Yoda"
            }
        ]
    },
    "Love": {
        "emoticon": "❤️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Jet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Honeymoon"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Heart",
                "item_2": "Tea"
            },
            {
                "item_1": "Heart",
                "item_2": "Hot"
            },
            {
                "item_1": "Heart",
                "item_2": "Sun"
            },
            {
                "item_1": "Heart",
                "item_2": "Sushi"
            },
            {
                "item_1": "Heart",
                "item_2": "Lightning"
            },
            {
                "item_1": "Wind",
                "item_2": "Heart"
            },
            {
                "item_1": "Lake",
                "item_2": "Jet"
            }
        ]
    },
    "Steve Jobs": {
        "emoticon": "🍎",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Steve"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Steve"
            }
        ]
    },
    "Google Cloud": {
        "emoticon": "☁️",
        "mostEfficientRecipe": {
            "item_1": "Google Bean",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Dragonfly"
            },
            {
                "item_1": "Google Cloud",
                "item_2": "Wind"
            },
            {
                "item_1": "Google Bean",
                "item_2": "Plant"
            },
            {
                "item_1": "Google Wave",
                "item_2": "Cloud"
            }
        ]
    },
    "Leda": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Swan",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swan",
                "item_2": "Ocean"
            }
        ]
    },
    "Steamroller": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Jedi",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jedi",
                "item_2": "Steam"
            },
            {
                "item_1": "Fire",
                "item_2": "Steamroller"
            }
        ]
    },
    "Apple": {
        "emoticon": "🍎",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Steve Jobs"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Steve Jobs"
            },
            {
                "item_1": "Earth",
                "item_2": "Iphone 6"
            },
            {
                "item_1": "Africa",
                "item_2": "Steve Jobs"
            }
        ]
    },
    "iPhone": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Steve Jobs",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steve Jobs",
                "item_2": "Earth"
            }
        ]
    },
    "Pineapple": {
        "emoticon": "🍍",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Apple"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Apple"
            }
        ]
    },
    "Pina Colada": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Pineapple"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Pineapple"
            },
            {
                "item_1": "Water",
                "item_2": "Pina Colada"
            }
        ]
    },
    "Coca-Cola": {
        "emoticon": "🥤",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Transformer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Cocaine"
            },
            {
                "item_1": "Lake",
                "item_2": "Transformer"
            }
        ]
    },
    "Darth Hydrous": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Darth Vader"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Darth Vader"
            },
            {
                "item_1": "Darth Hydrous",
                "item_2": "Solar"
            },
            {
                "item_1": "Water",
                "item_2": "Darth Hydrous"
            }
        ]
    },
    "Darth Magma": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Google"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Google"
            }
        ]
    },
    "Darth Rainbow": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Darth Magma",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Darth Magma",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Wind",
                "item_2": "Darth Rainbow"
            }
        ]
    },
    "Darth Fish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Darth Rainbow",
            "item_2": "Fishbowl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Darth Rainbow",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Water",
                "item_2": "Google Cloud"
            },
            {
                "item_1": "Darth Fish",
                "item_2": "Tsunami"
            }
        ]
    },
    "Crack": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Darth Rainbow",
            "item_2": "Rock"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Darth Rainbow",
                "item_2": "Rock"
            }
        ]
    },
    "Katana": {
        "emoticon": "🗡️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Samurai"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Samurai"
            }
        ]
    },
    "Geode": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Darth Vader"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Darth Vader"
            }
        ]
    },
    "Burning Love": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Katana",
            "item_2": "Sea Serpent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Katana",
                "item_2": "Sea Serpent"
            }
        ]
    },
    "Gem": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Geode",
            "item_2": "Fog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Geode",
                "item_2": "Fog"
            },
            {
                "item_1": "Ruby",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Crystal",
                "item_2": "Seed"
            }
        ]
    },
    "FireFox": {
        "emoticon": "🦊",
        "mostEfficientRecipe": {
            "item_1": "Burning Love",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Burning Love",
                "item_2": "Sun"
            }
        ]
    },
    "Jewel": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Gem",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gem",
                "item_2": "Dragon"
            }
        ]
    },
    "Firefox": {
        "emoticon": "🦊",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Love"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Love"
            }
        ]
    },
    "Car": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Fishing Rod"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jewel",
                "item_2": "Engine"
            },
            {
                "item_1": "Earth",
                "item_2": "Sponge"
            },
            {
                "item_1": "Earth",
                "item_2": "Tire"
            },
            {
                "item_1": "Lake",
                "item_2": "Fishing Rod"
            },
            {
                "item_1": "Fire",
                "item_2": "Wheel"
            },
            {
                "item_1": "Earth",
                "item_2": "Wheel"
            },
            {
                "item_1": "Earth",
                "item_2": "Road"
            }
        ]
    },
    "Google Fire": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Firefox",
            "item_2": "Lava"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Firefox",
                "item_2": "Lava"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Water"
            }
        ]
    },
    "Exhaust": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Car",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Car",
                "item_2": "Smoke"
            }
        ]
    },
    "Iphone 7": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Flying Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Google Fire",
                "item_2": "Volcano"
            },
            {
                "item_1": "Water",
                "item_2": "Iphone 7"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying Pig"
            },
            {
                "item_1": "Iphone 6s",
                "item_2": "Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Iphone 7"
            },
            {
                "item_1": "Lake",
                "item_2": "Iphone 7 Plus"
            }
        ]
    },
    "Flamingo": {
        "emoticon": "🦩",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Garnet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pina Colada"
            },
            {
                "item_1": "Pink",
                "item_2": "Fish"
            },
            {
                "item_1": "Garnet",
                "item_2": "Lake"
            },
            {
                "item_1": "Lake",
                "item_2": "Flamenco"
            },
            {
                "item_1": "Lake",
                "item_2": "Pink"
            }
        ]
    },
    "Iphone 7 Plus": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Iphone 7",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Iphone 7",
                "item_2": "Volcano"
            }
        ]
    },
    "Pink": {
        "emoticon": "💗",
        "mostEfficientRecipe": {
            "item_1": "Flamingo",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flamingo",
                "item_2": "Marsh"
            },
            {
                "item_1": "Earth",
                "item_2": "Flamingo"
            },
            {
                "item_1": "Lake",
                "item_2": "Flamingo"
            }
        ]
    },
    "Firecracker": {
        "emoticon": "🧨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Crack"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Crack"
            }
        ]
    },
    "Ruby": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Gem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Gem"
            },
            {
                "item_1": "Fire",
                "item_2": "Garnet"
            },
            {
                "item_1": "Fire",
                "item_2": "Sapphire"
            },
            {
                "item_1": "Wind",
                "item_2": "Ruby"
            },
            {
                "item_1": "Wind",
                "item_2": "Garnet"
            },
            {
                "item_1": "Crystal",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Fire",
                "item_2": "Onyx"
            }
        ]
    },
    "Diamond": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Mine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Jewel"
            },
            {
                "item_1": "Pressure",
                "item_2": "Earth"
            },
            {
                "item_1": "Pressure",
                "item_2": "Fire"
            },
            {
                "item_1": "Wind",
                "item_2": "Sapphire"
            },
            {
                "item_1": "Wall",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Jewel"
            },
            {
                "item_1": "Earth",
                "item_2": "Pink"
            },
            {
                "item_1": "Earth",
                "item_2": "Ruby"
            },
            {
                "item_1": "Earth",
                "item_2": "Sapphire"
            },
            {
                "item_1": "Crystal",
                "item_2": "Ice"
            },
            {
                "item_1": "Lake",
                "item_2": "Pressure"
            },
            {
                "item_1": "Lake",
                "item_2": "Mine"
            },
            {
                "item_1": "Earth",
                "item_2": "Ice Golem"
            },
            {
                "item_1": "Earth",
                "item_2": "Coal"
            },
            {
                "item_1": "Fire",
                "item_2": "Coal"
            }
        ]
    },
    "Garnet": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Ruby",
            "item_2": "Wave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ruby",
                "item_2": "Wave"
            }
        ]
    },
    "Pressure": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Diamond",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Diamond",
                "item_2": "Steam"
            }
        ]
    },
    "Sapphire": {
        "emoticon": "💙",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ruby"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ruby"
            }
        ]
    },
    "Genie": {
        "emoticon": "🧞‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Burning Love"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Burning Love"
            }
        ]
    },
    "Icefox": {
        "emoticon": "🦊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Firefox"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "FireFox"
            },
            {
                "item_1": "Water",
                "item_2": "Firefox"
            }
        ]
    },
    "Rainfox": {
        "emoticon": "🌧️",
        "mostEfficientRecipe": {
            "item_1": "Icefox",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Icefox",
                "item_2": "Rainbow"
            }
        ]
    },
    "Rainforest": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Rainfox",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainfox",
                "item_2": "Plant"
            },
            {
                "item_1": "Amazon",
                "item_2": "Earth"
            }
        ]
    },
    "Amazon": {
        "emoticon": "📦",
        "mostEfficientRecipe": {
            "item_1": "Rainforest",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainforest",
                "item_2": "Lake"
            },
            {
                "item_1": "Rainforest",
                "item_2": "Water"
            }
        ]
    },
    "Dust Bunny": {
        "emoticon": "🐰",
        "mostEfficientRecipe": {
            "item_1": "Rainfox",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainfox",
                "item_2": "Airplane"
            }
        ]
    },
    "Global Warming": {
        "emoticon": "🌡️",
        "mostEfficientRecipe": {
            "item_1": "Rainforest",
            "item_2": "Hot Air"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainforest",
                "item_2": "Hot Air"
            }
        ]
    },
    "Flying Pig": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Pig"
            }
        ]
    },
    "Force": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Yoda"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Yoda"
            }
        ]
    },
    "Heart": {
        "emoticon": "❤️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Love"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Love"
            },
            {
                "item_1": "Heart",
                "item_2": "Ice"
            }
        ]
    },
    "Flying Tea": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Flying Pig",
            "item_2": "Tea"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Pig",
                "item_2": "Tea"
            }
        ]
    },
    "Iphone 6": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "iPhone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "iPhone"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Ocean"
            }
        ]
    },
    "Flamenco": {
        "emoticon": "💃",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Flamingo"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Flamingo"
            }
        ]
    },
    "Jet": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Flying Tea",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Tea",
                "item_2": "Smoke"
            }
        ]
    },
    "Iphone 6s": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Iphone 6s Plus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Iphone 6",
                "item_2": "Volcano"
            },
            {
                "item_1": "Iphone 6s",
                "item_2": "Ocean"
            },
            {
                "item_1": "Plane",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Iphone 6s Plus"
            },
            {
                "item_1": "Lake",
                "item_2": "Iphone 6s Plus"
            }
        ]
    },
    "Spain": {
        "emoticon": "🇪🇸",
        "mostEfficientRecipe": {
            "item_1": "Flamenco",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flamenco",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Water",
                "item_2": "Spain"
            }
        ]
    },
    "Plane": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Jet",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jet",
                "item_2": "Swamp"
            },
            {
                "item_1": "Wind",
                "item_2": "Jet"
            },
            {
                "item_1": "Water",
                "item_2": "Jet"
            },
            {
                "item_1": "SpongeBob",
                "item_2": "Jet"
            }
        ]
    },
    "Iphone 6s Plus": {
        "emoticon": "📱",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Spain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Spain"
            }
        ]
    },
    "Bull": {
        "emoticon": "🐂",
        "mostEfficientRecipe": {
            "item_1": "Taurus",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spain",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Spain"
            },
            {
                "item_1": "Taurus",
                "item_2": "Earth"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Rain"
            },
            {
                "item_1": "Wind",
                "item_2": "Taurus"
            }
        ]
    },
    "Aries": {
        "emoticon": "♈️",
        "mostEfficientRecipe": {
            "item_1": "Taurus",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Bull",
                "item_2": "Fish"
            },
            {
                "item_1": "Taurus",
                "item_2": "Fire"
            }
        ]
    },
    "Pigcasso": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Iphone 6"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Aries",
                "item_2": "Swamp"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Wave"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Aries"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Water"
            },
            {
                "item_1": "Fire",
                "item_2": "Heart"
            },
            {
                "item_1": "Fire",
                "item_2": "Iphone 6"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Plant"
            },
            {
                "item_1": "Pigcasso",
                "item_2": "Steam"
            },
            {
                "item_1": "Fishing",
                "item_2": "Pigcasso"
            }
        ]
    },
    "Ram": {
        "emoticon": "🐏",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Flying Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Flying Pig"
            },
            {
                "item_1": "Fire",
                "item_2": "Aries"
            }
        ]
    },
    "Lamb": {
        "emoticon": "🐑",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ram"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ram"
            },
            {
                "item_1": "Ram",
                "item_2": "Water"
            },
            {
                "item_1": "Wind",
                "item_2": "Aries"
            },
            {
                "item_1": "Wind",
                "item_2": "Ram"
            },
            {
                "item_1": "Wind",
                "item_2": "Mutton"
            },
            {
                "item_1": "Lake",
                "item_2": "Mutton"
            },
            {
                "item_1": "Lake",
                "item_2": "Sponge"
            }
        ]
    },
    "Mutton": {
        "emoticon": "🐑",
        "mostEfficientRecipe": {
            "item_1": "Lamb",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lamb",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Lamb"
            }
        ]
    },
    "Wool": {
        "emoticon": "🐑",
        "mostEfficientRecipe": {
            "item_1": "Ram",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ram",
                "item_2": "Earth"
            },
            {
                "item_1": "Lake",
                "item_2": "Smog"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Mushroom"
            }
        ]
    },
    "Sponge": {
        "emoticon": "🧽",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Pool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Wool"
            },
            {
                "item_1": "Sponge",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Lamborghini"
            },
            {
                "item_1": "Water",
                "item_2": "Pool"
            },
            {
                "item_1": "Fire",
                "item_2": "Spongebob"
            }
        ]
    },
    "Sweater": {
        "emoticon": "🧥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Wool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Wool"
            },
            {
                "item_1": "Water",
                "item_2": "Wet Sweater"
            },
            {
                "item_1": "Seaplane",
                "item_2": "Airplane"
            },
            {
                "item_1": "Yarn",
                "item_2": "Chili"
            },
            {
                "item_1": "Lake",
                "item_2": "Sweater"
            }
        ]
    },
    "Wet Sweater": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sponge"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sponge"
            },
            {
                "item_1": "Sweater",
                "item_2": "Water"
            }
        ]
    },
    "Cold": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Wet Sweater"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Wet Sweater"
            }
        ]
    },
    "Coca Plant": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Sponge",
            "item_2": "Pottery"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sponge",
                "item_2": "Pottery"
            }
        ]
    },
    "Tatooine": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Jar Jar Binks",
            "item_2": "Desert"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Darth Vader"
            },
            {
                "item_1": "Jar Jar Binks",
                "item_2": "Desert"
            }
        ]
    },
    "Slingshot": {
        "emoticon": "🏹",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Crocodile Hunter"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Crocodile Hunter"
            }
        ]
    },
    "Gnome": {
        "emoticon": "👺",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fairy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fairy"
            }
        ]
    },
    "Coca Cola": {
        "emoticon": "🥤",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pig"
            }
        ]
    },
    "Star Wars": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Tatooine",
            "item_2": "Cannon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tatooine",
                "item_2": "Cannon"
            },
            {
                "item_1": "Fire",
                "item_2": "Tatooine"
            },
            {
                "item_1": "Naboo",
                "item_2": "Sun"
            }
        ]
    },
    "Stake": {
        "emoticon": "🪓",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Yoda"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Yoda"
            }
        ]
    },
    "Ugly Duckling": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Swan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Swan"
            }
        ]
    },
    "Wall": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fence"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coca Cola",
                "item_2": "Crash"
            },
            {
                "item_1": "Earth",
                "item_2": "Fence"
            }
        ]
    },
    "Google Earth": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Google Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "iPhone"
            },
            {
                "item_1": "Yarn",
                "item_2": "Rock"
            },
            {
                "item_1": "Lake",
                "item_2": "Google Ocean"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Google Wind"
            }
        ]
    },
    "Mudslide": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Stake",
            "item_2": "Mirage"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Stake",
                "item_2": "Mirage"
            }
        ]
    },
    "Crystal": {
        "emoticon": "💎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Geode"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Geode"
            }
        ]
    },
    "Tire": {
        "emoticon": "🔩",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Car"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Car"
            },
            {
                "item_1": "Earth",
                "item_2": "Mutton"
            }
        ]
    },
    "Google Bean": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Sunset",
            "item_2": "Crystal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Google Earth",
                "item_2": "Seed"
            },
            {
                "item_1": "Lake",
                "item_2": "Taurus"
            },
            {
                "item_1": "Sunset",
                "item_2": "Crystal"
            }
        ]
    },
    "Fertilizer": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Exhaust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Exhaust"
            }
        ]
    },
    "Taurus": {
        "emoticon": "🐂",
        "mostEfficientRecipe": {
            "item_1": "Crystal",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crystal",
                "item_2": "Sushi"
            },
            {
                "item_1": "Lake",
                "item_2": "Aries"
            }
        ]
    },
    "Fence": {
        "emoticon": "🚧",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Stake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Stake"
            }
        ]
    },
    "Landslide": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Google Bean",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Google Bean",
                "item_2": "Steam"
            }
        ]
    },
    "Algae": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fertilizer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fertilizer"
            },
            {
                "item_1": "Lake",
                "item_2": "Toxic"
            },
            {
                "item_1": "Lake",
                "item_2": "Fertilizer"
            },
            {
                "item_1": "Lake",
                "item_2": "Green"
            },
            {
                "item_1": "Water",
                "item_2": "Pepsi"
            }
        ]
    },
    "Smog": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Algae",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Algae",
                "item_2": "Smoke"
            },
            {
                "item_1": "Wind",
                "item_2": "Pollution"
            },
            {
                "item_1": "Sunburn",
                "item_2": "Wave"
            }
        ]
    },
    "Moisture": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Smog",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Smog",
                "item_2": "Volcano"
            }
        ]
    },
    "Google Ocean": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Google Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Google Earth"
            },
            {
                "item_1": "Water",
                "item_2": "Google Dream"
            }
        ]
    },
    "Google Swamp": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Crystal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Crystal"
            }
        ]
    },
    "Google Wave": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Google Bean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Google Bean"
            },
            {
                "item_1": "Fire",
                "item_2": "Google Wave"
            }
        ]
    },
    "Minotaur": {
        "emoticon": "🐃",
        "mostEfficientRecipe": {
            "item_1": "Flying Spaghetti Dragon",
            "item_2": "Fireworks"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Taurus"
            },
            {
                "item_1": "Water",
                "item_2": "Google Wave"
            },
            {
                "item_1": "Water",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Lake",
                "item_2": "Bull"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Fireworks"
            }
        ]
    },
    "Labyrinth": {
        "emoticon": "🔀",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Minotaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Google Ocean"
            },
            {
                "item_1": "Minotaur",
                "item_2": "Sun"
            },
            {
                "item_1": "Lake",
                "item_2": "Minotaur"
            }
        ]
    },
    "Zeus": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": {
            "item_1": "Angel",
            "item_2": "Lightning"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Minotaur",
                "item_2": "Cloud"
            },
            {
                "item_1": "Dada",
                "item_2": "Lightning"
            },
            {
                "item_1": "Angel",
                "item_2": "Lightning"
            },
            {
                "item_1": "Human",
                "item_2": "Lightning"
            }
        ]
    },
    "Pollution": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Smog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Smog"
            },
            {
                "item_1": "Lake",
                "item_2": "Trash"
            },
            {
                "item_1": "Lake",
                "item_2": "Swine"
            },
            {
                "item_1": "Earth",
                "item_2": "Oil Spill"
            },
            {
                "item_1": "Earth",
                "item_2": "Swine"
            }
        ]
    },
    "Fire Ocean": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Google Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Google Ocean"
            }
        ]
    },
    "Toxic": {
        "emoticon": "☠️",
        "mostEfficientRecipe": {
            "item_1": "Pollution",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pollution",
                "item_2": "Lake"
            }
        ]
    },
    "Acid": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Pollution"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Pollution"
            },
            {
                "item_1": "Water",
                "item_2": "Poison"
            }
        ]
    },
    "Poison": {
        "emoticon": "☠️",
        "mostEfficientRecipe": {
            "item_1": "Acid",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Acid",
                "item_2": "Water"
            },
            {
                "item_1": "Acid",
                "item_2": "Soup"
            }
        ]
    },
    "Venom": {
        "emoticon": "🕷️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Poison"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Poison"
            }
        ]
    },
    "Battery": {
        "emoticon": "🔋",
        "mostEfficientRecipe": {
            "item_1": "Acid",
            "item_2": "Electricity"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Acid",
                "item_2": "Electricity"
            }
        ]
    },
    "Sunburn": {
        "emoticon": "🌞",
        "mostEfficientRecipe": {
            "item_1": "Sunset",
            "item_2": "Fertilizer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poison",
                "item_2": "Sun"
            },
            {
                "item_1": "Tan",
                "item_2": "Splash"
            },
            {
                "item_1": "Sunset",
                "item_2": "Fertilizer"
            }
        ]
    },
    "Google Earth, Wind & Fire": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Venom",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Venom",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Google Earth, Wind & Fire",
                "item_2": "Earth"
            },
            {
                "item_1": "Google Earth, Wind & Fire",
                "item_2": "Fire"
            }
        ]
    },
    "Electric Eel": {
        "emoticon": "🦎",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Eel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Google Bean"
            },
            {
                "item_1": "Lake",
                "item_2": "Battery"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Eel"
            }
        ]
    },
    "Gas": {
        "emoticon": "⛽",
        "mostEfficientRecipe": {
            "item_1": "Sunburn",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sunburn",
                "item_2": "Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Chlorine"
            }
        ]
    },
    "Tan": {
        "emoticon": "🌞",
        "mostEfficientRecipe": {
            "item_1": "Gas",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gas",
                "item_2": "Wind"
            }
        ]
    },
    "Google Earth, Wind, Fire & Smoke": {
        "emoticon": "🔥🌬️💨",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Google Wave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Google Wave"
            }
        ]
    },
    "Trash": {
        "emoticon": "🗑️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pollution"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pollution"
            }
        ]
    },
    "Fish Tank": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Poison"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Poison"
            }
        ]
    },
    "Vapor": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Gas",
            "item_2": "Blood"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gas",
                "item_2": "Blood"
            }
        ]
    },
    "?": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google Fire"
            },
            {
                "item_1": "?",
                "item_2": "Ship"
            },
            {
                "item_1": "?",
                "item_2": "Boat"
            },
            {
                "item_1": "Lake",
                "item_2": "?"
            },
            {
                "item_1": "Water",
                "item_2": "?"
            }
        ]
    },
    "Boom": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Firecracker"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Firecracker"
            }
        ]
    },
    "Culture": {
        "emoticon": "🎭",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Diamond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Diamond"
            }
        ]
    },
    "Hot Tub": {
        "emoticon": "🛁",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fish Tank",
                "item_2": "Ash"
            },
            {
                "item_1": "Lake",
                "item_2": "Global Warming"
            },
            {
                "item_1": "Fire",
                "item_2": "Pool"
            }
        ]
    },
    "Tea Bag": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Flying Tea"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Flying Tea"
            }
        ]
    },
    "Seaplane": {
        "emoticon": "🛩️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Plane"
            },
            {
                "item_1": "Lake",
                "item_2": "Airplane"
            }
        ]
    },
    "Mushroom": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Rock"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Boom",
                "item_2": "Oasis"
            },
            {
                "item_1": "Lake",
                "item_2": "Rock"
            }
        ]
    },
    "Art": {
        "emoticon": "🎨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Methane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Culture",
                "item_2": "Energy"
            },
            {
                "item_1": "Painting",
                "item_2": "Steam"
            },
            {
                "item_1": "Fire",
                "item_2": "Methane"
            }
        ]
    },
    "Sauna": {
        "emoticon": "🧖‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Seaplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hot Tub",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Fire",
                "item_2": "Seaplane"
            },
            {
                "item_1": "Fire",
                "item_2": "Sweat"
            },
            {
                "item_1": "Wind",
                "item_2": "Finland"
            }
        ]
    },
    "Yarn": {
        "emoticon": "🧶",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Wool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Wool"
            }
        ]
    },
    "Naboo": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Star Wars"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Star Wars"
            }
        ]
    },
    "Flying Mushroom": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Mushroom",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mushroom",
                "item_2": "Flying Fish"
            }
        ]
    },
    "Dada": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Art",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Art",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Dada",
                "item_2": "Swamp"
            },
            {
                "item_1": "Water",
                "item_2": "Dada"
            }
        ]
    },
    "Sweat": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Sauna",
            "item_2": "Tea"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sauna",
                "item_2": "Tea"
            }
        ]
    },
    "Noodle": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Labyrinth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Labyrinth"
            },
            {
                "item_1": "Ramen",
                "item_2": "Lightning"
            },
            {
                "item_1": "Lake",
                "item_2": "Ramen"
            }
        ]
    },
    "Jabba": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Naboo",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Naboo",
                "item_2": "Sushi"
            }
        ]
    },
    "Google Earth, Wind & Fire & Water": {
        "emoticon": "🌎🌬️🔥",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google Earth, Wind & Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google Earth, Wind & Fire"
            }
        ]
    },
    "Toadstool": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Mushroom"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dada",
                "item_2": "Cloud"
            },
            {
                "item_1": "Lake",
                "item_2": "Mushroom"
            },
            {
                "item_1": "Frog",
                "item_2": "Mushroom"
            }
        ]
    },
    "Finland": {
        "emoticon": "🇫🇮",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Sauna"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Sauna"
            },
            {
                "item_1": "Google Earth, Wind & Fire & Water",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Finland"
            },
            {
                "item_1": "Lake",
                "item_2": "Finland"
            },
            {
                "item_1": "Earth",
                "item_2": "Eurovision Song Contest"
            }
        ]
    },
    "Gungan": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Jabba The Hutt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Noodle",
                "item_2": "Plant"
            },
            {
                "item_1": "Water",
                "item_2": "Naboo"
            },
            {
                "item_1": "Jar Jar",
                "item_2": "Earth"
            },
            {
                "item_1": "Jar Jar Binks",
                "item_2": "Algae"
            },
            {
                "item_1": "Lake",
                "item_2": "Naboo"
            },
            {
                "item_1": "Lake",
                "item_2": "Jabba The Hutt"
            }
        ]
    },
    "Ramen": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Noodles"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Noodle"
            },
            {
                "item_1": "Noodles",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Water",
                "item_2": "Google Earth, Wind & Fire & Water"
            },
            {
                "item_1": "Noodles",
                "item_2": "Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Ramen"
            },
            {
                "item_1": "Fire",
                "item_2": "Noodles"
            }
        ]
    },
    "Noodles": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Sauna"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sauna"
            }
        ]
    },
    "Painting": {
        "emoticon": "🎨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Art"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Art"
            }
        ]
    },
    "Jabba the Hutt": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Noodles",
            "item_2": "Wave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Noodles",
                "item_2": "Wave"
            },
            {
                "item_1": "Lake",
                "item_2": "Jabba"
            }
        ]
    },
    "Jar Jar": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Gungan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Gungan"
            },
            {
                "item_1": "Lake",
                "item_2": "Gungan"
            }
        ]
    },
    "Jabba The Hutt": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jabba the Hutt",
                "item_2": "Lake"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Binks"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Lake",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Lake",
                "item_2": "Jabba The Spaghetti"
            },
            {
                "item_1": "Lake",
                "item_2": "Jabba The Hut"
            },
            {
                "item_1": "Lake",
                "item_2": "Fishing"
            },
            {
                "item_1": "Fire",
                "item_2": "Fishing"
            }
        ]
    },
    "Sith": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Jabba The Hut",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Jabba the Hutt"
            },
            {
                "item_1": "Sith",
                "item_2": "Fire"
            },
            {
                "item_1": "Jabba The Hut",
                "item_2": "Fire"
            },
            {
                "item_1": "Darth Maul",
                "item_2": "Twister"
            }
        ]
    },
    "Fart": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Jabba The Hut",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jabba The Hutt",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Jabba The Hut"
            }
        ]
    },
    "Slim": {
        "emoticon": "🧍‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Jabba The Hutt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Jabba The Hutt"
            },
            {
                "item_1": "Lake",
                "item_2": "Skinny"
            }
        ]
    },
    "Skinny": {
        "emoticon": "🙍‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Slim",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Slim",
                "item_2": "Water"
            },
            {
                "item_1": "Wind",
                "item_2": "Slim"
            }
        ]
    },
    "Skeleton": {
        "emoticon": "💀",
        "mostEfficientRecipe": {
            "item_1": "Slim",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Slim",
                "item_2": "Fire"
            },
            {
                "item_1": "Skinny",
                "item_2": "Water"
            },
            {
                "item_1": "Fire",
                "item_2": "Zombie"
            }
        ]
    },
    "Slim Serpent": {
        "emoticon": "🐍",
        "mostEfficientRecipe": {
            "item_1": "Slim",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Slim",
                "item_2": "Stone"
            }
        ]
    },
    "Snake": {
        "emoticon": "🐍",
        "mostEfficientRecipe": {
            "item_1": "Skinny",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skinny",
                "item_2": "Dragon"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Noodle"
            }
        ]
    },
    "Flying Noodle": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Skeleton",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skeleton",
                "item_2": "Volcano"
            }
        ]
    },
    "Eel": {
        "emoticon": "🦎",
        "mostEfficientRecipe": {
            "item_1": "Slim Serpent",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Slim Serpent",
                "item_2": "Tsunami"
            }
        ]
    },
    "Binks": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Jar Jar"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Jar Jar"
            }
        ]
    },
    "Spaghetti": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tea Bag"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sith"
            },
            {
                "item_1": "Pasta",
                "item_2": "Culture"
            },
            {
                "item_1": "Earth",
                "item_2": "Tea Bag"
            },
            {
                "item_1": "Pasta",
                "item_2": "Art"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Mushroom"
            },
            {
                "item_1": "Pasta",
                "item_2": "Dada"
            },
            {
                "item_1": "Earth",
                "item_2": "Toadstool"
            }
        ]
    },
    "Seaweed": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Kelp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Eel",
                "item_2": "Plant"
            },
            {
                "item_1": "Lake",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Lake",
                "item_2": "Kelp"
            },
            {
                "item_1": "Lake",
                "item_2": "Algae"
            },
            {
                "item_1": "Water",
                "item_2": "Emerald"
            }
        ]
    },
    "Pasta": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Spaghetti"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Spaghetti"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Flying Spaghetti Monster"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Pasta"
            }
        ]
    },
    "Flying Spaghetti Monster": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Pasta"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Snake"
            },
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Spaghetti"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Spaghetti Dragon"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Wind"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "God"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Electricity"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Culture"
            },
            {
                "item_1": "Lake",
                "item_2": "Kite"
            },
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Seed"
            },
            {
                "item_1": "Lake",
                "item_2": "Acid"
            },
            {
                "item_1": "Earth",
                "item_2": "Winter"
            }
        ]
    },
    "Steam Monster": {
        "emoticon": "👾",
        "mostEfficientRecipe": {
            "item_1": "Flying Spaghetti Monster",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Earth"
            }
        ]
    },
    "Spaghetti Monster": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Seaweed",
            "item_2": "?"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Seaweed",
                "item_2": "?"
            },
            {
                "item_1": "Lake",
                "item_2": "Spaghetti Monster"
            }
        ]
    },
    "Jabba The Spaghetti": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Pasta",
            "item_2": "Jabba the Hutt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pasta",
                "item_2": "Jabba the Hutt"
            },
            {
                "item_1": "Spaghetti Monster",
                "item_2": "Jabba The Spaghetti"
            }
        ]
    },
    "Jabba The Hut": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Spaghetti Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Jabba The Spaghetti"
            },
            {
                "item_1": "Jabba The Spaghetti",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Jar Jar Binks"
            },
            {
                "item_1": "Lake",
                "item_2": "Sith"
            },
            {
                "item_1": "Water",
                "item_2": "Fishing"
            },
            {
                "item_1": "Wind",
                "item_2": "Fishing"
            }
        ]
    },
    "Flying Spaghetti Dragon": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Flying Spaghetti Monster",
            "item_2": "Jabba the Hutt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Spaghetti Monster",
                "item_2": "Jabba the Hutt"
            }
        ]
    },
    "Jar Jar Binks": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Steam Monster",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam Monster",
                "item_2": "Smoke"
            }
        ]
    },
    "God": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Spaghetti Monster",
            "item_2": "Fart"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spaghetti Monster",
                "item_2": "Fart"
            }
        ]
    },
    "Sunset": {
        "emoticon": "🌅",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Sun"
            }
        ]
    },
    "Jabba The Ramen": {
        "emoticon": "🍜",
        "mostEfficientRecipe": {
            "item_1": "Jabba The Hut",
            "item_2": "Ramen"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jabba The Hut",
                "item_2": "Ramen"
            }
        ]
    },
    "Flying Spaghetti Phoenix": {
        "emoticon": "🍝",
        "mostEfficientRecipe": {
            "item_1": "Flying Spaghetti Dragon",
            "item_2": "Alcohol"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Spaghetti Dragon",
                "item_2": "Alcohol"
            }
        ]
    },
    "Fishing": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Basket"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Fence"
            },
            {
                "item_1": "Lake",
                "item_2": "Basket"
            }
        ]
    },
    "Religion": {
        "emoticon": "☪️",
        "mostEfficientRecipe": {
            "item_1": "God",
            "item_2": "Pop"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "God",
                "item_2": "Pop"
            }
        ]
    },
    "Winter": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Sunset",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sunset",
                "item_2": "Flower"
            }
        ]
    },
    "SpongeBob": {
        "emoticon": "🍍",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Fever"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Fever"
            }
        ]
    },
    "Lamborghini": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Flying Spaghetti Phoenix",
            "item_2": "Ram"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Spaghetti Phoenix",
                "item_2": "Ram"
            }
        ]
    },
    "Fishing Rod": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Sail"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Sail"
            }
        ]
    },
    "Christianity": {
        "emoticon": "✝️",
        "mostEfficientRecipe": {
            "item_1": "Religion",
            "item_2": "House"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Religion",
                "item_2": "House"
            }
        ]
    },
    "Siesta": {
        "emoticon": "💤",
        "mostEfficientRecipe": {
            "item_1": "Winter",
            "item_2": "Spain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Winter",
                "item_2": "Spain"
            }
        ]
    },
    "Galileo": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Telescope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Telescope"
            }
        ]
    },
    "Allergy": {
        "emoticon": "🤧",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Sneeze"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Sneeze"
            }
        ]
    },
    "Water Ski": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hanglider"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Lake",
                "item_2": "Skier"
            }
        ]
    },
    "Parachristianity": {
        "emoticon": "🙏🏼",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Island"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Rainfox"
            },
            {
                "item_1": "Lake",
                "item_2": "Island"
            },
            {
                "item_1": "Parachristianity",
                "item_2": "Planet"
            }
        ]
    },
    "Nap": {
        "emoticon": "😴",
        "mostEfficientRecipe": {
            "item_1": "Siesta",
            "item_2": "Fireplace"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Siesta",
                "item_2": "Fireplace"
            }
        ]
    },
    "Necklace": {
        "emoticon": "💍",
        "mostEfficientRecipe": {
            "item_1": "Galileo",
            "item_2": "Pressure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Galileo",
                "item_2": "Pressure"
            },
            {
                "item_1": "Lake",
                "item_2": "Sapphire"
            }
        ]
    },
    "Hay Fever": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Allergy",
            "item_2": "Diamond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Allergy",
                "item_2": "Diamond"
            }
        ]
    },
    "Hot Springs": {
        "emoticon": "♨️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hot Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Hot Water"
            }
        ]
    },
    "Parachurch": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Necklace"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Parachristianity",
                "item_2": "Burning Love"
            },
            {
                "item_1": "Wind",
                "item_2": "Necklace"
            }
        ]
    },
    "Sleep": {
        "emoticon": "😴",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Galileo"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Nap",
                "item_2": "Pineapple"
            },
            {
                "item_1": "Water",
                "item_2": "Galileo"
            },
            {
                "item_1": "Water",
                "item_2": "Nap"
            },
            {
                "item_1": "Water",
                "item_2": "Dream"
            },
            {
                "item_1": "Fire",
                "item_2": "Necklace"
            }
        ]
    },
    "Africa": {
        "emoticon": "🌍",
        "mostEfficientRecipe": {
            "item_1": "Necklace",
            "item_2": "Continent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Necklace",
                "item_2": "Continent"
            }
        ]
    },
    "Hay": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Hay Fever",
            "item_2": "Soil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hay Fever",
                "item_2": "Soil"
            }
        ]
    },
    "Tar": {
        "emoticon": "🎶",
        "mostEfficientRecipe": {
            "item_1": "Hot Springs",
            "item_2": "Oil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hot Springs",
                "item_2": "Oil"
            },
            {
                "item_1": "Fire",
                "item_2": "Asphalt"
            }
        ]
    },
    "Data Lake": {
        "emoticon": "📊🏞️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google Cloud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google Cloud"
            },
            {
                "item_1": "Lake",
                "item_2": "Database"
            }
        ]
    },
    "Dream": {
        "emoticon": "💭",
        "mostEfficientRecipe": {
            "item_1": "Sleep",
            "item_2": "Field"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sleep",
                "item_2": "Field"
            }
        ]
    },
    "Slave": {
        "emoticon": "⛓️",
        "mostEfficientRecipe": {
            "item_1": "Africa",
            "item_2": "Farmer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Africa",
                "item_2": "Farmer"
            }
        ]
    },
    "Cygnus": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Hay",
            "item_2": "Swan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hay",
                "item_2": "Swan"
            }
        ]
    },
    "Asphalt": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Tar",
            "item_2": "Fuel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tar",
                "item_2": "Fuel"
            },
            {
                "item_1": "Earth",
                "item_2": "Data Lake"
            }
        ]
    },
    "Swan Lake": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Movie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Data Lake",
                "item_2": "Money"
            },
            {
                "item_1": "Fire",
                "item_2": "Movie"
            }
        ]
    },
    "Google Dream": {
        "emoticon": "💭",
        "mostEfficientRecipe": {
            "item_1": "Dream",
            "item_2": "Google Chrome"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dream",
                "item_2": "Google Chrome"
            }
        ]
    },
    "Waterfall": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Slave",
            "item_2": "Emulsion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Slave",
                "item_2": "Emulsion"
            }
        ]
    },
    "Googol": {
        "emoticon": "🔢",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google"
            }
        ]
    },
    "Oil Spill": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Asphalt",
            "item_2": "Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Asphalt",
                "item_2": "Pig"
            }
        ]
    },
    "Swine Lake": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Swan Lake",
            "item_2": "Honeymoon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swan Lake",
                "item_2": "Honeymoon"
            }
        ]
    },
    "Movie": {
        "emoticon": "🎥",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Popcorn"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Earth",
                "item_2": "Hollywood"
            }
        ]
    },
    "Fondue": {
        "emoticon": "🧀",
        "mostEfficientRecipe": {
            "item_1": "Waterfall",
            "item_2": "Cheese"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Waterfall",
                "item_2": "Cheese"
            }
        ]
    },
    "Googolplex": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Oil Spill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Googol",
                "item_2": "Samurai"
            },
            {
                "item_1": "Lake",
                "item_2": "Oil Spill"
            },
            {
                "item_1": "Wind",
                "item_2": "Googol"
            }
        ]
    },
    "BP": {
        "emoticon": "💵",
        "mostEfficientRecipe": {
            "item_1": "Oil Spill",
            "item_2": "Burnt Cookie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Oil Spill",
                "item_2": "Burnt Cookie"
            }
        ]
    },
    "Piglet": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Swine Lake",
            "item_2": "Lightsaber"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swine Lake",
                "item_2": "Lightsaber"
            }
        ]
    },
    "Jaws": {
        "emoticon": "🦈",
        "mostEfficientRecipe": {
            "item_1": "Movie",
            "item_2": "Plesiosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Movie",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Lake",
                "item_2": "Movie"
            }
        ]
    },
    "Soggy Bread": {
        "emoticon": "🍞",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Soggy Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Soggy Toast"
            }
        ]
    },
    "Death Star": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Nessie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Nessie"
            }
        ]
    },
    "GPS": {
        "emoticon": "📍",
        "mostEfficientRecipe": {
            "item_1": "BP",
            "item_2": "Fire Breath"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "BP",
                "item_2": "Fire Breath"
            }
        ]
    },
    "Optimus Pig": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Ice-cold Croco-cola"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Ice-cold Croco-cola"
            }
        ]
    },
    "Sharknado": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Wasabi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Wasabi"
            },
            {
                "item_1": "Sharknado",
                "item_2": "Parting"
            },
            {
                "item_1": "Sharknado",
                "item_2": "Prayer"
            },
            {
                "item_1": "Fire",
                "item_2": "Sharkicane"
            }
        ]
    },
    "French Onion Soup": {
        "emoticon": "🥣",
        "mostEfficientRecipe": {
            "item_1": "Soggy Bread",
            "item_2": "Miso Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Soggy Bread",
                "item_2": "Miso Soup"
            },
            {
                "item_1": "Fire",
                "item_2": "Darth Maul"
            }
        ]
    },
    "Darth Snow": {
        "emoticon": "☃️",
        "mostEfficientRecipe": {
            "item_1": "Death Star",
            "item_2": "Coral Reef"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Death Star",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Darth Snow",
                "item_2": "Psittacine"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Snow"
            },
            {
                "item_1": "Fire",
                "item_2": "Darth Snow"
            }
        ]
    },
    "Styx": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hades"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Hades"
            }
        ]
    },
    "Porkimus Prime": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Fireball"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Optimus Pig",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Lake",
                "item_2": "Zeppelin"
            },
            {
                "item_1": "Lake",
                "item_2": "Steam Ray"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Sunfish"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Swordfish"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Blimp"
            },
            {
                "item_1": "Lake",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Lake",
                "item_2": "Frog"
            },
            {
                "item_1": "Porkimus Prime",
                "item_2": "Prayer"
            },
            {
                "item_1": "Lake",
                "item_2": "Fireball"
            },
            {
                "item_1": "Lake",
                "item_2": "French Onion Soup Gun"
            },
            {
                "item_1": "Water",
                "item_2": "Rose Shark"
            },
            {
                "item_1": "Earth",
                "item_2": "Porkimus Prime"
            }
        ]
    },
    "Rose Shark": {
        "emoticon": "🦈",
        "mostEfficientRecipe": {
            "item_1": "Sharknado",
            "item_2": "Kingdom"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sharknado",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Wind",
                "item_2": "Eurovision Song Contest"
            }
        ]
    },
    "French Onion Soup Gun": {
        "emoticon": "🍲🔫",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Toucan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Toucan"
            }
        ]
    },
    "Darth Maul": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hot Air Balloon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Hot Air Balloon"
            },
            {
                "item_1": "Lake",
                "item_2": "Darth Maul"
            }
        ]
    },
    "Charon": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Fruit Salad"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Fruit Salad"
            }
        ]
    },
    "Eurovision Song Contest": {
        "emoticon": "🇪🇺",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hot Toddies"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Porkimus Prime",
                "item_2": "Lotus"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Toddies"
            }
        ]
    },
    "Hot Toddies": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hot Toddy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Hot Toddy"
            },
            {
                "item_1": "Hot Toddies",
                "item_2": "Sonar"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Toddies"
            },
            {
                "item_1": "Fire",
                "item_2": "Warm Toddies"
            },
            {
                "item_1": "Water",
                "item_2": "Mummy"
            }
        ]
    },
    "Bribe": {
        "emoticon": "💵",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Snowflake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Snowflake"
            }
        ]
    },
    "Ice Golem": {
        "emoticon": "🧊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Snow Golem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Snow Golem"
            }
        ]
    },
    "Piranha": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Shark"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Shark"
            },
            {
                "item_1": "Fire",
                "item_2": "Rose Shark"
            }
        ]
    },
    "Cleopatra": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Eurovision Song Contest",
            "item_2": "Egypt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Eurovision Song Contest",
                "item_2": "Egypt"
            }
        ]
    },
    "Industrial Revolution": {
        "emoticon": "🏭",
        "mostEfficientRecipe": {
            "item_1": "Hot Toddies",
            "item_2": "Darth Vader"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hot Toddies",
                "item_2": "Darth Vader"
            }
        ]
    },
    "Swine": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Cinema"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Yoda"
            },
            {
                "item_1": "Lake",
                "item_2": "Swine Lake"
            },
            {
                "item_1": "Water",
                "item_2": "Cinema"
            }
        ]
    },
    "Vacation": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Pina Colada"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Pina Colada"
            }
        ]
    },
    "Onyx": {
        "emoticon": "🔮",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Burning Love"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Burning Love"
            }
        ]
    },
    "Emerald": {
        "emoticon": "💚",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Gem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Gem"
            },
            {
                "item_1": "Lake",
                "item_2": "Ruby"
            }
        ]
    },
    "Seal": {
        "emoticon": "🦭",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Dust Bunny"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Dust Bunny"
            },
            {
                "item_1": "Lake",
                "item_2": "Seal"
            },
            {
                "item_1": "Fire",
                "item_2": "Seal"
            }
        ]
    },
    "Coke": {
        "emoticon": "🥤",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Wheel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Wall"
            },
            {
                "item_1": "Water",
                "item_2": "Wheel"
            }
        ]
    },
    "Wheel": {
        "emoticon": "⚙️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google Bean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google Bean"
            }
        ]
    },
    "Swamp Lake": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Google Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Google Swamp"
            }
        ]
    },
    "Tanning": {
        "emoticon": "🌞",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Tan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Tan"
            }
        ]
    },
    "Monet": {
        "emoticon": "🎨",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Painting"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Yarn"
            },
            {
                "item_1": "Lake",
                "item_2": "Painting"
            }
        ]
    },
    "Methane": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Fart"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Fart"
            }
        ]
    },
    "Sunrise": {
        "emoticon": "🌅",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Sunset"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Sunset"
            },
            {
                "item_1": "Water",
                "item_2": "Sunset"
            },
            {
                "item_1": "Wind",
                "item_2": "Sunset"
            }
        ]
    },
    "Baptism": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Church"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Religion"
            },
            {
                "item_1": "Lake",
                "item_2": "Siesta"
            },
            {
                "item_1": "Lake",
                "item_2": "Necklace"
            },
            {
                "item_1": "Lake",
                "item_2": "Baptist"
            },
            {
                "item_1": "Water",
                "item_2": "Religion"
            },
            {
                "item_1": "Water",
                "item_2": "Christianity"
            },
            {
                "item_1": "Water",
                "item_2": "Africa"
            },
            {
                "item_1": "Water",
                "item_2": "Nightmare"
            },
            {
                "item_1": "Water",
                "item_2": "Church"
            },
            {
                "item_1": "Water",
                "item_2": "Holy Spirit"
            }
        ]
    },
    "Baptist": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Africa"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Africa"
            }
        ]
    },
    "Data": {
        "emoticon": "📅",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Data Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Data Lake"
            }
        ]
    },
    "Nightmare": {
        "emoticon": "😱",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Dream"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Dream"
            },
            {
                "item_1": "Fire",
                "item_2": "Dream"
            }
        ]
    },
    "Ballet": {
        "emoticon": "🩰",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Swan Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Swan Lake"
            }
        ]
    },
    "Google Lake": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Waterfall"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Waterfall"
            }
        ]
    },
    "Ferry": {
        "emoticon": "⛴",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Eurovision Song Contest"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Eurovision Song Contest"
            },
            {
                "item_1": "Lake",
                "item_2": "Ferry"
            }
        ]
    },
    "Cottage": {
        "emoticon": "🏡",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Vacation"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Vacation"
            }
        ]
    },
    "Obsidian": {
        "emoticon": "🔪",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Onyx"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Onyx"
            }
        ]
    },
    "Green": {
        "emoticon": "💚",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Emerald"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Emerald"
            },
            {
                "item_1": "Fire",
                "item_2": "Emerald"
            }
        ]
    },
    "Pepsi": {
        "emoticon": "🥤",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Wheel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Wheel"
            }
        ]
    },
    "Database": {
        "emoticon": "💾",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Nightmare"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Nightmare"
            }
        ]
    },
    "Mountain Dew": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Database"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Pepsi"
            },
            {
                "item_1": "Water",
                "item_2": "Mountain Dew"
            },
            {
                "item_1": "Wind",
                "item_2": "Mountain Dew"
            },
            {
                "item_1": "Earth",
                "item_2": "Database"
            }
        ]
    },
    "Pearl": {
        "emoticon": "🦪",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Necklace"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Necklace"
            },
            {
                "item_1": "Water",
                "item_2": "Wet Haystack"
            },
            {
                "item_1": "Fire",
                "item_2": "Oyster"
            },
            {
                "item_1": "Water",
                "item_2": "Pearl Diver"
            },
            {
                "item_1": "Earth",
                "item_2": "Oyster"
            }
        ]
    },
    "Haystack": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hay"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hay"
            }
        ]
    },
    "Pitch": {
        "emoticon": "🎙️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Data Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Data Lake"
            }
        ]
    },
    "Pigimus Prime": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Optimus Pig"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Optimus Pig"
            },
            {
                "item_1": "Wind",
                "item_2": "Pigimus Prime"
            }
        ]
    },
    "Whiskey": {
        "emoticon": "🥃",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ice Golem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ice Golem"
            },
            {
                "item_1": "Water",
                "item_2": "Moonshine"
            },
            {
                "item_1": "Earth",
                "item_2": "Moonshine"
            }
        ]
    },
    "Cruise": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Vacation"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Vacation"
            }
        ]
    },
    "Sink": {
        "emoticon": "🚿",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Onyx"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Onyx"
            },
            {
                "item_1": "Water",
                "item_2": "Drain"
            }
        ]
    },
    "Sealion": {
        "emoticon": "🦭",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Seal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Seal"
            }
        ]
    },
    "Leather": {
        "emoticon": "👜",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Methane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Methane"
            },
            {
                "item_1": "Wind",
                "item_2": "Tanning"
            },
            {
                "item_1": "Earth",
                "item_2": "Tanning"
            }
        ]
    },
    "Google Water": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ferry"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ferry"
            }
        ]
    },
    "Leak": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Database"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Database"
            }
        ]
    },
    "Oyster": {
        "emoticon": "🦪",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Pearl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Pearl"
            },
            {
                "item_1": "Fire",
                "item_2": "Haystack"
            },
            {
                "item_1": "Fire",
                "item_2": "Pearl Diver"
            },
            {
                "item_1": "Earth",
                "item_2": "Pearl Diver"
            }
        ]
    },
    "Wet Haystack": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Haystack"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Haystack"
            }
        ]
    },
    "Moonshine": {
        "emoticon": "🌙",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Whiskey"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Whiskey"
            }
        ]
    },
    "Drain": {
        "emoticon": "🚽",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Sealion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sealion"
            },
            {
                "item_1": "Wind",
                "item_2": "Sealion"
            }
        ]
    },
    "Boot": {
        "emoticon": "👢",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Google Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Google Water"
            }
        ]
    },
    "Napalm": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Galileo"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Galileo"
            }
        ]
    },
    "Fire Ski": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Parachristianity"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Parachristianity"
            }
        ]
    },
    "Data Fire": {
        "emoticon": "🔥📊",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Data Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Data Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Data Fire"
            }
        ]
    },
    "Worker": {
        "emoticon": "👷",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Slave"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Slave"
            }
        ]
    },
    "Big Bang": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Googolplex"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Googolplex"
            },
            {
                "item_1": "Fire",
                "item_2": "Universe"
            }
        ]
    },
    "Bp": {
        "emoticon": "💉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "BP"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "BP"
            },
            {
                "item_1": "Fire",
                "item_2": "Bp"
            }
        ]
    },
    "Death": {
        "emoticon": "💀",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Death Star"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Death Star"
            }
        ]
    },
    "Warm Toddies": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ice Golem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ice Golem"
            }
        ]
    },
    "Mummy": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Cleopatra"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Cleopatra"
            }
        ]
    },
    "Campfire": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Vacation"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Vacation"
            }
        ]
    },
    "Information": {
        "emoticon": "💡",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Nightmare"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Nightmare"
            },
            {
                "item_1": "Wind",
                "item_2": "Data"
            }
        ]
    },
    "Fire Lake": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Google Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Google Lake"
            }
        ]
    },
    "Fireboat": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ferry"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ferry"
            }
        ]
    },
    "Chlorine": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Green"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Green"
            }
        ]
    },
    "Hack": {
        "emoticon": "🔨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Mountain Dew"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Mountain Dew"
            },
            {
                "item_1": "Fire",
                "item_2": "Hacker"
            }
        ]
    },
    "Torch": {
        "emoticon": "🔦",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pitch"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Pitch"
            }
        ]
    },
    "Shoe": {
        "emoticon": "👟",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Leather"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Leather"
            },
            {
                "item_1": "Earth",
                "item_2": "Leather"
            },
            {
                "item_1": "Earth",
                "item_2": "Boot"
            }
        ]
    },
    "Roast": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Chicken"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Boot"
            },
            {
                "item_1": "Fire",
                "item_2": "Chicken"
            }
        ]
    },
    "Blacksmith": {
        "emoticon": "🔨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Big Bang"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Big Bang"
            }
        ]
    },
    "Bonfire": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Campfire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Campfire"
            }
        ]
    },
    "Knowledge": {
        "emoticon": "💡",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fire Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Fireboat"
            },
            {
                "item_1": "Water",
                "item_2": "Fire Lake"
            }
        ]
    },
    "Bleach": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Chlorine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Chlorine"
            }
        ]
    },
    "Hacker": {
        "emoticon": "👾",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hack"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hack"
            },
            {
                "item_1": "Earth",
                "item_2": "Torch"
            }
        ]
    },
    "Light": {
        "emoticon": "💡",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Shoe"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Shoe"
            }
        ]
    },
    "Sword": {
        "emoticon": "🗡️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Blacksmith"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Blacksmith"
            },
            {
                "item_1": "Wind",
                "item_2": "Steel"
            }
        ]
    },
    "Power": {
        "emoticon": "⚡",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Knowledge"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Knowledge"
            }
        ]
    },
    "Steel": {
        "emoticon": "🛠️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Blacksmith"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Blacksmith"
            },
            {
                "item_1": "Water",
                "item_2": "Metal"
            }
        ]
    },
    "Clean": {
        "emoticon": "🧼",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Hacker"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hacker"
            }
        ]
    },
    "Rust": {
        "emoticon": "🔨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Steel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Clean"
            },
            {
                "item_1": "Fire",
                "item_2": "Steel"
            }
        ]
    },
    "Iron": {
        "emoticon": "🔨",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Rust"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Rust"
            },
            {
                "item_1": "Fire",
                "item_2": "Iron"
            }
        ]
    },
    "Church": {
        "emoticon": "⛪",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Galileo"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Galileo"
            },
            {
                "item_1": "Earth",
                "item_2": "Africa"
            }
        ]
    },
    "Google Wind": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Google Dream"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Google Dream"
            }
        ]
    },
    "Swine Flu": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Cinema"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Swine Lake"
            },
            {
                "item_1": "Wind",
                "item_2": "Cinema"
            }
        ]
    },
    "Cinema": {
        "emoticon": "🎬",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Movie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Movie"
            }
        ]
    },
    "Sharkicane": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "French Onion Soup"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "French Onion Soup"
            },
            {
                "item_1": "Wind",
                "item_2": "Sharkicane"
            }
        ]
    },
    "Darth Blizzard": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Darth Snow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Darth Snow"
            },
            {
                "item_1": "Wind",
                "item_2": "Darth Blizzard"
            },
            {
                "item_1": "Fire",
                "item_2": "Darth Blizzard"
            }
        ]
    },
    "Zephyr": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Porkimus Prime"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Porkimus Prime"
            },
            {
                "item_1": "Wind",
                "item_2": "Blacksmith"
            }
        ]
    },
    "Holy Spirit": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Baptism"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Baptism"
            }
        ]
    },
    "Pearl Diver": {
        "emoticon": "🤿",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Pearl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Pearl"
            }
        ]
    },
    "Scarecrow": {
        "emoticon": "🎃",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Moonshine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Moonshine"
            }
        ]
    },
    "Gust": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Boot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Boot"
            }
        ]
    },
    "Fire Tornado": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Data Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Data Fire"
            }
        ]
    },
    "Universe": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Big Bang"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Big Bang"
            }
        ]
    },
    "Sandwich": {
        "emoticon": "🥪",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Roast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Roast"
            }
        ]
    },
    "Galaxy": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Universe"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Universe"
            }
        ]
    },
    "Solar System": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Galaxy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Galaxy"
            }
        ]
    },
    "Solar Wind": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Solar System"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Solar System"
            },
            {
                "item_1": "Wind",
                "item_2": "Solar Wind"
            }
        ]
    },
    "Soggy": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Galaxy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Galaxy"
            }
        ]
    },
    "Wet": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Soggy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Soggy"
            },
            {
                "item_1": "Water",
                "item_2": "Dry"
            }
        ]
    },
    "Witch": {
        "emoticon": "🧙‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Dry"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Scarecrow"
            },
            {
                "item_1": "Fire",
                "item_2": "Dry"
            },
            {
                "item_1": "Earth",
                "item_2": "Witch"
            }
        ]
    },
    "Dry": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Wet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Wet"
            }
        ]
    },
    "Wizard": {
        "emoticon": "🧙‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Witch"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Witch"
            }
        ]
    },
    "Patrick": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "SpongeBob"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "SpongeBob"
            }
        ]
    },
    "Rich": {
        "emoticon": "💰",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fishing Rod"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fishing Rod"
            }
        ]
    },
    "Easter": {
        "emoticon": "🐰",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Siesta"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Siesta"
            }
        ]
    },
    "Eden": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Hay Fever"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Hay Fever"
            }
        ]
    },
    "Road": {
        "emoticon": "🛣️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Asphalt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Asphalt"
            }
        ]
    },
    "Hoth": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Darth Snow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Darth Snow"
            },
            {
                "item_1": "Earth",
                "item_2": "Darth Blizzard"
            }
        ]
    },
    "Tartarus": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Styx"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Styx"
            }
        ]
    },
    "Underworld": {
        "emoticon": "👿",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Charon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Charon"
            }
        ]
    },
    "Coal": {
        "emoticon": "⚫️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Coke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Coke"
            }
        ]
    },
    "Day": {
        "emoticon": "🌞",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sunrise"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sunrise"
            }
        ]
    },
    "Zombie": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Nightmare"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Nightmare"
            }
        ]
    },
    "Dance": {
        "emoticon": "💃",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ballet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Ballet"
            }
        ]
    },
    "Grass": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Green"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Green"
            },
            {
                "item_1": "Earth",
                "item_2": "Lawn"
            }
        ]
    },
    "Baseball": {
        "emoticon": "⚾️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pigimus Prime"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pigimus Prime"
            }
        ]
    },
    "Sinkhole": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Drain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Drain"
            }
        ]
    },
    "Knight": {
        "emoticon": "🤴",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sword"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sword"
            }
        ]
    },
    "Plow": {
        "emoticon": "🚜",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Steel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Steel"
            },
            {
                "item_1": "Earth",
                "item_2": "Metal"
            }
        ]
    },
    "Metal": {
        "emoticon": "🤘",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Iron"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Iron"
            }
        ]
    },
    "Hollywood": {
        "emoticon": "🎬",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sharkicane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sharkicane"
            }
        ]
    },
    "Egg": {
        "emoticon": "🥚",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Eden"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Eden"
            },
            {
                "item_1": "Earth",
                "item_2": "Wampa"
            },
            {
                "item_1": "Water",
                "item_2": "Easter"
            }
        ]
    },
    "Tauntaun": {
        "emoticon": "🐫",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tartarus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Tartarus"
            }
        ]
    },
    "Night": {
        "emoticon": "🌃",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Day"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Day"
            }
        ]
    },
    "Lawn": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Baseball"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Baseball"
            }
        ]
    },
    "Chicken": {
        "emoticon": "🐔",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Egg"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Egg"
            }
        ]
    },
    "Wampa": {
        "emoticon": "❄️🐻",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tauntaun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Tauntaun"
            },
            {
                "item_1": "Fire",
                "item_2": "Tauntaun"
            }
        ]
    },
    "Spongebob": {
        "emoticon": "🍍",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Patrick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Patrick"
            }
        ]
    },
    "Pool": {
        "emoticon": "🏊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Rich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Rich"
            }
        ]
    },
    "Garden": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Road"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Road"
            },
            {
                "item_1": "Wind",
                "item_2": "Eden"
            }
        ]
    },
    "River Styx": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Underworld"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Underworld"
            },
            {
                "item_1": "Water",
                "item_2": "River Styx"
            }
        ]
    },
    "Canal": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Plow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Plow"
            }
        ]
    },
    "Venice": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Canal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Canal"
            },
            {
                "item_1": "Water",
                "item_2": "Gondola"
            }
        ]
    },
    "Gondola": {
        "emoticon": "🛶",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Venice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Venice"
            },
            {
                "item_1": "Fire",
                "item_2": "Gondola"
            }
        ]
    },
    "Star": {
        "emoticon": "⭐️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Patrick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Patrick"
            }
        ]
    },
    "Bunny": {
        "emoticon": "🐰",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Easter"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Easter"
            }
        ]
    },
    "Traffic": {
        "emoticon": "🚦",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Road"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Road"
            }
        ]
    },
    "Firefly": {
        "emoticon": "🦋",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Grass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Grass"
            }
        ]
    },
    "Home Run": {
        "emoticon": "⚾️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sinkhole"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sinkhole"
            }
        ]
    },
    "Omelette": {
        "emoticon": "🍳",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Egg"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Egg"
            }
        ]
    },
    "Luke": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Patrick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Wampa"
            },
            {
                "item_1": "Wind",
                "item_2": "Patrick"
            }
        ]
    },
    "Jam": {
        "emoticon": "🍯",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Traffic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Traffic"
            }
        ]
    },
    "Skywalker": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Jam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Jam"
            },
            {
                "item_1": "Water",
                "item_2": "Jam"
            }
        ]
    },
    "Rabbit": {
        "emoticon": "🐰",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Traffic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Traffic"
            }
        ]
    },
    "Toad": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Human",
            "item_2": "Mushroom"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Human",
                "item_2": "Mushroom"
            }
        ]
    },
    "Mario": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Mushroom",
            "item_2": "Toad"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mushroom",
                "item_2": "Toad"
            }
        ]
    },
    "Tea Party": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Tea",
            "item_2": "Teapot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tea",
                "item_2": "Teapot"
            }
        ]
    },
    "Mario Party": {
        "emoticon": "🎲",
        "mostEfficientRecipe": {
            "item_1": "Mario",
            "item_2": "Tea Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mario",
                "item_2": "Tea Party"
            },
            {
                "item_1": "Mario Party",
                "item_2": "Super Gay Party"
            }
        ]
    },
    "Castle": {
        "emoticon": "🏰",
        "mostEfficientRecipe": {
            "item_1": "King",
            "item_2": "Kingdom"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "King",
                "item_2": "Kingdom"
            }
        ]
    },
    "Queen": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Castle",
            "item_2": "King"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Castle",
                "item_2": "King"
            }
        ]
    },
    "Marriage": {
        "emoticon": "💍",
        "mostEfficientRecipe": {
            "item_1": "Love",
            "item_2": "Queen"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Love",
                "item_2": "Queen"
            }
        ]
    },
    "Divorce": {
        "emoticon": "💔",
        "mostEfficientRecipe": {
            "item_1": "Marriage",
            "item_2": "Queen"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Marriage",
                "item_2": "Queen"
            }
        ]
    },
    "Pegasus": {
        "emoticon": "🦄",
        "mostEfficientRecipe": {
            "item_1": "Flying",
            "item_2": "Knight"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying",
                "item_2": "Knight"
            }
        ]
    },
    "Tesla": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Lightning",
            "item_2": "Robot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lightning",
                "item_2": "Robot"
            },
            {
                "item_1": "Robot",
                "item_2": "Tesla"
            }
        ]
    },
    "Mechanic": {
        "emoticon": "🔧",
        "mostEfficientRecipe": {
            "item_1": "Engine",
            "item_2": "Human"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Engine",
                "item_2": "Human"
            }
        ]
    },
    "Cyborg": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Human",
            "item_2": "Robot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Human",
                "item_2": "Robot"
            }
        ]
    },
    "Driver": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Car",
            "item_2": "Human"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Car",
                "item_2": "Human"
            }
        ]
    },
    "Superhero": {
        "emoticon": "🦸",
        "mostEfficientRecipe": {
            "item_1": "Human",
            "item_2": "Power"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Human",
                "item_2": "Power"
            }
        ]
    },
    "Mario Party 9": {
        "emoticon": "🎲",
        "mostEfficientRecipe": {
            "item_1": "Mario Party",
            "item_2": "Superhero"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mario Party",
                "item_2": "Superhero"
            },
            {
                "item_1": "Mario Party 9",
                "item_2": "Super Gay Yaoi Yuri Party"
            }
        ]
    },
    "Superman": {
        "emoticon": "🦸",
        "mostEfficientRecipe": {
            "item_1": "Human",
            "item_2": "Superhero"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Human",
                "item_2": "Superhero"
            }
        ]
    },
    "Super Mario Party": {
        "emoticon": "🎮",
        "mostEfficientRecipe": {
            "item_1": "Mario Party",
            "item_2": "Superman"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mario Party",
                "item_2": "Superman"
            },
            {
                "item_1": "Mario Party 9",
                "item_2": "Superman"
            },
            {
                "item_1": "Mario Party 10",
                "item_2": "Superman"
            }
        ]
    },
    "Mario Party 10": {
        "emoticon": "🎲",
        "mostEfficientRecipe": {
            "item_1": "Mario Party 9",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mario Party 9",
                "item_2": "Super Mario Party"
            },
            {
                "item_1": "Mario Party 9",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Super Mario Divorce Party": {
        "emoticon": "🎉🍄👨",
        "mostEfficientRecipe": {
            "item_1": "Divorce",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Divorce",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Wood": {
        "emoticon": "🌲",
        "mostEfficientRecipe": {
            "item_1": "Forest",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Forest",
                "item_2": "Tree"
            }
        ]
    },
    "Paper": {
        "emoticon": "📃",
        "mostEfficientRecipe": {
            "item_1": "Tree",
            "item_2": "Wood"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tree",
                "item_2": "Wood"
            }
        ]
    },
    "Book": {
        "emoticon": "📚",
        "mostEfficientRecipe": {
            "item_1": "Paper",
            "item_2": "Wood"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paper",
                "item_2": "Wood"
            }
        ]
    },
    "Town": {
        "emoticon": "🏡",
        "mostEfficientRecipe": {
            "item_1": "House",
            "item_2": "House"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "House",
                "item_2": "House"
            }
        ]
    },
    "City": {
        "emoticon": "🏙️",
        "mostEfficientRecipe": {
            "item_1": "Town",
            "item_2": "Town"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Town",
                "item_2": "Town"
            }
        ]
    },
    "Japan": {
        "emoticon": "🗾",
        "mostEfficientRecipe": {
            "item_1": "Island",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Island",
                "item_2": "Sushi"
            }
        ]
    },
    "Manga": {
        "emoticon": "📚",
        "mostEfficientRecipe": {
            "item_1": "Book",
            "item_2": "Japan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Book",
                "item_2": "Japan"
            }
        ]
    },
    "Gay": {
        "emoticon": "🏳️‍🌈",
        "mostEfficientRecipe": {
            "item_1": "Church",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Church",
                "item_2": "Rainbow"
            }
        ]
    },
    "Yaoi": {
        "emoticon": "💏",
        "mostEfficientRecipe": {
            "item_1": "Gay",
            "item_2": "Manga"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gay",
                "item_2": "Manga"
            },
            {
                "item_1": "Queen",
                "item_2": "Yaoi Yuri"
            }
        ]
    },
    "Yaoi Manga": {
        "emoticon": "💋",
        "mostEfficientRecipe": {
            "item_1": "Book",
            "item_2": "Yaoi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Book",
                "item_2": "Yaoi"
            }
        ]
    },
    "Yuri Manga": {
        "emoticon": "💋",
        "mostEfficientRecipe": {
            "item_1": "Queen",
            "item_2": "Yaoi Manga"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Queen",
                "item_2": "Yaoi Manga"
            }
        ]
    },
    "Yaoi Yuri": {
        "emoticon": "💏",
        "mostEfficientRecipe": {
            "item_1": "Yaoi",
            "item_2": "Yuri Manga"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Yaoi",
                "item_2": "Yuri Manga"
            }
        ]
    },
    "Yaoi Yuri Manga": {
        "emoticon": "💋",
        "mostEfficientRecipe": {
            "item_1": "Yaoi Manga",
            "item_2": "Yaoi Yuri"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Yaoi Manga",
                "item_2": "Yaoi Yuri"
            }
        ]
    },
    "Gaymer": {
        "emoticon": "🎮",
        "mostEfficientRecipe": {
            "item_1": "Gay",
            "item_2": "Super Mario Divorce Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gay",
                "item_2": "Super Mario Divorce Party"
            }
        ]
    },
    "Super Gay Party": {
        "emoticon": "🌈🎉🎊",
        "mostEfficientRecipe": {
            "item_1": "Gay",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gay",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Super Gay Mario Party": {
        "emoticon": "🌈🎉🎮",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Party",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Party",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Super Gay Yaoi Mario Party": {
        "emoticon": "🌈👬🎉",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Mario Party",
            "item_2": "Yaoi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Mario Party",
                "item_2": "Yaoi"
            },
            {
                "item_1": "Super Gay Yaoi Mario Party",
                "item_2": "Yuri"
            },
            {
                "item_1": "Super Gay Yaoi Mario Party",
                "item_2": "Super Gay Yaoi Yuri Party"
            }
        ]
    },
    "Yuri": {
        "emoticon": "💞",
        "mostEfficientRecipe": {
            "item_1": "Queen",
            "item_2": "Yaoi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Queen",
                "item_2": "Yaoi"
            }
        ]
    },
    "Super Gay Yuri Party": {
        "emoticon": "🌈👭🎉",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Mario Party",
            "item_2": "Yuri"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Mario Party",
                "item_2": "Yuri"
            }
        ]
    },
    "Super Gay Yaoi Yuri Party": {
        "emoticon": "🌈👬👭",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Yaoi Mario Party",
            "item_2": "Super Gay Yuri Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Yaoi Mario Party",
                "item_2": "Super Gay Yuri Party"
            }
        ]
    },
    "Super Gay Yuri Mario Party": {
        "emoticon": "🌈👭🎮",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Yuri Party",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Yuri Party",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Super Gay Yaoi Yuri Mario Party": {
        "emoticon": "🌈👬👭",
        "mostEfficientRecipe": {
            "item_1": "Super Gay Yaoi Mario Party",
            "item_2": "Super Gay Yuri Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gay Yaoi Mario Party",
                "item_2": "Super Gay Yuri Mario Party"
            }
        ]
    },
    "Mario Party: The Top 100": {
        "emoticon": "🎮",
        "mostEfficientRecipe": {
            "item_1": "Mario Party 10",
            "item_2": "Super Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mario Party 10",
                "item_2": "Super Mario Party"
            }
        ]
    },
    "Gayio Party": {
        "emoticon": "🏳️‍🌈",
        "mostEfficientRecipe": {
            "item_1": "Gay",
            "item_2": "Mario Party: The Top 100"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gay",
                "item_2": "Mario Party: The Top 100"
            }
        ]
    },
    "Super Gayio Party": {
        "emoticon": "🏳️‍🌈",
        "mostEfficientRecipe": {
            "item_1": "Gayio Party",
            "item_2": "Super Gay Mario Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gayio Party",
                "item_2": "Super Gay Mario Party"
            }
        ]
    },
    "Yuri Party": {
        "emoticon": "🍑",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Party",
            "item_2": "Yuri"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Party",
                "item_2": "Yuri"
            }
        ]
    },
    "Super Gayio Yuri Party": {
        "emoticon": "🌈👭🎉",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Party",
            "item_2": "Yuri Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Party",
                "item_2": "Yuri Party"
            }
        ]
    },
    "Yuri Yaoi": {
        "emoticon": "💋",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Yuri Party",
            "item_2": "Yaoi Yuri"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Yuri Party",
                "item_2": "Yaoi Yuri"
            }
        ]
    },
    "Yaoi Yuri Party": {
        "emoticon": "👬",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Party",
            "item_2": "Yuri Yaoi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Party",
                "item_2": "Yuri Yaoi"
            }
        ]
    },
    "Super Yaoi Yuri Party": {
        "emoticon": "🎉🌈👬",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Party",
            "item_2": "Yaoi Yuri Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Party",
                "item_2": "Yaoi Yuri Party"
            }
        ]
    },
    "Super Gayio Yuri Yaoi Party": {
        "emoticon": "🏳️‍🌈",
        "mostEfficientRecipe": {
            "item_1": "Super Gayio Party",
            "item_2": "Super Yaoi Yuri Party"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Super Gayio Party",
                "item_2": "Super Yaoi Yuri Party"
            }
        ]
    }
}