const fibonacci = function(seqArg) {
    let seq = 0
    if (typeof seqArg !== 'number') {
        seq = parseInt(seqArg)
    } else {
        seq = seqArg
    }

    if (seq < 0) {
        return 'OOPS'
    }

    if (seq === 0) return 0

    let prev1 = 1
    let prev2 = 0
    for (let i = 2; i <= seq; i++) {
        let current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    }
    return prev1
};

// Do not edit below this line
module.exports = fibonacci;
