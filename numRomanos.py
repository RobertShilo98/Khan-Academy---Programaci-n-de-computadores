# Autor: Roberto Jaime Rico Sandoval.
# Fille: Números Romanos.
# Date: 13/ 04/ 2022
# Version: 0.1

def romamos():

    numero = []
    letra = []

    print("\nGenera tu número romano.")

    for repit in range(5):

        insertar_numero = int(input("\nNum: "))

        if insertar_numero == 1:
            numero.append(insertar_numero)
            letra.append("I")

        elif insertar_numero == 2:
            numero.append(insertar_numero)
            letra.append("II")

        elif insertar_numero == 3:
            numero.append(insertar_numero)
            letra.append("III")

        elif insertar_numero == 4:
            numero.append(insertar_numero)
            letra.append("IV")

        elif insertar_numero == 5:
            numero.append(insertar_numero)
            letra.append("V")

        elif insertar_numero == 6:
            numero.append(insertar_numero)
            letra.append("VI")

        elif insertar_numero == 7:
            numero.append(insertar_numero)
            letra.append("VII")

        elif insertar_numero == 8:
            numero.append(insertar_numero)
            letra.append("VIII")

        elif insertar_numero == 9:
            numero.append(insertar_numero)
            letra.append("IX")

        elif insertar_numero == 10:
            numero.append(insertar_numero)
            letra.append("X")

        elif insertar_numero == 20:
            numero.append(insertar_numero)
            letra.append("XX")

        elif insertar_numero == 30:
            numero.append(insertar_numero)
            letra.append("XXX")
        
        elif insertar_numero == 40:
            numero.append(insertar_numero)
            letra.append("XL")

        elif insertar_numero == 50:
            numero.append(insertar_numero)
            letra.append("L")

        elif insertar_numero == 60:
            numero.append(insertar_numero)
            letra.append("LX")

        elif insertar_numero == 70:
            numero.append(insertar_numero)
            letra.append("LXX")

        elif insertar_numero == 80:
            numero.append(insertar_numero)
            letra.append("LXXX")

        elif insertar_numero == 90:
            numero.append(insertar_numero)
            letra.append("XC")

        elif insertar_numero == 900:
            numero.append(insertar_numero)
            letra.append("CM")

        elif insertar_numero == 100:
            numero.append(insertar_numero)
            letra.append("C")

        elif insertar_numero == 1000:
            numero.append(insertar_numero)
            letra.append("M")

        elif insertar_numero == 0:
            numero.append(insertar_numero)
            letra.append("_")
    
    suma1 = (numero[0] + numero[1] + numero[2] + numero[3] + numero[4])
    suma2 = (letra[0] + letra[1] + letra[2] + letra[3] + letra[4]) 

    print(f"\nNúmero arábigo: {suma1}")
    print(f"\nNúmero romano: {suma2}")


romamos()

