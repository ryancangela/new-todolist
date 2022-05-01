"strict";
//
const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyCHY1ueXCWFZUqn",
});

const base = airtable.base("appyf7ojxShzZHWkB");

base("Table 1").create(
  { Name: "test", Notes: "test notes" },
  function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  }
);
