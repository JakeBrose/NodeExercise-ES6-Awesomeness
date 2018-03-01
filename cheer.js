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
}
cheer(fullName)