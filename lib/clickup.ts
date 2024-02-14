import { FilterProps } from "@/types";

let accessToken: string
const baseUrl = "https://api.clickup.com/api/v2/task8685brfk1"

// interface Task{
//     id:string;
//   custom_id?:string;
//   custom_item_id?:number;
//   name?:string;
//   text_content?:string;
//   description?:string;
//   status?:{id?:string;status?:string;color?:string;orderindex?:number;type?:string};
//   orderindex?:string;
//   date_created?:string;
//   date_updated?:string;
//   date_closed?:string;
//   date_done?:string;
//   archived?:boolean;
//   creator?:{id?:number;username?:string;color?:string;email?:string;profilePicture?:string};
//   assignees?:[];
//   watchers?:[{id?:number;username?:string;color?:string;initials?:string;email?:string;profilePicture?:string}];
//   checklists?:[];
//   tags?:[];
//   parent?:string;
//   priority?:string;
//   due_date?:string;
//   start_date?:string;
//   points?:string;
//   time_estimate?:string;
//   time_spent?:number;
//   custom_fields?:[
//     {id?:string;name?:string;type?:string;type_config?:
//       {default?:number;placeholder?:string;new_drop_down?:boolean;options?:[{id?:string;name?:string;color?:string;orderindex?:number}]};
//   date_created?:string;
//   hide_from_guests?:boolean;
//   value?:string;
//   required?:boolean}];
//   dependencies?:[string];
//   linked_tasks?:[string];
//   locations?:[string];
//   team_id?:string;
//   url?:string;
//   sharing?:{public?:boolean;public_share_expires_on?:string;public_fields?:[string];token?:string;seo_optimized?:boolean};permission_level?:string;list?:{id?:string;name?:string;access?:boolean};project?:{id?:string;name?:string;hidden?:boolean;access?:boolean};
//   folder?:{id?:string;name?:boolean;hidden?:boolean;access?:boolean};
//   space?:{id?:string};
//   attachments?:[string]
// }

// interface TaskListResult {
//   results: Task[]
// }

// export async function getAccessToken(): Promise<string> {
//   if (!accessToken) {
//     const clientId = process.env.USERNAME
//     const secret = process.env.CREDENTIAL

//     const basicAuth = process.env.APIKEY

//     const result = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         Authorization: `${basicAuth}`,
//         "Content-Type": "application/json",
//       },
//     })

//     const payload = await result.json()
//     accessToken = payload.access_token
//   }
//   return accessToken
// }
// export async function fetchGames(): Promise<TaskListResult> {
//   const token = await getAccessToken()
//   const res = await fetch(baseUrl, {
//     headers: {
//       Authorization: `${token}`,
//       "Content-Type": "application/json",
//     },
//   })

//   const payload = (await res.json()) as TaskListResult
//   return payload
// }

export async function fetchTasks(filters:FilterProps){

  const {
  id,
  custom_id,
  custom_item_id,
  name,
  text_content,
  description,
  status,
  orderindex,
  date_created,
  date_updated,
  date_closed,
  date_done,
  archived,
  creator,
  assignees,
  watchers,
  checklists,
  parent,
  priority,
  due_date,
  start_date,
  points,
  time_estimate,
  time_spent,
  custom_fields,
  dependencies,
  linked_tasks,
  locations,
  team_id,
  url,
  sharing,permission_level,list,project,
  folder,
  space,
  attachments
}=filters;
const auth = process.env.APIKEY
const headers={
  'Content-Type':'application/json',
  Authorization:`${auth}`
}
// const response = await fetch(`https://api.clickup.com/api/v2/task/8685brfk1`)
const response = await fetch(`https://api.clickup.com/api/v2/task/8685brfk1`, {headers:headers})
const result = await response.json();
return result
}