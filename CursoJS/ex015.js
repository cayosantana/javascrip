let num = [5,8,7]
num[3] = 6
num.push(7)
num.push(1)
num.sort()
console.log(num)
for (let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}