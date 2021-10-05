import random, time

main_map = []

for x in range(10):
    main_map.append([])
    for i in range(10):
        main_map[x].append(0)

gold_row = random.randint(0,9)
gold_column = random.randint(0,9)

main_map[gold_row][gold_column] = 1

def guess():
    new_guess_row=10
    while new_guess_row > 9:
        new_guess_row = int(input("What row do you think the gold is in? (0,9)"))
    
    new_guess_column=10
    while new_guess_column > 9:
        new_guess_column = int(input("What column do you think the gold is in? (0,9)"))

    return(main_map[new_guess_row][new_guess_column])
    
print("hello welcome to treasure hunt!!\nMade by Max H\n\n")
while True:
    guess_result = guess()
    if guess_result == 1:
        break
    else:
        print("WRONG try again")
print("Well done you found the gold!!!")