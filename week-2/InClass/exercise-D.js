const returnMessage= (mood)=>{
    if (mood= "happy"){
    return "Good jod, you're doing great!";
    } else if (mood=== "sad"){
        return "Every cloud has a silver lining";
    }else if (typeof mood==="number"){
        return "I'm sorry, I'am still learning about feelinngs!";
    }
};
console.log (returnMessage("happy"))