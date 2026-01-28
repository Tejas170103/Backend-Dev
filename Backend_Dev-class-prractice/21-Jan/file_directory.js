const fs = require('fs');

fs.mkdir("new Directory", (err) => {
    if (err) return;
    console.log("Directory created");
});
fs.mkdir("folders/folder1/folder2", { recursive: true },(err)=>{
    if(err){
        console.log("Directory creation failed",err);
        return;
    }
    else{
        console.log("Directory created");
    }
})


//if folder is empty then it will remove the folder   otherwise use fs.rm
//  fs.rmdir("new Directory", (err) => {
//     if (err) {
//         console.log("Directory deletion failed", err);
//         return;
//     }  
//     console.log("Directory removed");
//  });


// // if a folder contains files or subfolders use fs.rm to remove it
 fs.rm("new Directory",{recursive:true} ,(err) => {
    if (err) {
        console.log("Directory deletion failed", err);
        return;
    }  
    console.log("Directory removed");
 });