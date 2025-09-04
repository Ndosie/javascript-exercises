const removeFromArray = function(arr, ...resArg) {
    const newArr = []
    for (const item of arr){
        if (!resArg.includes(item)){
            newArr.push(item)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
