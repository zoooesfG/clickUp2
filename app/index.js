
// ******************************code from pdf-creator-node*****************************
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("./template.html", "utf8");

var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };

    var  data = [
  {
    title: "Job ID",
    value: "5667678",
  },
  {
    title: "Ordered By",
    value: "the guy",
  },
  {
    title: "Vitthal",
    value: "26",
  },
];
var document = {
  html: html,
  data: {
    data:  data,
  },
  path: "./output.pdf",
  type: "",
};


pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

