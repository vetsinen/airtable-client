var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyz7BzOakLSDaMYP'
});
var base = Airtable.base('appW2upPBNl804iB1');


base('events').select({
    // Selecting the first 3 records in Grid 2:
    maxRecords: 3,
    view: "Grid 2"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
        console.log('Retrieved', record.get('title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) {
        console.error(err);
    }
});