def draw_stars(num):
    for i in range(len(arr)):
        stars=""
        for i in range(num[i]):
            stars*="*"
        print stars
    return
draw_stars([4, 6, 1, 3, 5, 7, 25])

def draw_stars(num):
    for i in range(0,len(num)):
        stars=""
        lett=""
        if type(num[i]) is str:
            for l in range(0,len(num[i])):
                lett += num[i][0]
            print lett
        else:
            for j in range(0,num[i]):
                stars += "*"
            print stars
    return

# Patrick, Mark, Olivia
