import json
import random

global gameRules
global gameScore

gameScore = {"player": 0, "comp": 0}

f = open('website\RPS-Python\gameRules.json',)
gameRules = json.load(f)

def RPSLogic(userPick):
    compPick = gameRules["comp"][str(random.randint(1,3))]

    if userPick == compPick:
        return 0
    elif userPick == gameRules[compPick]["loses"]:
        return 1
    elif userPick == gameRules[compPick]["beats"]:
        return -1

def takeUserInput():
    userPick = input("what is your pick (rock, paper, scissors)")
    while True:
        if userPick in gameRules["allowedPicks"]:
            return userPick
        else:
            userPick = input("please enter a valid input (rock, paper, scissors)")

def updateScore(RPSResult):
    print(RPSResult)
    if RPSResult == 1:
        gameScore["player"] = gameScore["player"] + 1
    elif  RPSResult == -1:
        gameScore["comp"] = gameScore["comp"] + 1
    return RPSResult

def resetScore():
    gameScore = {"player": 0, "comp": 0}

def startGame():
    while True:
    
        for x in range(3):
            updateScore(RPSLogic(takeUserInput()))
        print(gameScore)
        if gameScore["player"] == gameScore["comp"]:
            while True:
                print("Tie breaker")
                if updateScore(RPSLogic(takeUserInput())) != 0:
                    break
        
        winLose = "WON" if gameScore["player"] > gameScore["comp"] else "LOST"
        print("you",winLose,"with", gameScore["player"], "points while the computer had", gameScore["comp"])
        
        if input("Do you want to play again? (yes/no)") not in gameRules["allowedPicks"]["again"]:
            break

        resetScore()

startGame()
