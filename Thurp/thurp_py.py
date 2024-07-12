import random
symbols = ["love","spade","claver","diamond"]
numbers = ["J","9","A","10","K","Q"]
value = {
    "J":3,
    "9":2,
    "A":1,
    "10":1,
    "K":0,
    "Q":0
}
num_players = input("enter the number of players (4 or 6 allowed)")
decks1 = []
decks2 = []

for i in symbols:
    for j in numbers:
        decks1.append([i,j,value[j]])
        decks2.append([i,j,value[j]])


decks1.extend(decks2)
print(decks1)
priority = []

total = 0
random.shuffle(decks1)
for i in decks1:
    total += int(i[2])

print(total)

print(decks1)






