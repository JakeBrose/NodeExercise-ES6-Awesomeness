let firstName = process.argv[2]; 
let lastName = process.argv[3];
let fullName = {
    firstName,
    lastName
}

const cheer = ({ firstName: first, lastName: second }) => {
    let myName = `${first} ${second}`.toUpperCase();
    console.log('myName=',myName);
    let nameArr = [...first, ...second];
    console.log('nameArr=',nameArr);
    let i = nameArr.length
    let j = 0
    function cheerLetters(i) {
        if (i) {
            let letter = nameArr[j].toUpperCase();
            let conj = "aeiofhlmnrsx".includes(letter.toLowerCase())
            ? "an"
            : "a ";
            console.log(`Gimmie ${conj} ${letter}!`);
            i--;
            j++;
            cheerLetters(i);
        } else {
            console.log(`What's that spell?`);
            console.log(myName);
        }
    }
    cheerLetters(i)
}
cheer(fullName)