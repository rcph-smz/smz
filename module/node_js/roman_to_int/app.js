// roman converter I - M

const romanToInt = function(s) {
    let cap_char = s.toUpperCase()
    const numerals = [['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]

    for(let lk = 0; lk < numerals.length; ++lk) {
        const rep = new RegExp(numerals[lk][0].toString(),'g')
        if(lk != numerals.length) {
            cap_char = cap_char.replace(rep,`${numerals[lk][1].toString()},`)
        }
        else {
            cap_char = cap_char.replace(rep,`${numerals[lk][1].toString()}`)
        }
    }
    cap_char = cap_char.substring(0,cap_char.lastIndexOf(",")).split(",").reverse()

    for(let lk = 0; lk < cap_char.length; ++ lk){
        cap_char[lk] = parseInt(cap_char[lk]) 
    }
    console.log(cap_char)
    let prev_num = 0
    let res = 0
    for(char of cap_char){
        if(char > prev_num){
            res += char
        }
        else if(char < prev_num) {
            res -= char
        }
        else if(char == prev_num) {
            res += char
        }
        prev_num = char
    }
    return res
}

romanToInt("iii")