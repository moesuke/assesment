let age = 4;
let haveText = false ;
let doubleIncome = true ;
if (age > 18){
    document.write('大人');
} else if (age >15 && haveText === true){
    document.write('高校生');
} else if (age >12 && haveText === true){
    document.write('中学生');
} else if (age >6 && haveText === true){
    document.write('小学生');
} else if (age >3 && haveText === true){
    document.write('幼稚園児');
} else if (age >0 && doubleIncome === true){
    document.write('保育園児');
} else { document.write('赤ちゃん')
};

