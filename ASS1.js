function sortArray(arr){
    if(!arr||arr.length===0)
        return "No Input"
    if(!arr.every(Number.isInteger))
        return "Input must be integers only"
    return arr.sort((a,b)=>a-b)
}

console.log(sortArray([3, 14, 46, 1, 5]))

function splitString(str){
    if (!str)
        return "No Input"
    if (typeof str !=="string")
        return "Input must be a string"
    return str.split('')
}

console.log(splitString("What"))

//BY OLAGBEMIRO DANIEL🥲