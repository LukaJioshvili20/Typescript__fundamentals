export function checkPalindrome(inputString: string): boolean {
    const original = inputString.toLocaleLowerCase();
    const revered = original.split('').reverse().join('');

    return original === revered;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
