
const display = (val) => {
    document.getElementById('result').value += val

    return val
}

const solve = () => {

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

const clearScreen = () => {

    document.getElementById('result').value = ''

}