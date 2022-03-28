export function allLongestStrings(inputArray: string[]): string[] {
    let longest = 0;
    const longestWords = [];

    inputArray.forEach((word:string) => {
        longest = longest < word.length ? word.length : longest;
    })
    inputArray.forEach((word: string) =>{
        if(word.length === longest){
            longestWords.push(word)
        }
    })    
    
    return longestWords;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));