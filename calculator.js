var nums=[];
var example;
function addNum(sign){
    if (nums.length>0 && sign === "="){
    nums = nums.join('')
        example =eval(nums);
    if (nums.slice(-2) === "/0"){
        console.log("eror")
        document.getElementById("text").innerHTML="На 0 делить нельзя";
    }
    else {
        console.log(example);
        nums=[example];
        document.getElementById("text").innerHTML=nums.join('');
    }

    }
    else if(nums.length>0 && sign === "DeleteAll"){
        nums=[];
        console.log(nums);
        document.getElementById("text").innerHTML=nums.join('');
    }
    else if(nums.length>0 && sign === "DeleteOneCharacter"){
        nums=nums.slice(0,-1);
        console.log(nums);
        document.getElementById("text").innerHTML=nums.join('');
    }
else if (sign * 1 || sign===0){
    nums.push(sign);
    console.log(nums);
        document.getElementById("text").innerHTML=nums.join('');
}
else if(nums.length>0||sign===0) {
    nums.push(sign);
    console.log(nums);
        document.getElementById("text").innerHTML=nums.join('');
}
else {
    console.log("eror")
}
}
