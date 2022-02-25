//How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };


var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var result = obj2==obj1;
console.log(result);
var result1 = obj2===obj1;
console.log(result1);


var ele = (a,b)=>{
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);
    let flag = false;

    if(keys1.length == keys2.length)
    for(key in a){
        if(a[key] == b[key])
        flag = true;
        else{
            flag= false;
            break;
        }
    }
    return flag;
}

console.log(ele(obj1,obj2))

//Output:false script.js:10:9
// false script.js:12:9
// true