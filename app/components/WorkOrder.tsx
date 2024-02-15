import { fetchTask } from "@/lib/clickup";
import Image from "next/image";
import Section from "./Section";


export default async function WorkOrder({ id }: { id: string  }) {
  const task = await fetchTask(id)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">

      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
            <div className="w-4/5 flex justify-between font-bold mb-10">
        <div>
          <h1 className="text-xl">Work Order</h1>
          <div>
            <h2>Request #: {task.id}</h2>
            <h2>Job #: {task.id}</h2>
          </div>
        </div>
        <Image src="/taylor.png" alt="taylor group logo" width={100} height={100}/>
      </div>
      <div className="w-full">
        <div className="section">
            <Section title="Description" value={task.name}/>

            <Section title="Client" value={task.name}/>

        </div>
        <div className="section">

            <Section title="Event Name" value={task?.project?.name}/>


            <Section title="Contact" value={task.name}/>

        </div>
        <div className="section">
          <div className="group">
            <h2 className="title">Event Locations</h2>
            {task.locations?.map(location => <div className="body" key={location.id}>{location.name}</div>)}
          </div>
          <div className="">
            <div className="grid grid-cols-2">
              <div className="group">
                <h2 className="title">Hall</h2>
                {task.locations?.map(location => <div className="body" key={location.id}>{location.name}</div>)}
              </div>
                <Section title="Booth Number" value={task.name}/>
            </div>
            <div className="grid grid-cols-2">
                <Section title="Booth Size" value={task.name}/>
                <Section title="Height Limit" value={task.name}/>
            </div>
          </div>
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
        </div>
    </main>
  );
}
