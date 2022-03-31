export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const original = inputString.toLowerCase();
    const reversed = original.split('').reverse().join;
    
    return original === reversed;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));