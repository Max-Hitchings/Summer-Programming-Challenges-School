import json
import random

f = open('website\RPS-Python\gameRules.json',)
global gameRules
gameRules = json.load(f)

def RPSLogic(userPick):
    compPick = gameRules["comp"][str(random.randint(1,3))]

    if userPick == compPick:
        return "draw"
    elif userPick == gameRules[compPick]["loses"]:
        return "win"
    elif userPick == gameRules[compPick]["beats"]:
        return "lose"

def takeUserInput():
    
    userPick = input("what is your pick (rock, paper, scissors)")

def checkUserInput(userPick):
    if userPick in gameRules["allowedPicks"]["rock"]:
        pass


# scissors
# paper
# rock