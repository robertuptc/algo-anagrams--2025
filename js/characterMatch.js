function isCharacterMatch(string1, string2) {
    let arrString1 = string1.toLowerCase().split("");
    let arrString2 = string2.toLowerCase().split("");
    let comparedWord = []


    for (i = 0; i < arrString1.length; i++) {
        for (j = 0; j < arrString2.length; j++) {
            if (arrString1[i] == arrString2[j]) {
                comparedWord.push(arrString2[j])
            }
        }
    }
    return comparedWord.length == arrString1.length
}

function anagramsFor(word, listOfWords) {
    let sortedWord = word.toLowerCase().split("").sort().join('');

    let anagrams = listOfWords.filter((w) => {
        let sortedW = w.toLowerCase().split("").sort().join('');
        // console.log(">>>", sortedWord, sortedW)
        if (sortedW == sortedWord) {
            return w
        }
    })
    return anagrams
};

// anagramsFor("saltier", ["cognac", "saltier", "realist", "retails"])
module.exports = { isCharacterMatch, anagramsFor };
