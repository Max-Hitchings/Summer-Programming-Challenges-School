import time

def game():
    input("\n\npress enter to start")
    startTime = time.time()
    input("press enter after 10 seconds")
    endTime = time.time()-startTime
    print("\n", round(time.time()-startTime,2))

    if endTime > 10:
        print("Unlucky \nToo late")
    elif endTime < 10:
        print("Unlucky \nToo early")
    else:
        print("well done \nSpot on!!!")

while True:
    game()
    valid_answers = ["y", "Y", "yes", "YES"]
    if input("Would you like to go again?") not in valid_answers:
        break
