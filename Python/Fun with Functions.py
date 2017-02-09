# count=1
# while count <= 2000 :
    # print(count)
    # count += 1

def odd_even():
    for number in range (2001):
     if number%2==0:
        print "Number is " + str(number) + " .This is an even number."
     else:
        print "Number is " + str(number) + " .This is an odd number."
odd_even()

a = [2,4,10,16]
new_a = [i * 5 for i in a]

print(new_a)
