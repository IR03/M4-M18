
function evenify_all(nums){
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num,': is a even number');
        }
        else{
            console.log(num*2,': is a odd number');
        }
    }
}

nums = [5, 12, 7, 16, 9, 11];
evenify_all(nums);


friends_age = [13, 12, 18, 22];
evenify_all(friends_age);
