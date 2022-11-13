# Autor: Roberto Jaime Rico Sandoval.
# Fille: Adivina mi número.
# Date: 12/ 04/ 2022
# Version: 0.1

import random

def guess():

    numCom = random.randrange(1, 15)
    print(numCom)

    print("What do you think my number is?")

    miNum = int(input("\nNumber: "))


    while miNum > 15 or miNum <= 0:
        print(f"Ups!! Only numbers from 1 to 15 are allowed.\nYour number [{miNum}]\nRetry.")
        miNum = int(input("\nNumber: "))


    if miNum == numCom:
        print(f"\nWOW! You guessed my number.\nMy machine number: [{numCom}]\nYour number: [{miNum}]")


    while miNum != numCom:
        print(f"\nUps!! That's not my number.")

        if miNum < numCom:
            print(f"\nA track. My number is higher.\nYour number [{miNum}]")

        elif miNum > numCom:
            print(f"\nA track. My number is less.\nYour number [{miNum}]")

        print("\nRetry.")
        miNum = int(input("\nNumber: "))

    if miNum == numCom:
        print(f"\nWOW! You guessed my number.\nMy machine number: [{numCom}]\nYour number: [{miNum}]")

guess()

