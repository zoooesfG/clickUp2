import { fetchTask } from "@/lib/clickup";

async function PDF() {


//  async function PDF (){
const task =  fetchTask("8686yn6h7")

// const task = await fetchTask("8686yn6h7")
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
    var users = [
  {
    title: "Shyam",
    value: task.jobID,
  },
  {
    title: "title",
    value: "26",
  },
  {
    title: "Vitthal",
    value: "26",
  },
];
var document = {
  html: html,
  data: {
    users: users,
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

  }