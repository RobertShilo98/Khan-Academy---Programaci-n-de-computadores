# Autor: Roberto Jaime Rico Sandoval.
# Fille: Miníma expresión de número.
# Date: 15/ 04/ 2022
# Version: 0.1

from asyncio.windows_events import NULL


def numerologia():

    comprobaciones = [2, 3, 5, 7] 

    neutralidades = [0, 1]
    primos = []
    compuestos = []

    min = []

    print("\nNeutralidad: 0\nNeutralidad: 1\nCompuesto: 2\nPrimo: 3\nCompuesto: 4\nPrimo: 5\nCompuesto: 6\nPrimo: 7")

    compuestos.append(2), compuestos.append(4), compuestos.append(6)
    primos.append(3), primos.append(5), primos.append(7)
    min.append(3), min.append(5), min.append(7)

    for numero in range(8, 101):

        if numero % comprobaciones[0] == 0:
            compuestos.append(numero)
            print(f"Número compuesto: {numero}")
    
        elif numero % comprobaciones[1] == 0:
            compuestos.append(numero)
            print(f"Número compuesto: {numero}")

        elif numero % comprobaciones[2] == 0:
            compuestos.append(numero)
            print(f"Número compuesto: {numero}")

        elif numero % comprobaciones[3] == 0:
            compuestos.append(numero)
            print(f"Número compuesto: {numero}")
    
        else:
            primos.append(numero)
            print(f"Número primo: {numero}")

    print(f"\n\nNúmero primo menor: {min[0]}\nNúmero primo menor: {min[1]}\nNúmero primo menor: {min[2]}")
    for priM in range(8, 68):

        if priM % comprobaciones[0] == 0 or priM % comprobaciones[1] == 0 or priM % comprobaciones[2] == 0 or priM % comprobaciones[3] == 0:
            NULL

        else:
            min.append(priM)
            print(f"Número primo menor: {priM}")

    print(f"\n\nneutralidades: {neutralidades}")
    print(f"\n\nNúmeros primos: {primos}")
    print(f"\n\nNúmeros compuestos: {compuestos}")
    print(f"\n\nNúmeros primos menores: {min}")

numerologia()

