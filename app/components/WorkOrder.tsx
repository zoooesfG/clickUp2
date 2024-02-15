import { fetchTask } from "@/lib/clickup";
import Header from "./Header";
import Section from "./Section";


export default async function WorkOrder({ id }: { id: string  }) {
  const task = await fetchTask(id)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <Header title="Work Order" job={task.id} />
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}

      <div className="w-full">
        <div className="section">
            <Section title="Description" value={task.name}/>
            <Section title="Client" value={task.name}/>
        </div>
        <div className="section">
            <Section title="Event Name" value={task?.project?.name}/>
        </div>
      </div>
      <div className="w-full">
        <div className=" grid grid-cols-3 w-full">
            <Section title="Ordered By" value={`${task?.creator?.username} (${task?.creator?.email})`}/>
          <div>
            <h2 className="title" >Given To</h2>
            <p className="body">

              {task.assignees && task.assignees.map((assignee)=>(
                <p key={assignee.username}>{assignee.username} ({assignee.email})</p>
              ))}
            </p>
          </div>
          <Section title="Department"/>
        </div>
        <div className=" grid grid-cols-3">
            <Section title="Order Date" value={task.date_created}/>
            <Section title="Due Date" value={task.start_date}/>
            <Section title="Ship" value={task.start_date}/>
        </div>
        </div><div>
          <h2 className="title">Description</h2>
          <div className="body">{task.description}</div>
        </div>
    </main>
  );
}
