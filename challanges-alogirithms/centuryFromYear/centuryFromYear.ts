export function centuryFromYear(year: number): number {
    const century = year / 10;
    if(year % 100 === 0){
        return century;
    }

    return Math.floor(century) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));