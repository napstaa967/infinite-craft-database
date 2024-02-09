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
                "item_2": "Landing"
            },
            {
                "item_1": "Water",
                "item_2": "Cave"
            },
            {
                "item_1": "Water",
                "item_2": "River"
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
                "item_2": "Lightning"
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
                "item_2": "Heat"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Water",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Water",
                "item_2": "Fire Storm"
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
                "item_2": "Agni"
            },
            {
                "item_1": "Water",
                "item_2": "Grill"
            },
            {
                "item_1": "Lake",
                "item_2": "Fireball"
            },
            {
                "item_1": "Water",
                "item_2": "Bungee Jumper"
            },
            {
                "item_1": "Steam",
                "item_2": "Scratch"
            },
            {
                "item_1": "Fire",
                "item_2": "Engine"
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
                "item_2": "Splash"
            },
            {
                "item_1": "Water",
                "item_2": "Breeze"
            },
            {
                "item_1": "Surf",
                "item_2": "Water"
            },
            {
                "item_1": "Groom",
                "item_2": "Surf"
            },
            {
                "item_1": "Lake",
                "item_2": "Surf"
            },
            {
                "item_1": "Power",
                "item_2": "Splash"
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
                "item_2": "Seed"
            },
            {
                "item_1": "Earth",
                "item_2": "Sun"
            },
            {
                "item_1": "Earth",
                "item_2": "Pot"
            },
            {
                "item_1": "Earth",
                "item_2": "Flower"
            },
            {
                "item_1": "Earth",
                "item_2": "Potion"
            },
            {
                "item_1": "Earth",
                "item_2": "Elixir"
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
                "item_2": "Soil"
            },
            {
                "item_1": "Earth",
                "item_2": "Farmer"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Bubble"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Seed"
            },
            {
                "item_1": "Flambé",
                "item_2": "Seed"
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
                "item_2": "Beach"
            },
            {
                "item_1": "Water",
                "item_2": "Solar"
            },
            {
                "item_1": "Water",
                "item_2": "Alchemy"
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
                "item_2": "Globe"
            },
            {
                "item_1": "Water",
                "item_2": "World"
            },
            {
                "item_1": "Water",
                "item_2": "Tide"
            },
            {
                "item_1": "Lake",
                "item_2": "Tide"
            },
            {
                "item_1": "Water",
                "item_2": "Flood"
            },
            {
                "item_1": "Water",
                "item_2": "Salt Water"
            },
            {
                "item_1": "Water",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Water",
                "item_2": "Atlantis"
            },
            {
                "item_1": "Lake",
                "item_2": "Flood"
            },
            {
                "item_1": "Lake",
                "item_2": "Beach"
            },
            {
                "item_1": "Lake",
                "item_2": "Lake"
            },
            {
                "item_1": "Sea",
                "item_2": "Sea"
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
                "item_2": "Mist"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Water",
                "item_2": "Air"
            },
            {
                "item_1": "Soggy",
                "item_2": "Steam"
            },
            {
                "item_1": "Vapor",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Earth",
                "item_2": "Vapor"
            },
            {
                "item_1": "Lake",
                "item_2": "Steam"
            },
            {
                "item_1": "Steam",
                "item_2": "Dust"
            },
            {
                "item_1": "Steam",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Steam",
                "item_2": "Puddle"
            },
            {
                "item_1": "Hay",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Steam",
                "item_2": "Tree"
            },
            {
                "item_1": "Steam",
                "item_2": "Bubble"
            },
            {
                "item_1": "Steam",
                "item_2": "Steam"
            },
            {
                "item_1": "Leak",
                "item_2": "Fog"
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
                "item_2": "Hurricane"
            },
            {
                "item_1": "Water",
                "item_2": "Tornado"
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
                "item_2": "Cannonball"
            },
            {
                "item_1": "Water",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Water"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Cloud"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Wave"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Volcano"
            },
            {
                "item_1": "Wedding",
                "item_2": "Wave"
            },
            {
                "item_1": "Whine",
                "item_2": "Wave"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Steam"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Wave"
            },
            {
                "item_1": "Pollution",
                "item_2": "Wave"
            },
            {
                "item_1": "Fire",
                "item_2": "Prince"
            },
            {
                "item_1": "Fridge",
                "item_2": "Wave"
            },
            {
                "item_1": "Salt Water",
                "item_2": "Wind"
            },
            {
                "item_1": "Salt Water",
                "item_2": "Wave"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Mist"
            },
            {
                "item_1": "Water",
                "item_2": "Tremor"
            },
            {
                "item_1": "Water",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Reef",
                "item_2": "Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Fart"
            },
            {
                "item_1": "Lake",
                "item_2": "Storm"
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
                "item_1": "Steamboat",
                "item_2": "Marsh"
            },
            {
                "item_1": "Whine",
                "item_2": "Rain"
            },
            {
                "item_1": "Swamp Thing",
                "item_2": "Swamp"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Electricity"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Swamp"
            },
            {
                "item_1": "Alligator",
                "item_2": "Marsh"
            },
            {
                "item_1": "Alligator",
                "item_2": "Plant"
            },
            {
                "item_1": "Alligator",
                "item_2": "Alligator"
            },
            {
                "item_1": "Lake",
                "item_2": "Soil"
            },
            {
                "item_1": "Lake",
                "item_2": "Forest"
            },
            {
                "item_1": "Lake",
                "item_2": "Wet"
            },
            {
                "item_1": "King",
                "item_2": "Mud"
            },
            {
                "item_1": "Grog",
                "item_2": "Marsh"
            },
            {
                "item_1": "Soggy",
                "item_2": "Plant"
            },
            {
                "item_1": "Soggy",
                "item_2": "Earth"
            },
            {
                "item_1": "Goosebumps",
                "item_2": "Mud"
            },
            {
                "item_1": "Shower",
                "item_2": "Marsh"
            },
            {
                "item_1": "Earth",
                "item_2": "Sailor Cannon"
            },
            {
                "item_1": "Water",
                "item_2": "Moat"
            },
            {
                "item_1": "Reef",
                "item_2": "Marsh"
            },
            {
                "item_1": "Fart",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Soggy"
            },
            {
                "item_1": "Lake",
                "item_2": "Bath"
            },
            {
                "item_1": "Lake",
                "item_2": "Sweat"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Marsh"
            },
            {
                "item_1": "Lake",
                "item_2": "Marsh"
            },
            {
                "item_1": "Drain",
                "item_2": "Lake"
            },
            {
                "item_1": "Necromancer",
                "item_2": "Water"
            },
            {
                "item_1": "Scratch",
                "item_2": "Swamp Tsunami"
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
                "item_1": "Water",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Explosion"
            },
            {
                "item_1": "Water",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Water",
                "item_2": "Balloon"
            },
            {
                "item_1": "Water",
                "item_2": "Telescope"
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
                "item_1": "Water",
                "item_2": "Bubble"
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
                "item_2": "Egg"
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
                "item_2": "Fireball"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Fish"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Salmon",
                "item_2": "Earth"
            },
            {
                "item_1": "Salmon",
                "item_2": "Wind"
            },
            {
                "item_1": "Salmon",
                "item_2": "Water"
            },
            {
                "item_1": "Salmon",
                "item_2": "Lake"
            },
            {
                "item_1": "Fishing",
                "item_2": "Water"
            },
            {
                "item_1": "Fishing",
                "item_2": "Sushi"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Fire"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Water"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Smoke Tsunami"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Kaiju"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Godzilla"
            },
            {
                "item_1": "Lake",
                "item_2": "Aquarium"
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
                "item_2": "Grill"
            },
            {
                "item_1": "King",
                "item_2": "Energy"
            },
            {
                "item_1": "Water",
                "item_2": "Shipwreck"
            },
            {
                "item_1": "Soggy",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Water",
                "item_2": "Fish Sandwich"
            },
            {
                "item_1": "Water",
                "item_2": "Goldfish Sandwich"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Saucer"
            },
            {
                "item_1": "Water",
                "item_2": "Smell"
            },
            {
                "item_1": "Fire",
                "item_2": "Atlantis"
            },
            {
                "item_1": "Balrog",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Gollum",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Dragonfish"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Steam",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Sashimi",
                "item_2": "Mirage"
            },
            {
                "item_1": "Steam",
                "item_2": "Flambé"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow Trout"
            }
        ]
    },
    "Rain": {
        "emoticon": "🌧️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Lava"
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
                "item_2": "Lava"
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
                "item_2": "Hanglider"
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
                "item_1": "Whine",
                "item_2": "Cloud"
            },
            {
                "item_1": "Alligator",
                "item_2": "Cloud"
            },
            {
                "item_1": "Soggy",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Shower"
            },
            {
                "item_1": "Brine",
                "item_2": "Cloud"
            },
            {
                "item_1": "Wind",
                "item_2": "Shower"
            },
            {
                "item_1": "Steam",
                "item_2": "Cloud"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Steam",
                "item_2": "Flood"
            },
            {
                "item_1": "Spy",
                "item_2": "Cloud"
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
                "item_1": "Water",
                "item_2": "Flying Fish Sandwich"
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
                "item_1": "Fishing",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Shower",
                "item_2": "Fish"
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
                "item_1": "Heart",
                "item_2": "Cloud"
            },
            {
                "item_1": "Steamboat",
                "item_2": "Rain"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Steam"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Wind"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Water"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Earth"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Crash"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Train",
                "item_2": "Rain"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Cloud"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Plant"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Cup"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Rainbow Fish"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Lake",
                "item_2": "Fire Storm"
            },
            {
                "item_1": "Lake",
                "item_2": "Starbucks"
            },
            {
                "item_1": "Water",
                "item_2": "Rainbow Alligator"
            },
            {
                "item_1": "Water",
                "item_2": "Rainbow Crocodile"
            },
            {
                "item_1": "Water",
                "item_2": "Redneck"
            },
            {
                "item_1": "Noah",
                "item_2": "Blood"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Rain"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Wind"
            },
            {
                "item_1": "Hex",
                "item_2": "Waterfall"
            },
            {
                "item_1": "Scratch",
                "item_2": "Drunk"
            },
            {
                "item_1": "Birthday",
                "item_2": "French Fries"
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
                "item_1": "Wind",
                "item_2": "Lava"
            },
            {
                "item_1": "Wind",
                "item_2": "Eruption"
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
                "item_2": "Tornado"
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
                "item_2": "Hot Spring"
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
                "item_2": "Eruption"
            },
            {
                "item_1": "Earth",
                "item_2": "Energy"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Earth",
                "item_2": "Explosion"
            },
            {
                "item_1": "Earth",
                "item_2": "Lens"
            },
            {
                "item_1": "Earth",
                "item_2": "Burn"
            },
            {
                "item_1": "Earth",
                "item_2": "Hell"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Earth",
                "item_2": "Flame"
            },
            {
                "item_1": "Earth",
                "item_2": "Firework"
            },
            {
                "item_1": "Earth",
                "item_2": "Bubble"
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
                "item_2": "Soil"
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
                "item_2": "Mine"
            },
            {
                "item_1": "Fire",
                "item_2": "Land"
            },
            {
                "item_1": "Fire",
                "item_2": "Atlas"
            },
            {
                "item_1": "Fire",
                "item_2": "River"
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
                "item_1": "Cupid",
                "item_2": "Tornado"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Smoke"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Smoke"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Flying"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Lava"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Smoke"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Rain"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Eruption"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Stone"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Fire Engine",
                "item_2": "Lava"
            },
            {
                "item_1": "Earth",
                "item_2": "Flambé"
            },
            {
                "item_1": "Earth",
                "item_2": "Fireman"
            },
            {
                "item_1": "Earth",
                "item_2": "Fridge"
            },
            {
                "item_1": "Earth",
                "item_2": "Salt Water"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Lava"
            },
            {
                "item_1": "Earth",
                "item_2": "Battery"
            },
            {
                "item_1": "Fire",
                "item_2": "Tremor"
            },
            {
                "item_1": "Fire",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Fire",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Fire",
                "item_2": "Moat"
            },
            {
                "item_1": "Fire",
                "item_2": "Statue"
            },
            {
                "item_1": "Thunder",
                "item_2": "Lava"
            },
            {
                "item_1": "Thunder",
                "item_2": "Earth"
            },
            {
                "item_1": "Sink",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Tutankhamun"
            },
            {
                "item_1": "Steam",
                "item_2": "Lava"
            },
            {
                "item_1": "Steam",
                "item_2": "Beach"
            },
            {
                "item_1": "Steam",
                "item_2": "Mountain"
            },
            {
                "item_1": "Spy",
                "item_2": "Lava"
            },
            {
                "item_1": "Spy",
                "item_2": "Geysir"
            },
            {
                "item_1": "Fire",
                "item_2": "Whirlpool"
            },
            {
                "item_1": "Fire",
                "item_2": "Rock"
            },
            {
                "item_1": "Pine",
                "item_2": "Lava"
            },
            {
                "item_1": "Fire",
                "item_2": "Smoke"
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
                "item_2": "Mist"
            },
            {
                "item_1": "Fire",
                "item_2": "Fog"
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
                "item_1": "Smoke Tsunami",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fridge",
                "item_2": "Smoke"
            },
            {
                "item_1": "Smell",
                "item_2": "Fire"
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
                "item_1": "Wind",
                "item_2": "Earth"
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
                "item_2": "Fever"
            },
            {
                "item_1": "Earth",
                "item_2": "Heat"
            },
            {
                "item_1": "Earth",
                "item_2": "Firewater"
            },
            {
                "item_1": "Lake",
                "item_2": "Flame"
            },
            {
                "item_1": "Ryan",
                "item_2": "Volcano"
            },
            {
                "item_1": "Golem",
                "item_2": "Fire"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Volcano"
            },
            {
                "item_1": "Spy",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Stone"
            },
            {
                "item_1": "Santa Fluoride",
                "item_2": "Lord of the Rings"
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
            },
            {
                "item_1": "Steam",
                "item_2": "Kite"
            },
            {
                "item_1": "Steam",
                "item_2": "Dock"
            },
            {
                "item_1": "Power",
                "item_2": "Lens"
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
                "item_2": "Electricity"
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
                "item_1": "Botticelli",
                "item_2": "Airplane"
            },
            {
                "item_1": "Thunder",
                "item_2": "Sushi"
            },
            {
                "item_1": "Thunder",
                "item_2": "Swamp"
            }
        ]
    },
    "Dragon": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Smoke"
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
                "item_1": "Water",
                "item_2": "Smoke"
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
                "item_2": "Fire Breath"
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
                "item_1": "Cup",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Origami",
                "item_2": "Ash"
            },
            {
                "item_1": "Fire",
                "item_2": "Rainbow Crocodile"
            },
            {
                "item_1": "Fire",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Fire",
                "item_2": "Dragonfish"
            },
            {
                "item_1": "Fire Dragon",
                "item_2": "Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragonfish"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Duck"
            },
            {
                "item_1": "Earth",
                "item_2": "Noah"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Lightning"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Lava"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Dragonfly"
            },
            {
                "item_1": "Thunder",
                "item_2": "Steam"
            },
            {
                "item_1": "Smaug",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Ring"
            },
            {
                "item_1": "Smaug",
                "item_2": "Energy"
            },
            {
                "item_1": "Smaug",
                "item_2": "Fog"
            },
            {
                "item_1": "Smaug",
                "item_2": "Trash"
            },
            {
                "item_1": "Smaug",
                "item_2": "Burger"
            },
            {
                "item_1": "Lake",
                "item_2": "Castle"
            },
            {
                "item_1": "Steam",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Steam",
                "item_2": "Swamp"
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
                "item_1": "Love",
                "item_2": "Sushi"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Coffee"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Cookie"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Toast"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Cheese"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Fireball"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Chip"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Crop"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Omelette"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Wasabi",
                "item_2": "Landing"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Plant"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Steam"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Dune"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Sushi"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Dragon"
            },
            {
                "item_1": "Sake",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Salmon",
                "item_2": "Fire"
            },
            {
                "item_1": "Lake",
                "item_2": "Curtain"
            },
            {
                "item_1": "Wind",
                "item_2": "Goose"
            },
            {
                "item_1": "Vapor",
                "item_2": "Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Dragon Burger"
            },
            {
                "item_1": "Steam",
                "item_2": "Penguin"
            },
            {
                "item_1": "Sashimi",
                "item_2": "Moat"
            },
            {
                "item_1": "Cake",
                "item_2": "Wasabi"
            },
            {
                "item_1": "Fishing Rod",
                "item_2": "Tractor"
            },
            {
                "item_1": "Steam",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Genie",
                "item_2": "Rock"
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
                "item_1": "Rainbow Fish",
                "item_2": "Lake"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire",
                "item_2": "Goldfish Sandwich"
            },
            {
                "item_1": "Spy",
                "item_2": "Dwarf"
            }
        ]
    },
    "undefined": {
        "emoticon": "⬜",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fire",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fire",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Dragon"
            },
            {
                "item_1": "Fire",
                "item_2": "Sushi"
            },
            {
                "item_1": "Fire",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Water",
                "item_2": "Volcano"
            },
            {
                "item_1": "Water",
                "item_2": "Lava"
            },
            {
                "item_1": "Water",
                "item_2": "Engine"
            },
            {
                "item_1": "Water",
                "item_2": "Dragon"
            },
            {
                "item_1": "Water",
                "item_2": "Stone"
            },
            {
                "item_1": "Fire",
                "item_2": "Stone"
            },
            {
                "item_1": "Fire",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Fire",
                "item_2": "Rock"
            },
            {
                "item_1": "Wind",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Volcano"
            },
            {
                "item_1": "Fire",
                "item_2": "Sand"
            },
            {
                "item_1": "Wind",
                "item_2": "Wine"
            },
            {
                "item_1": "Wind",
                "item_2": "Sick"
            },
            {
                "item_1": "Water",
                "item_2": "Curtain"
            },
            {
                "item_1": "Earth",
                "item_2": "Cannon"
            },
            {
                "item_1": "Earth",
                "item_2": "Solar"
            },
            {
                "item_1": "Earth",
                "item_2": "Hot"
            },
            {
                "item_1": "Water",
                "item_2": "Ganges"
            },
            {
                "item_1": "Fire",
                "item_2": "Moon"
            },
            {
                "item_1": "Fire",
                "item_2": "Fluorine"
            },
            {
                "item_1": "Fire",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Water",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Water",
                "item_2": "Chip"
            },
            {
                "item_1": "Venus",
                "item_2": "Pot"
            },
            {
                "item_1": "Venus",
                "item_2": "Splash"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Kiln"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Solar"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Burn"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Lens"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Cannon"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Desert"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Brick"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Crash"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Glass"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Ship"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Dune"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Electricity"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Dust"
            },
            {
                "item_1": "Cupid",
                "item_2": "Eruption"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Lava"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Fish"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Lava"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Volcano"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Marsh"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Rain"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Fish"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Swamp"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Ocean"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Plant"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Steam"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Lake"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Engine"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Captain",
                "item_2": "Ocean"
            },
            {
                "item_1": "Captain",
                "item_2": "Wave"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Earth"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Mirage"
            },
            {
                "item_1": "Surfing",
                "item_2": "Penguin"
            },
            {
                "item_1": "Surfing",
                "item_2": "Bird"
            },
            {
                "item_1": "Firebird",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Firebird",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Groom",
                "item_2": "Rainbow Fish"
            },
            {
                "item_1": "Groom",
                "item_2": "Captain"
            },
            {
                "item_1": "Groom",
                "item_2": "Rainbow Dash"
            },
            {
                "item_1": "Groom",
                "item_2": "Tsuncho"
            },
            {
                "item_1": "Groom",
                "item_2": "Car"
            },
            {
                "item_1": "Groom",
                "item_2": "Heart"
            },
            {
                "item_1": "Groom",
                "item_2": "Sancho Panza"
            },
            {
                "item_1": "Groom",
                "item_2": "Love"
            },
            {
                "item_1": "Groom",
                "item_2": "Cactus"
            },
            {
                "item_1": "Groom",
                "item_2": "Cupid"
            },
            {
                "item_1": "Princess",
                "item_2": "Botticelli"
            },
            {
                "item_1": "Surf Divorce",
                "item_2": "Venus Flytrap"
            },
            {
                "item_1": "Surf Divorce",
                "item_2": "Nymph"
            },
            {
                "item_1": "Surf Divorce",
                "item_2": "Kraken"
            },
            {
                "item_1": "Surf Divorce",
                "item_2": "Monster"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Burnt Cookie"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Grill"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Agni"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Bomb"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Roast"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Pump"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Ganges"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Titanic"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Well"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Emulsion"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fountain"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Tide"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fluorine"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "River"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Taj Mahal"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "World"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Vodka"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Globe"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Money"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Potato"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Curry"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fuel"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Atlas"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Gold"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Farmer"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Basket"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Mine"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Field"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Spice"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Human"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Oil"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Titan"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Paddy"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Continent"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Forest"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Spring"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Treasure"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Parachute"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Cave"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Farm"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Snowman"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Moon"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Pepper"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Life"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Fossil"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Dracula"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Clay"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Dirt"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Rice"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Tractor"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Whale"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Island"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Tree"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Mountain"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Ariel"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Lung"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Warmth"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Soda"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Siren"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Firework"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Cough"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Firewater"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Fireplace"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Pirate"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Aquarium"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Parasail"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Air"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Fire Storm"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Breeze"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Fan"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Telescope"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Bat"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "House"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Sunflower"
            },
            {
                "item_1": "Cup",
                "item_2": "Hangover"
            },
            {
                "item_1": "Cup",
                "item_2": "Snow"
            },
            {
                "item_1": "Cup",
                "item_2": "Sail"
            },
            {
                "item_1": "Cup",
                "item_2": "Firefighter"
            },
            {
                "item_1": "Cup",
                "item_2": "Cure"
            },
            {
                "item_1": "Cup",
                "item_2": "Mouthwash"
            },
            {
                "item_1": "Cup",
                "item_2": "Potion"
            },
            {
                "item_1": "Uranus",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Uranus",
                "item_2": "Medicine"
            },
            {
                "item_1": "Uranus",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Uranus",
                "item_2": "Tea"
            },
            {
                "item_1": "Uranus",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Uranus",
                "item_2": "Sick"
            },
            {
                "item_1": "Uranus",
                "item_2": "Devil"
            },
            {
                "item_1": "Uranus",
                "item_2": "Hell"
            },
            {
                "item_1": "Uranus",
                "item_2": "Heat"
            },
            {
                "item_1": "Uranus",
                "item_2": "Fever"
            },
            {
                "item_1": "Uranus",
                "item_2": "Hot"
            },
            {
                "item_1": "Uranus",
                "item_2": "Chef"
            },
            {
                "item_1": "Uranus",
                "item_2": "Flu"
            },
            {
                "item_1": "Uranus",
                "item_2": "Chili"
            },
            {
                "item_1": "Uranus",
                "item_2": "Cook"
            },
            {
                "item_1": "Uranus",
                "item_2": "Virus"
            },
            {
                "item_1": "Uranus",
                "item_2": "Lily"
            },
            {
                "item_1": "Uranus",
                "item_2": "Soup"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Kiln"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Solar"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Burn"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Lens"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Cannon"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Vampire"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Desert"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Brick"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Sun"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Explosion"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Toothbrush",
                "item_2": "Crash"
            },
            {
                "item_1": "Dentist",
                "item_2": "Energy"
            },
            {
                "item_1": "Kryptonite",
                "item_2": "Wine"
            },
            {
                "item_1": "Buddha",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Kite"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Windmill"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Eruption"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Tornado"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Mist"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Storm"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Rock"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Stone"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Sushi"
            },
            {
                "item_1": "Whine",
                "item_2": "Dragon"
            },
            {
                "item_1": "Whine",
                "item_2": "Engine"
            },
            {
                "item_1": "Whine",
                "item_2": "Smoke"
            },
            {
                "item_1": "Whine",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Whine",
                "item_2": "Marsh"
            },
            {
                "item_1": "Whine",
                "item_2": "Fish"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Windmill"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Eruption"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Tornado"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Mist"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Storm"
            },
            {
                "item_1": "Kite Fighter",
                "item_2": "Rock"
            },
            {
                "item_1": "Goliath",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Cloud"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Ocean"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Wave"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Lake"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Earth"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Wine"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Dune"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Airplane"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Seed"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Sand"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Kite"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Mist"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Storm"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Rock"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Stone"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Sushi"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Dragon"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Lightning"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Engine"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Rain"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Cloud"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Plant"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Wave"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Steam"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Lake"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Earth"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Wind"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Fire"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Water"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Mud"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Energy"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Wine"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Dune"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Electricity"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Airplane"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Seed"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Sand"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Windmill"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Mist"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Rock"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Engine"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Smoke"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Volcano"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Marsh"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Rain"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Fish"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Swamp"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Cloud"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Lake"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Fire"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Water"
            },
            {
                "item_1": "Train",
                "item_2": "Wind"
            },
            {
                "item_1": "Train",
                "item_2": "Fire"
            },
            {
                "item_1": "Train",
                "item_2": "Water"
            },
            {
                "item_1": "Sake",
                "item_2": "Wind"
            },
            {
                "item_1": "Sake",
                "item_2": "Fire"
            },
            {
                "item_1": "Sake",
                "item_2": "Water"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Oasis"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Bird"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Beach"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Energy"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Wine"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Flying"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Airplane"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Dust"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Kite"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Eruption"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Tornado"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Mist"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Storm"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Rock"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Stone"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Lightning"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Wave"
            },
            {
                "item_1": "Saki",
                "item_2": "Wind"
            },
            {
                "item_1": "Saki",
                "item_2": "Water"
            },
            {
                "item_1": "Salmon",
                "item_2": "Lake"
            },
            {
                "item_1": "Alligator",
                "item_2": "Engine"
            },
            {
                "item_1": "Alligator",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Drunk",
                "item_2": "Vacation"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Moonshine"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Swamp Tsunami"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Swamp Thing"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Volcanicus"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Optimus Prime"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Transformer"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Robot"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Mecha"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Kite Fighter"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Mudkip"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Sand Buddha"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Superman"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Whine"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Angry Birds Star Wars"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Mudslide"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Buddha"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Kryptonite"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Dentist"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Avalanche"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Lotus"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Pluto"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Hangry"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Snowflake"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Uranus"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Starfish"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Fluorite Venus"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Wasabi"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Cappuccino"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Sea Urchin"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Surf Venus"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Honey"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Aphrodite"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Prick"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Surf Divorce"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Narwhal"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Groom"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Divorce"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Marriage"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Wet"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Bride"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Wedding"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Surfer"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Tux"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Hillbilly",
                "item_2": "Captain"
            },
            {
                "item_1": "Ice Fishing",
                "item_2": "Tsuncho"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Heart"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Saguaro"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Love"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Cupid"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Botticelli"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Fairy"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Venus"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Carnivorous Plant"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Dryad"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Octopus"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Venus Flytrap"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Nymph"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Kraken"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Monster"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Coffee"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Burnt Cookie"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Cookie"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Toast"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Cheese"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Fireball"
            },
            {
                "item_1": "Lake",
                "item_2": "Telescope"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Midas"
            },
            {
                "item_1": "Lake",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Crop"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Prometheus"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Spicy"
            },
            {
                "item_1": "Lake",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Bomb"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Pump"
            },
            {
                "item_1": "Lake",
                "item_2": "Parasail"
            },
            {
                "item_1": "Rainbowfish",
                "item_2": "Ganges"
            },
            {
                "item_1": "Lake",
                "item_2": "Pirate"
            },
            {
                "item_1": "Rainbowfish",
                "item_2": "Titanic"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Emulsion"
            },
            {
                "item_1": "Lake",
                "item_2": "Siren"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Tide"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Taj Mahal"
            },
            {
                "item_1": "Lake",
                "item_2": "Bubble"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Vodka"
            },
            {
                "item_1": "Lake",
                "item_2": "Dirt"
            },
            {
                "item_1": "Ganga",
                "item_2": "Fuel"
            },
            {
                "item_1": "Lake",
                "item_2": "Clay"
            },
            {
                "item_1": "Crocodile Dundee",
                "item_2": "Field"
            },
            {
                "item_1": "Crocodile Dundee",
                "item_2": "Spice"
            },
            {
                "item_1": "Lake",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Truck",
                "item_2": "Egg"
            },
            {
                "item_1": "Lake",
                "item_2": "Parachute"
            },
            {
                "item_1": "French Fries",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Lake",
                "item_2": "Paddy"
            },
            {
                "item_1": "Duck",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Lake",
                "item_2": "Land"
            },
            {
                "item_1": "Port",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Lake",
                "item_2": "Globe"
            },
            {
                "item_1": "Lake",
                "item_2": "Taj Mahal"
            },
            {
                "item_1": "Duckling",
                "item_2": "Lung"
            },
            {
                "item_1": "Oil Spill",
                "item_2": "Flame"
            },
            {
                "item_1": "Captain Planet",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Lake",
                "item_2": "Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Botticelli"
            },
            {
                "item_1": "Charcoal",
                "item_2": "House"
            },
            {
                "item_1": "Lake",
                "item_2": "Sancho Panza"
            },
            {
                "item_1": "Lake",
                "item_2": "Car"
            },
            {
                "item_1": "Swan Lake",
                "item_2": "Balloon"
            },
            {
                "item_1": "Lake",
                "item_2": "Captain"
            },
            {
                "item_1": "Latte",
                "item_2": "Mouthwash"
            },
            {
                "item_1": "Latte",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Lake",
                "item_2": "Divorce"
            },
            {
                "item_1": "Latte",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Lake",
                "item_2": "Surf Venus"
            },
            {
                "item_1": "Rum",
                "item_2": "Chili"
            },
            {
                "item_1": "Lake",
                "item_2": "Cappuccino"
            },
            {
                "item_1": "Rum",
                "item_2": "Virus"
            },
            {
                "item_1": "Lake",
                "item_2": "Bee"
            },
            {
                "item_1": "Rum",
                "item_2": "Soup"
            },
            {
                "item_1": "Lake",
                "item_2": "Starfish"
            },
            {
                "item_1": "Rum",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Puddle"
            },
            {
                "item_1": "Lake",
                "item_2": "Angry Birds"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Lake",
                "item_2": "Mudslide"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Solar"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Lens"
            },
            {
                "item_1": "Lake",
                "item_2": "Sand Buddha"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Vampire"
            },
            {
                "item_1": "Lake",
                "item_2": "Kite Fighter"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Brick"
            },
            {
                "item_1": "Lake",
                "item_2": "Goliath"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Lake",
                "item_2": "Robot"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Glass"
            },
            {
                "item_1": "Lake",
                "item_2": "Optimus Prime"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Ash"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Mirage"
            },
            {
                "item_1": "Lake",
                "item_2": "Swamp Wine"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Ship"
            },
            {
                "item_1": "Lake",
                "item_2": "Moonshine"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Sushi Tsunami"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Bird"
            },
            {
                "item_1": "Lake",
                "item_2": "Train"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Energy"
            },
            {
                "item_1": "Lake",
                "item_2": "Fishing"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Wine"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Lake",
                "item_2": "Drunk"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Flying"
            },
            {
                "item_1": "Lake",
                "item_2": "Rainbow Alligator"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Airplane"
            },
            {
                "item_1": "Lake",
                "item_2": "Rainbow Crocodile"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Dust"
            },
            {
                "item_1": "Lake",
                "item_2": "Ice Fishing"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Kite"
            },
            {
                "item_1": "Lake",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Eruption"
            },
            {
                "item_1": "Lake",
                "item_2": "Redneck"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Lake",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Lake",
                "item_2": "Crocodile Dundee"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Storm"
            },
            {
                "item_1": "Lake",
                "item_2": "French Fries"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Lake",
                "item_2": "Petrol"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Lake",
                "item_2": "Sickness"
            },
            {
                "item_1": "Bungee Jumper",
                "item_2": "Swamp"
            },
            {
                "item_1": "Taco",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Ice Fishing"
            },
            {
                "item_1": "Water",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "King",
                "item_2": "Wine"
            },
            {
                "item_1": "King",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Soggy Fries",
                "item_2": "Airplane"
            },
            {
                "item_1": "Water",
                "item_2": "Skydiver"
            },
            {
                "item_1": "Soggy Fries",
                "item_2": "Dust"
            },
            {
                "item_1": "Soggy Fries",
                "item_2": "Kite"
            },
            {
                "item_1": "Water",
                "item_2": "Diamond"
            },
            {
                "item_1": "Soggy Fries",
                "item_2": "Eruption"
            },
            {
                "item_1": "Soggy Kite",
                "item_2": "Tornado"
            },
            {
                "item_1": "Water",
                "item_2": "Martini"
            },
            {
                "item_1": "Soggy Kite",
                "item_2": "Mist"
            },
            {
                "item_1": "Water",
                "item_2": "Salsa"
            },
            {
                "item_1": "Soggy Kite",
                "item_2": "Rock"
            },
            {
                "item_1": "Water",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Soggy Kite",
                "item_2": "Stone"
            },
            {
                "item_1": "Water",
                "item_2": "Rum"
            },
            {
                "item_1": "Origami",
                "item_2": "Sushi"
            },
            {
                "item_1": "Water",
                "item_2": "Hangover Cure"
            },
            {
                "item_1": "Water",
                "item_2": "Starbucks"
            },
            {
                "item_1": "Grog",
                "item_2": "Smoke"
            },
            {
                "item_1": "Grog",
                "item_2": "Ocean"
            },
            {
                "item_1": "Grog",
                "item_2": "Wave"
            },
            {
                "item_1": "Grog",
                "item_2": "Lake"
            },
            {
                "item_1": "Grog",
                "item_2": "Wind"
            },
            {
                "item_1": "Fire",
                "item_2": "Rainbow Alligator"
            },
            {
                "item_1": "Fire",
                "item_2": "Skydiver"
            },
            {
                "item_1": "Fire",
                "item_2": "Diamond"
            },
            {
                "item_1": "Flying Sandwich",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Flying Fish Sandwich",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Fire",
                "item_2": "Tacocat"
            },
            {
                "item_1": "Flying Fish Sandwich",
                "item_2": "Storm"
            },
            {
                "item_1": "Flying Fish Sandwich",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Dragon"
            },
            {
                "item_1": "Fire",
                "item_2": "Origami"
            },
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Paper Boat"
            },
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fire",
                "item_2": "Noah’s Ark"
            },
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Fire",
                "item_2": "Flood"
            },
            {
                "item_1": "Dragonfish",
                "item_2": "Fish"
            },
            {
                "item_1": "Dragonfish",
                "item_2": "Ocean"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Fish Sandwich"
            },
            {
                "item_1": "Fire Duck",
                "item_2": "Earth"
            },
            {
                "item_1": "Soggy",
                "item_2": "Rain"
            },
            {
                "item_1": "Soggy",
                "item_2": "Swamp"
            },
            {
                "item_1": "Fire",
                "item_2": "Noah"
            },
            {
                "item_1": "Noah",
                "item_2": "Water"
            },
            {
                "item_1": "Fire Engine",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Wind",
                "item_2": "Rainbow Crocodile"
            },
            {
                "item_1": "Fire Engine",
                "item_2": "Pot"
            },
            {
                "item_1": "Wind",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "Wind",
                "item_2": "Redneck"
            },
            {
                "item_1": "Wind",
                "item_2": "Water Ski"
            },
            {
                "item_1": "Wind",
                "item_2": "Crocodile Dundee"
            },
            {
                "item_1": "Wind",
                "item_2": "Petrol"
            },
            {
                "item_1": "Wind",
                "item_2": "Skydiver"
            },
            {
                "item_1": "Wind",
                "item_2": "Duckling"
            },
            {
                "item_1": "Ambulance",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Ambulance",
                "item_2": "Glass"
            },
            {
                "item_1": "Wind",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Wind",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Goose",
                "item_2": "Ice"
            },
            {
                "item_1": "Dirty Martini",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Clean Martini",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Clean Martini",
                "item_2": "Dune"
            },
            {
                "item_1": "Chills",
                "item_2": "Electricity"
            },
            {
                "item_1": "Arrakis",
                "item_2": "Airplane"
            },
            {
                "item_1": "Wind",
                "item_2": "Origami"
            },
            {
                "item_1": "Arrakis",
                "item_2": "Dust"
            },
            {
                "item_1": "Wind",
                "item_2": "Paper Boat"
            },
            {
                "item_1": "Arrakis",
                "item_2": "Kite"
            },
            {
                "item_1": "Wind",
                "item_2": "Noah’s Ark"
            },
            {
                "item_1": "Arrakis",
                "item_2": "Eruption"
            },
            {
                "item_1": "Wind",
                "item_2": "Flood"
            },
            {
                "item_1": "Arrakis",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Ark"
            },
            {
                "item_1": "Flying Saucer",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Flying Saucer",
                "item_2": "Rock"
            },
            {
                "item_1": "Wind",
                "item_2": "Fish Sandwich"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying Sandwich"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying Fish Sandwich"
            },
            {
                "item_1": "Wind",
                "item_2": "Goldfish Sandwich"
            },
            {
                "item_1": "Wind",
                "item_2": "Sea Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Fire Engine"
            },
            {
                "item_1": "Fridge",
                "item_2": "Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Shattered"
            },
            {
                "item_1": "Wind",
                "item_2": "Chills"
            },
            {
                "item_1": "Fridge",
                "item_2": "Lake"
            },
            {
                "item_1": "Gosling",
                "item_2": "Rain"
            },
            {
                "item_1": "Water",
                "item_2": "Chills"
            },
            {
                "item_1": "Gosling",
                "item_2": "Steam"
            },
            {
                "item_1": "Fire",
                "item_2": "Chills"
            },
            {
                "item_1": "Shower",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Bath",
                "item_2": "Wind"
            },
            {
                "item_1": "Bath",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Aquaman"
            },
            {
                "item_1": "Brine",
                "item_2": "Plant"
            },
            {
                "item_1": "Wind",
                "item_2": "Sweat"
            },
            {
                "item_1": "Sodium",
                "item_2": "Earth"
            },
            {
                "item_1": "Sodium",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Rainbow Starfish"
            },
            {
                "item_1": "Pickle",
                "item_2": "Fire Breath"
            },
            {
                "item_1": "Earth",
                "item_2": "Captain Crocodile"
            },
            {
                "item_1": "Pickle",
                "item_2": "Mouthwash"
            },
            {
                "item_1": "Earth",
                "item_2": "Ganga"
            },
            {
                "item_1": "Pickle",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Earth",
                "item_2": "Truck"
            },
            {
                "item_1": "Pickle",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Earth",
                "item_2": "Dock"
            },
            {
                "item_1": "Pickle",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Earth",
                "item_2": "Werewolf"
            },
            {
                "item_1": "Pickle",
                "item_2": "Devil"
            },
            {
                "item_1": "Earth",
                "item_2": "Duck"
            },
            {
                "item_1": "Earth",
                "item_2": "Oil Spill"
            },
            {
                "item_1": "Dill",
                "item_2": "Flower"
            },
            {
                "item_1": "Dill",
                "item_2": "Pond"
            },
            {
                "item_1": "Stink",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Sailor Moon",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Earth",
                "item_2": "Salad"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Solar"
            },
            {
                "item_1": "Earth",
                "item_2": "Pyramid"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Lens"
            },
            {
                "item_1": "Earth",
                "item_2": "Soggy Fries"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Vampire"
            },
            {
                "item_1": "Earth",
                "item_2": "Paper"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Brick"
            },
            {
                "item_1": "Earth",
                "item_2": "Grog"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Earth",
                "item_2": "McDonalds"
            },
            {
                "item_1": "Tremor",
                "item_2": "Penguin"
            },
            {
                "item_1": "Recycle",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Earth",
                "item_2": "Fire Dragon"
            },
            {
                "item_1": "Burger",
                "item_2": "Wine"
            },
            {
                "item_1": "Burger",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Burger",
                "item_2": "Airplane"
            },
            {
                "item_1": "Burger",
                "item_2": "Dust"
            },
            {
                "item_1": "Burger",
                "item_2": "Kite"
            },
            {
                "item_1": "Burger",
                "item_2": "Eruption"
            },
            {
                "item_1": "Burger",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Earth",
                "item_2": "Hail"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Rock"
            },
            {
                "item_1": "Earth",
                "item_2": "Sauna"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Lightning"
            },
            {
                "item_1": "Battery",
                "item_2": "Smoke"
            },
            {
                "item_1": "Vapor",
                "item_2": "Marsh"
            },
            {
                "item_1": "Earth",
                "item_2": "Burger"
            },
            {
                "item_1": "Landfill",
                "item_2": "Fire"
            },
            {
                "item_1": "Grass",
                "item_2": "Dragon"
            },
            {
                "item_1": "Water",
                "item_2": "Sauron"
            },
            {
                "item_1": "Coral",
                "item_2": "Mist"
            },
            {
                "item_1": "Fire",
                "item_2": "Hydrogen"
            },
            {
                "item_1": "Coral",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Reef",
                "item_2": "Smoke"
            },
            {
                "item_1": "Fire",
                "item_2": "Mordor"
            },
            {
                "item_1": "Fire",
                "item_2": "Sauron"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Steam"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Earth"
            },
            {
                "item_1": "Wind",
                "item_2": "Hydrogen"
            },
            {
                "item_1": "Wind",
                "item_2": "Stink"
            },
            {
                "item_1": "Golem",
                "item_2": "Storm"
            },
            {
                "item_1": "Statue",
                "item_2": "Rock"
            },
            {
                "item_1": "Fart",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Wind",
                "item_2": "Landfill"
            },
            {
                "item_1": "Wind",
                "item_2": "Sauron"
            },
            {
                "item_1": "Wind",
                "item_2": "Balrog"
            },
            {
                "item_1": "Wind",
                "item_2": "Thunder"
            },
            {
                "item_1": "Wind",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Fartfish",
                "item_2": "Earth"
            },
            {
                "item_1": "Water",
                "item_2": "Thunder"
            },
            {
                "item_1": "Fartfish",
                "item_2": "Fire"
            },
            {
                "item_1": "Water",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Earth"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Coral"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Ocean"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Wave"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Water"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Lake"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Wind"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Elixir"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Tea"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Hell"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Fever"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Chef"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Chili"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Virus"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Soup"
            },
            {
                "item_1": "Lake",
                "item_2": "Goldfish Sandwich"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Pot"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Kiln"
            },
            {
                "item_1": "Lake",
                "item_2": "Shattered"
            },
            {
                "item_1": "Lake",
                "item_2": "Chills"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Desert"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Roast Duck"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Crash"
            },
            {
                "item_1": "Gollum",
                "item_2": "Salt"
            },
            {
                "item_1": "Gollum",
                "item_2": "Ice"
            },
            {
                "item_1": "Lake",
                "item_2": "Oasis"
            },
            {
                "item_1": "Smaug",
                "item_2": "Sailor"
            },
            {
                "item_1": "Lake",
                "item_2": "Sailor Cannon"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying"
            },
            {
                "item_1": "Smaug",
                "item_2": "Recycle"
            },
            {
                "item_1": "Smaug",
                "item_2": "Battery"
            },
            {
                "item_1": "Smaug",
                "item_2": "Flying Burger"
            },
            {
                "item_1": "Lake",
                "item_2": "Cucumber"
            },
            {
                "item_1": "Lake",
                "item_2": "Mordor"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Sauron"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Lake",
                "item_2": "Marsh"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Rain"
            },
            {
                "item_1": "Lake",
                "item_2": "Fish"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Egypt"
            },
            {
                "item_1": "Lake",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Smeagol"
            },
            {
                "item_1": "Lake",
                "item_2": "Gollum"
            },
            {
                "item_1": "Lake",
                "item_2": "Smaug"
            },
            {
                "item_1": "Fire",
                "item_2": "Rivendell"
            },
            {
                "item_1": "Wind",
                "item_2": "Lotr"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragon Burger"
            },
            {
                "item_1": "Wind",
                "item_2": "Hex"
            },
            {
                "item_1": "Wizard",
                "item_2": "Star"
            },
            {
                "item_1": "Ghost",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Drain",
                "item_2": "Ghost"
            },
            {
                "item_1": "Sink",
                "item_2": "Water"
            },
            {
                "item_1": "Fire",
                "item_2": "Drain"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Plant"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Steam"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Wind"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Hexagon"
            },
            {
                "item_1": "Plug",
                "item_2": "Water"
            },
            {
                "item_1": "Steam",
                "item_2": "Sink"
            },
            {
                "item_1": "Steam",
                "item_2": "Hex"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Mist"
            },
            {
                "item_1": "Steam",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Sphinx"
            },
            {
                "item_1": "Geothermal",
                "item_2": "Thunder"
            },
            {
                "item_1": "Sashimi",
                "item_2": "Balrog"
            },
            {
                "item_1": "Steam",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Steam",
                "item_2": "Desert"
            },
            {
                "item_1": "Steam",
                "item_2": "Cucumber"
            },
            {
                "item_1": "Broom",
                "item_2": "Kiln"
            },
            {
                "item_1": "Broom",
                "item_2": "Pottery"
            },
            {
                "item_1": "Broom",
                "item_2": "Sailor Cannon"
            },
            {
                "item_1": "Steam",
                "item_2": "Skunk"
            },
            {
                "item_1": "Steam",
                "item_2": "Microscope"
            },
            {
                "item_1": "Broom",
                "item_2": "Vase"
            },
            {
                "item_1": "Broom",
                "item_2": "Sailor Moon"
            },
            {
                "item_1": "Broom",
                "item_2": "Stink"
            },
            {
                "item_1": "Steam",
                "item_2": "Dill"
            },
            {
                "item_1": "Broom",
                "item_2": "Soup"
            },
            {
                "item_1": "Steam",
                "item_2": "Sodium"
            },
            {
                "item_1": "Steam",
                "item_2": "Brine"
            },
            {
                "item_1": "Steam",
                "item_2": "Fever"
            },
            {
                "item_1": "Broom",
                "item_2": "Devil"
            },
            {
                "item_1": "Steam",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Steamfish",
                "item_2": "Flying Squirrel"
            },
            {
                "item_1": "Steamfish",
                "item_2": "Alchemy"
            },
            {
                "item_1": "Steam",
                "item_2": "Dirty Martini"
            },
            {
                "item_1": "Steam",
                "item_2": "House"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Fire Engine"
            },
            {
                "item_1": "Steam",
                "item_2": "Paramecium"
            },
            {
                "item_1": "Steam",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Steam",
                "item_2": "Goldfish Sandwich"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Air"
            },
            {
                "item_1": "Steam",
                "item_2": "Flying Fish Sandwich"
            },
            {
                "item_1": "Steam",
                "item_2": "Burrito"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Flying Sandwich"
            },
            {
                "item_1": "Steam",
                "item_2": "Hanglider"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Parasail"
            },
            {
                "item_1": "Steam",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Steam",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Itch",
                "item_2": "Roast Duck"
            },
            {
                "item_1": "Itch",
                "item_2": "Firewater"
            },
            {
                "item_1": "Itch",
                "item_2": "Ark"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Ice Cream"
            },
            {
                "item_1": "Steam",
                "item_2": "Ariel"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Bubble"
            },
            {
                "item_1": "Steam",
                "item_2": "Mountain"
            },
            {
                "item_1": "Steam",
                "item_2": "Paper"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Island"
            },
            {
                "item_1": "Steam",
                "item_2": "Whale"
            },
            {
                "item_1": "Steam",
                "item_2": "UFO"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "King"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Prince"
            },
            {
                "item_1": "Steam",
                "item_2": "Tacocat"
            },
            {
                "item_1": "Periscope",
                "item_2": "Frog"
            },
            {
                "item_1": "Periscope",
                "item_2": "Dracula"
            },
            {
                "item_1": "Periscope",
                "item_2": "Pepper"
            },
            {
                "item_1": "Periscope",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Steam",
                "item_2": "Teapot"
            },
            {
                "item_1": "Steam",
                "item_2": "Moon"
            },
            {
                "item_1": "Periscope",
                "item_2": "Snowman"
            },
            {
                "item_1": "Periscope",
                "item_2": "Farm"
            },
            {
                "item_1": "Periscope",
                "item_2": "Latte"
            },
            {
                "item_1": "Steam",
                "item_2": "Parachute"
            },
            {
                "item_1": "Periscope",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Cocktail"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Sickness"
            },
            {
                "item_1": "Steam",
                "item_2": "Swan"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Titan"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Egg"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Martini"
            },
            {
                "item_1": "Steam",
                "item_2": "Disease"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Duckling"
            },
            {
                "item_1": "Steam",
                "item_2": "Teacup"
            },
            {
                "item_1": "Steam",
                "item_2": "Atlas"
            },
            {
                "item_1": "Paramedic",
                "item_2": "French Fries"
            },
            {
                "item_1": "Peking Duck",
                "item_2": "Truck"
            },
            {
                "item_1": "Peking Duck",
                "item_2": "Globe"
            },
            {
                "item_1": "Scratch",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "Scratch",
                "item_2": "Rainbow Starfish"
            },
            {
                "item_1": "Steam",
                "item_2": "Fountain"
            },
            {
                "item_1": "Scratch",
                "item_2": "Hillbilly"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow Crocodile"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow Trout"
            },
            {
                "item_1": "Steam",
                "item_2": "Titanic"
            },
            {
                "item_1": "Scratch",
                "item_2": "Fishing Pole"
            },
            {
                "item_1": "Scratch",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Steam",
                "item_2": "Milk"
            },
            {
                "item_1": "Steam",
                "item_2": "Pump"
            },
            {
                "item_1": "Scratch",
                "item_2": "Roast"
            },
            {
                "item_1": "Steam",
                "item_2": "Bomb"
            },
            {
                "item_1": "Scratch",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Steam",
                "item_2": "Spicy"
            },
            {
                "item_1": "Steam",
                "item_2": "Barbecue"
            },
            {
                "item_1": "Scratch",
                "item_2": "Crop"
            },
            {
                "item_1": "Scratch",
                "item_2": "Midas"
            },
            {
                "item_1": "Steam",
                "item_2": "Agni"
            },
            {
                "item_1": "Steam",
                "item_2": "Burnt Cookie"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Goliath"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Nessie"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Mudkip"
            },
            {
                "item_1": "Steam",
                "item_2": "Monster"
            },
            {
                "item_1": "Steam",
                "item_2": "Kraken"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Angry Birds Star Wars"
            },
            {
                "item_1": "Steam",
                "item_2": "Octopus"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Buddha"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Carnivorous Plant"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Dentist"
            },
            {
                "item_1": "Steam",
                "item_2": "Angry Birds"
            },
            {
                "item_1": "Steam",
                "item_2": "Venus Fly Trap"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Lotus"
            },
            {
                "item_1": "Steam",
                "item_2": "Pluto"
            },
            {
                "item_1": "Steam",
                "item_2": "Toothbrush"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Sancho Panza"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Heart"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Car"
            },
            {
                "item_1": "Steam",
                "item_2": "Surf Venus"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Honey"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Steam",
                "item_2": "Aphrodite"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Surfer"
            },
            {
                "item_1": "Steam",
                "item_2": "Bride"
            },
            {
                "item_1": "Steam",
                "item_2": "Wet"
            },
            {
                "item_1": "Steam",
                "item_2": "Groom"
            },
            {
                "item_1": "Steam",
                "item_2": "Groom"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Wedding"
            },
            {
                "item_1": "Cake",
                "item_2": "Starfish"
            },
            {
                "item_1": "Steamroller",
                "item_2": "Pollen"
            },
            {
                "item_1": "Soggy Bread",
                "item_2": "Heart"
            },
            {
                "item_1": "Steam",
                "item_2": "Pluto"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Avalanche"
            },
            {
                "item_1": "Steam",
                "item_2": "Love"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Kryptonite"
            },
            {
                "item_1": "Steam",
                "item_2": "Cupid"
            },
            {
                "item_1": "Steam",
                "item_2": "Botticelli"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Angry Birds Star Wars"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Fairy"
            },
            {
                "item_1": "Steam",
                "item_2": "Venus"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Kite Fighter"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Venus Flytrap"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Mecha"
            },
            {
                "item_1": "Steam",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Transformer"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Optimus Prime"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Soggy Toast"
            },
            {
                "item_1": "Steam",
                "item_2": "Swamp Thing"
            },
            {
                "item_1": "Steam",
                "item_2": "Coffee"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Smoke Tsunami"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Cookie"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Grill"
            },
            {
                "item_1": "Chopstick",
                "item_2": "Agni"
            },
            {
                "item_1": "Steam",
                "item_2": "Fishing"
            },
            {
                "item_1": "Steam",
                "item_2": "Crocodile"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow Starfish"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "Steam",
                "item_2": "Pump"
            },
            {
                "item_1": "Birthday",
                "item_2": "Redneck"
            },
            {
                "item_1": "Birthday",
                "item_2": "Ganges"
            },
            {
                "item_1": "Steam",
                "item_2": "Ganga"
            },
            {
                "item_1": "Birthday",
                "item_2": "Crocodile Dundee"
            },
            {
                "item_1": "Steam",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Steam",
                "item_2": "Skydiver"
            },
            {
                "item_1": "Hay",
                "item_2": "Duck"
            },
            {
                "item_1": "French Toast",
                "item_2": "Diamond"
            },
            {
                "item_1": "French Toast",
                "item_2": "World"
            },
            {
                "item_1": "Steam",
                "item_2": "Disease"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Globe"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Swan"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Cocktail"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Atlas"
            },
            {
                "item_1": "Steam",
                "item_2": "Land"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Farmer"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Basket"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Mine"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Spice"
            },
            {
                "item_1": "Steam",
                "item_2": "Bungee Jumper"
            },
            {
                "item_1": "Steam",
                "item_2": "Oil"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Ballet"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Continent"
            },
            {
                "item_1": "Steam",
                "item_2": "Shipwreck"
            },
            {
                "item_1": "Steam",
                "item_2": "Treasure"
            },
            {
                "item_1": "Steam",
                "item_2": "Prince"
            },
            {
                "item_1": "Steam",
                "item_2": "King"
            },
            {
                "item_1": "Steam",
                "item_2": "Pharaoh"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Snowman"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "UFO"
            },
            {
                "item_1": "Steam",
                "item_2": "Teapot"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Life"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Roast Duck"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Landing"
            },
            {
                "item_1": "Fishing Rod",
                "item_2": "Fish Sandwich"
            },
            {
                "item_1": "Fishing Rod",
                "item_2": "Rice"
            },
            {
                "item_1": "Fishing Rod",
                "item_2": "Whale"
            },
            {
                "item_1": "Steam",
                "item_2": "Island"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Soggy"
            },
            {
                "item_1": "Steam",
                "item_2": "Ambulance"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Goose"
            },
            {
                "item_1": "Steam",
                "item_2": "Dirty Martini"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Shattered"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Firework"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Flame"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Chills"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Pirate"
            },
            {
                "item_1": "Steam",
                "item_2": "Pop"
            },
            {
                "item_1": "Steam Locomotive",
                "item_2": "Shower"
            },
            {
                "item_1": "Steam Locomotive",
                "item_2": "Sailboat"
            },
            {
                "item_1": "Steam",
                "item_2": "Bath"
            },
            {
                "item_1": "Steam",
                "item_2": "Sauna"
            },
            {
                "item_1": "Steam",
                "item_2": "Breeze"
            },
            {
                "item_1": "Steam",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Steam",
                "item_2": "Brine"
            },
            {
                "item_1": "Steam Locomotive",
                "item_2": "Salt Water"
            },
            {
                "item_1": "Jonah",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Jonah",
                "item_2": "Angel"
            },
            {
                "item_1": "Steam",
                "item_2": "Skunk"
            },
            {
                "item_1": "Jonah",
                "item_2": "Tremor"
            },
            {
                "item_1": "Steam",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Captain Hook",
                "item_2": "Cow"
            },
            {
                "item_1": "Captain Hook",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Steam",
                "item_2": "Sick"
            },
            {
                "item_1": "Perfume",
                "item_2": "Hell"
            },
            {
                "item_1": "Steam",
                "item_2": "Heat"
            },
            {
                "item_1": "Perfume",
                "item_2": "Golem"
            },
            {
                "item_1": "Power",
                "item_2": "Lotr"
            },
            {
                "item_1": "Power",
                "item_2": "Dragon Burger"
            },
            {
                "item_1": "Steam",
                "item_2": "Rivendell"
            },
            {
                "item_1": "Steam",
                "item_2": "Burn"
            },
            {
                "item_1": "Power",
                "item_2": "Witch"
            },
            {
                "item_1": "SteamPunk",
                "item_2": "Gandalf"
            },
            {
                "item_1": "Gimli",
                "item_2": "Sun"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Sink"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Glass"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Ash"
            },
            {
                "item_1": "Steam",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Steam",
                "item_2": "Socket"
            },
            {
                "item_1": "Steam",
                "item_2": "Lego"
            },
            {
                "item_1": "Steam",
                "item_2": "Time"
            },
            {
                "item_1": "Steam",
                "item_2": "Whirlpool"
            },
            {
                "item_1": "Steam",
                "item_2": "Pipe"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Sashimi"
            },
            {
                "item_1": "Steam",
                "item_2": "Energy"
            },
            {
                "item_1": "Steam",
                "item_2": "Wine"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Itch"
            },
            {
                "item_1": "Steam",
                "item_2": "Time Machine"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Flying"
            },
            {
                "item_1": "Steam",
                "item_2": "Chopstick"
            },
            {
                "item_1": "Steam",
                "item_2": "Mecha Mudkip"
            },
            {
                "item_1": "Steam",
                "item_2": "France"
            },
            {
                "item_1": "Steamgandalf",
                "item_2": "Steam Locomotive"
            },
            {
                "item_1": "Steam",
                "item_2": "Smoke"
            },
            {
                "item_1": "Steamgandalf",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Steam",
                "item_2": "Marsh"
            },
            {
                "item_1": "Steamgandalf",
                "item_2": "Perfume"
            },
            {
                "item_1": "Steam",
                "item_2": "Captain Fluoride"
            },
            {
                "item_1": "Statue of Liberty",
                "item_2": "Cloud"
            },
            {
                "item_1": "Steam",
                "item_2": "Fishbowl Gandalf"
            },
            {
                "item_1": "Jet",
                "item_2": "Lord of the Rings"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Glass"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Submarine"
            },
            {
                "item_1": "Water",
                "item_2": "Periscope"
            },
            {
                "item_1": "Water",
                "item_2": "Captain Periscope"
            },
            {
                "item_1": "Water",
                "item_2": "China"
            },
            {
                "item_1": "007",
                "item_2": "Steamroller"
            },
            {
                "item_1": "Water",
                "item_2": "Captain Mudkip"
            },
            {
                "item_1": "007",
                "item_2": "Kelp"
            },
            {
                "item_1": "Water",
                "item_2": "Chopstick"
            },
            {
                "item_1": "007",
                "item_2": "Hay"
            },
            {
                "item_1": "007",
                "item_2": "Eruption"
            },
            {
                "item_1": "007",
                "item_2": "Mecha Mudkip"
            },
            {
                "item_1": "007",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Candle"
            },
            {
                "item_1": "007",
                "item_2": "Sleigh"
            },
            {
                "item_1": "007",
                "item_2": "Storm"
            },
            {
                "item_1": "007",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Water",
                "item_2": "Stone"
            },
            {
                "item_1": "007",
                "item_2": "Christmas"
            },
            {
                "item_1": "Water",
                "item_2": "Santa"
            },
            {
                "item_1": "Spy",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Spy",
                "item_2": "Liberty Tree"
            },
            {
                "item_1": "Spy",
                "item_2": "Wave"
            },
            {
                "item_1": "Paul Revere",
                "item_2": "007"
            },
            {
                "item_1": "Paul Revere",
                "item_2": "Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Paul Revere"
            },
            {
                "item_1": "Leak",
                "item_2": "Steamfish"
            },
            {
                "item_1": "Leak",
                "item_2": "Crash"
            },
            {
                "item_1": "Fire",
                "item_2": "Smoking"
            },
            {
                "item_1": "Leak",
                "item_2": "Steam Engine"
            },
            {
                "item_1": "Leak",
                "item_2": "Mirage"
            },
            {
                "item_1": "Leak",
                "item_2": "TNT"
            },
            {
                "item_1": "Fire",
                "item_2": "Captain Periscope"
            },
            {
                "item_1": "Leak",
                "item_2": "Beach"
            },
            {
                "item_1": "Leak",
                "item_2": "Wine"
            },
            {
                "item_1": "Leak",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Leak",
                "item_2": "Flying"
            },
            {
                "item_1": "Fire",
                "item_2": "French Toast"
            },
            {
                "item_1": "Leak",
                "item_2": "Mecha Mudkip"
            },
            {
                "item_1": "Fire",
                "item_2": "Locomotive"
            },
            {
                "item_1": "Leak",
                "item_2": "Sand"
            },
            {
                "item_1": "Leak",
                "item_2": "Candle"
            },
            {
                "item_1": "Leak",
                "item_2": "Sleigh"
            },
            {
                "item_1": "Santa Claus",
                "item_2": "Captain Fluoride"
            },
            {
                "item_1": "Fire",
                "item_2": "Sushi"
            },
            {
                "item_1": "Santa Claus",
                "item_2": "Dragon"
            },
            {
                "item_1": "Fire",
                "item_2": "Steamgandalf"
            },
            {
                "item_1": "Santa Fluoride",
                "item_2": "Volcano"
            },
            {
                "item_1": "Santa Fluoride",
                "item_2": "Liberty Tree"
            },
            {
                "item_1": "Santa Fluoride",
                "item_2": "Fish"
            },
            {
                "item_1": "Santa Fluoride",
                "item_2": "007"
            },
            {
                "item_1": "Pineapple",
                "item_2": "Leak"
            },
            {
                "item_1": "Fire",
                "item_2": "Christmas Tree"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Water"
            },
            {
                "item_1": "Pina Colada",
                "item_2": "Leak"
            },
            {
                "item_1": "Pina Colada",
                "item_2": "Midnight Ride"
            },
            {
                "item_1": "North Pole",
                "item_2": "Santa Fluoride"
            },
            {
                "item_1": "Water",
                "item_2": "Liberty Fluoride"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Splash"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Puddle"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Wind",
                "item_2": "Geothermal"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Pipe"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Steampunk"
            },
            {
                "item_1": "Wind",
                "item_2": "Sashimi"
            },
            {
                "item_1": "Wind",
                "item_2": "Broom"
            },
            {
                "item_1": "Wind",
                "item_2": "Steamfish"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Vampire"
            },
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Steam Engine"
            },
            {
                "item_1": "Pina Colada",
                "item_2": "Brick"
            },
            {
                "item_1": "North Pole",
                "item_2": "Peking Duck"
            },
            {
                "item_1": "North Pole",
                "item_2": "Phoenix"
            },
            {
                "item_1": "North Pole",
                "item_2": "Crash"
            },
            {
                "item_1": "North Pole",
                "item_2": "Iceberg"
            },
            {
                "item_1": "North Pole",
                "item_2": "Ship"
            },
            {
                "item_1": "North Pole",
                "item_2": "Chopstick"
            },
            {
                "item_1": "North Pole",
                "item_2": "Birthday"
            },
            {
                "item_1": "North Pole",
                "item_2": "Locomotive"
            },
            {
                "item_1": "Liberty Water",
                "item_2": "Christmas"
            }
        ]
    },
    "Stone": {
        "emoticon": "🪨",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Lava"
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
                "item_1": "Water",
                "item_2": "Rock"
            },
            {
                "item_1": "Earth",
                "item_2": "Lava"
            },
            {
                "item_1": "Cactus",
                "item_2": "Rock"
            },
            {
                "item_1": "Wind",
                "item_2": "Kingdom"
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
                "item_2": "Sushi"
            },
            {
                "item_1": "Reef",
                "item_2": "Dragon"
            },
            {
                "item_1": "Water",
                "item_2": "Dragon"
            }
        ]
    },
    "Rock": {
        "emoticon": "🪨",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Earth",
                "item_2": "Stone"
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
                "item_2": "Electricity"
            },
            {
                "item_1": "Fire",
                "item_2": "Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Siren"
            },
            {
                "item_1": "Wind",
                "item_2": "Soggy"
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
                "item_1": "Thunder",
                "item_2": "Cloud"
            },
            {
                "item_1": "Thunder",
                "item_2": "Fire"
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
                "item_1": "Earth",
                "item_2": "Latte"
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
                "item_2": "Fever"
            },
            {
                "item_1": "Wind",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Wind",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Wind",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Wind",
                "item_2": "Hot Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Breeze"
            },
            {
                "item_1": "Wind",
                "item_2": "Cough"
            },
            {
                "item_1": "Wind",
                "item_2": "Ariel"
            },
            {
                "item_1": "Wind",
                "item_2": "Sick"
            },
            {
                "item_1": "Alligator",
                "item_2": "Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Origami"
            },
            {
                "item_1": "Fridge",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Ryan",
                "item_2": "Wind"
            },
            {
                "item_1": "Hexagon",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Curse"
            },
            {
                "item_1": "Wizard",
                "item_2": "Hexagon"
            },
            {
                "item_1": "Leak",
                "item_2": "Tornado"
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
                "item_1": "Waterfall",
                "item_2": "Fart"
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
                "item_1": "Wind",
                "item_2": "Sushi"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Steam",
                "item_2": "Firefighter"
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
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragon"
            },
            {
                "item_1": "Wind",
                "item_2": "Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Hurricane"
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
                "item_2": "Soup"
            },
            {
                "item_1": "Wind",
                "item_2": "Chili"
            },
            {
                "item_1": "Wind",
                "item_2": "Chef"
            },
            {
                "item_1": "Wind",
                "item_2": "Devil"
            },
            {
                "item_1": "Wind",
                "item_2": "Potion"
            },
            {
                "item_1": "Wind",
                "item_2": "Mouthwash"
            },
            {
                "item_1": "Wind",
                "item_2": "Elixir"
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
                "item_2": "Fire Storm"
            },
            {
                "item_1": "Wind",
                "item_2": "Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Curtain"
            },
            {
                "item_1": "Wind",
                "item_2": "Wind"
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
                "item_1": "Cactus",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Cactus",
                "item_2": "Storm"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Wind"
            },
            {
                "item_1": "Soggy Kite",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Noah",
                "item_2": "Puddle"
            },
            {
                "item_1": "Noah",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Wind",
                "item_2": "French Fries"
            },
            {
                "item_1": "Wind",
                "item_2": "Diamond"
            },
            {
                "item_1": "Wind",
                "item_2": "Taco"
            },
            {
                "item_1": "Wind",
                "item_2": "Ballet"
            },
            {
                "item_1": "Golem",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Wind",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Thunder",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Wind",
                "item_2": "Moat"
            },
            {
                "item_1": "Wind",
                "item_2": "Atlantis"
            },
            {
                "item_1": "Wind",
                "item_2": "Witch"
            },
            {
                "item_1": "Genie",
                "item_2": "Tornado"
            }
        ]
    },
    "Eruption": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Smoke"
            },
            {
                "item_1": "Wind",
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
                "item_2": "Solar"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Ring"
            },
            {
                "item_1": "Wind",
                "item_2": "Hydroelectricity"
            }
        ]
    },
    "Kite": {
        "emoticon": "🪁",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Balloon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Goldfish"
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
                "item_2": "Kiln"
            },
            {
                "item_1": "Wind",
                "item_2": "Pot"
            },
            {
                "item_1": "Wind",
                "item_2": "Tea"
            },
            {
                "item_1": "Wind",
                "item_2": "Balloon"
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
                "item_2": "Parasail"
            },
            {
                "item_1": "Surfing",
                "item_2": "Wind"
            },
            {
                "item_1": "Surfer",
                "item_2": "Wind"
            },
            {
                "item_1": "Saki",
                "item_2": "Fire"
            },
            {
                "item_1": "Noah",
                "item_2": "Lens"
            },
            {
                "item_1": "Wind",
                "item_2": "Dragonfly"
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
                "item_1": "Wind",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Dune"
            },
            {
                "item_1": "Fire",
                "item_2": "Dune"
            },
            {
                "item_1": "Fire",
                "item_2": "Desert"
            },
            {
                "item_1": "Wind",
                "item_2": "Beach"
            },
            {
                "item_1": "Earth",
                "item_2": "Wave"
            },
            {
                "item_1": "Earth",
                "item_2": "Dune"
            },
            {
                "item_1": "Earth",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Earth",
                "item_2": "Beach"
            },
            {
                "item_1": "Earth",
                "item_2": "Desert"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Oasis"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Dune"
            },
            {
                "item_1": "Flambé",
                "item_2": "Dune"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Dune"
            },
            {
                "item_1": "Steam",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Broom",
                "item_2": "Mordor"
            }
        ]
    },
    "Dust": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tornado"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Rock"
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
                "item_1": "Earth",
                "item_2": "Mist"
            },
            {
                "item_1": "Earth",
                "item_2": "Tornado"
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
                "item_1": "Earth",
                "item_2": "Air"
            },
            {
                "item_1": "Earth",
                "item_2": "Cough"
            },
            {
                "item_1": "Fridge",
                "item_2": "Ocean"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Squirrel"
            },
            {
                "item_1": "Thunder",
                "item_2": "Volcano"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Dragon Burger"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Tornado"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Smaug"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Nile"
            },
            {
                "item_1": "Leak",
                "item_2": "Chopstick"
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
                "item_2": "Dandelion"
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
                "item_1": "Water",
                "item_2": "Port"
            },
            {
                "item_1": "Burger",
                "item_2": "Flying"
            },
            {
                "item_1": "Leak",
                "item_2": "Eruption"
            }
        ]
    },
    "Electricity": {
        "emoticon": "⚡️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Windmill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Windmill"
            },
            {
                "item_1": "Earth",
                "item_2": "Windmill"
            },
            {
                "item_1": "Plug",
                "item_2": "Fire"
            },
            {
                "item_1": "Steam",
                "item_2": "Lightning"
            }
        ]
    },
    "Flying": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Angel"
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
            }
        ]
    },
    "Dune": {
        "emoticon": "🌵",
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
                "item_2": "Sand"
            },
            {
                "item_1": "Earth",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Steam",
                "item_2": "Arrakis"
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
                "item_2": "Dust"
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
                "item_1": "Botticelli",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Buddha",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Flying"
            },
            {
                "item_1": "Coal",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Wind"
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
                "item_2": "Glass"
            },
            {
                "item_1": "Water",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Water",
                "item_2": "Elixir"
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
                "item_1": "Whine",
                "item_2": "Lightning"
            },
            {
                "item_1": "Whine",
                "item_2": "Lava"
            },
            {
                "item_1": "Whine",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Whine",
                "item_2": "Swamp"
            },
            {
                "item_1": "Whine",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Whine",
                "item_2": "Ocean"
            },
            {
                "item_1": "Whine",
                "item_2": "Plant"
            },
            {
                "item_1": "Whine",
                "item_2": "Steam"
            },
            {
                "item_1": "Whine",
                "item_2": "Lake"
            },
            {
                "item_1": "Whine",
                "item_2": "Earth"
            },
            {
                "item_1": "Whine",
                "item_2": "Wind"
            },
            {
                "item_1": "Whine",
                "item_2": "Fire"
            },
            {
                "item_1": "Whine",
                "item_2": "Water"
            },
            {
                "item_1": "Diamond",
                "item_2": "Bottle"
            },
            {
                "item_1": "Diamond",
                "item_2": "Vineyard"
            },
            {
                "item_1": "Steam",
                "item_2": "Vineyard"
            }
        ]
    },
    "Fog": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Mist"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Mist"
            },
            {
                "item_1": "McDonalds",
                "item_2": "Fog"
            },
            {
                "item_1": "Steam",
                "item_2": "Cold"
            },
            {
                "item_1": "Steam",
                "item_2": "Hail"
            },
            {
                "item_1": "Steam",
                "item_2": "Curtain"
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
                "item_1": "Hydroelectricity",
                "item_2": "Water"
            },
            {
                "item_1": "Steam",
                "item_2": "Life"
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
                "item_1": "Surf",
                "item_2": "Earth"
            },
            {
                "item_1": "Surfer",
                "item_2": "Earth"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Sand"
            }
        ]
    },
    "Mud": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Steam"
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
                "item_2": "Puddle"
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
                "item_1": "Dentist",
                "item_2": "Mud"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Electricity"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Airplane"
            },
            {
                "item_1": "Mudslide",
                "item_2": "Dust"
            },
            {
                "item_1": "Water Ski",
                "item_2": "Curry"
            },
            {
                "item_1": "Water",
                "item_2": "Flying Sandwich"
            },
            {
                "item_1": "Earth",
                "item_2": "Wet Burrito"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Sushi"
            },
            {
                "item_1": "Lake",
                "item_2": "Dust"
            },
            {
                "item_1": "Steam",
                "item_2": "Soil"
            }
        ]
    },
    "Boat": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Tractor"
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
                "item_1": "Water",
                "item_2": "Tractor"
            },
            {
                "item_1": "Swan Lake",
                "item_2": "Angel"
            }
        ]
    },
    "Bird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Flying Fish"
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
                "item_1": "Earth",
                "item_2": "Arrakis"
            }
        ]
    },
    "Oasis": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Dune"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Dune"
            },
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
                "item_1": "Lake",
                "item_2": "Cactus"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Lake"
            },
            {
                "item_1": "Leak",
                "item_2": "Penguin"
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
                "item_1": "Fire",
                "item_2": "Penguin"
            },
            {
                "item_1": "Water",
                "item_2": "Snow"
            },
            {
                "item_1": "Water",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Earth",
                "item_2": "Penguin"
            },
            {
                "item_1": "Earth",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Pond"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Lake",
                "item_2": "Snowflake"
            },
            {
                "item_1": "Lake",
                "item_2": "Diamond"
            },
            {
                "item_1": "Gosling",
                "item_2": "Plant"
            },
            {
                "item_1": "Water",
                "item_2": "Frost"
            },
            {
                "item_1": "Fire",
                "item_2": "Flying Saucer"
            },
            {
                "item_1": "Fire",
                "item_2": "Frost"
            },
            {
                "item_1": "Earth",
                "item_2": "Cold"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Saucer"
            },
            {
                "item_1": "Lake",
                "item_2": "Frost"
            },
            {
                "item_1": "Lake",
                "item_2": "Cube"
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
                "item_1": "Fire",
                "item_2": "Boat"
            },
            {
                "item_1": "Water",
                "item_2": "House"
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
                "item_1": "Cup",
                "item_2": "Balloon"
            },
            {
                "item_1": "Sink",
                "item_2": "Sea"
            },
            {
                "item_1": "Steam",
                "item_2": "Harbor"
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
                "item_1": "Botticelli",
                "item_2": "Penguin"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Bird"
            },
            {
                "item_1": "Recycle",
                "item_2": "Bird"
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
                "item_1": "Smaug",
                "item_2": "Smell"
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
                "item_1": "Water",
                "item_2": "Titan"
            },
            {
                "item_1": "Water",
                "item_2": "Titanic"
            },
            {
                "item_1": "Fire",
                "item_2": "Titanic"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Ship"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Boat"
            },
            {
                "item_1": "Ice Fishing",
                "item_2": "Steamboat"
            },
            {
                "item_1": "Fridge",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Cube",
                "item_2": "Ocean"
            },
            {
                "item_1": "Submarine",
                "item_2": "Snow"
            },
            {
                "item_1": "North Pole",
                "item_2": "Cake"
            }
        ]
    },
    "Ash": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Dandelion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
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
                "item_1": "Fire",
                "item_2": "Shattered"
            },
            {
                "item_1": "Fire",
                "item_2": "Santa Claus"
            }
        ]
    },
    "Fireworks": {
        "emoticon": "🎆",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Explosion"
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
                "item_2": "Splash"
            },
            {
                "item_1": "Fire",
                "item_2": "Landing"
            },
            {
                "item_1": "Fire",
                "item_2": "Parachute"
            },
            {
                "item_1": "McDonalds",
                "item_2": "Beach"
            },
            {
                "item_1": "Fire",
                "item_2": "Soggy Kite"
            },
            {
                "item_1": "Flying Roast Duck",
                "item_2": "Fire"
            }
        ]
    },
    "Glass": {
        "emoticon": "🥃",
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
                "item_1": "Water",
                "item_2": "Brick"
            },
            {
                "item_1": "Water",
                "item_2": "Kiln"
            },
            {
                "item_1": "Flambé",
                "item_2": "Sand"
            },
            {
                "item_1": "Shattered",
                "item_2": "Oasis"
            },
            {
                "item_1": "Steam",
                "item_2": "Shattered"
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
            }
        ]
    },
    "Phoenix": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ash"
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
                "item_2": "Ash"
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
                "item_2": "Paramecium"
            },
            {
                "item_1": "Fire",
                "item_2": "Siren"
            },
            {
                "item_1": "Earth",
                "item_2": "Phoenix"
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
                "item_1": "Firebird",
                "item_2": "Beach"
            },
            {
                "item_1": "Firebird",
                "item_2": "Energy"
            },
            {
                "item_1": "Firebird",
                "item_2": "Fog"
            },
            {
                "item_1": "Firebird",
                "item_2": "Wine"
            },
            {
                "item_1": "Firebird",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Firebird",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Firebird",
                "item_2": "Dune"
            },
            {
                "item_1": "Firebird",
                "item_2": "Flying"
            },
            {
                "item_1": "Firebird",
                "item_2": "Electricity"
            },
            {
                "item_1": "Firebird",
                "item_2": "Airplane"
            },
            {
                "item_1": "Firebird",
                "item_2": "Seed"
            },
            {
                "item_1": "Firebird",
                "item_2": "Dust"
            },
            {
                "item_1": "Firebird",
                "item_2": "Sand"
            },
            {
                "item_1": "Firebird",
                "item_2": "Kite"
            },
            {
                "item_1": "Firebird",
                "item_2": "Eruption"
            },
            {
                "item_1": "Firebird",
                "item_2": "Tornado"
            },
            {
                "item_1": "Firebird",
                "item_2": "Mist"
            },
            {
                "item_1": "Firebird",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Firebird",
                "item_2": "Storm"
            },
            {
                "item_1": "Firebird",
                "item_2": "Rock"
            },
            {
                "item_1": "Firebird",
                "item_2": "Sea Serpent"
            },
            {
                "item_1": "Firebird",
                "item_2": "Stone"
            },
            {
                "item_1": "Firebird",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Firebird",
                "item_2": "Sushi"
            },
            {
                "item_1": "Firebird",
                "item_2": "Dragon"
            },
            {
                "item_1": "Firebird",
                "item_2": "Lightning"
            },
            {
                "item_1": "Firebird",
                "item_2": "Engine"
            },
            {
                "item_1": "Firebird",
                "item_2": "Lava"
            },
            {
                "item_1": "Firebird",
                "item_2": "Smoke"
            },
            {
                "item_1": "Firebird",
                "item_2": "Volcano"
            },
            {
                "item_1": "Firebird",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Firebird",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Firebird",
                "item_2": "Marsh"
            },
            {
                "item_1": "Firebird",
                "item_2": "Rain"
            },
            {
                "item_1": "Firebird",
                "item_2": "Fish"
            },
            {
                "item_1": "Firebird",
                "item_2": "Swamp"
            },
            {
                "item_1": "Firebird",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Firebird",
                "item_2": "Cloud"
            },
            {
                "item_1": "Firebird",
                "item_2": "Ocean"
            },
            {
                "item_1": "Firebird",
                "item_2": "Plant"
            },
            {
                "item_1": "Firebird",
                "item_2": "Wave"
            },
            {
                "item_1": "Firebird",
                "item_2": "Steam"
            },
            {
                "item_1": "Firebird",
                "item_2": "Lake"
            },
            {
                "item_1": "Firebird",
                "item_2": "Earth"
            },
            {
                "item_1": "Firebird",
                "item_2": "Wind"
            },
            {
                "item_1": "Firebird",
                "item_2": "Fire"
            },
            {
                "item_1": "Firebird",
                "item_2": "Water"
            },
            {
                "item_1": "Marriage",
                "item_2": "Firebird"
            },
            {
                "item_1": "King",
                "item_2": "Bird"
            },
            {
                "item_1": "Fire",
                "item_2": "Rainbowfish"
            },
            {
                "item_1": "Fire",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Fire",
                "item_2": "Ark"
            },
            {
                "item_1": "Fire Duck",
                "item_2": "Plant"
            },
            {
                "item_1": "Fire Duck",
                "item_2": "Fire"
            },
            {
                "item_1": "Wind",
                "item_2": "Salsa"
            },
            {
                "item_1": "Fire",
                "item_2": "Goose"
            },
            {
                "item_1": "Fire",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "China",
                "item_2": "Firebird"
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
                "item_2": "Fireworks"
            },
            {
                "item_1": "Fire",
                "item_2": "Alchemy"
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
                "item_2": "Petrol"
            }
        ]
    },
    "Sun": {
        "emoticon": "☀️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Beach"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Beach"
            },
            {
                "item_1": "Fire",
                "item_2": "Solar"
            },
            {
                "item_1": "Fire",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Fire",
                "item_2": "Heat"
            },
            {
                "item_1": "Wind",
                "item_2": "Sunflower"
            },
            {
                "item_1": "Water",
                "item_2": "Sunflower"
            },
            {
                "item_1": "Fire",
                "item_2": "Sunflower"
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
                "item_1": "Earth",
                "item_2": "Sunflower"
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
                "item_2": "Globe"
            },
            {
                "item_1": "Fire",
                "item_2": "World"
            },
            {
                "item_1": "Fire",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Explosion"
            },
            {
                "item_1": "Steam",
                "item_2": "Solar"
            },
            {
                "item_1": "Steam",
                "item_2": "Sunflower"
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
            }
        ]
    },
    "Desert": {
        "emoticon": "🏜️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sand"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Oasis"
            },
            {
                "item_1": "Fire",
                "item_2": "Mirage"
            },
            {
                "item_1": "Earth",
                "item_2": "Sand"
            },
            {
                "item_1": "Earth",
                "item_2": "Oasis"
            },
            {
                "item_1": "Earth",
                "item_2": "Mirage"
            },
            {
                "item_1": "Cactus",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Genie",
                "item_2": "Sand"
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
                "item_1": "Fire",
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
                "item_1": "Earth",
                "item_2": "Dracula"
            },
            {
                "item_1": "Fire",
                "item_2": "Dracula"
            },
            {
                "item_1": "Venus",
                "item_2": "Blood"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Blood"
            },
            {
                "item_1": "Steam",
                "item_2": "Taco"
            },
            {
                "item_1": "Steam",
                "item_2": "Dracula"
            },
            {
                "item_1": "Power",
                "item_2": "Blood"
            }
        ]
    },
    "Cannon": {
        "emoticon": "🔫",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ship"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ship"
            },
            {
                "item_1": "Fire",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Fire",
                "item_2": "Pirate"
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
                "item_2": "Money"
            },
            {
                "item_1": "Drunk",
                "item_2": "Fire"
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
    "Pottery": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Clay"
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
                "item_1": "Earth",
                "item_2": "Clay"
            },
            {
                "item_1": "Water",
                "item_2": "Clay"
            },
            {
                "item_1": "Fire",
                "item_2": "Clay"
            },
            {
                "item_1": "Power",
                "item_2": "Vase"
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
                "item_1": "Wet",
                "item_2": "Water"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Puddle"
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
                "item_1": "Divorce",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Bungee Jumper"
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
                "item_2": "Dracula"
            },
            {
                "item_1": "Heart",
                "item_2": "Water"
            }
        ]
    },
    "Microscope": {
        "emoticon": "🔬",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Lens"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Lens"
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
                "item_1": "Venus",
                "item_2": "Vase"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Pottery"
            }
        ]
    },
    "Pot": {
        "emoticon": "🥘",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ceramic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Earth",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Earth",
                "item_2": "Vase"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Ceramic"
            }
        ]
    },
    "Pond": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Puddle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Puddle"
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
                "item_1": "Fairy",
                "item_2": "Puddle"
            },
            {
                "item_1": "Grass",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Water",
                "item_2": "Dragonfly"
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
                "item_1": "Heart",
                "item_2": "Plant"
            },
            {
                "item_1": "Pollen",
                "item_2": "Amoeba"
            }
        ]
    },
    "Soup": {
        "emoticon": "🍲",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Pond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Pot"
            },
            {
                "item_1": "Water",
                "item_2": "Soup"
            },
            {
                "item_1": "Fire",
                "item_2": "Pond"
            },
            {
                "item_1": "Water",
                "item_2": "Cook"
            },
            {
                "item_1": "Water",
                "item_2": "Chili"
            },
            {
                "item_1": "Water",
                "item_2": "Chef"
            },
            {
                "item_1": "Water",
                "item_2": "Chicken"
            },
            {
                "item_1": "Water",
                "item_2": "Pepper"
            },
            {
                "item_1": "Water",
                "item_2": "Curry"
            },
            {
                "item_1": "Water",
                "item_2": "Prometheus"
            },
            {
                "item_1": "Water",
                "item_2": "Popcorn"
            },
            {
                "item_1": "Water",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Nessie",
                "item_2": "Chef"
            },
            {
                "item_1": "Monster",
                "item_2": "Soup"
            },
            {
                "item_1": "Salad",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Taco"
            },
            {
                "item_1": "Water",
                "item_2": "Roast Duck"
            },
            {
                "item_1": "Aquaman",
                "item_2": "Steam"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Alien"
            }
        ]
    },
    "Lily": {
        "emoticon": "🌸",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Flower"
            }
        ]
    },
    "Virus": {
        "emoticon": "🦠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Microscope"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Microscope"
            },
            {
                "item_1": "Fire",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Venus",
                "item_2": "Microscope"
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
            },
            {
                "item_1": "Earth",
                "item_2": "Chef"
            },
            {
                "item_1": "Steam",
                "item_2": "Hangry"
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
                "item_1": "Honey",
                "item_2": "Spicy"
            },
            {
                "item_1": "Steam",
                "item_2": "Titan"
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
            },
            {
                "item_1": "Wind",
                "item_2": "Cook"
            },
            {
                "item_1": "Earth",
                "item_2": "Cook"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Cook"
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
                "item_2": "Sick"
            },
            {
                "item_1": "Disease",
                "item_2": "Warmth"
            },
            {
                "item_1": "Fire",
                "item_2": "Sickness"
            },
            {
                "item_1": "Fire",
                "item_2": "Malaria"
            },
            {
                "item_1": "Perfume",
                "item_2": "Devil"
            }
        ]
    },
    "Heat": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hot"
            }
        ]
    },
    "Hell": {
        "emoticon": "👿",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fever"
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
            },
            {
                "item_1": "Sea Monster",
                "item_2": "Flu"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Virus"
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
            }
        ]
    },
    "Tea": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Plant"
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
                "item_2": "Fever"
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
                "item_1": "Water",
                "item_2": "Spice"
            },
            {
                "item_1": "Fire",
                "item_2": "Teapot"
            },
            {
                "item_1": "Cup",
                "item_2": "Alchemy"
            },
            {
                "item_1": "Teacup",
                "item_2": "Hot Water"
            },
            {
                "item_1": "Steam",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Steam",
                "item_2": "Grass"
            },
            {
                "item_1": "Steam",
                "item_2": "Siren"
            },
            {
                "item_1": "Steam",
                "item_2": "Honey"
            },
            {
                "item_1": "Steam",
                "item_2": "Chai"
            },
            {
                "item_1": "Steam",
                "item_2": "China"
            },
            {
                "item_1": "Steam",
                "item_2": "Plant"
            }
        ]
    },
    "Hot Spring": {
        "emoticon": "♨️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Geysir"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Hell"
            },
            {
                "item_1": "Steam",
                "item_2": "Geysir"
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
                "item_2": "Sick"
            },
            {
                "item_1": "Water",
                "item_2": "Cure"
            },
            {
                "item_1": "Earth",
                "item_2": "Cure"
            },
            {
                "item_1": "Cup",
                "item_2": "Chai"
            },
            {
                "item_1": "Water",
                "item_2": "Sickness"
            }
        ]
    },
    "Toothpaste": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Fluoride"
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
                "item_1": "Fire",
                "item_2": "Fluoride"
            },
            {
                "item_1": "Lake",
                "item_2": "Toothbrush"
            },
            {
                "item_1": "Broom",
                "item_2": "Hail"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Crash"
            },
            {
                "item_1": "Water",
                "item_2": "Captain Fluoride"
            },
            {
                "item_1": "North Pole",
                "item_2": "Water"
            }
        ]
    },
    "Potion": {
        "emoticon": "🧪",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Medicine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Medicine"
            },
            {
                "item_1": "Cup",
                "item_2": "Elixir"
            }
        ]
    },
    "Mouthwash": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Toothpaste"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Water",
                "item_2": "Mouthwash"
            }
        ]
    },
    "Elixir": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Potion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Potion"
            },
            {
                "item_1": "Fire",
                "item_2": "Potion"
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
            }
        ]
    },
    "Fire Breath": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Toothpaste"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Fire",
                "item_2": "Mouthwash"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Dragon"
            }
        ]
    },
    "Alchemy": {
        "emoticon": "🧪",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Elixir"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Elixir"
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
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Fire",
                "item_2": "Pump"
            }
        ]
    },
    "Balloon": {
        "emoticon": "🎈",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Fog"
            },
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
                "item_2": "Hot Air"
            },
            {
                "item_1": "Wind",
                "item_2": "Hobbit"
            }
        ]
    },
    "Sail": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": {
            "item_1": "Sea",
            "item_2": "Wind"
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
                "item_1": "Noah",
                "item_2": "Pottery"
            },
            {
                "item_1": "Wind",
                "item_2": "Port"
            },
            {
                "item_1": "Wind",
                "item_2": "Shipwreck"
            },
            {
                "item_1": "Wind",
                "item_2": "Reef"
            },
            {
                "item_1": "Nile",
                "item_2": "Wind"
            },
            {
                "item_1": "Sea",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "French Toast"
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
            }
        ]
    },
    "Snow": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Ice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Ice"
            },
            {
                "item_1": "Wind",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Wind",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Fire",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Earth",
                "item_2": "Ice"
            },
            {
                "item_1": "Earth",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Earth",
                "item_2": "Snowman"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Splash"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Ash"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Ice"
            },
            {
                "item_1": "Wind",
                "item_2": "Frost"
            },
            {
                "item_1": "Earth",
                "item_2": "Snowmobile"
            },
            {
                "item_1": "Earthquake",
                "item_2": "Dandelion"
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
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Oasis"
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
                "item_1": "Drunk",
                "item_2": "Train"
            }
        ]
    },
    "Sunflower": {
        "emoticon": "🌻",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sun"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sun"
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
                "item_2": "Brick"
            },
            {
                "item_1": "Earth",
                "item_2": "Window"
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
            },
            {
                "item_1": "Flying Squirrel",
                "item_2": "Flying"
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
            }
        ]
    },
    "Fan": {
        "emoticon": "🌬️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Vase"
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
                "item_1": "Plug",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Socket"
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
            "item_2": "Flu"
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
            },
            {
                "item_1": "Wind",
                "item_2": "Warmth"
            },
            {
                "item_1": "Steam",
                "item_2": "Spicy"
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
            }
        ]
    },
    "Fire Storm": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Fire Breath"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Fire Breath"
            }
        ]
    },
    "Air": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Alchemy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Alchemy"
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
            },
            {
                "item_1": "Steamboat",
                "item_2": "Wind"
            },
            {
                "item_1": "Water",
                "item_2": "Paper Boat"
            },
            {
                "item_1": "Lake",
                "item_2": "Paper Boat"
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
                "item_1": "Santa Claus",
                "item_2": "Storm"
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
            "item_2": "Angel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Angel"
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
                "item_1": "Cupid",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Bride",
                "item_2": "Lake"
            },
            {
                "item_1": "Princess",
                "item_2": "Fairy"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Poseidon"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Nessie"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Plesiosaur"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Egg"
            },
            {
                "item_1": "Fluorite Venus",
                "item_2": "Curtain"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Ocean"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Steam"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Poseidon"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Nessie"
            },
            {
                "item_1": "Lake",
                "item_2": "Human"
            },
            {
                "item_1": "Lake",
                "item_2": "Nymph"
            },
            {
                "item_1": "Lake",
                "item_2": "Fairy"
            },
            {
                "item_1": "Fire",
                "item_2": "Pharaoh"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Fish"
            },
            {
                "item_1": "Wizard",
                "item_2": "Ocean"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Ariel"
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
                "item_2": "Window"
            },
            {
                "item_1": "Earth",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Rainbow Fish",
                "item_2": "Glass"
            },
            {
                "item_1": "Cucumber",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Dragonfly",
                "item_2": "Fishbowl"
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
            },
            {
                "item_1": "Earth",
                "item_2": "Soda"
            },
            {
                "item_1": "Steam",
                "item_2": "Soda"
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
                "item_1": "Captain",
                "item_2": "Fish"
            },
            {
                "item_1": "Captain",
                "item_2": "Swamp"
            },
            {
                "item_1": "Captain",
                "item_2": "Cloud"
            },
            {
                "item_1": "Captain",
                "item_2": "Plant"
            },
            {
                "item_1": "Captain",
                "item_2": "Explosion"
            },
            {
                "item_1": "Captain",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Lake",
                "item_2": "Treasure"
            },
            {
                "item_1": "Swan Lake",
                "item_2": "Alchemy"
            },
            {
                "item_1": "Rum",
                "item_2": "Hell"
            },
            {
                "item_1": "Rum",
                "item_2": "Fever"
            },
            {
                "item_1": "Rum",
                "item_2": "Chef"
            },
            {
                "item_1": "Rum",
                "item_2": "Pot"
            },
            {
                "item_1": "Rum",
                "item_2": "Microscope"
            },
            {
                "item_1": "Rum",
                "item_2": "Splash"
            },
            {
                "item_1": "Shipwreck",
                "item_2": "Fire"
            },
            {
                "item_1": "Grog",
                "item_2": "Fish"
            },
            {
                "item_1": "Water",
                "item_2": "Pharaoh"
            },
            {
                "item_1": "McDonalds",
                "item_2": "Boat"
            },
            {
                "item_1": "Wind",
                "item_2": "Rum"
            },
            {
                "item_1": "Sailor Cannon",
                "item_2": "Glass"
            },
            {
                "item_1": "Recycle",
                "item_2": "Ship"
            },
            {
                "item_1": "Sailor Earth",
                "item_2": "Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Sailor Earth"
            },
            {
                "item_1": "Smaug",
                "item_2": "Hydrogen"
            },
            {
                "item_1": "Lake",
                "item_2": "Kingdom"
            },
            {
                "item_1": "Ghost",
                "item_2": "Water"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Fish"
            },
            {
                "item_1": "Broom",
                "item_2": "Flower"
            },
            {
                "item_1": "Cake",
                "item_2": "Captain"
            }
        ]
    },
    "Fireplace": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Window"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Window"
            },
            {
                "item_1": "Fire",
                "item_2": "House"
            },
            {
                "item_1": "Fire",
                "item_2": "Port"
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
            },
            {
                "item_1": "Fire",
                "item_2": "Hangover Cure"
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
                "item_2": "Tide"
            },
            {
                "item_1": "Fire",
                "item_2": "Curse"
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
    "Nothing": {
        "emoticon": "⬜",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Soda"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Soda"
            },
            {
                "item_1": "Poseidon",
                "item_2": "Chili"
            },
            {
                "item_1": "Surfing",
                "item_2": "Ship"
            },
            {
                "item_1": "Surfing",
                "item_2": "Ice"
            },
            {
                "item_1": "Surfing",
                "item_2": "Boat"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Chicken"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Marsh"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Plant"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Wind"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Flying"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Dust"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Windmill"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Lava"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Marsh"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Fish"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Ocean"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Beach"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Fog"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Dust"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Kite"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Dandelion"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Lava"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Ocean"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Earth"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Boat"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Fog"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Electricity"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Seed"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Sand"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Windmill"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Engine"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Smoke"
            },
            {
                "item_1": "Sake",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Pollen"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Surfing"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Surf"
            },
            {
                "item_1": "Latte",
                "item_2": "Chai"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Mud"
            },
            {
                "item_1": "Soggy Fries",
                "item_2": "Flying"
            },
            {
                "item_1": "Pickle",
                "item_2": "Fire"
            },
            {
                "item_1": "Hydrogen",
                "item_2": "Chef"
            },
            {
                "item_1": "Earth",
                "item_2": "Goosebumps"
            },
            {
                "item_1": "Lego",
                "item_2": "Wizard"
            },
            {
                "item_1": "Steam",
                "item_2": "Burger"
            },
            {
                "item_1": "Steam",
                "item_2": "Pickle"
            },
            {
                "item_1": "Peking Duck",
                "item_2": "Ganga"
            },
            {
                "item_1": "Peking Duck",
                "item_2": "Vodka"
            },
            {
                "item_1": "Water",
                "item_2": "Pipe"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Steamfish"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Ice"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Oasis"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Bird"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "Boat"
            },
            {
                "item_1": "Spy",
                "item_2": "SteamPunk"
            },
            {
                "item_1": "Spy",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Paul Revere",
                "item_2": "Clean Tea Cup"
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
                "item_1": "Fluorite Venus",
                "item_2": "Flame"
            },
            {
                "item_1": "Steam",
                "item_2": "Mermaid"
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
            },
            {
                "item_1": "Fire",
                "item_2": "Bath"
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
                "item_1": "Earthquake",
                "item_2": "Stone"
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
                "item_1": "Heart",
                "item_2": "Earth"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Dryad"
            },
            {
                "item_1": "Mordor",
                "item_2": "Plant"
            },
            {
                "item_1": "Thunder",
                "item_2": "Plant"
            }
        ]
    },
    "Island": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Volcano"
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
                "item_2": "Boat"
            },
            {
                "item_1": "Earth",
                "item_2": "Ship"
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
                "item_1": "Steamboat",
                "item_2": "Earth"
            },
            {
                "item_1": "Earth",
                "item_2": "Harbor"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Lake",
                "item_2": "Volcano"
            }
        ]
    },
    "Whale": {
        "emoticon": "🐳",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Wave"
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
            },
            {
                "item_1": "Lake",
                "item_2": "Wave"
            },
            {
                "item_1": "Jonah",
                "item_2": "House"
            },
            {
                "item_1": "Jonah",
                "item_2": "Hangover"
            },
            {
                "item_1": "Jonah",
                "item_2": "Window"
            }
        ]
    },
    "Tractor": {
        "emoticon": "🚜",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Tractor"
            },
            {
                "item_1": "Diamond",
                "item_2": "Tractor"
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
                "item_1": "Sake",
                "item_2": "Marsh"
            },
            {
                "item_1": "Saki",
                "item_2": "Earth"
            },
            {
                "item_1": "Truck",
                "item_2": "Paddy"
            },
            {
                "item_1": "Lake",
                "item_2": "Crop"
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
                "item_1": "Dragonfish",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Sea Dragon",
                "item_2": "Water"
            }
        ]
    },
    "Dirt": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
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
                "item_2": "Soup"
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
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Earth",
                "item_2": "Mouthwash"
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
                "item_1": "Bride",
                "item_2": "Earth"
            },
            {
                "item_1": "Earth",
                "item_2": "Disease"
            },
            {
                "item_1": "Earth",
                "item_2": "Cocktail"
            },
            {
                "item_1": "Earth",
                "item_2": "Ice Cream"
            },
            {
                "item_1": "Earth",
                "item_2": "Dirty Martini"
            },
            {
                "item_1": "Earth",
                "item_2": "Ryan"
            },
            {
                "item_1": "Earth",
                "item_2": "Malaria"
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
                "item_2": "Dust"
            },
            {
                "item_1": "Earth",
                "item_2": "Kiln"
            },
            {
                "item_1": "Earth",
                "item_2": "Pop"
            },
            {
                "item_1": "Earth",
                "item_2": "World"
            }
        ]
    },
    "Landing": {
        "emoticon": "🛬",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Airplane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Airplane"
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
            },
            {
                "item_1": "Earth",
                "item_2": "Alcohol"
            }
        ]
    },
    "Clay": {
        "emoticon": "🏺",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Mud"
            },
            {
                "item_1": "Recycle",
                "item_2": "Mud"
            }
        ]
    },
    "Chicken": {
        "emoticon": "🐔",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Bird"
            },
            {
                "item_1": "Earth",
                "item_2": "Egg"
            }
        ]
    },
    "Soil": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Ash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Ash"
            },
            {
                "item_1": "Earth",
                "item_2": "Alchemy"
            },
            {
                "item_1": "Earth",
                "item_2": "Dirt"
            },
            {
                "item_1": "Earth",
                "item_2": "Salt"
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
            }
        ]
    },
    "Meteor": {
        "emoticon": "💫",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Crash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Crash"
            },
            {
                "item_1": "Earth",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Lake",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Alien",
                "item_2": "Rain"
            }
        ]
    },
    "Dracula": {
        "emoticon": "🧛",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Vampire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Vampire"
            },
            {
                "item_1": "Spy",
                "item_2": "Vampire"
            }
        ]
    },
    "Fossil": {
        "emoticon": "🦴",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Magnifying Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Magnifying Glass"
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
            }
        ]
    },
    "Life": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Amoeba"
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
                "item_1": "Fluorite Venus",
                "item_2": "Pop"
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
                "item_1": "Teacup",
                "item_2": "Whale"
            },
            {
                "item_1": "Teacup",
                "item_2": "Tree"
            },
            {
                "item_1": "Teacup",
                "item_2": "Bubble"
            },
            {
                "item_1": "Earth",
                "item_2": "Teacup"
            }
        ]
    },
    "Moon": {
        "emoticon": "🌙",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Planet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Balloon"
            },
            {
                "item_1": "Earth",
                "item_2": "Telescope"
            },
            {
                "item_1": "Earth",
                "item_2": "Planet"
            },
            {
                "item_1": "Earth",
                "item_2": "Landing"
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
                "item_1": "Lake",
                "item_2": "Eclipse"
            },
            {
                "item_1": "Flying Saucer",
                "item_2": "Stone"
            }
        ]
    },
    "Snowman": {
        "emoticon": "☃️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Snow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Snow"
            },
            {
                "item_1": "Cup",
                "item_2": "Angel"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Pot"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Vase"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Pottery"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Mirage"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Penguin"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Snowflake"
            },
            {
                "item_1": "Christmas Tree",
                "item_2": "Dandelion"
            }
        ]
    },
    "Farm": {
        "emoticon": "🐄",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Tractor"
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
                "item_2": "Tractor"
            },
            {
                "item_1": "Earth",
                "item_2": "Field"
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
                "item_1": "Noah",
                "item_2": "Vampire"
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
            },
            {
                "item_1": "French Fries",
                "item_2": "Cave"
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
            },
            {
                "item_1": "Lake",
                "item_2": "Shipwreck"
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
    "Titan": {
        "emoticon": "🌎",
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
                "item_2": "Leviathan"
            },
            {
                "item_1": "Diamond",
                "item_2": "Leviathan"
            }
        ]
    },
    "Egg": {
        "emoticon": "🥚",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Chicken"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Chicken"
            },
            {
                "item_1": "Water",
                "item_2": "Omelette"
            },
            {
                "item_1": "Birthday",
                "item_2": "Omelette"
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
                "item_2": "Fossil"
            },
            {
                "item_1": "Lake",
                "item_2": "Fuel"
            },
            {
                "item_1": "Lake",
                "item_2": "Emulsion"
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
    "Spice": {
        "emoticon": "🌶️",
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
                "item_1": "Arrakis",
                "item_2": "Hurricane"
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
                "item_2": "Snowman"
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
            }
        ]
    },
    "Gold": {
        "emoticon": "💛",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Treasure"
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
                "item_1": "Rainbow Fish",
                "item_2": "Ash"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Midas"
            },
            {
                "item_1": "Lake",
                "item_2": "Midas"
            },
            {
                "item_1": "Steam",
                "item_2": "Swamp Wine"
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
            }
        ]
    },
    "Atlas": {
        "emoticon": "🌍",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Titan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Titan"
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
    "Curry": {
        "emoticon": "🍛",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Spice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Spice"
            },
            {
                "item_1": "Fire",
                "item_2": "Spice"
            },
            {
                "item_1": "Fire",
                "item_2": "India"
            },
            {
                "item_1": "Redneck",
                "item_2": "India"
            }
        ]
    },
    "Potato": {
        "emoticon": "🥔",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Basket"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Basket"
            }
        ]
    },
    "Money": {
        "emoticon": "💵",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Gold"
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
            }
        ]
    },
    "Globe": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Atlas"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Atlas"
            }
        ]
    },
    "India": {
        "emoticon": "🇮🇳",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Curry"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Curry"
            },
            {
                "item_1": "Earth",
                "item_2": "Taj Mahal"
            },
            {
                "item_1": "Fire",
                "item_2": "Taj Mahal"
            }
        ]
    },
    "Vodka": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Potato"
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
                "item_2": "Martini"
            },
            {
                "item_1": "Earth",
                "item_2": "Burrito"
            }
        ]
    },
    "World": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Globe"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Globe"
            }
        ]
    },
    "Taj Mahal": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "India"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "India"
            },
            {
                "item_1": "Water",
                "item_2": "Taj Mahal"
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
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Earth"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Water"
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
            },
            {
                "item_1": "Lake",
                "item_2": "Meteor"
            }
        ]
    },
    "Fluorine": {
        "emoticon": "⚛️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Sake"
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
                "item_1": "Fire",
                "item_2": "Fluorite"
            },
            {
                "item_1": "Fire",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Steam",
                "item_2": "Sake"
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
            },
            {
                "item_1": "Water",
                "item_2": "Time"
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
            },
            {
                "item_1": "French Fries",
                "item_2": "Spring"
            },
            {
                "item_1": "Lake",
                "item_2": "Pump"
            },
            {
                "item_1": "Water",
                "item_2": "Ring"
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
                "item_1": "Fishing Pole",
                "item_2": "David"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Angry Birds"
            },
            {
                "item_1": "Lake",
                "item_2": "Farmer"
            },
            {
                "item_1": "Fishing Rod",
                "item_2": "Fireman"
            }
        ]
    },
    "Titanic": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Atlas"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Atlas"
            },
            {
                "item_1": "Captain",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Leak",
                "item_2": "Iceberg"
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
            },
            {
                "item_1": "Water",
                "item_2": "Petrol"
            }
        ]
    },
    "Ganges": {
        "emoticon": "🛶",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "India"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "India"
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
            },
            {
                "item_1": "Lake",
                "item_2": "Hydrofluoric Acid"
            },
            {
                "item_1": "Pina Colada",
                "item_2": "Wave"
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
            },
            {
                "item_1": "Broom",
                "item_2": "Cow"
            },
            {
                "item_1": "Captain Hook",
                "item_2": "Grass"
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
                "item_2": "Chicken"
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
            },
            {
                "item_1": "TNT",
                "item_2": "Robot"
            },
            {
                "item_1": "Leak",
                "item_2": "Bird"
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
                "item_1": "Snowmobile",
                "item_2": "Fossil"
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
                "item_2": "Curry"
            },
            {
                "item_1": "Fire",
                "item_2": "Hot Sauce"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Hot Sauce"
            }
        ]
    },
    "Barbecue": {
        "emoticon": "🍖",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Farm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Farm"
            },
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
                "item_1": "Crocodile",
                "item_2": "Fire"
            },
            {
                "item_1": "Lake",
                "item_2": "Love"
            },
            {
                "item_1": "Fire",
                "item_2": "Redneck"
            }
        ]
    },
    "Prometheus": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Titan"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Titan"
            }
        ]
    },
    "Omelette": {
        "emoticon": "🍳",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Farm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Egg"
            },
            {
                "item_1": "Lake",
                "item_2": "Farm"
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
                "item_1": "Steam Locomotive",
                "item_2": "Flying Goldfish Sandwich"
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
    "Fireball": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Omelette"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Vodka"
            },
            {
                "item_1": "Fire",
                "item_2": "Omelette"
            },
            {
                "item_1": "Fire",
                "item_2": "Fireball"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Fire"
            },
            {
                "item_1": "Fire Duck",
                "item_2": "Steam"
            },
            {
                "item_1": "Fire",
                "item_2": "Ghost"
            },
            {
                "item_1": "Steam",
                "item_2": "Lung"
            }
        ]
    },
    "Agni": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ganges"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ganges"
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
                "item_2": "Roast"
            },
            {
                "item_1": "Fire",
                "item_2": "Crop"
            },
            {
                "item_1": "Fire",
                "item_2": "Cheese"
            },
            {
                "item_1": "Soggy",
                "item_2": "Fire"
            },
            {
                "item_1": "Steam",
                "item_2": "Soggy Bread"
            }
        ]
    },
    "Grill": {
        "emoticon": "🍖",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Prometheus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Prometheus"
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
    "Coffee": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Roast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Roast"
            },
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
                "item_2": "Meteor"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Bottle"
            },
            {
                "item_1": "Cappuccino",
                "item_2": "Soil"
            },
            {
                "item_1": "Cup",
                "item_2": "Window"
            },
            {
                "item_1": "Latte",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Lake",
                "item_2": "Princess"
            },
            {
                "item_1": "Starbucks",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Grog",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Starbucks"
            },
            {
                "item_1": "TNT",
                "item_2": "Kaiju"
            },
            {
                "item_1": "Steam",
                "item_2": "Starbucks"
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
                "item_1": "Fire",
                "item_2": "Salsa"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Arrakis"
            }
        ]
    },
    "Soggy Toast": {
        "emoticon": "🥞",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Toast"
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
            }
        ]
    },
    "Loch Ness Monster": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Whale"
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
                "item_1": "Nessie",
                "item_2": "Fire"
            },
            {
                "item_1": "Nessie",
                "item_2": "Hot"
            },
            {
                "item_1": "Lake",
                "item_2": "Whale"
            },
            {
                "item_1": "Lake",
                "item_2": "Sea Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Carnivorous Plant"
            },
            {
                "item_1": "Lake",
                "item_2": "Kaiju"
            },
            {
                "item_1": "Water",
                "item_2": "Soggy Kite"
            },
            {
                "item_1": "Lake",
                "item_2": "Sea Dragon"
            }
        ]
    },
    "Nessie": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Loch Ness Monster"
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
                "item_1": "Loch Ness Monster",
                "item_2": "Wind"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Soggy Toast"
            },
            {
                "item_1": "Lake",
                "item_2": "Loch Ness Monster"
            },
            {
                "item_1": "Lake",
                "item_2": "Ghost"
            }
        ]
    },
    "Sea Monster": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Loch Ness Monster",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Loch Ness Monster",
                "item_2": "Fire"
            },
            {
                "item_1": "Don Quixote",
                "item_2": "Sea Serpent"
            }
        ]
    },
    "Poseidon": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Sea Monster",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea Monster",
                "item_2": "Water"
            },
            {
                "item_1": "Seaweed",
                "item_2": "Prometheus"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "India"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Teapot"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Atlantis"
            }
        ]
    },
    "Monster": {
        "emoticon": "👾",
        "mostEfficientRecipe": {
            "item_1": "Nessie",
            "item_2": "Flu"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Nessie",
                "item_2": "Flu"
            },
            {
                "item_1": "Steam",
                "item_2": "Godzilla"
            }
        ]
    },
    "Kraken": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Sea Monster",
            "item_2": "Chili"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea Monster",
                "item_2": "Chili"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Octopus"
            },
            {
                "item_1": "Lake",
                "item_2": "Octopus"
            },
            {
                "item_1": "Reef",
                "item_2": "Sea Serpent"
            }
        ]
    },
    "Nymph": {
        "emoticon": "🧚",
        "mostEfficientRecipe": {
            "item_1": "Poseidon",
            "item_2": "Lily"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Poseidon",
                "item_2": "Lily"
            },
            {
                "item_1": "Monster",
                "item_2": "Lily"
            }
        ]
    },
    "Venus Flytrap": {
        "emoticon": "🪲",
        "mostEfficientRecipe": {
            "item_1": "Monster",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Monster",
                "item_2": "Flower"
            },
            {
                "item_1": "Carnivorous Plant",
                "item_2": "Flower"
            },
            {
                "item_1": "Carnivorous Plant",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Carnivorous Plant",
                "item_2": "Pond"
            }
        ]
    },
    "Octopus": {
        "emoticon": "🐙",
        "mostEfficientRecipe": {
            "item_1": "Kraken",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kraken",
                "item_2": "Flower"
            }
        ]
    },
    "Dryad": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Nymph",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Nymph",
                "item_2": "Flower"
            }
        ]
    },
    "Carnivorous Plant": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Venus Flytrap",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Venus Flytrap",
                "item_2": "Flower"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Magnifying Glass"
            }
        ]
    },
    "Venus": {
        "emoticon": "♀️",
        "mostEfficientRecipe": {
            "item_1": "Octopus",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Octopus",
                "item_2": "Flower"
            },
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Vampire"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Sun"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Explosion"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Ash"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Mirage"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Ice"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Oasis"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Bird"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Boat"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Mud"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Beach"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Energy"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Fog"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Wine"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Flying"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Seed"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Sand"
            },
            {
                "item_1": "Botticelli",
                "item_2": "Kite"
            },
            {
                "item_1": "Princess",
                "item_2": "Venus Fly Trap"
            },
            {
                "item_1": "Aphrodite",
                "item_2": "Soggy Toast"
            },
            {
                "item_1": "Charcoal",
                "item_2": "Telescope"
            },
            {
                "item_1": "Statue",
                "item_2": "Water"
            },
            {
                "item_1": "Lake",
                "item_2": "Statue"
            }
        ]
    },
    "Fairy": {
        "emoticon": "🧚",
        "mostEfficientRecipe": {
            "item_1": "Dryad",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dryad",
                "item_2": "Flower"
            }
        ]
    },
    "Venus Fly Trap": {
        "emoticon": "🪲",
        "mostEfficientRecipe": {
            "item_1": "Carnivorous Plant",
            "item_2": "Pot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Carnivorous Plant",
                "item_2": "Pot"
            }
        ]
    },
    "Botticelli": {
        "emoticon": "🎨",
        "mostEfficientRecipe": {
            "item_1": "Venus",
            "item_2": "Puddle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Venus",
                "item_2": "Puddle"
            }
        ]
    },
    "Cupid": {
        "emoticon": "💘",
        "mostEfficientRecipe": {
            "item_1": "Fairy",
            "item_2": "Ceramic"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fairy",
                "item_2": "Ceramic"
            }
        ]
    },
    "Cactus": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Venus Fly Trap",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Venus Fly Trap",
                "item_2": "Brick"
            },
            {
                "item_1": "Cactus",
                "item_2": "Mist"
            },
            {
                "item_1": "Saguaro",
                "item_2": "Dragon"
            },
            {
                "item_1": "Saguaro",
                "item_2": "Lightning"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Cactus"
            },
            {
                "item_1": "Lake",
                "item_2": "Prick"
            }
        ]
    },
    "Don Quixote": {
        "emoticon": "🐴",
        "mostEfficientRecipe": {
            "item_1": "Swan Lake",
            "item_2": "Window"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Botticelli",
                "item_2": "Windmill"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Engine"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Volcano"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Fishbowl"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Marsh"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Rain"
            },
            {
                "item_1": "Sancho Panza",
                "item_2": "Swamp"
            },
            {
                "item_1": "Swan Lake",
                "item_2": "Window"
            },
            {
                "item_1": "Flambé",
                "item_2": "Windmill"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Tsuncho"
            }
        ]
    },
    "Love": {
        "emoticon": "❤️",
        "mostEfficientRecipe": {
            "item_1": "Diamond",
            "item_2": "Chicken"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cupid",
                "item_2": "Mist"
            },
            {
                "item_1": "Heart",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Heart",
                "item_2": "Ocean"
            },
            {
                "item_1": "Heart",
                "item_2": "Wave"
            },
            {
                "item_1": "Heart",
                "item_2": "Steam"
            },
            {
                "item_1": "Heart",
                "item_2": "Lake"
            },
            {
                "item_1": "Heart",
                "item_2": "Wind"
            },
            {
                "item_1": "Heart",
                "item_2": "Fire"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Sancho Panza"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Venus Fly Trap"
            },
            {
                "item_1": "Diamond",
                "item_2": "Chicken"
            },
            {
                "item_1": "Lake",
                "item_2": "Honeymoon"
            },
            {
                "item_1": "Steam",
                "item_2": "Honeymoon"
            }
        ]
    },
    "Saguaro": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Cactus",
            "item_2": "Sea Serpent"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cactus",
                "item_2": "Sea Serpent"
            }
        ]
    },
    "Sancho Panza": {
        "emoticon": "🐴",
        "mostEfficientRecipe": {
            "item_1": "Don Quixote",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Don Quixote",
                "item_2": "Sushi"
            }
        ]
    },
    "Heart": {
        "emoticon": "❤️",
        "mostEfficientRecipe": {
            "item_1": "Love",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Love",
                "item_2": "Dragon"
            },
            {
                "item_1": "Captain Planet",
                "item_2": "Air"
            }
        ]
    },
    "Car": {
        "emoticon": "🚗",
        "mostEfficientRecipe": {
            "item_1": "Saguaro",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Saguaro",
                "item_2": "Engine"
            }
        ]
    },
    "Tsuncho": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Sancho Panza",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sancho Panza",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Tsuncho",
                "item_2": "Lava"
            }
        ]
    },
    "Steamboat": {
        "emoticon": "🛳️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Hurricane"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tsuncho",
                "item_2": "Earth"
            },
            {
                "item_1": "Steamboat",
                "item_2": "Fire"
            },
            {
                "item_1": "Steamboat",
                "item_2": "Water"
            },
            {
                "item_1": "Alligator",
                "item_2": "Steam"
            },
            {
                "item_1": "Lake",
                "item_2": "Steamboat"
            },
            {
                "item_1": "Steam",
                "item_2": "Hurricane"
            },
            {
                "item_1": "Steam",
                "item_2": "Basket"
            },
            {
                "item_1": "Steam",
                "item_2": "Duck"
            },
            {
                "item_1": "Steam",
                "item_2": "Steamboat"
            },
            {
                "item_1": "Steam",
                "item_2": "Tux"
            },
            {
                "item_1": "Chopstick",
                "item_2": "Crop"
            },
            {
                "item_1": "Steam",
                "item_2": "Fire Ski"
            },
            {
                "item_1": "Steam",
                "item_2": "Ark"
            },
            {
                "item_1": "Steam",
                "item_2": "Sailor"
            },
            {
                "item_1": "Steam",
                "item_2": "Castle"
            },
            {
                "item_1": "Steam",
                "item_2": "Sailor Earth"
            }
        ]
    },
    "Rainbow Dash": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Tsuncho",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tsuncho",
                "item_2": "Marsh"
            }
        ]
    },
    "Captain": {
        "emoticon": "🧑‍✈️",
        "mostEfficientRecipe": {
            "item_1": "Steamboat",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamboat",
                "item_2": "Fish"
            },
            {
                "item_1": "Sailor Earth",
                "item_2": "Wind"
            }
        ]
    },
    "Rainbow Fish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Dash",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Dash",
                "item_2": "Fish"
            }
        ]
    },
    "Surf": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Captain",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Captain",
                "item_2": "Steam"
            },
            {
                "item_1": "Surfer",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "UFO"
            }
        ]
    },
    "Surfing": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Surf",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Surf",
                "item_2": "Wind"
            },
            {
                "item_1": "Surfing",
                "item_2": "Fire"
            },
            {
                "item_1": "Surfing",
                "item_2": "Water"
            },
            {
                "item_1": "Surfing",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Surfing",
                "item_2": "Oasis"
            },
            {
                "item_1": "Surfing",
                "item_2": "Mud"
            },
            {
                "item_1": "Surfer",
                "item_2": "Fire"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Milk"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Land"
            },
            {
                "item_1": "Steam",
                "item_2": "Surf"
            },
            {
                "item_1": "Steam",
                "item_2": "Surfing"
            }
        ]
    },
    "Firebird": {
        "emoticon": "🐦",
        "mostEfficientRecipe": {
            "item_1": "Captain",
            "item_2": "Phoenix"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Captain",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Goose",
                "item_2": "Fireworks"
            }
        ]
    },
    "Unicorn": {
        "emoticon": "🦄",
        "mostEfficientRecipe": {
            "item_1": "Grog",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Fish",
                "item_2": "Penguin"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Carnivorous Plant"
            },
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Swamp"
            },
            {
                "item_1": "Drunk",
                "item_2": "Rainbow Sushi"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Princess"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Burnt Toast"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Grill"
            },
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Agni"
            },
            {
                "item_1": "Grog",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Flying Burger",
                "item_2": "Rainbow"
            }
        ]
    },
    "Tux": {
        "emoticon": "🐧",
        "mostEfficientRecipe": {
            "item_1": "Surf",
            "item_2": "Penguin"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Surf",
                "item_2": "Penguin"
            }
        ]
    },
    "Surfer": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Surfing",
            "item_2": "Beach"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Surfing",
                "item_2": "Beach"
            }
        ]
    },
    "Wedding": {
        "emoticon": "👰",
        "mostEfficientRecipe": {
            "item_1": "Tux",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tux",
                "item_2": "Earth"
            },
            {
                "item_1": "Bride",
                "item_2": "Wind"
            },
            {
                "item_1": "Wedding",
                "item_2": "Wedding"
            },
            {
                "item_1": "Bride",
                "item_2": "Tux"
            },
            {
                "item_1": "Groom",
                "item_2": "Surfing"
            },
            {
                "item_1": "Groom",
                "item_2": "Saguaro"
            },
            {
                "item_1": "Groom",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Firebird"
            },
            {
                "item_1": "Lake",
                "item_2": "Tux"
            },
            {
                "item_1": "Steam",
                "item_2": "Narwhal"
            }
        ]
    },
    "Bride": {
        "emoticon": "👰",
        "mostEfficientRecipe": {
            "item_1": "Wedding",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wedding",
                "item_2": "Water"
            },
            {
                "item_1": "Bride",
                "item_2": "Fire"
            },
            {
                "item_1": "Wedding",
                "item_2": "Steam"
            },
            {
                "item_1": "Wedding",
                "item_2": "Lake"
            },
            {
                "item_1": "Groom",
                "item_2": "Steamboat"
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
                "item_1": "Bride",
                "item_2": "Water"
            },
            {
                "item_1": "Water",
                "item_2": "Soggy"
            }
        ]
    },
    "Marriage": {
        "emoticon": "💍",
        "mostEfficientRecipe": {
            "item_1": "Wedding",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wedding",
                "item_2": "Earth"
            },
            {
                "item_1": "Wedding",
                "item_2": "Surfer"
            }
        ]
    },
    "Divorce": {
        "emoticon": "💔",
        "mostEfficientRecipe": {
            "item_1": "Marriage",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Marriage",
                "item_2": "Water"
            },
            {
                "item_1": "Marriage",
                "item_2": "Fire"
            },
            {
                "item_1": "Marriage",
                "item_2": "Unicorn"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Prick"
            }
        ]
    },
    "Groom": {
        "emoticon": "🤵",
        "mostEfficientRecipe": {
            "item_1": "Wedding",
            "item_2": "Tux"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wedding",
                "item_2": "Tux"
            }
        ]
    },
    "Princess": {
        "emoticon": "👸",
        "mostEfficientRecipe": {
            "item_1": "Bride",
            "item_2": "Unicorn"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Bride",
                "item_2": "Unicorn"
            }
        ]
    },
    "Narwhal": {
        "emoticon": "🐳",
        "mostEfficientRecipe": {
            "item_1": "Wet",
            "item_2": "Unicorn"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wet",
                "item_2": "Unicorn"
            }
        ]
    },
    "Honeymoon": {
        "emoticon": "💑",
        "mostEfficientRecipe": {
            "item_1": "Marriage",
            "item_2": "Surfing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Marriage",
                "item_2": "Surfing"
            }
        ]
    },
    "Surf Divorce": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Divorce",
            "item_2": "Surfing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Divorce",
                "item_2": "Surfing"
            }
        ]
    },
    "Prick": {
        "emoticon": "🌵",
        "mostEfficientRecipe": {
            "item_1": "Groom",
            "item_2": "Botticelli"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Groom",
                "item_2": "Botticelli"
            }
        ]
    },
    "Aphrodite": {
        "emoticon": "💘",
        "mostEfficientRecipe": {
            "item_1": "Princess",
            "item_2": "Venus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Princess",
                "item_2": "Venus"
            },
            {
                "item_1": "Narwhal",
                "item_2": "Venus"
            },
            {
                "item_1": "Lake",
                "item_2": "Uranus"
            }
        ]
    },
    "Seaweed": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Aquaman",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Narwhal",
                "item_2": "Venus Flytrap"
            },
            {
                "item_1": "Lake",
                "item_2": "Seaweed"
            },
            {
                "item_1": "Aquaman",
                "item_2": "Plant"
            },
            {
                "item_1": "Genie",
                "item_2": "Kelp"
            }
        ]
    },
    "Honey": {
        "emoticon": "🍯",
        "mostEfficientRecipe": {
            "item_1": "Honeymoon",
            "item_2": "Venus Flytrap"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Honeymoon",
                "item_2": "Venus Flytrap"
            },
            {
                "item_1": "Bee",
                "item_2": "Planet"
            },
            {
                "item_1": "Hexagon",
                "item_2": "Plant"
            },
            {
                "item_1": "Hexagon",
                "item_2": "Lake"
            }
        ]
    },
    "Surf Venus": {
        "emoticon": "🏄‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Marriage"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Surf Divorce",
                "item_2": "Poseidon"
            },
            {
                "item_1": "Surf Venus",
                "item_2": "Gasoline"
            },
            {
                "item_1": "Steam",
                "item_2": "Marriage"
            }
        ]
    },
    "Sea Urchin": {
        "emoticon": "🦀",
        "mostEfficientRecipe": {
            "item_1": "Prick",
            "item_2": "Poseidon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Prick",
                "item_2": "Poseidon"
            }
        ]
    },
    "Cappuccino": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Aphrodite",
            "item_2": "Coffee"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Aphrodite",
                "item_2": "Coffee"
            }
        ]
    },
    "Wasabi": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Seaweed",
            "item_2": "Spicy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Seaweed",
                "item_2": "Spicy"
            }
        ]
    },
    "Bee": {
        "emoticon": "🐝",
        "mostEfficientRecipe": {
            "item_1": "Honey",
            "item_2": "Dinosaur"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Honey",
                "item_2": "Dinosaur"
            },
            {
                "item_1": "Pollen",
                "item_2": "Flower"
            }
        ]
    },
    "Fluorite Venus": {
        "emoticon": "💎🌸",
        "mostEfficientRecipe": {
            "item_1": "Surf Venus",
            "item_2": "Meteor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Surf Venus",
                "item_2": "Meteor"
            }
        ]
    },
    "Starfish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Sea Urchin",
            "item_2": "Meteor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea Urchin",
                "item_2": "Meteor"
            }
        ]
    },
    "Cup": {
        "emoticon": "🍶",
        "mostEfficientRecipe": {
            "item_1": "Cappuccino",
            "item_2": "Landing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cappuccino",
                "item_2": "Landing"
            }
        ]
    },
    "Uranus": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Wasabi",
            "item_2": "Planet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wasabi",
                "item_2": "Planet"
            }
        ]
    },
    "Pollen": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Bee",
            "item_2": "Dirt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Bee",
                "item_2": "Dirt"
            }
        ]
    },
    "Snowflake": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Fluorite Venus",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fluorite Venus",
                "item_2": "Hangover"
            },
            {
                "item_1": "Snowflake",
                "item_2": "Microscope"
            },
            {
                "item_1": "Avalanche",
                "item_2": "Glass"
            }
        ]
    },
    "Hangry": {
        "emoticon": "🍕",
        "mostEfficientRecipe": {
            "item_1": "Starfish",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Starfish",
                "item_2": "Hangover"
            }
        ]
    },
    "Toothbrush": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Cup",
            "item_2": "Toothpaste"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cup",
                "item_2": "Toothpaste"
            },
            {
                "item_1": "Dentist",
                "item_2": "Beach"
            },
            {
                "item_1": "Dentist",
                "item_2": "Fog"
            }
        ]
    },
    "Pluto": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Uranus",
            "item_2": "Flower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Uranus",
                "item_2": "Flower"
            }
        ]
    },
    "Lotus": {
        "emoticon": "🌺",
        "mostEfficientRecipe": {
            "item_1": "Pollen",
            "item_2": "Pond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pollen",
                "item_2": "Pond"
            },
            {
                "item_1": "Water Lily",
                "item_2": "Fish"
            },
            {
                "item_1": "Earth",
                "item_2": "Water Lily"
            }
        ]
    },
    "Avalanche": {
        "emoticon": "🌨️",
        "mostEfficientRecipe": {
            "item_1": "Tremor",
            "item_2": "Iceberg"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Snowflake",
                "item_2": "Cannonball"
            },
            {
                "item_1": "Tremor",
                "item_2": "Iceberg"
            },
            {
                "item_1": "Captain Mudkip",
                "item_2": "Sand Buddha"
            }
        ]
    },
    "Angry Birds": {
        "emoticon": "🐥",
        "mostEfficientRecipe": {
            "item_1": "Hangry",
            "item_2": "Cannonball"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hangry",
                "item_2": "Cannonball"
            }
        ]
    },
    "Dentist": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Toothpaste"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Toothbrush",
                "item_2": "Glass"
            },
            {
                "item_1": "Steam",
                "item_2": "Toothpaste"
            }
        ]
    },
    "Kryptonite": {
        "emoticon": "💥",
        "mostEfficientRecipe": {
            "item_1": "Pluto",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pluto",
                "item_2": "Glass"
            }
        ]
    },
    "Buddha": {
        "emoticon": "🧘‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Lotus",
            "item_2": "Glass"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lotus",
                "item_2": "Glass"
            },
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Toothbrush"
            }
        ]
    },
    "Mudslide": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Avalanche",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Avalanche",
                "item_2": "Mud"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Mud"
            }
        ]
    },
    "Angry Birds Star Wars": {
        "emoticon": "🐥",
        "mostEfficientRecipe": {
            "item_1": "Angry Birds",
            "item_2": "Mud"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Angry Birds",
                "item_2": "Mud"
            }
        ]
    },
    "Whine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Captain Mudkip"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dentist",
                "item_2": "Wine"
            },
            {
                "item_1": "Fire",
                "item_2": "Captain Mudkip"
            }
        ]
    },
    "Superman": {
        "emoticon": "🦸",
        "mostEfficientRecipe": {
            "item_1": "Kryptonite",
            "item_2": "Dust Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kryptonite",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Lake",
                "item_2": "Kryptonite"
            }
        ]
    },
    "Sand Buddha": {
        "emoticon": "🧘‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Buddha",
            "item_2": "Dune"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Buddha",
                "item_2": "Dune"
            }
        ]
    },
    "Mudkip": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Mudslide",
            "item_2": "Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mudslide",
                "item_2": "Kite"
            },
            {
                "item_1": "Steam",
                "item_2": "Mudkip"
            }
        ]
    },
    "Kite Fighter": {
        "emoticon": "🪁",
        "mostEfficientRecipe": {
            "item_1": "Angry Birds Star Wars",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Angry Birds Star Wars",
                "item_2": "Dragon"
            }
        ]
    },
    "David": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Captain Periscope",
            "item_2": "Sea Monster"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kite Fighter",
                "item_2": "Stone"
            },
            {
                "item_1": "Goliath",
                "item_2": "Stone"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Goliath"
            },
            {
                "item_1": "Captain Periscope",
                "item_2": "Sea Monster"
            }
        ]
    },
    "Goliath": {
        "emoticon": "🐘",
        "mostEfficientRecipe": {
            "item_1": "David",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "David",
                "item_2": "Stone"
            },
            {
                "item_1": "Goliath",
                "item_2": "Sushi"
            }
        ]
    },
    "Godzilla": {
        "emoticon": "🦖",
        "mostEfficientRecipe": {
            "item_1": "Goliath",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Goliath",
                "item_2": "Dragon"
            },
            {
                "item_1": "Kaiju",
                "item_2": "Dragon"
            },
            {
                "item_1": "Kaiju",
                "item_2": "Lightning"
            }
        ]
    },
    "Kaiju": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Godzilla",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Godzilla",
                "item_2": "Dragon"
            }
        ]
    },
    "Mecha": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Kaiju",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kaiju",
                "item_2": "Engine"
            }
        ]
    },
    "Robot": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Mecha",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mecha",
                "item_2": "Engine"
            }
        ]
    },
    "Transformer": {
        "emoticon": "🤖",
        "mostEfficientRecipe": {
            "item_1": "Robot",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Robot",
                "item_2": "Engine"
            },
            {
                "item_1": "Optimus Prime",
                "item_2": "Engine"
            },
            {
                "item_1": "Steam",
                "item_2": "Optimus Prime"
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
                "item_1": "Scratch",
                "item_2": "Transformer"
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
            },
            {
                "item_1": "Volcanicus",
                "item_2": "Volcano"
            }
        ]
    },
    "Swamp Thing": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Volcanicus",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Volcanicus",
                "item_2": "Swamp"
            }
        ]
    },
    "Swamp Tsunami": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Swamp Thing",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Thing",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Water"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Tornado"
            }
        ]
    },
    "Swamp Wine": {
        "emoticon": "🍷",
        "mostEfficientRecipe": {
            "item_1": "Swamp Thing",
            "item_2": "Wine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Thing",
                "item_2": "Wine"
            },
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Sandstorm"
            }
        ]
    },
    "Smoke Tsunami": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Swamp Tsunami",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Tsunami",
                "item_2": "Smoke"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Volcano"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Moonshine",
                "item_2": "Wind"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Tornado"
            },
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Storm"
            }
        ]
    },
    "Moonshine": {
        "emoticon": "🌙",
        "mostEfficientRecipe": {
            "item_1": "Swamp Wine",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swamp Wine",
                "item_2": "Smoke"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Water"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Lightning"
            },
            {
                "item_1": "Fishing Pole",
                "item_2": "Swamp Wine"
            }
        ]
    },
    "Whiskey": {
        "emoticon": "🥃",
        "mostEfficientRecipe": {
            "item_1": "Moonshine",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Moonshine",
                "item_2": "Fire"
            },
            {
                "item_1": "Moonshine",
                "item_2": "Water"
            }
        ]
    },
    "Sushi Tsunami": {
        "emoticon": "🍣",
        "mostEfficientRecipe": {
            "item_1": "Smoke Tsunami",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Smoke Tsunami",
                "item_2": "Sushi"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Volcano"
            }
        ]
    },
    "Sake": {
        "emoticon": "🍶",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Rice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Moonshine",
                "item_2": "Sushi"
            },
            {
                "item_1": "Whiskey",
                "item_2": "Sushi"
            },
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Dust Storm"
            },
            {
                "item_1": "Saki",
                "item_2": "Lake"
            },
            {
                "item_1": "Salmon",
                "item_2": "Steam"
            },
            {
                "item_1": "Lake",
                "item_2": "Rice"
            },
            {
                "item_1": "Hangover Cure",
                "item_2": "Sushi"
            }
        ]
    },
    "Train": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Bacteria"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Whiskey",
                "item_2": "Engine"
            },
            {
                "item_1": "Alligator",
                "item_2": "Lava"
            },
            {
                "item_1": "Ballet",
                "item_2": "Steam"
            },
            {
                "item_1": "Steam",
                "item_2": "Ghost"
            },
            {
                "item_1": "Steam",
                "item_2": "Gondor"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Ambulance"
            },
            {
                "item_1": "Steam",
                "item_2": "Fire Dragon"
            },
            {
                "item_1": "Steam",
                "item_2": "Snowmobile"
            },
            {
                "item_1": "Steam",
                "item_2": "Bacteria"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Ice Cream"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Clay"
            },
            {
                "item_1": "Locomotive",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Steam",
                "item_2": "Sodium"
            },
            {
                "item_1": "Steam",
                "item_2": "Sleigh"
            },
            {
                "item_1": "Fire",
                "item_2": "Steam Locomotive"
            }
        ]
    },
    "Vacation": {
        "emoticon": "🏖️",
        "mostEfficientRecipe": {
            "item_1": "Whiskey",
            "item_2": "Beach"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Whiskey",
                "item_2": "Beach"
            }
        ]
    },
    "Rainbow Sushi": {
        "emoticon": "🍣",
        "mostEfficientRecipe": {
            "item_1": "Sushi Tsunami",
            "item_2": "Rainbow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sushi Tsunami",
                "item_2": "Rainbow"
            }
        ]
    },
    "Saki": {
        "emoticon": "🍶",
        "mostEfficientRecipe": {
            "item_1": "Sake",
            "item_2": "Rain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sake",
                "item_2": "Rain"
            }
        ]
    },
    "Fishing": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Train",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Train",
                "item_2": "Fish"
            },
            {
                "item_1": "Vacation",
                "item_2": "Fish"
            }
        ]
    },
    "Alligator": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Vacation",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Vacation",
                "item_2": "Swamp"
            },
            {
                "item_1": "Crocodile",
                "item_2": "Water"
            }
        ]
    },
    "Salmon": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Sushi",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Sushi",
                "item_2": "Lake"
            },
            {
                "item_1": "Earth",
                "item_2": "Rainbow Trout"
            }
        ]
    },
    "Crocodile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Crocodile Dundee"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alligator",
                "item_2": "Lake"
            },
            {
                "item_1": "Alligator",
                "item_2": "Wave"
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
                "item_2": "Fishbowl"
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
                "item_2": "Fishing"
            },
            {
                "item_1": "Alligator",
                "item_2": "Saki"
            },
            {
                "item_1": "Captain Crocodile",
                "item_2": "Fisherman"
            },
            {
                "item_1": "Lake",
                "item_2": "Warmth"
            },
            {
                "item_1": "Crocodile Dundee",
                "item_2": "Basket"
            },
            {
                "item_1": "Lake",
                "item_2": "Life"
            },
            {
                "item_1": "Water",
                "item_2": "Crocodile Dundee"
            },
            {
                "item_1": "Fire",
                "item_2": "Crocodile Dundee"
            }
        ]
    },
    "Drunk": {
        "emoticon": "🍺",
        "mostEfficientRecipe": {
            "item_1": "Saki",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Saki",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Drunk",
                "item_2": "Water"
            },
            {
                "item_1": "Drunk",
                "item_2": "Sake"
            },
            {
                "item_1": "Drunk",
                "item_2": "Sushi Tsunami"
            },
            {
                "item_1": "Drunk",
                "item_2": "Whiskey"
            },
            {
                "item_1": "Smaug",
                "item_2": "Wine"
            },
            {
                "item_1": "Eiffel Tower",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Leak",
                "item_2": "Alcohol"
            }
        ]
    },
    "Fishing Pole": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Fishing",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fishing",
                "item_2": "Dragon"
            }
        ]
    },
    "Rainbow Alligator": {
        "emoticon": "🌈🐊",
        "mostEfficientRecipe": {
            "item_1": "Alligator",
            "item_2": "Rainbow Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Alligator",
                "item_2": "Rainbow Sushi"
            }
        ]
    },
    "Rainbow Trout": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Salmon",
            "item_2": "Rainbow Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Salmon",
                "item_2": "Rainbow Sushi"
            }
        ]
    },
    "Rainbow Crocodile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Crocodile",
            "item_2": "Rainbow Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Crocodile",
                "item_2": "Rainbow Sushi"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Honeymoon"
            },
            {
                "item_1": "Steam",
                "item_2": "Rainbow Crocodile"
            }
        ]
    },
    "Hillbilly": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Drunk",
            "item_2": "Moonshine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Drunk",
                "item_2": "Moonshine"
            }
        ]
    },
    "Ice Fishing": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Fishing Pole",
            "item_2": "Lotus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fishing Pole",
                "item_2": "Lotus"
            },
            {
                "item_1": "Ice Fishing",
                "item_2": "Rainbow Dash"
            },
            {
                "item_1": "Ice Fishing",
                "item_2": "Car"
            },
            {
                "item_1": "Fire",
                "item_2": "Ice Fishing"
            }
        ]
    },
    "Rainbow Starfish": {
        "emoticon": "🌈",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Alligator",
            "item_2": "Starfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Alligator",
                "item_2": "Starfish"
            },
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Bee"
            }
        ]
    },
    "Rainbowfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Trout",
            "item_2": "Starfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Trout",
                "item_2": "Starfish"
            }
        ]
    },
    "Captain Crocodile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Hot Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Crocodile",
                "item_2": "Captain"
            },
            {
                "item_1": "Lake",
                "item_2": "Hot Water"
            }
        ]
    },
    "Redneck": {
        "emoticon": "🐷",
        "mostEfficientRecipe": {
            "item_1": "Hillbilly",
            "item_2": "Rainbow Dash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hillbilly",
                "item_2": "Rainbow Dash"
            },
            {
                "item_1": "Earth",
                "item_2": "Hillbilly"
            }
        ]
    },
    "Cold": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Ice Fishing",
            "item_2": "Heart"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ice Fishing",
                "item_2": "Heart"
            }
        ]
    },
    "Water Ski": {
        "emoticon": "🏄",
        "mostEfficientRecipe": {
            "item_1": "Rainbow Starfish",
            "item_2": "Hydrofluoric Acid"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Rainbow Starfish",
                "item_2": "Hydrofluoric Acid"
            }
        ]
    },
    "Ganga": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Firewater"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Firewater"
            }
        ]
    },
    "Crocodile Dundee": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Tree"
            },
            {
                "item_1": "Crocodile Dundee",
                "item_2": "Gold"
            },
            {
                "item_1": "Crocodile Dundee",
                "item_2": "Oil"
            }
        ]
    },
    "Truck": {
        "emoticon": "🚚",
        "mostEfficientRecipe": {
            "item_1": "Redneck",
            "item_2": "Money"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Redneck",
                "item_2": "Money"
            }
        ]
    },
    "French Fries": {
        "emoticon": "🍟",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Taj Mahal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cold",
                "item_2": "Potato"
            },
            {
                "item_1": "Steam",
                "item_2": "Taj Mahal"
            }
        ]
    },
    "Dock": {
        "emoticon": "🪜",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Landing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Landing"
            }
        ]
    },
    "Petrol": {
        "emoticon": "⛽",
        "mostEfficientRecipe": {
            "item_1": "Ganga",
            "item_2": "Land"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ganga",
                "item_2": "Land"
            }
        ]
    },
    "Werewolf": {
        "emoticon": "🐺",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Moon"
            },
            {
                "item_1": "Werewolf",
                "item_2": "Moon"
            },
            {
                "item_1": "Steam",
                "item_2": "Werewolf"
            }
        ]
    },
    "Skydiver": {
        "emoticon": "🪂",
        "mostEfficientRecipe": {
            "item_1": "Truck",
            "item_2": "Forest"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Truck",
                "item_2": "Forest"
            }
        ]
    },
    "Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Egg"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Egg"
            }
        ]
    },
    "Port": {
        "emoticon": "🏝️",
        "mostEfficientRecipe": {
            "item_1": "Dock",
            "item_2": "Farm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dock",
                "item_2": "Farm"
            }
        ]
    },
    "Snowmobile": {
        "emoticon": "🏂",
        "mostEfficientRecipe": {
            "item_1": "Petrol",
            "item_2": "Snowman"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Petrol",
                "item_2": "Snowman"
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
                "item_1": "Lake",
                "item_2": "Mine"
            },
            {
                "item_1": "Earth",
                "item_2": "Charcoal"
            },
            {
                "item_1": "Earth",
                "item_2": "Coal"
            }
        ]
    },
    "Teacup": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Skydiver",
            "item_2": "Teapot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skydiver",
                "item_2": "Teapot"
            }
        ]
    },
    "Duckling": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Duck",
            "item_2": "Life"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Duck",
                "item_2": "Life"
            }
        ]
    },
    "Disease": {
        "emoticon": "🤒",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Potato"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Potato"
            }
        ]
    },
    "Martini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Vodka"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Vodka"
            }
        ]
    },
    "Oil Spill": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Gasoline"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Gasoline"
            }
        ]
    },
    "Salsa": {
        "emoticon": "🌶️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Spicy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Spicy"
            }
        ]
    },
    "Swan": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Prometheus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Prometheus"
            },
            {
                "item_1": "Odette",
                "item_2": "Dragon"
            },
            {
                "item_1": "Odette",
                "item_2": "Engine"
            },
            {
                "item_1": "Lake",
                "item_2": "Duckling"
            },
            {
                "item_1": "Odette",
                "item_2": "Smoke"
            },
            {
                "item_1": "Odette",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Lake",
                "item_2": "Ballet"
            },
            {
                "item_1": "Water",
                "item_2": "Ballet"
            },
            {
                "item_1": "Goose",
                "item_2": "Penguin"
            },
            {
                "item_1": "Earth",
                "item_2": "Odette"
            },
            {
                "item_1": "Water",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Wind",
                "item_2": "Ugly Duckling"
            },
            {
                "item_1": "Lake",
                "item_2": "Goose"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Alcohol"
            },
            {
                "item_1": "Jonah",
                "item_2": "Sailor Cannon"
            }
        ]
    },
    "Sickness": {
        "emoticon": "🤒",
        "mostEfficientRecipe": {
            "item_1": "Disease",
            "item_2": "Siren"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Disease",
                "item_2": "Siren"
            }
        ]
    },
    "Cocktail": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Martini",
            "item_2": "Firework"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Martini",
                "item_2": "Firework"
            }
        ]
    },
    "Captain Planet": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Oil Spill",
            "item_2": "Pirate"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Oil Spill",
                "item_2": "Pirate"
            },
            {
                "item_1": "Captain Planet",
                "item_2": "Pop"
            },
            {
                "item_1": "Captain Planet",
                "item_2": "Mermaid"
            },
            {
                "item_1": "Captain Planet",
                "item_2": "Blizzard"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Pottery"
            },
            {
                "item_1": "Captain Pollen",
                "item_2": "Explosion"
            },
            {
                "item_1": "Lake",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Fire",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Goose",
                "item_2": "Iceberg"
            }
        ]
    },
    "Charcoal": {
        "emoticon": "🍖",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Burnt Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Burnt Toast"
            }
        ]
    },
    "Swan Lake": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Swan",
            "item_2": "Pirate"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swan",
                "item_2": "Pirate"
            }
        ]
    },
    "Latte": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Coffee"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Coffee"
            }
        ]
    },
    "Rum": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Cocktail",
            "item_2": "Pirate"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cocktail",
                "item_2": "Pirate"
            },
            {
                "item_1": "Grog",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Grog",
                "item_2": "Water"
            }
        ]
    },
    "Captain Pollen": {
        "emoticon": "🐝👨‍✈",
        "mostEfficientRecipe": {
            "item_1": "Captain Planet",
            "item_2": "Sneeze"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Captain Planet",
                "item_2": "Sneeze"
            },
            {
                "item_1": "Lake",
                "item_2": "Swamp Thing"
            }
        ]
    },
    "Hangover Cure": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Charcoal",
            "item_2": "Hangover"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Charcoal",
                "item_2": "Hangover"
            }
        ]
    },
    "Odette": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Swan Lake",
            "item_2": "Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Swan Lake",
                "item_2": "Cure"
            }
        ]
    },
    "Starbucks": {
        "emoticon": "☕️",
        "mostEfficientRecipe": {
            "item_1": "Latte",
            "item_2": "Devil"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Latte",
                "item_2": "Devil"
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
            }
        ]
    },
    "Bungee Jumper": {
        "emoticon": "🤸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Skydiver"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Skydiver"
            }
        ]
    },
    "Harbor": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Port"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Port"
            }
        ]
    },
    "Taco": {
        "emoticon": "🌮",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Salsa"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Salsa"
            },
            {
                "item_1": "Periscope",
                "item_2": "Chicken"
            }
        ]
    },
    "Pollution": {
        "emoticon": "🌫️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Oil Spill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Starbucks",
                "item_2": "Rain"
            },
            {
                "item_1": "Hydrogen",
                "item_2": "Chili"
            },
            {
                "item_1": "Earth",
                "item_2": "Grass"
            },
            {
                "item_1": "Water",
                "item_2": "Landfill"
            },
            {
                "item_1": "Fire",
                "item_2": "Landfill"
            },
            {
                "item_1": "Steam",
                "item_2": "Oil Spill"
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
    "Frog": {
        "emoticon": "🐸",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Rum"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Rum"
            },
            {
                "item_1": "Water",
                "item_2": "Prince"
            }
        ]
    },
    "Shipwreck": {
        "emoticon": "🚢",
        "mostEfficientRecipe": {
            "item_1": "Harbor",
            "item_2": "Tsunami"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Harbor",
                "item_2": "Tsunami"
            }
        ]
    },
    "Salad": {
        "emoticon": "🥗",
        "mostEfficientRecipe": {
            "item_1": "Taco",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Taco",
                "item_2": "Plant"
            }
        ]
    },
    "Tacocat": {
        "emoticon": "🌮🐱",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Taco"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Taco"
            },
            {
                "item_1": "Lake",
                "item_2": "Tacocat"
            },
            {
                "item_1": "Water",
                "item_2": "Tacocat"
            },
            {
                "item_1": "Wind",
                "item_2": "Tacocat"
            }
        ]
    },
    "Dance": {
        "emoticon": "💃",
        "mostEfficientRecipe": {
            "item_1": "Ballet",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ballet",
                "item_2": "Earth"
            }
        ]
    },
    "Prince": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Frog",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Frog",
                "item_2": "Wind"
            },
            {
                "item_1": "Periscope",
                "item_2": "Ballet"
            }
        ]
    },
    "King": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Aquaman",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Prince"
            },
            {
                "item_1": "Aquaman",
                "item_2": "Earth"
            }
        ]
    },
    "Pharaoh": {
        "emoticon": "🙋",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Water Ski"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Water Ski"
            }
        ]
    },
    "Pyramid": {
        "emoticon": "🗿",
        "mostEfficientRecipe": {
            "item_1": "Nile",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pharaoh",
                "item_2": "Dune"
            },
            {
                "item_1": "Earth",
                "item_2": "Sphinx"
            },
            {
                "item_1": "Nile",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Egypt"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Egypt"
            },
            {
                "item_1": "Steam",
                "item_2": "Egypt"
            }
        ]
    },
    "UFO": {
        "emoticon": "🛸",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Alien"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pyramid",
                "item_2": "Flying"
            },
            {
                "item_1": "Earth",
                "item_2": "Alien"
            },
            {
                "item_1": "Earth",
                "item_2": "Flying Burger"
            }
        ]
    },
    "Soggy Fries": {
        "emoticon": "🍟",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "French Fries"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "French Fries"
            }
        ]
    },
    "Soggy Kite": {
        "emoticon": "🪁",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Duckling"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Duckling"
            }
        ]
    },
    "Paper": {
        "emoticon": "📃",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Swan Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Swan Lake"
            },
            {
                "item_1": "Origami",
                "item_2": "Mirage"
            },
            {
                "item_1": "Earth",
                "item_2": "Recycle"
            },
            {
                "item_1": "Lake",
                "item_2": "Origami"
            },
            {
                "item_1": "Scratch",
                "item_2": "River"
            }
        ]
    },
    "Origami": {
        "emoticon": "🎌",
        "mostEfficientRecipe": {
            "item_1": "Paper",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paper",
                "item_2": "Goldfish"
            }
        ]
    },
    "Grog": {
        "emoticon": "🍺",
        "mostEfficientRecipe": {
            "item_1": "Origami",
            "item_2": "Lightning"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Origami",
                "item_2": "Lightning"
            },
            {
                "item_1": "Fire",
                "item_2": "Rum"
            }
        ]
    },
    "Paper Boat": {
        "emoticon": "🚣",
        "mostEfficientRecipe": {
            "item_1": "Origami",
            "item_2": "Ship"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Origami",
                "item_2": "Ship"
            }
        ]
    },
    "Ice Cream": {
        "emoticon": "🍦",
        "mostEfficientRecipe": {
            "item_1": "Grog",
            "item_2": "Ice"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Grog",
                "item_2": "Ice"
            },
            {
                "item_1": "Birthday",
                "item_2": "Ice Fishing"
            }
        ]
    },
    "Noah’s Ark": {
        "emoticon": "🐘",
        "mostEfficientRecipe": {
            "item_1": "Paper Boat",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paper Boat",
                "item_2": "Holy Water"
            }
        ]
    },
    "Fire Ski": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Water Ski"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Water Ski"
            }
        ]
    },
    "Flood": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Noah’s Ark",
            "item_2": "Holy Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Noah’s Ark",
                "item_2": "Holy Water"
            },
            {
                "item_1": "Water",
                "item_2": "Noah’s Ark"
            }
        ]
    },
    "McDonalds": {
        "emoticon": "🍔",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "French Fries"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "French Fries"
            }
        ]
    },
    "Ark": {
        "emoticon": "🐘",
        "mostEfficientRecipe": {
            "item_1": "Flood",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flood",
                "item_2": "Bird"
            },
            {
                "item_1": "Noah",
                "item_2": "Smoke"
            },
            {
                "item_1": "Noah",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Noah",
                "item_2": "Wind"
            },
            {
                "item_1": "Wind",
                "item_2": "Rainbow Alligator"
            },
            {
                "item_1": "Noah",
                "item_2": "Vase"
            },
            {
                "item_1": "Noah",
                "item_2": "Solar"
            },
            {
                "item_1": "Noah",
                "item_2": "Brick"
            },
            {
                "item_1": "Noah",
                "item_2": "Explosion"
            }
        ]
    },
    "Coal": {
        "emoticon": "⚫️",
        "mostEfficientRecipe": {
            "item_1": "McDonalds",
            "item_2": "Dust Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "McDonalds",
                "item_2": "Dust Storm"
            }
        ]
    },
    "Roast Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Duckling"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Duckling"
            }
        ]
    },
    "Flambé": {
        "emoticon": "🍽️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Martini"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Martini"
            }
        ]
    },
    "Sandwich": {
        "emoticon": "🥪",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Roast Duck",
                "item_2": "Sandstorm"
            },
            {
                "item_1": "Earth",
                "item_2": "Ambulance"
            },
            {
                "item_1": "Steam",
                "item_2": "Toast"
            }
        ]
    },
    "Fire Tornado": {
        "emoticon": "🌪️",
        "mostEfficientRecipe": {
            "item_1": "Fridge",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flambé",
                "item_2": "Tornado"
            },
            {
                "item_1": "Fridge",
                "item_2": "Marsh"
            }
        ]
    },
    "Fish Sandwich": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Sandwich",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sandwich",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Fire",
                "item_2": "Fish Sandwich"
            }
        ]
    },
    "Fireman": {
        "emoticon": "🚒",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Bungee Jumper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Bungee Jumper"
            }
        ]
    },
    "Flying Sandwich": {
        "emoticon": "🥪",
        "mostEfficientRecipe": {
            "item_1": "Fish Sandwich",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fish Sandwich",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Flying Saucer",
                "item_2": "Sushi"
            }
        ]
    },
    "Burrito": {
        "emoticon": "🌯",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Taco"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Taco"
            }
        ]
    },
    "Flying Fish Sandwich": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Ballet"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Ballet"
            },
            {
                "item_1": "Flying Saucer",
                "item_2": "Lightning"
            }
        ]
    },
    "Wet Burrito": {
        "emoticon": "🌯",
        "mostEfficientRecipe": {
            "item_1": "Burrito",
            "item_2": "Mist"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Burrito",
                "item_2": "Mist"
            }
        ]
    },
    "Goldfish Sandwich": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Flying Fish Sandwich",
            "item_2": "Goldfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Fish Sandwich",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Goldfish"
            }
        ]
    },
    "Alien": {
        "emoticon": "👽",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sandwich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "UFO"
            },
            {
                "item_1": "Wind",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Lake",
                "item_2": "UFO"
            }
        ]
    },
    "Dragonfish": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Goldfish Sandwich",
            "item_2": "Marsh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Goldfish Sandwich",
                "item_2": "Marsh"
            }
        ]
    },
    "Fire Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Roast Duck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Roast Duck"
            }
        ]
    },
    "Sea Dragon": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Flying Sandwich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Flying Sandwich"
            },
            {
                "item_1": "Water",
                "item_2": "Dragonfish"
            }
        ]
    },
    "Fire Dragon": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Sea Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Sea Dragon"
            }
        ]
    },
    "Fire Engine": {
        "emoticon": "🚒",
        "mostEfficientRecipe": {
            "item_1": "Fire Dragon",
            "item_2": "Engine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire Dragon",
                "item_2": "Engine"
            }
        ]
    },
    "Noah": {
        "emoticon": "🐘",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Ark"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Ark"
            }
        ]
    },
    "Soggy": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Sandwich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Sandwich"
            }
        ]
    },
    "Ambulance": {
        "emoticon": "🚑",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Diamond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Ice Fishing"
            },
            {
                "item_1": "Steam",
                "item_2": "Diamond"
            },
            {
                "item_1": "Paramedic",
                "item_2": "Land"
            }
        ]
    },
    "Goose": {
        "emoticon": "🦢",
        "mostEfficientRecipe": {
            "item_1": "Goosebumps",
            "item_2": "Bird"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Noah",
                "item_2": "Phoenix"
            },
            {
                "item_1": "Goosebumps",
                "item_2": "Bird"
            },
            {
                "item_1": "Water",
                "item_2": "Shattered"
            },
            {
                "item_1": "Gosling",
                "item_2": "Swamp"
            },
            {
                "item_1": "Gosling",
                "item_2": "Cloud"
            },
            {
                "item_1": "Water",
                "item_2": "Gosling"
            },
            {
                "item_1": "Wind",
                "item_2": "Gosling"
            }
        ]
    },
    "Dirty Martini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Martini"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Martini"
            },
            {
                "item_1": "Clean Martini",
                "item_2": "Fog"
            },
            {
                "item_1": "Wind",
                "item_2": "Prince"
            },
            {
                "item_1": "Wind",
                "item_2": "Clean Martini"
            },
            {
                "item_1": "Water",
                "item_2": "Clean Martini"
            },
            {
                "item_1": "Fire",
                "item_2": "Clean Martini"
            },
            {
                "item_1": "Lake",
                "item_2": "Clean Martini"
            },
            {
                "item_1": "Steamy Martini",
                "item_2": "Rice"
            }
        ]
    },
    "Shattered": {
        "emoticon": "💔",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Sickness"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Sickness"
            }
        ]
    },
    "Goosebumps": {
        "emoticon": "😱",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Hangover Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Hangover Cure"
            }
        ]
    },
    "Clean Martini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Starbucks"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Starbucks"
            }
        ]
    },
    "Flying Squirrel": {
        "emoticon": "🐿️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Bungee Jumper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Bungee Jumper"
            }
        ]
    },
    "Chills": {
        "emoticon": "🥶",
        "mostEfficientRecipe": {
            "item_1": "Goosebumps",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Goosebumps",
                "item_2": "Energy"
            }
        ]
    },
    "Arrakis": {
        "emoticon": "🪨",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Pharaoh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Pharaoh"
            }
        ]
    },
    "Flying Saucer": {
        "emoticon": "🛸",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "UFO"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "UFO"
            }
        ]
    },
    "Fridge": {
        "emoticon": "🧊",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Soggy Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Soggy Kite"
            }
        ]
    },
    "Flying Roast Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Roast Duck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Roast Duck"
            },
            {
                "item_1": "Flying Roast Duck",
                "item_2": "Earth"
            },
            {
                "item_1": "Wind",
                "item_2": "Flying Roast Duck"
            }
        ]
    },
    "Flying Goldfish Sandwich": {
        "emoticon": "🐠🍞✈️",
        "mostEfficientRecipe": {
            "item_1": "Flying Saucer",
            "item_2": "Lava"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Flying Saucer",
                "item_2": "Lava"
            }
        ]
    },
    "Frost": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Flying Saucer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Flying Saucer"
            }
        ]
    },
    "Hail": {
        "emoticon": "❄️",
        "mostEfficientRecipe": {
            "item_1": "Frost",
            "item_2": "Rain"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Frost",
                "item_2": "Rain"
            }
        ]
    },
    "Gosling": {
        "emoticon": "🐐",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Goose"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Goose"
            },
            {
                "item_1": "Ryan",
                "item_2": "Lake"
            }
        ]
    },
    "Ryan": {
        "emoticon": "🧔",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Flying Roast Duck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Flying Roast Duck"
            },
            {
                "item_1": "Fire",
                "item_2": "Gosling"
            },
            {
                "item_1": "Steam",
                "item_2": "Gosling"
            }
        ]
    },
    "Shower": {
        "emoticon": "🚿",
        "mostEfficientRecipe": {
            "item_1": "Ryan",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ryan",
                "item_2": "Water"
            },
            {
                "item_1": "Sauna",
                "item_2": "Fire"
            },
            {
                "item_1": "Steam",
                "item_2": "Drain"
            }
        ]
    },
    "Aquaman": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Ryan",
            "item_2": "Fishbowl"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ryan",
                "item_2": "Fishbowl"
            }
        ]
    },
    "Bath": {
        "emoticon": "🛀",
        "mostEfficientRecipe": {
            "item_1": "Shower",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Shower",
                "item_2": "Ocean"
            }
        ]
    },
    "Sauna": {
        "emoticon": "🧖‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Cure"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Shower"
            },
            {
                "item_1": "Steam",
                "item_2": "Sweat"
            },
            {
                "item_1": "Broom",
                "item_2": "Heat"
            },
            {
                "item_1": "Steam",
                "item_2": "Cure"
            },
            {
                "item_1": "Steam Engine",
                "item_2": "Noah"
            }
        ]
    },
    "Sweat": {
        "emoticon": "💦",
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
    "Salt": {
        "emoticon": "🧂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Chef"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sweat",
                "item_2": "Water"
            },
            {
                "item_1": "Brine",
                "item_2": "Earth"
            },
            {
                "item_1": "Water",
                "item_2": "Sodium"
            },
            {
                "item_1": "Brine",
                "item_2": "Swamp"
            },
            {
                "item_1": "Wind",
                "item_2": "Brine"
            },
            {
                "item_1": "Wind",
                "item_2": "Sodium"
            },
            {
                "item_1": "Steam",
                "item_2": "Salt Water"
            },
            {
                "item_1": "Steam",
                "item_2": "Chef"
            }
        ]
    },
    "Brine": {
        "emoticon": "🧂",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Salt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Salt"
            },
            {
                "item_1": "Fire",
                "item_2": "Salt Water"
            }
        ]
    },
    "Salt Water": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Brine",
            "item_2": "Water"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Brine",
                "item_2": "Water"
            }
        ]
    },
    "Sodium": {
        "emoticon": "🧂",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Salt"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Salt"
            },
            {
                "item_1": "Wind",
                "item_2": "Smell"
            }
        ]
    },
    "Pickle": {
        "emoticon": "🥒",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Captain Pollen"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Bath"
            },
            {
                "item_1": "Dill",
                "item_2": "Cook"
            },
            {
                "item_1": "Dill",
                "item_2": "Lily"
            },
            {
                "item_1": "Earth",
                "item_2": "Captain Pollen"
            },
            {
                "item_1": "Dill",
                "item_2": "Vase"
            },
            {
                "item_1": "Dill",
                "item_2": "Blood"
            },
            {
                "item_1": "Dill",
                "item_2": "Puddle"
            },
            {
                "item_1": "Dill",
                "item_2": "Pottery"
            },
            {
                "item_1": "Earth",
                "item_2": "Dill"
            },
            {
                "item_1": "Water",
                "item_2": "Cucumber"
            },
            {
                "item_1": "Fire",
                "item_2": "Cucumber"
            },
            {
                "item_1": "Wind",
                "item_2": "Cucumber"
            },
            {
                "item_1": "Steam",
                "item_2": "Flying Burger"
            }
        ]
    },
    "Smell": {
        "emoticon": "👃",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Fever"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Salt Water",
                "item_2": "Lake"
            },
            {
                "item_1": "Steam",
                "item_2": "Fever"
            }
        ]
    },
    "Sailor": {
        "emoticon": "⛵️",
        "mostEfficientRecipe": {
            "item_1": "Salt Water",
            "item_2": "Sail"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Salt Water",
                "item_2": "Sail"
            }
        ]
    },
    "Hydrogen": {
        "emoticon": "💧",
        "mostEfficientRecipe": {
            "item_1": "Sodium",
            "item_2": "Balloon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sodium",
                "item_2": "Balloon"
            },
            {
                "item_1": "Water",
                "item_2": "Hydrogen"
            },
            {
                "item_1": "Balrog",
                "item_2": "Tornado"
            }
        ]
    },
    "Dill": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Pickle",
            "item_2": "Heat"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pickle",
                "item_2": "Heat"
            }
        ]
    },
    "Stink": {
        "emoticon": "💩",
        "mostEfficientRecipe": {
            "item_1": "Perfume",
            "item_2": "Amoeba"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Smell",
                "item_2": "Fever"
            },
            {
                "item_1": "Water",
                "item_2": "Skunk"
            },
            {
                "item_1": "Fire",
                "item_2": "Skunk"
            },
            {
                "item_1": "Wind",
                "item_2": "Skunk"
            },
            {
                "item_1": "Smaug",
                "item_2": "Skunk"
            },
            {
                "item_1": "Perfume",
                "item_2": "Amoeba"
            }
        ]
    },
    "Sailor Moon": {
        "emoticon": "🌙",
        "mostEfficientRecipe": {
            "item_1": "Sailor",
            "item_2": "Hot"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sailor",
                "item_2": "Hot"
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
    "Skunk": {
        "emoticon": "🦨",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Frog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Frog"
            }
        ]
    },
    "Sailor Cannon": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Sailor Moon",
            "item_2": "Solar"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sailor Moon",
                "item_2": "Solar"
            }
        ]
    },
    "Tremor": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Dance"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Dance"
            }
        ]
    },
    "Recycle": {
        "emoticon": "♻️",
        "mostEfficientRecipe": {
            "item_1": "Trash",
            "item_2": "Solar"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Trash",
                "item_2": "Solar"
            }
        ]
    },
    "Kingdom": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "King"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "King"
            }
        ]
    },
    "Burger": {
        "emoticon": "🍔",
        "mostEfficientRecipe": {
            "item_1": "Sailor Cannon",
            "item_2": "Ash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sailor Cannon",
                "item_2": "Ash"
            }
        ]
    },
    "Earthquake": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Fire Tornado"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Fire Tornado"
            },
            {
                "item_1": "Jonah",
                "item_2": "Recycle"
            }
        ]
    },
    "Battery": {
        "emoticon": "🔋",
        "mostEfficientRecipe": {
            "item_1": "Recycle",
            "item_2": "Energy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Recycle",
                "item_2": "Energy"
            }
        ]
    },
    "Castle": {
        "emoticon": "🏰",
        "mostEfficientRecipe": {
            "item_1": "Kingdom",
            "item_2": "Fog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Kingdom",
                "item_2": "Fog"
            },
            {
                "item_1": "Moat",
                "item_2": "Swamp"
            },
            {
                "item_1": "Moat",
                "item_2": "Cloud"
            },
            {
                "item_1": "Wall",
                "item_2": "Dragon"
            }
        ]
    },
    "Flying Burger": {
        "emoticon": "🍔",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Flying Goldfish Sandwich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Flying Goldfish Sandwich"
            }
        ]
    },
    "Cucumber": {
        "emoticon": "🥒",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Pickle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Pickle"
            }
        ]
    },
    "Vapor": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Mouthwash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sailor"
            },
            {
                "item_1": "Steam",
                "item_2": "Mosquito"
            },
            {
                "item_1": "Steam",
                "item_2": "Mouthwash"
            }
        ]
    },
    "Mordor": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Castle",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Castle",
                "item_2": "Volcano"
            },
            {
                "item_1": "Hexagon",
                "item_2": "Steam"
            }
        ]
    },
    "Sailor Earth": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Sailor Moon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Sailor Moon"
            }
        ]
    },
    "Landfill": {
        "emoticon": "🗑️",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Trash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Trash"
            }
        ]
    },
    "Cow": {
        "emoticon": "🐄",
        "mostEfficientRecipe": {
            "item_1": "Vapor",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Vapor",
                "item_2": "Ocean"
            }
        ]
    },
    "Sauron": {
        "emoticon": "👹",
        "mostEfficientRecipe": {
            "item_1": "Mordor",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mordor",
                "item_2": "Steam"
            },
            {
                "item_1": "Coral",
                "item_2": "Wave"
            },
            {
                "item_1": "Reef",
                "item_2": "Fish"
            },
            {
                "item_1": "Wind",
                "item_2": "Mordor"
            }
        ]
    },
    "Grass": {
        "emoticon": "🌱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Cow"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Cow"
            }
        ]
    },
    "Dragonfly": {
        "emoticon": "🐛",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Stink"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Stink"
            }
        ]
    },
    "Mosquito": {
        "emoticon": "🦟",
        "mostEfficientRecipe": {
            "item_1": "Dragonfly",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dragonfly",
                "item_2": "Swamp"
            },
            {
                "item_1": "Perfume",
                "item_2": "Malaria"
            }
        ]
    },
    "Moat": {
        "emoticon": "🏰",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Castle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Castle"
            }
        ]
    },
    "Gondor": {
        "emoticon": "🏰",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Mordor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Mordor"
            }
        ]
    },
    "Atlantis": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Gondor",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gondor",
                "item_2": "Ocean"
            },
            {
                "item_1": "Earth",
                "item_2": "Golem"
            }
        ]
    },
    "Coral": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Castle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Atlantis",
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
                "item_1": "Water",
                "item_2": "Reef"
            },
            {
                "item_1": "Reef",
                "item_2": "Goldfish"
            },
            {
                "item_1": "Reef",
                "item_2": "Engine"
            },
            {
                "item_1": "Fire",
                "item_2": "Castle"
            },
            {
                "item_1": "Reef",
                "item_2": "Rainbow"
            },
            {
                "item_1": "Reef",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Coral Reef",
                "item_2": "Plant"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Reef"
            },
            {
                "item_1": "Lake",
                "item_2": "Coral Reef"
            },
            {
                "item_1": "Perfume",
                "item_2": "Coral Reef"
            }
        ]
    },
    "Reef": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Coral",
            "item_2": "Lake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Coral",
                "item_2": "Lake"
            },
            {
                "item_1": "Sphinx",
                "item_2": "Tsunami"
            }
        ]
    },
    "Coral Reef": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Stink"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Stink"
            }
        ]
    },
    "Balrog": {
        "emoticon": "🔥",
        "mostEfficientRecipe": {
            "item_1": "Reef",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Reef",
                "item_2": "Ocean"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Gandalf"
            }
        ]
    },
    "Golem": {
        "emoticon": "🏛️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Balrog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Balrog"
            },
            {
                "item_1": "Balrog",
                "item_2": "Windmill"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Balrog"
            },
            {
                "item_1": "Geothermal",
                "item_2": "Statue"
            }
        ]
    },
    "Statue": {
        "emoticon": "🗽",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Golem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Golem"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Golem"
            },
            {
                "item_1": "Perfume",
                "item_2": "Statue"
            }
        ]
    },
    "Fart": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Fartfish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Balrog",
                "item_2": "Mist"
            },
            {
                "item_1": "Fire",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Perfume",
                "item_2": "Fart"
            }
        ]
    },
    "Thunder": {
        "emoticon": "⛈️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Tremor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Tremor"
            }
        ]
    },
    "Sphinx": {
        "emoticon": "🐫",
        "mostEfficientRecipe": {
            "item_1": "Statue",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Statue",
                "item_2": "Stone"
            },
            {
                "item_1": "Wind",
                "item_2": "Statue"
            }
        ]
    },
    "Fartfish": {
        "emoticon": "🐠",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Castle"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Castle"
            }
        ]
    },
    "Malaria": {
        "emoticon": "🦟",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Mosquito"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Mosquito"
            },
            {
                "item_1": "Wind",
                "item_2": "Malaria"
            }
        ]
    },
    "Middle Earth": {
        "emoticon": "🌎",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Gondor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Gondor"
            }
        ]
    },
    "Nile": {
        "emoticon": "🐊",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Malaria"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Malaria"
            },
            {
                "item_1": "Egypt",
                "item_2": "Water"
            }
        ]
    },
    "Egypt": {
        "emoticon": "🇪🇬",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Nile"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Nile"
            },
            {
                "item_1": "Steam",
                "item_2": "Nile"
            }
        ]
    },
    "Hobbit": {
        "emoticon": "🍄",
        "mostEfficientRecipe": {
            "item_1": "Middle Earth",
            "item_2": "Wind"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Middle Earth",
                "item_2": "Wind"
            },
            {
                "item_1": "Gollum",
                "item_2": "Wind"
            },
            {
                "item_1": "Gollum",
                "item_2": "Earth"
            }
        ]
    },
    "Smeagol": {
        "emoticon": "🐍",
        "mostEfficientRecipe": {
            "item_1": "Gollum",
            "item_2": "Mirage"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hobbit",
                "item_2": "Water"
            },
            {
                "item_1": "Gollum",
                "item_2": "Mirage"
            }
        ]
    },
    "Gollum": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Soggy Kite"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Smeagol"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Wave"
            },
            {
                "item_1": "Earth",
                "item_2": "Smeagol"
            },
            {
                "item_1": "Earth",
                "item_2": "Smaug"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Cure"
            },
            {
                "item_1": "Lake",
                "item_2": "Soggy Kite"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Potion"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Medicine"
            },
            {
                "item_1": "Lake",
                "item_2": "Noah’s Ark"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Sick"
            },
            {
                "item_1": "Lake",
                "item_2": "Ark"
            },
            {
                "item_1": "Lake",
                "item_2": "Roast Duck"
            },
            {
                "item_1": "Lake",
                "item_2": "Sandwich"
            },
            {
                "item_1": "Lake",
                "item_2": "Fish Sandwich"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Sandwich"
            },
            {
                "item_1": "Lake",
                "item_2": "Flying Fish Sandwich"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Amoeba"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Microscope"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Splash"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Magnifying Glass"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Burn"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Cannon"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Sun"
            },
            {
                "item_1": "Lake",
                "item_2": "Gosling"
            },
            {
                "item_1": "Smeagol",
                "item_2": "Fireworks"
            },
            {
                "item_1": "Lake",
                "item_2": "Grass"
            },
            {
                "item_1": "Steam",
                "item_2": "Smeagol"
            }
        ]
    },
    "Smaug": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hobbit"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hobbit"
            }
        ]
    },
    "Ring": {
        "emoticon": "💍",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Kiln"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Gollum"
            },
            {
                "item_1": "Gollum",
                "item_2": "Ash"
            },
            {
                "item_1": "Steam",
                "item_2": "Kiln"
            }
        ]
    },
    "Tutankhamun": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Pharaoh"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Pharaoh"
            },
            {
                "item_1": "Mummy",
                "item_2": "Lake"
            }
        ]
    },
    "Waterfall": {
        "emoticon": "🌊",
        "mostEfficientRecipe": {
            "item_1": "Lake",
            "item_2": "Shower"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Lake",
                "item_2": "Shower"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Rock"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Goldfish"
            }
        ]
    },
    "Lotr": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Gollum",
            "item_2": "Oasis"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gollum",
                "item_2": "Oasis"
            }
        ]
    },
    "Dragon Burger": {
        "emoticon": "🐉",
        "mostEfficientRecipe": {
            "item_1": "Smaug",
            "item_2": "Vapor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Smaug",
                "item_2": "Vapor"
            }
        ]
    },
    "Rivendell": {
        "emoticon": "🏞️",
        "mostEfficientRecipe": {
            "item_1": "Ring",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Ring",
                "item_2": "Flying Fish"
            },
            {
                "item_1": "Waterfall",
                "item_2": "Gondor"
            }
        ]
    },
    "Mummy": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Tutankhamun",
            "item_2": "Landfill"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tutankhamun",
                "item_2": "Landfill"
            },
            {
                "item_1": "Water",
                "item_2": "Tutankhamun"
            },
            {
                "item_1": "Curse",
                "item_2": "Tomb"
            },
            {
                "item_1": "Fire",
                "item_2": "Tutankhamun"
            },
            {
                "item_1": "Witch",
                "item_2": "Tutankhamun"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Tomb"
            },
            {
                "item_1": "Steam",
                "item_2": "Tutankhamun"
            }
        ]
    },
    "Tomb": {
        "emoticon": "🪦",
        "mostEfficientRecipe": {
            "item_1": "Mummy",
            "item_2": "Earth"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Mummy",
                "item_2": "Earth"
            }
        ]
    },
    "Curse": {
        "emoticon": "😈",
        "mostEfficientRecipe": {
            "item_1": "Tomb",
            "item_2": "Mummy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tomb",
                "item_2": "Mummy"
            }
        ]
    },
    "Hex": {
        "emoticon": "🔶",
        "mostEfficientRecipe": {
            "item_1": "Curse",
            "item_2": "Curse"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Curse",
                "item_2": "Curse"
            }
        ]
    },
    "Hexagon": {
        "emoticon": "⬢",
        "mostEfficientRecipe": {
            "item_1": "Hex",
            "item_2": "Hex"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hex",
                "item_2": "Hex"
            },
            {
                "item_1": "Hexagon",
                "item_2": "Hexagon"
            }
        ]
    },
    "Witch": {
        "emoticon": "🧙‍♀️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Storm"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hex",
                "item_2": "Lotr"
            },
            {
                "item_1": "Witch",
                "item_2": "Fire"
            },
            {
                "item_1": "Earth",
                "item_2": "Witch"
            },
            {
                "item_1": "Lake",
                "item_2": "Hex"
            },
            {
                "item_1": "Steam",
                "item_2": "Storm"
            },
            {
                "item_1": "Broom",
                "item_2": "Dragonfly"
            },
            {
                "item_1": "Broom",
                "item_2": "Landfill"
            },
            {
                "item_1": "Steam",
                "item_2": "Earthquake"
            },
            {
                "item_1": "Broom",
                "item_2": "Ceramic"
            },
            {
                "item_1": "Broom",
                "item_2": "Lily"
            },
            {
                "item_1": "Broom",
                "item_2": "Hell"
            },
            {
                "item_1": "Steam",
                "item_2": "Ryan"
            },
            {
                "item_1": "Broom",
                "item_2": "Hot Spring"
            },
            {
                "item_1": "Broom",
                "item_2": "Medicine"
            }
        ]
    },
    "Star": {
        "emoticon": "⭐️",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Hexagon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Hexagon"
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
                "item_1": "Witch",
                "item_2": "Star"
            },
            {
                "item_1": "Water",
                "item_2": "Witch"
            },
            {
                "item_1": "Power",
                "item_2": "Desert"
            }
        ]
    },
    "Gandalf": {
        "emoticon": "🧙‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Witch",
            "item_2": "Ocean"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Witch",
                "item_2": "Ocean"
            },
            {
                "item_1": "Gandalf",
                "item_2": "Gandalf"
            },
            {
                "item_1": "Spy",
                "item_2": "Lord of the Rings"
            }
        ]
    },
    "Zombie": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Virus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Star",
                "item_2": "Mummy"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Curse"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Star"
            },
            {
                "item_1": "Steam",
                "item_2": "Virus"
            }
        ]
    },
    "Black Hole": {
        "emoticon": "🕳️",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Wizard"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Wizard"
            },
            {
                "item_1": "Sink",
                "item_2": "Dark Matter"
            },
            {
                "item_1": "Fire",
                "item_2": "Dark Matter"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Tsunami"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Dark Matter"
            },
            {
                "item_1": "Earth",
                "item_2": "Cube"
            },
            {
                "item_1": "Dark Matter",
                "item_2": "Cloud"
            },
            {
                "item_1": "Lake",
                "item_2": "Dark Matter"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Stone"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Eruption"
            },
            {
                "item_1": "Vacuum",
                "item_2": "Airplane"
            }
        ]
    },
    "Ghost": {
        "emoticon": "👻",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Zombie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Zombie"
            }
        ]
    },
    "Skeleton": {
        "emoticon": "💀",
        "mostEfficientRecipe": {
            "item_1": "Zombie",
            "item_2": "Fire"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Zombie",
                "item_2": "Fire"
            }
        ]
    },
    "Dark Matter": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "Black Hole",
            "item_2": "Ghost"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Black Hole",
                "item_2": "Ghost"
            }
        ]
    },
    "Drain": {
        "emoticon": "🚽",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Black Hole"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Black Hole"
            },
            {
                "item_1": "Drain",
                "item_2": "Wave"
            },
            {
                "item_1": "Sink",
                "item_2": "Water"
            }
        ]
    },
    "Sink": {
        "emoticon": "🚿",
        "mostEfficientRecipe": {
            "item_1": "Drain",
            "item_2": "Skeleton"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Drain",
                "item_2": "Skeleton"
            },
            {
                "item_1": "Drain",
                "item_2": "Black Hole"
            },
            {
                "item_1": "Drain",
                "item_2": "Water"
            }
        ]
    },
    "Cube": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Earth",
            "item_2": "Hexagon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Earth",
                "item_2": "Hexagon"
            },
            {
                "item_1": "Skeleton",
                "item_2": "Witch"
            },
            {
                "item_1": "Cube",
                "item_2": "Cube"
            }
        ]
    },
    "Necromancer": {
        "emoticon": "🧟",
        "mostEfficientRecipe": {
            "item_1": "Skeleton",
            "item_2": "Wizard"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Skeleton",
                "item_2": "Wizard"
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
                "item_1": "Lake",
                "item_2": "Ocean"
            }
        ]
    },
    "Plug": {
        "emoticon": "🔌",
        "mostEfficientRecipe": {
            "item_1": "Drain",
            "item_2": "Sink"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Drain",
                "item_2": "Sink"
            }
        ]
    },
    "Hydroelectricity": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Sea",
            "item_2": "Necromancer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea",
                "item_2": "Necromancer"
            },
            {
                "item_1": "Power",
                "item_2": "Waterfall"
            }
        ]
    },
    "Socket": {
        "emoticon": "🔌",
        "mostEfficientRecipe": {
            "item_1": "Plug",
            "item_2": "Plug"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Plug",
                "item_2": "Plug"
            },
            {
                "item_1": "Socket",
                "item_2": "Socket"
            }
        ]
    },
    "Lego": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Cube",
            "item_2": "Swamp"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Cube",
                "item_2": "Swamp"
            }
        ]
    },
    "Time": {
        "emoticon": "⏰",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Black Hole"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Black Hole"
            }
        ]
    },
    "Whirlpool": {
        "emoticon": "🌀",
        "mostEfficientRecipe": {
            "item_1": "Sea",
            "item_2": "Black Hole"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sea",
                "item_2": "Black Hole"
            }
        ]
    },
    "Vacuum": {
        "emoticon": "🧹",
        "mostEfficientRecipe": {
            "item_1": "Broom",
            "item_2": "Cannon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Plug",
                "item_2": "Black Hole"
            },
            {
                "item_1": "Broom",
                "item_2": "Cannon"
            }
        ]
    },
    "Geothermal": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Hydroelectricity",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hydroelectricity",
                "item_2": "Volcano"
            }
        ]
    },
    "Pipe": {
        "emoticon": "🚰",
        "mostEfficientRecipe": {
            "item_1": "Socket",
            "item_2": "Smoke"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Socket",
                "item_2": "Smoke"
            }
        ]
    },
    "Steampunk": {
        "emoticon": "🕯️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Dragon"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Dragon"
            },
            {
                "item_1": "Steam",
                "item_2": "Atlantis"
            },
            {
                "item_1": "Steam",
                "item_2": "Leviathan"
            },
            {
                "item_1": "Jonah",
                "item_2": "Cure"
            },
            {
                "item_1": "Steam",
                "item_2": "Sphinx"
            },
            {
                "item_1": "Steam",
                "item_2": "SteamPunk"
            },
            {
                "item_1": "Steam",
                "item_2": "Statue of Liberty"
            },
            {
                "item_1": "Jet",
                "item_2": "Water"
            }
        ]
    },
    "Sashimi": {
        "emoticon": "🍣",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Sushi"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Sushi"
            },
            {
                "item_1": "Wall",
                "item_2": "Sushi"
            }
        ]
    },
    "Broom": {
        "emoticon": "🧹",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Witch"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Witch"
            }
        ]
    },
    "Steamfish": {
        "emoticon": "🐟",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Fog"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Fog"
            },
            {
                "item_1": "Steam",
                "item_2": "Fartfish"
            },
            {
                "item_1": "Fire",
                "item_2": "Itch"
            }
        ]
    },
    "Submarine": {
        "emoticon": "🚤",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Paratrooper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Geothermal",
                "item_2": "Boat"
            },
            {
                "item_1": "Steam",
                "item_2": "Paratrooper"
            },
            {
                "item_1": "Clean Tea Cup",
                "item_2": "TNT"
            },
            {
                "item_1": "Water",
                "item_2": "Soggy Bread"
            }
        ]
    },
    "Smoking": {
        "emoticon": "🚬",
        "mostEfficientRecipe": {
            "item_1": "Pipe",
            "item_2": "Golem"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pipe",
                "item_2": "Golem"
            }
        ]
    },
    "Steam Engine": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Steampunk"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Golem"
            },
            {
                "item_1": "Steam",
                "item_2": "Sauron"
            },
            {
                "item_1": "Steam",
                "item_2": "Fridge"
            },
            {
                "item_1": "Steam",
                "item_2": "Elixir"
            },
            {
                "item_1": "Steam",
                "item_2": "Gold"
            },
            {
                "item_1": "Steam",
                "item_2": "Meteorite"
            },
            {
                "item_1": "Scratch",
                "item_2": "Cheese"
            },
            {
                "item_1": "Steam",
                "item_2": "Microscope"
            },
            {
                "item_1": "Steam",
                "item_2": "Explosion"
            },
            {
                "item_1": "Steam",
                "item_2": "Steampunk"
            },
            {
                "item_1": "Steam",
                "item_2": "Heart Attack"
            },
            {
                "item_1": "Wall",
                "item_2": "Goldfish"
            }
        ]
    },
    "Itch": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Sashimi",
            "item_2": "Mosquito"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sashimi",
                "item_2": "Mosquito"
            },
            {
                "item_1": "Scratch",
                "item_2": "Omelette"
            },
            {
                "item_1": "Steam",
                "item_2": "Moonshine"
            }
        ]
    },
    "Time Machine": {
        "emoticon": "⏰",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Flying Saucer"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Flying Saucer"
            }
        ]
    },
    "Steamy Martini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Steamfish",
            "item_2": "Goose"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamfish",
                "item_2": "Goose"
            }
        ]
    },
    "Periscope": {
        "emoticon": "📡",
        "mostEfficientRecipe": {
            "item_1": "Submarine",
            "item_2": "Window"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Submarine",
                "item_2": "Window"
            }
        ]
    },
    "Paramedic": {
        "emoticon": "🚑",
        "mostEfficientRecipe": {
            "item_1": "Smoking",
            "item_2": "Ambulance"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Smoking",
                "item_2": "Ambulance"
            }
        ]
    },
    "Peking Duck": {
        "emoticon": "🦆",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Roast Duck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Roast Duck"
            }
        ]
    },
    "Scratch": {
        "emoticon": "🐶",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "McDonalds"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "McDonalds"
            }
        ]
    },
    "TNT": {
        "emoticon": "💣",
        "mostEfficientRecipe": {
            "item_1": "Time Machine",
            "item_2": "Firework"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Time Machine",
                "item_2": "Firework"
            }
        ]
    },
    "James Bond": {
        "emoticon": "🕵️‍♂",
        "mostEfficientRecipe": {
            "item_1": "Steamy Martini",
            "item_2": "Landing"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamy Martini",
                "item_2": "Landing"
            },
            {
                "item_1": "Spy",
                "item_2": "Engine"
            },
            {
                "item_1": "Spy",
                "item_2": "Fish"
            },
            {
                "item_1": "Spy",
                "item_2": "Cannon"
            }
        ]
    },
    "Captain Periscope": {
        "emoticon": "🔭",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Spring"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Spring"
            },
            {
                "item_1": "Fire",
                "item_2": "Cake"
            }
        ]
    },
    "Heart Attack": {
        "emoticon": "💔",
        "mostEfficientRecipe": {
            "item_1": "Paramedic",
            "item_2": "Truck"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paramedic",
                "item_2": "Truck"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Love"
            },
            {
                "item_1": "Heart Attack",
                "item_2": "Rainbow Dash"
            }
        ]
    },
    "China": {
        "emoticon": "🇨🇳",
        "mostEfficientRecipe": {
            "item_1": "Peking Duck",
            "item_2": "Taj Mahal"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Peking Duck",
                "item_2": "Taj Mahal"
            }
        ]
    },
    "Cake": {
        "emoticon": "🎂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Cookie"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Cookie"
            },
            {
                "item_1": "Birthday",
                "item_2": "Emulsion"
            }
        ]
    },
    "Steamroller": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Goliath"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Goliath"
            }
        ]
    },
    "Soggy Bread": {
        "emoticon": "🍞",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Soggy Toast"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Soggy Toast"
            }
        ]
    },
    "Captain Mudkip": {
        "emoticon": "🐟👨‍✈",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Monster"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Don Quixote"
            },
            {
                "item_1": "Steam",
                "item_2": "Monster"
            },
            {
                "item_1": "Water",
                "item_2": "Birthday"
            }
        ]
    },
    "Kelp": {
        "emoticon": "🌿",
        "mostEfficientRecipe": {
            "item_1": "Heart Attack",
            "item_2": "Seaweed"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Heart Attack",
                "item_2": "Seaweed"
            }
        ]
    },
    "Chopstick": {
        "emoticon": "🥢",
        "mostEfficientRecipe": {
            "item_1": "China",
            "item_2": "Sea Urchin"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "China",
                "item_2": "Sea Urchin"
            }
        ]
    },
    "Birthday": {
        "emoticon": "🎂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Tsuncho"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Tsuncho"
            }
        ]
    },
    "Hay": {
        "emoticon": "🌾",
        "mostEfficientRecipe": {
            "item_1": "Steamroller",
            "item_2": "Snowflake"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamroller",
                "item_2": "Snowflake"
            }
        ]
    },
    "French Toast": {
        "emoticon": "🥞",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Saguaro"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Saguaro"
            }
        ]
    },
    "Mecha Mudkip": {
        "emoticon": "🤖🐊",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Field"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Captain Mudkip",
                "item_2": "Sake"
            },
            {
                "item_1": "Steam",
                "item_2": "Potato"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Captain Planet"
            },
            {
                "item_1": "Steam",
                "item_2": "Latte"
            },
            {
                "item_1": "Steam",
                "item_2": "Field"
            },
            {
                "item_1": "Mecha Mudkip",
                "item_2": "Fluorite"
            }
        ]
    },
    "Locomotive": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Train"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Train"
            }
        ]
    },
    "Fishing Rod": {
        "emoticon": "🎣",
        "mostEfficientRecipe": {
            "item_1": "Chopstick",
            "item_2": "Fishing Pole"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Chopstick",
                "item_2": "Fishing Pole"
            }
        ]
    },
    "Candle": {
        "emoticon": "🕯️",
        "mostEfficientRecipe": {
            "item_1": "Birthday",
            "item_2": "Petrol"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Birthday",
                "item_2": "Petrol"
            }
        ]
    },
    "Sleigh": {
        "emoticon": "🛷",
        "mostEfficientRecipe": {
            "item_1": "Hay",
            "item_2": "Snowmobile"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Hay",
                "item_2": "Snowmobile"
            }
        ]
    },
    "France": {
        "emoticon": "🇫🇷",
        "mostEfficientRecipe": {
            "item_1": "French Toast",
            "item_2": "India"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "French Toast",
                "item_2": "India"
            }
        ]
    },
    "Pepper Steak": {
        "emoticon": "🥩",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Pepper"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Pepper"
            },
            {
                "item_1": "Pepper Steak",
                "item_2": "Cough"
            }
        ]
    },
    "Steam Locomotive": {
        "emoticon": "🚂",
        "mostEfficientRecipe": {
            "item_1": "Locomotive",
            "item_2": "Fire Tornado"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Locomotive",
                "item_2": "Fire Tornado"
            }
        ]
    },
    "Jonah": {
        "emoticon": "🐳",
        "mostEfficientRecipe": {
            "item_1": "Fishing Rod",
            "item_2": "Goldfish Sandwich"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fishing Rod",
                "item_2": "Goldfish Sandwich"
            }
        ]
    },
    "Christmas": {
        "emoticon": "🎄",
        "mostEfficientRecipe": {
            "item_1": "Candle",
            "item_2": "Tree"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Candle",
                "item_2": "Tree"
            }
        ]
    },
    "Santa": {
        "emoticon": "🎅",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Captain Mudkip"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Sleigh",
                "item_2": "Mountain"
            },
            {
                "item_1": "Wind",
                "item_2": "Captain Mudkip"
            }
        ]
    },
    "Paris": {
        "emoticon": "🗼",
        "mostEfficientRecipe": {
            "item_1": "France",
            "item_2": "Ariel"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "France",
                "item_2": "Ariel"
            }
        ]
    },
    "Captain Hook": {
        "emoticon": "🪝",
        "mostEfficientRecipe": {
            "item_1": "Pepper Steak",
            "item_2": "Pop"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pepper Steak",
                "item_2": "Pop"
            }
        ]
    },
    "Perfume": {
        "emoticon": "👃",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Smell"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Smell"
            }
        ]
    },
    "Power": {
        "emoticon": "⚡",
        "mostEfficientRecipe": {
            "item_1": "Jonah",
            "item_2": "Battery"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Jonah",
                "item_2": "Battery"
            }
        ]
    },
    "SteamPunk": {
        "emoticon": "💨",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Potion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Potion"
            }
        ]
    },
    "Gimli": {
        "emoticon": "🍺",
        "mostEfficientRecipe": {
            "item_1": "Santa",
            "item_2": "Mordor"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Santa",
                "item_2": "Mordor"
            }
        ]
    },
    "Eiffel Tower": {
        "emoticon": "🗼",
        "mostEfficientRecipe": {
            "item_1": "Paris",
            "item_2": "Medicine"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paris",
                "item_2": "Medicine"
            },
            {
                "item_1": "Fire",
                "item_2": "Paris"
            }
        ]
    },
    "Captain Fluoride": {
        "emoticon": "🦷",
        "mostEfficientRecipe": {
            "item_1": "Captain Hook",
            "item_2": "Sick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Captain Hook",
                "item_2": "Sick"
            },
            {
                "item_1": "Captain Fluoride",
                "item_2": "Electricity"
            },
            {
                "item_1": "Statue of Liberty",
                "item_2": "Wall"
            }
        ]
    },
    "Genie": {
        "emoticon": "🧞‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Perfume",
            "item_2": "Vase"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Perfume",
                "item_2": "Vase"
            }
        ]
    },
    "Wall": {
        "emoticon": "🧱",
        "mostEfficientRecipe": {
            "item_1": "Power",
            "item_2": "Brick"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Power",
                "item_2": "Brick"
            }
        ]
    },
    "Steamgandalf": {
        "emoticon": "🧙‍♂️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Volcano"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Zombie"
            },
            {
                "item_1": "Steam",
                "item_2": "Volcano"
            }
        ]
    },
    "Dwarf": {
        "emoticon": "👑",
        "mostEfficientRecipe": {
            "item_1": "Gimli",
            "item_2": "Explosion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Gimli",
                "item_2": "Explosion"
            },
            {
                "item_1": "Santa Claus",
                "item_2": "Gimli"
            }
        ]
    },
    "Statue of Liberty": {
        "emoticon": "🗽",
        "mostEfficientRecipe": {
            "item_1": "Eiffel Tower",
            "item_2": "Phoenix"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Eiffel Tower",
                "item_2": "Phoenix"
            }
        ]
    },
    "Jet": {
        "emoticon": "✈️",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Flying Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Airplane"
            },
            {
                "item_1": "Steam",
                "item_2": "Flying Fish"
            }
        ]
    },
    "Geysir": {
        "emoticon": "🌋",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Stone"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Stone"
            }
        ]
    },
    "Revolution": {
        "emoticon": "✊",
        "mostEfficientRecipe": {
            "item_1": "Steam",
            "item_2": "Pepper Steak"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steam",
                "item_2": "Pepper Steak"
            }
        ]
    },
    "Fishbowl Gandalf": {
        "emoticon": "🐟🧙‍♂",
        "mostEfficientRecipe": {
            "item_1": "Steamgandalf",
            "item_2": "Fish"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Steamgandalf",
                "item_2": "Fish"
            }
        ]
    },
    "Lord of the Rings": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Dwarf",
            "item_2": "Gimli"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Dwarf",
                "item_2": "Gimli"
            }
        ]
    },
    "Liberty Tree": {
        "emoticon": "🌳",
        "mostEfficientRecipe": {
            "item_1": "Statue of Liberty",
            "item_2": "Plant"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Statue of Liberty",
                "item_2": "Plant"
            }
        ]
    },
    "Boston Tea Party": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Liberty Tree",
            "item_2": "Crash"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Liberty Tree",
                "item_2": "Crash"
            }
        ]
    },
    "Tea Cup": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Boston Tea Party",
            "item_2": "Whirlpool"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Boston Tea Party",
                "item_2": "Whirlpool"
            }
        ]
    },
    "Clean Tea Cup": {
        "emoticon": "🍵",
        "mostEfficientRecipe": {
            "item_1": "Tea Cup",
            "item_2": "Vacuum"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Tea Cup",
                "item_2": "Vacuum"
            }
        ]
    },
    "007": {
        "emoticon": "🕵️",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "James Bond"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "James Bond"
            }
        ]
    },
    "Bond": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Paris"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Paris"
            }
        ]
    },
    "Agent": {
        "emoticon": "🕵️",
        "mostEfficientRecipe": {
            "item_1": "Bond",
            "item_2": "Perfume"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Bond",
                "item_2": "Perfume"
            }
        ]
    },
    "Spy": {
        "emoticon": "🕵️‍♀",
        "mostEfficientRecipe": {
            "item_1": "Agent",
            "item_2": "Power"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Agent",
                "item_2": "Power"
            }
        ]
    },
    "Paul Revere": {
        "emoticon": "🐎",
        "mostEfficientRecipe": {
            "item_1": "Spy",
            "item_2": "Steam"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spy",
                "item_2": "Steam"
            }
        ]
    },
    "Leak": {
        "emoticon": "💦",
        "mostEfficientRecipe": {
            "item_1": "Spy",
            "item_2": "Pipe"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Spy",
                "item_2": "Pipe"
            }
        ]
    },
    "Midnight Ride": {
        "emoticon": "🐎",
        "mostEfficientRecipe": {
            "item_1": "Paul Revere",
            "item_2": "Explosion"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Paul Revere",
                "item_2": "Explosion"
            },
            {
                "item_1": "Fire",
                "item_2": "Paul Revere"
            }
        ]
    },
    "Christmas Tree": {
        "emoticon": "🎄",
        "mostEfficientRecipe": {
            "item_1": "Leak",
            "item_2": "Christmas"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Leak",
                "item_2": "Christmas"
            }
        ]
    },
    "Santa Claus": {
        "emoticon": "🎅",
        "mostEfficientRecipe": {
            "item_1": "Fire",
            "item_2": "Santa"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Fire",
                "item_2": "Santa"
            },
            {
                "item_1": "North Pole",
                "item_2": "Explosion"
            },
            {
                "item_1": "North Pole",
                "item_2": "Glass"
            },
            {
                "item_1": "Wind",
                "item_2": "Hay"
            },
            {
                "item_1": "Wind",
                "item_2": "Steam Locomotive"
            }
        ]
    },
    "Pine": {
        "emoticon": "🌲",
        "mostEfficientRecipe": {
            "item_1": "Christmas Tree",
            "item_2": "Perfume"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Christmas Tree",
                "item_2": "Perfume"
            }
        ]
    },
    "Santa Fluoride": {
        "emoticon": "🎅🏼🦷",
        "mostEfficientRecipe": {
            "item_1": "Santa Claus",
            "item_2": "Dwarf"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Santa Claus",
                "item_2": "Dwarf"
            }
        ]
    },
    "Pineapple": {
        "emoticon": "🍍",
        "mostEfficientRecipe": {
            "item_1": "Pine",
            "item_2": "Geysir"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pine",
                "item_2": "Geysir"
            },
            {
                "item_1": "Fire",
                "item_2": "Pine"
            },
            {
                "item_1": "Water",
                "item_2": "Pine"
            }
        ]
    },
    "Liberty Fluoride": {
        "emoticon": "🗽🧪",
        "mostEfficientRecipe": {
            "item_1": "Santa Fluoride",
            "item_2": "Spy"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Santa Fluoride",
                "item_2": "Spy"
            }
        ]
    },
    "Pina Colada": {
        "emoticon": "🍹",
        "mostEfficientRecipe": {
            "item_1": "Pineapple",
            "item_2": "Midnight Ride"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Pineapple",
                "item_2": "Midnight Ride"
            }
        ]
    },
    "North Pole": {
        "emoticon": "🎅",
        "mostEfficientRecipe": {
            "item_1": "Water",
            "item_2": "Santa Claus"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Water",
                "item_2": "Santa Claus"
            }
        ]
    },
    "Liberty Water": {
        "emoticon": "🗽💧",
        "mostEfficientRecipe": {
            "item_1": "Liberty Fluoride",
            "item_2": "Itch"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Liberty Fluoride",
                "item_2": "Itch"
            }
        ]
    },
    "Bricktini": {
        "emoticon": "🍸",
        "mostEfficientRecipe": {
            "item_1": "Wind",
            "item_2": "Steamy Martini"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "Wind",
                "item_2": "Steamy Martini"
            }
        ]
    },
    "Aurora": {
        "emoticon": "🌌",
        "mostEfficientRecipe": {
            "item_1": "North Pole",
            "item_2": "Electricity"
        },
		get depth() {
			return Math.max(items[this.mostEfficientRecipe.item_1].depth, items[this.mostEfficientRecipe.item_2].depth) + 1
		},
        "recipes": [
            {
                "item_1": "North Pole",
                "item_2": "Electricity"
            }
        ]
    }
}