const CSVToJSON = require("csvtojson");


const FS = require("fs");

CSVToJSON().fromFile("./data/tree.csv").then(source =>
{
        console.log(source);
    
})