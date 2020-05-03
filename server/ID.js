function generateID(length){
    let chars = "abcdefghijklmnopqrstuvwxyz"
    chars = chars + chars.toUpperCase
    chars = chars + "1234567890"

    let IDlen = length || 8

    let result = ""
    for (let i = 0; i < IDlen; i++){
        result = result + chars[Math.floor(Math.random() * IDlen)]
    }

    return result;
    
}

return {generateID}