export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const myWeak = yourLeft <= yourRight ? yourLeft : yourRight ;
    const myStrong = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendWeak = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendStrong = friendsLeft >= friendsRight? friendsLeft : friendsRight;



    return (myStrong === friendStrong && myWeak === friendWeak)
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
