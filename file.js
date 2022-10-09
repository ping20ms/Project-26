let arr = {0:"Javascript", 1:"Python", 2:"Ruby", 3:"Go"}
let size = Object.keys(arr).length

for(var car in arr){
    console.log(`${car}: ${arr[car]}`)
}


console.log("Length: "+size)