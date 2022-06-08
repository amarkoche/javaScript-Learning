console.log("Welcomet ot vowel or consonant");
function findVowelOrNot() {
    let char = "A";
    char = char.toLocaleLowerCase();
    if(char =="a" || char =="e" || char =="i" || char =="o" || char =="u" ){
        console.log(`${char} is Vowel`);
    } else{
        console.log(`${char} is consonet`);
    }
};
findVowelOrNot();
