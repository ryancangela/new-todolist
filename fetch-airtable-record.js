// let serverURL;

// fetch(".netlify/functions/api")
//     .then(response => response.json())
//     .then(json => {
//         serverURL = json.api;
//     })
// var base = config.MY_BASE_TOKEN;
var key = config.SECRET_API_KEY;

var Airtable = require("airtable");
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: key }).base("apprFc95KuaUW6flk");

// var deleteArtist = function (record) {
//     record.destroy(function (err) {
//         if (err) {
//             console.log('Error destroying ', recordId, err);
//         } else {
//             console.log('Destroyed ', record.getId());
//             $('div[data-record-id="' + record.getId() + '"]').remove();
//         }
//     });
// };

var loadArtists = function () {
  $("#artists").empty();

  base("Artists")
    .select({
      sort: [{ field: "Name", direction: "asc" }],
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          console.log("Retrieved ", record.get("Name"));
          // grab image url for src insert
          var $imageurl = record.get("images");

          var $collections = record.get("Collections");

          var $artistInfo = $('<div class="recordWrapper">');
          $artistInfo.append($("<img>").attr("src", $imageurl));
          $artistInfo.append(
            $('<h3 class="artist-name">').text(record.get("Name"))
          );
          $artistInfo.append(
            $('<p class="artist-bio">').text(record.get("Bio"))
          );

          // img.src = "/images/img1.gif";
          // $('#image').html(img);

          // $artistInfo.prepend('<img id="profileimage" src="theImg.png" />')

          var x = $('<button style="display: none">')
            .text("Delete")
            .click(function () {
              deleteArtist(record);
            });
          $artistInfo.append(x);
          $artistInfo.attr("data-record-id", record.getId());

          $("#artists").append($artistInfo);
        });

        fetchNextPage();
      },
      function done(error) {
        console.log(error);
      }
    );
};

// $('#create').click(function () {
//     base('Artists').create({
//         "Name": "Al Held",
//         "Bio": "Al Held began his painting career by exhibiting Abstract Expressionist works in New York; he later turned to hard-edged geometric paintings that were ...",
//         "Genre": [
//             "American Abstract Expressionism",
//             "Color Field"
//         ],
//         "On Display?": true
//     }, function (err, record) {
//         if (err) { console.log(err); return; }
//         loadArtists();
//     });
// });

loadArtists();
