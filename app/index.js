async function fetchTask(){
const auth = process.env.APIKEY
  const headers={
    'Content-Type':'application/json',
    Authorization:`${auth}`
  }

  const response =  fetch(`https://api.clickup.com/api/v2/task/${id}?include_subtasks=true`, {headers:headers})
  var orderData = {}
  const result = await fetch(response.json());
  var id = "8686yn6h7"

  var queryID = (typeId) => {return result.custom_fields?.find(x => x.id == (typeId))}
// ***********************finds*******************************
// Ordered By
  var requestedBy = queryID("b3fb5b6b-73b5-4c6e-84c9-b9f96f31cd41")
  var requestValue = requestedBy.value
  orderData.orderedBy =requestValue?.map(name => name.username)

// job id
  var jobID = queryID("26d419ba-7906-4808-9e9f-883b34bf9667",)
  orderData.jobID =jobID?.value

  //assignee
  orderData.assignee = result.assignees?.map(name => name.username)

//description
orderData.description = result.description

// Event Name
  var eventID = queryID("8256b393-603e-464d-a04e-42089017a0cd")
  orderData.eventName = eventID?.value

// Client Name
  var clientQuery = queryID("b5de20ea-63fe-4b6b-8b20-564ac842a36d")
  var client = clientQuery?.type_config?.options?.find(option => option.orderindex == clientQuery?.value,)
  orderData.clientName = client?.name

//Order Date
  var orderQuery = queryID("47894080-6546-4dfa-ba09-a8cedff6db47")
  orderData.orderDate = getDate(orderQuery?.date_created)

//Due Date

  orderData.dueDate = getDate(result.due_date)

//Ship Date
  var shipQuery = queryID("7960a898-edf3-4eaf-b6ad-56071592e036")
  var shipValue= shipQuery?.value
  orderData.shipDate = getDate(shipValue)

//Department
  var deptQuery = queryID("d2b2d139-2360-4344-ab8b-cc7fa6e09480")
  var deptGroup = deptQuery?.type_config?.options?.find(option => option.orderindex == deptQuery?.value)

  orderData.dept = deptGroup?.name

//Process
  var processQuery = queryID("60e101b0-d6eb-4b59-bf12-1a3340d5eaf8")
  var processData = processQuery?.type_config?.options?.find(option => option.orderindex == processQuery?.value)
  orderData.process = processData?.name

//Finishing
  var finishQuery = queryID("3e7d0f78-5c6f-4b07-80a7-0152da50b6c6")
  var finishData = finishQuery?.type_config?.options?.find(finish => finish.orderindex == finishQuery?.value)
  orderData.finish = finishData?.name

// Quantity
  var qtyQuery = queryID("691f023a-9702-4580-9bf5-92332d9742df")
  orderData.qty = qtyQuery?.value

// Height
  var heightQuery = queryID("154ee536-ac1f-4be2-8d77-091bef81f0d2")
  orderData.height = heightQuery?.value

// Width
  var widthQuery = queryID("e965eb35-4997-45e2-bdb1-7c6985d92beb")
  orderData.width = widthQuery?.value

//Truck
  var truckQuery = queryID("e0e588fe-fc50-4080-81ea-187c5a00fd8a")
  orderData.truck = truckQuery?.value

//Pickup location
  var locQuery = queryID("f0564cab-31a8-43cd-8411-deb2e8a7425c")
  var locValue = locQuery.value
  orderData.puLocation = locValue?.formatted_address

// Pickup Time
  var pickupQuery = queryID("ea950116-826f-4ca1-843b-de37856c46a5")
  orderData.puTime = pickupQuery?.value

// Delivery Contact
var delQuery = queryID("3e1dafbf-890d-4485-83a8-07660cadc7f1")
orderData.delContact = delQuery?.value

// Delivery Location
var dlocQuery = queryID("10f0c75e-a52b-46c9-83ea-3ef461df545f")
var dlocValue = dlocQuery.value
orderData.delLocation = dlocValue?.formatted_address

//warehouse
var wareQuery=queryID("f075364a-2ba4-4fc3-9a12-ee2acfa8b102")
var getWarehouse = wareQuery?.type_config?.options?.find(option => option.id == wareQuery?.value)
orderData.warehouse = getWarehouse?.label


//department
var deptQuery = queryID("d2b2d139-2360-4344-ab8b-cc7fa6e09480")
var getDept = deptQuery?.type_config?.options?.find(option => option.orderindex == deptQuery?.value)
orderData.department = getDept?.name
//Design File
//Graphic File
var design = queryID("24c4c452-45ec-4c51-9897-635424bd121e")
var graphic = queryID("699bbf73-1570-48ae-a62f-9dabacd5df02")

  orderData.file = "none"
  if (graphic?.value || design?.value) {
    orderData.file ="ADDED TO CLICKUP"
  }
console.log(result)
console.log(orderData)
function getDate(date){
  return new Date(Number(date))
}
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

    var users = [
  {
    title: "Job ID",
    value: orderData.jobID,
  },
  {
    title: "Ordered By",
    value: orderData.orderedBy,
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
console.log("test")

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

}