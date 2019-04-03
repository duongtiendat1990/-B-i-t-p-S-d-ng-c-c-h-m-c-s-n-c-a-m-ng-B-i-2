function split() {
    let str = document.getElementById("number").value.toString();
    let array =[str[0]];
    for(let x =1; x<str.length;x++) {
        if (str[x-1]%2 == 0 && str[x]%2 ==0) array.push("-",str[x])
        else array.push(str[x])
    }
    document.getElementById("result").innerHTML = array.join("")
}