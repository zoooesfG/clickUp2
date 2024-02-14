import { FilterProps } from "@/types";

let accessToken: string
const baseUrl = "https://api.clickup.com/api/v2/task/8685brfk1"


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
  'Authorization':{auth}
}
const response = await fetch(`https://api.clickup.com/api/v2/task/8685brfk1`)
// const response = await fetch(`https://api.clickup.com/api/v2/task/${id}`)
const result = await response.json();
return result
}