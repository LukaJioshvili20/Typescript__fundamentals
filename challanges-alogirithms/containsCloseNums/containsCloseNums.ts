export function containsCloseNums(nums: number[], k: number): boolean {
    for(let i=0; i<nums.length; i++){
        for(let g=0; g<nums.length;g++){
            if(i!==g){
                if(nums[i]===nums[g]){
                    if(Math.abs(i-g)<=k){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));