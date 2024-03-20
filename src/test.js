

let inter = "+d+=3=+s+";

const simpleSymbol = (str) => {
    if (str[0] >= 'a' && str[0] <= 'z' || str[str.length - 1] >= 'a' && str[str.length - 1] <= 'z'){
        return false
    }
    else {return true}
}

simpleSymbol(inter)