import json
import random

global gameRules
global gameScore

gameScore = {"player": 0, "comp": 0}

f = open('./gameRules.json',)
gameRules = json.load(f)

def RPSLogic(userPick):
    compPick = gameRules["comp"][str(random.randint(1,3))]

    if userPick == compPick:
        print("you DREW that round")
        return 0
    elif userPick == gameRules[compPick]["loses"]:
        print("YOU WON THAT ROUND")
        return 1
    elif userPick == gameRules[compPick]["beats"]:
        print("you LOST that round")
        return -1

def takeUserInput():
    userPick = input("what is your pick (rock, paper, scissors)")
    while True:
        if userPick in gameRules["allowedPicks"]:
            return userPick
        else:
            userPick = input("please enter a valid input (rock, paper, scissors)")

def updateScore(RPSResult):
    if RPSResult == 1:
        gameScore["player"] = gameScore["player"] + 1
    elif  RPSResult == -1:
        gameScore["comp"] = gameScore["comp"] + 1
    return RPSResult
    
def startGame():
    global gameScore 
    while True:
        for x in range(3):
            updateScore(RPSLogic(takeUserInput()))

        if gameScore["player"] == gameScore["comp"]:
            while True:
                print("Tie breaker")
                if updateScore(RPSLogic(takeUserInput())) != 0:
                    break
        
        winLose = "WON" if gameScore["player"] > gameScore["comp"] else "LOST"
        print("you",winLose,"with", gameScore["player"], "points while the computer had", gameScore["comp"])
        
        if input("Do you want to play again? (yes/no)") not in gameRules["allowedPicks"]["again"]:
            break

        gameScore = {"player": 0, "comp": 0}
       

startGame()
