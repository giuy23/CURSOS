import random

choices = ["rock", "paper", "scissors"]

computer = random.choice(choices)

player = None
while player not in choices:
    player = input("Choose between rock, paper, or scissors: ")

if player == computer:
    print("It's a tie!")
elif player == "rock":
    if computer == "paper":
        print("You lose!")
    if computer == "scissors":
        print("You win!")

elif player == "scissors":
    if computer == "paper":
        print("You win!")
    if computer == "rock":
        print("You lose!")

elif player == "paper":
    if computer == "scissors":
        print("You lose!")
    if computer == "rock":
        print("You win!")

print("computer chose: ", computer)
print("player:  ", player)