const transpose = require('../../week4/async/matrix_transposition');

const wordSearch = (letters, word) => { 
    if(letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    let verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    return false;
}

module.exports = wordSearch

//console.log(transpose([[1,0],[2,3]]));