const fs = require('fs');

// fs.readFile('test.txt', (err,data) => {
//     console.log(data.toString())
// });

// fs.appendFile('Newtest.txt', 'Hello world!', (err) =>{
//     if(err){
//         console.log(err);
//     }
// });

// fs.open('new.txt', 'w', (err)=>{
//     if(err) throw err;
//         console.log('File created');
// });

fs.writeFile('new.txt', 'Hi, I am Sakshi', (err)=>{
    if(err) throw err;
        console.log('File created');
});

fs.appendFile('test.txt','Hi again. This is Sakshi', (err)=>{
    if(err) throw err;
        console.log('Content updated');
});