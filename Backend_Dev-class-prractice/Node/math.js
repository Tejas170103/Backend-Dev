function add(a,b){
    return a+b;
}
function remove(a,b){
    return b-a;
}
module.exports={add,remove};// const { add,remove,aoc }=require("./math")
// console.log(add(1,4),remove(1,5),aoc(4));
const fs = require("fs");
fs.writeFileSync("./text.txt","This is Sync file content")
// const file = fs.readFileSync("text.txt","utf-8")
const asyncFile = fs.readFile("text.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in the file reading",err);
}
    else{
        console.log("File reading successfully.",data);
}
})