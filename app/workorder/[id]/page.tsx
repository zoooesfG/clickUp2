import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import { fetchTask } from "@/lib/clickup";



export default async function WorkOrder({ params } : {
  params: { id: string}
}) {
  const task = await fetchTask(params.id)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <Header title="Work Order" job={task.jobID} />
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}

      <div className="w-full">
        <div className="section">
            <Section title="Description" value="filler"/>
            <Section title="Client" value={task.clientName}/>
        </div>
        <div className="section">
            <Section title="Event Name" value={task?.eventName}/>
        </div>
      </div>
      <div className="w-full">
        <div className=" grid grid-cols-3 w-full">
            <Section title="Ordered By" value={task?.orderedBy}/>
          <div>
            <Section title="Given To" value={task?.assignee}/>
          </div>
          <Section title="Department"/>
        </div>
        <div className=" grid grid-cols-3">
            {/* <Section title="Order Date" value={task.orderDate}/>
            <Section title="Due Date" value={task.dueDate}/>
            <Section title="Ship" value={task.shipDate}/> */}
        </div>
        </div><div>
          <h2 className="title">Description</h2>
          <div className="body">
            {task.description}
            </div>
        </div>
    </main>
  );
}
