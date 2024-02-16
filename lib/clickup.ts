
let accessToken: string
const baseUrl = "https://api.clickup.com/api/v2/task8685brfk1"

export interface Assignee {
  id?: number,
  username?: string,
  color?: string,
  initials?: string,
  email?:string,
  profilePicture?: string
}
export interface Location {
  id: string,
  name: string

}

interface Task{
    id:string;
  custom_id?:string;
  custom_item_id?:number;
  name?:string;
  text_content?:string;
  description?:string;
  status?:{id?:string;status?:string;color?:string;orderindex?:number;type?:string};
  orderindex?:string;
  date_created?:string;
  date_updated?:string;
  date_closed?:string;
  date_done?:string;
  archived?:boolean;
  creator?:{id?:number;username?:string;color?:string;email?:string;profilePicture?:string};
  assignees?:Assignee[];
  watchers?:[{id?:number;username?:string;color?:string;initials?:string;email?:string;profilePicture?:string}];
  checklists?:[];
  tags?:[];
  parent?:string;
  priority?:string;
  due_date?:string;
  start_date?:string;
  points?:string;
  time_estimate?:string;
  time_spent?:number;
  custom_fields?:[
    {id?:string;name?:string;type?:string;type_config?:
      {default?:number;placeholder?:string;new_drop_down?:boolean;options?:[{id?:string;name?:string;color?:string;orderindex?:number}]};
  date_created?:string;
  hide_from_guests?:boolean;
  value?:string;
  required?:boolean}];
  dependencies?:[string];
  linked_tasks?:[string];
  locations?:Location[];
  team_id?:string;
  url?:string;
  sharing?:{public?:boolean;public_share_expires_on?:string;public_fields?:[string];token?:string;seo_optimized?:boolean};permission_level?:string;list?:{id?:string;name?:string;access?:boolean};project?:{id?:string;name?:string;hidden?:boolean;access?:boolean};
  folder?:{id?:string;name?:boolean;hidden?:boolean;access?:boolean};
  space?:{id?:string};
  attachments?:[string]
}

// export async function pdfData(){

// }
export async function fetchTask(id: string){


  const auth = process.env.APIKEY
  const headers={
    'Content-Type':'application/json',
    Authorization:`${auth}`
  }

  const response = await fetch(`https://api.clickup.com/api/v2/task/${id}`, {headers:headers})

  const result = (await response.json()) as Task;
  // var queryID = (typeId : string) => {result.custom_fields?.find(x => x.id == (typeId))}
// ***********************finds*******************************
// Ordered By
  var requestedID = "b3fb5b6b-73b5-4c6e-84c9-b9f96f31cd41"
  var requestedBy = result.custom_fields?.find(x => x.id == requestedID,)
  var requestedByName = requestedBy?.value?.map(name => name.username)
  // console.log(requestedByName)

// job id
  var jobID = result.custom_fields?.find( job => job.id == "26d419ba-7906-4808-9e9f-883b34bf9667",)
  var jobName = jobID?.value
  // console.log(jobName)

// Event Name
  var eventID = result.custom_fields?.find(event => event.id == "8256b393-603e-464d-a04e-42089017a0cd")
  var eventName = eventID?.value
  // console.log(eventName)

// Client Name
  var clientId ="b5de20ea-63fe-4b6b-8b20-564ac842a36d"
  var clientQuery = result.custom_fields?.find(client => client.id == clientId)
  var client = clientQuery?.type_config?.options?.find(
      option => option.orderindex == clientQuery?.value,
    )//client.name

//Order Date
  var orderQuery = result.custom_fields?.find(order => order.id == "47894080-6546-4dfa-ba09-a8cedff6db47")
  var orderDate = getDate(orderQuery?.date_created)

//Due Date
  var dueDate = getDate(result.due_date)

//Ship Date
  var shipQuery = result.custom_fields?.find(ship => ship.id == "7960a898-edf3-4eaf-b6ad-56071592e036")
  var shipDate = getDate(shipQuery?.value!)

//Department
  var deptQuery = result.custom_fields?.find(dept => dept.id == "d2b2d139-2360-4344-ab8b-cc7fa6e09480")
  var deptName = deptQuery?.type_config?.options?.find(option => option.orderindex == deptQuery?.value)
  // console.log(deptName?.name)

//Process
  var processQuery = result.custom_fields?.find(dept => dept.id == "60e101b0-d6eb-4b59-bf12-1a3340d5eaf8")
  var processData = processQuery?.type_config?.options?.find(option => option.orderindex == processQuery?.value)
// console.log(processData?.name)

//Finishing
  var finishQuery = result.custom_fields?.find(dept => dept.id == "3e7d0f78-5c6f-4b07-80a7-0152da50b6c6")
  var finish = finishQuery?.type_config?.options?.find(finish => finish.orderindex == finishQuery?.value)
// console.log(finish?.name)

// Quantity
  var qtyQuery = result.custom_fields?.find(qty => qty.id == "691f023a-9702-4580-9bf5-92332d9742df")
  var qty = qtyQuery?.value
  console.log(qty)

  return result
}
function getDate(date:string):Date{
  return new Date(Number(date))
}
