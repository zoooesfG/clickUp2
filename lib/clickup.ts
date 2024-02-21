
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
// export interface Location {
//   id?: string,
//   name?: string
// }
export interface OptionValue {
  location?: {
                    lat?: number,
                    lng?: number
                },
                place_id?: string,
                formatted_address?: string
}
export interface Location {

                location?: {
                    lat?: number,
                    lng?: number
                },
                place_id?: string,
                formatted_address?: string

}
export interface RequestedBy{
                  id?: number,
                    username?: string,
                    email?: string,
                    color?: string,
                    initials?: string,
                    profilePicture?: null
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
      {default?:number;placeholder?:string;new_drop_down?:boolean;options?:[{id?:string;name?:string;value?:string;color?:string;orderindex?:number; label?:string}]};

  date_created?:string;
  hide_from_guests?:boolean;
  value?: Location | RequestedBy[] | string;
  required?:boolean}];
  dependencies?:[string];
  linked_tasks?:[string];
  // locations?:Location[];
  team_id?:string;
  url?:string;
  sharing?:{public?:boolean;public_share_expires_on?:string;public_fields?:[string];token?:string;seo_optimized?:boolean};permission_level?:string;list?:{id?:string;name?:string;access?:boolean};project?:{id?:string;name?:string;hidden?:boolean;access?:boolean};
  folder?:{id?:string;name?:boolean;hidden?:boolean;access?:boolean};
  space?:{id?:string};
  attachments?:[string]
}

interface OrderData{
  orderedBy:unknown,
  assignee:any,
  jobID: string,
  description: string,
  eventName: string,
  clientName?: string,
  orderDate: any,
  dueDate: unknown,
  shipDate: unknown,
  dept: string,
  process: string;
  finish: string,
  qty: string,
  height: string,
  width: string,
  truck: string,
  puLocation: string,
  puTime: string,
  delContact: string,
  delLocation: string,
  file:unknown,
  warehouse: string,
  department:string;
}




export async function fetchTask(id: string){


  const auth = process.env.APIKEY
  const headers={
    'Content-Type':'application/json',
    Authorization:`${auth}`
  }

  const response = await fetch(`https://api.clickup.com/api/v2/task/${id}`, {headers:headers})

  var orderData = <OrderData>{}
  const result = (await response.json()) as Task;


  var queryID = (typeId : string) => {return result.custom_fields?.find(x => x.id == (typeId))}
// ***********************finds*******************************
// Ordered By
  var requestedBy = queryID("b3fb5b6b-73b5-4c6e-84c9-b9f96f31cd41")
  var requestValue:RequestedBy[] = requestedBy?.value! as RequestedBy[]
  orderData.orderedBy =requestValue?.map(name => name.username) as unknown

// job id
  var jobID = queryID("26d419ba-7906-4808-9e9f-883b34bf9667",)
  orderData.jobID =jobID?.value as string

  //assignee
  orderData.assignee = result.assignees?.map(name => name.username) as any

//description
orderData.description = result.description as string

// Event Name
  var eventID = queryID("8256b393-603e-464d-a04e-42089017a0cd")
  orderData.eventName = eventID?.value as string

// Client Name
  var clientQuery = queryID("b5de20ea-63fe-4b6b-8b20-564ac842a36d")
  var client = clientQuery?.type_config?.options?.find(option => option.orderindex == clientQuery?.value,)
  orderData.clientName = client?.name as string

//Order Date
  var orderQuery = queryID("47894080-6546-4dfa-ba09-a8cedff6db47")
  orderData.orderDate = getDate(orderQuery?.date_created!) as unknown

//Due Date
  orderData.dueDate = getDate(result.due_date!) as unknown

//Ship Date
  var shipQuery = queryID("7960a898-edf3-4eaf-b6ad-56071592e036")
  var shipValue:string = shipQuery?.value as string
  orderData.shipDate = getDate(shipValue) as unknown

//Department
  var deptQuery = queryID("d2b2d139-2360-4344-ab8b-cc7fa6e09480")
  var deptGroup = deptQuery?.type_config?.options?.find(option => option.orderindex == deptQuery?.value)

  orderData.dept = deptGroup?.name as string

//Process
  var processQuery = queryID("60e101b0-d6eb-4b59-bf12-1a3340d5eaf8")
  var processData = processQuery?.type_config?.options?.find(option => option.orderindex == processQuery?.value)
  orderData.process = processData?.name as string

//Finishing
  var finishQuery = queryID("3e7d0f78-5c6f-4b07-80a7-0152da50b6c6")
  var finishData = finishQuery?.type_config?.options?.find(finish => finish.orderindex == finishQuery?.value)
  orderData.finish = finishData?.name as string

// Quantity
  var qtyQuery = queryID("691f023a-9702-4580-9bf5-92332d9742df")
  orderData.qty = qtyQuery?.value as string

// Height
  var heightQuery = queryID("154ee536-ac1f-4be2-8d77-091bef81f0d2")
  orderData.height = heightQuery?.value as string

// Width
  var widthQuery = queryID("e965eb35-4997-45e2-bdb1-7c6985d92beb")
  orderData.width = widthQuery?.value as string

//Truck
  var truckQuery = queryID("e0e588fe-fc50-4080-81ea-187c5a00fd8a")
  orderData.truck = truckQuery?.value as string

//Pickup location
  var locQuery = queryID("f0564cab-31a8-43cd-8411-deb2e8a7425c")
  var locValue:Location = locQuery?.value! as Location
  orderData.puLocation = locValue?.formatted_address as string

// Pickup Time
  var pickupQuery = queryID("ea950116-826f-4ca1-843b-de37856c46a5")
  orderData.puTime = pickupQuery?.value as string

// Delivery Contact
var delQuery = queryID("3e1dafbf-890d-4485-83a8-07660cadc7f1")
orderData.delContact = delQuery?.value as string

// Delivery Location
var dlocQuery = queryID("10f0c75e-a52b-46c9-83ea-3ef461df545f")
var dlocValue:Location = dlocQuery?.value! as Location
orderData.delLocation = dlocValue?.formatted_address as string

//warehouse
var wareQuery=queryID("f075364a-2ba4-4fc3-9a12-ee2acfa8b102")
var getWarehouse = wareQuery?.type_config?.options?.find(option => option.id == wareQuery?.value)
orderData.warehouse = getWarehouse?.label as string
console.log(getWarehouse)

//department

//Design File
//Graphic File
var design = queryID("24c4c452-45ec-4c51-9897-635424bd121e")
var graphic = queryID("699bbf73-1570-48ae-a62f-9dabacd5df02")
orderData.file = () =>{
  if (graphic?.value || design?.value) {
    return "ADDED TO CLICKUP" as string
  }else{
    return "" as string
  }
}
// console.log(orderData)
  return orderData
}
function getDate(date:string):Date{
  return new Date(Number(date))
}
