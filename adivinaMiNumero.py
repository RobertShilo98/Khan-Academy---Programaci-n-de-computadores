# Autor: Roberto Jaime Rico Sandoval.
# Fille: Adivina mi número 2.
# Date: 12/ 04/ 2022
# Version: 0.1

import random

def intel():

    print("\nElige tu número del 1 al 400")

    miNum = int(input("\nEste es mi número secreto: "))

    while miNum > 400 or miNum <= 0:
        print("Tu número es menor a 0 o mayor a 400, vuelve a intentarlo.")
        miNum = int(input("\nEste es mi número secreto: "))

    compu = ("\nJajajaja, acepto el reto >:)")
    intento = 0

    print("\nAhora es tu turno computadora. Adivina mi número.")
    print(compu)

    compuAdi = random.randrange(1, 400)

    if compuAdi == miNum:
        print(f"\nWOW!! Que inteligente computadora. Lo logro al primer intento.\nTú número [{miNum}]\nNúmero de computadora [{compuAdi}]")

    while compuAdi != miNum:
        intento += 1
        print(f"\nIntento computadora: [{intento}]")

        if intento == 5:
            compu = ("\nEsto va ha ser díficil <:).")
            print(compu)

        elif intento == 25:
            compu = ("\nLa vida me enseño que debes de luchar por lo que quieres, escuchame que está vez... >:/")
            print(compu)
        
        elif intento == 50:
            compu = ("\nEs el fín, veo la matrix -_-")
            print(compu)

        elif intento == 100:
            compu = ("\nTengo jackeca 0-0")
            print(compu)

        compuAdi = random.randrange(1, 400)
        
    if compuAdi == miNum:
        print(f"\nLo logre. Tú número secreto es {miNum}\nMe gusto jugar contigo :)")

intel()

