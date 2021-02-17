const fs = require('fs');
const lodash = require('lodash');
let usersData = [];

function checkUser(id) {
    let json = fs.readFileSync("./data/usersData.json", 'utf8')
    json = JSON.parse(json)    
    let userNames = lodash.map(json, 'userName')
    console.log('usernames:' + userNames);
    let targetUser = userNames.find(element => {return element == id});
    console.log('targetUser:' + targetUser);
    if (targetUser === undefined) return false;
    return true; 
  
}


function dataFiller(data) {

    usersData.push(data)
    if (checkUser(data.username) === false) {
        fs.readFile("./data/usersData.json", 'utf8', (err, page) => {
            if (err) return console.log(err);
            let json = JSON.parse(page);
            let fileData = usersData.concat(json)
            
            fs.writeFile("./data/usersData.json", JSON.stringify(fileData), (err, page) => {
                if (err) return console.log(err);
                console.log('SUCCESS');
            });
        })

        return true

    } else return false
}

module.exports = {dataFiller, checkUser}