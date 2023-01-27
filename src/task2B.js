import fs from 'fs';
import csv from "csvtojson";

const csvFilePath = './src/node_csv.csv';

const convertCsvToTxt = async () => {
    try {
        const jsonArray = await csv().fromFile(csvFilePath);
        const jsonStrings = jsonArray.map( jsonElement => JSON.stringify(jsonElement));
        const jsonText = jsonStrings.join('');
        await fs.promises.writeFile('./src/csv_to_json.txt', jsonText);
        console.log('The file was successfully converted!');
    } catch (error) {
        console.error(error);
    }
}

convertCsvToTxt();
