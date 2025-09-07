const palindromes = function (word) {
    const changedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    const wordArr = changedWord.split('')
    return changedWord === wordArr.reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;