const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }

    let repeatedStr = ''

    for (let i = 1; i <= num; i++)
    {
        repeatedStr += string
    }

    return repeatedStr
};

// Do not edit below this line
module.exports = repeatString;
