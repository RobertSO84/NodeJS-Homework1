const fs = require('fs');
const csvtojson = require('csvtojson');

const csvFilePath = './node_csv.csv';

csvtojson()
.fromFile(csvFilePath)
.then((jsonArray) => {
    let jsonString = '';
    jsonArray.forEach( jsonElement => {
        jsonString += JSON.stringify(jsonElement) + " \n"
    });
    fs.writeFile('./csv_to_json.txt', jsonString, (error) => {
        if (error) throw error;
        console.log('The file was successfully converted!');
    });

});
