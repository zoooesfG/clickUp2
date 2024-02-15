import { fetchTask } from "@/lib/clickup";
import Image from "next/image";
import Section from "./components/Section";


export default async function Home({ searchParams }: { searchParams: { id: string } }) {
  const task = await fetchTask("8686nmc8c")

  const utcSeconds = task.due_date
  const date = new Date(0);
  const startDate = date.setUTCSeconds(Number(utcSeconds))

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
      <div className="w-4/5">
        <div className="section">
          <div className="group">
            <Section title="Description" value={task.name}/>
          </div>
          <div className="group">
            <Section title="Client" value={task.name}/>
          </div>
        </div>
        <div className="section">
          <div className="group">
            <Section title="Event Name" value={task?.project?.name}/>
          </div>
          <div className="group">
            <Section title="Contact" value={task.name}/>
          </div>
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
              <div className="group">
                <Section title="Booth Number" value={task.name}/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="group">
                <Section title="Booth Size" value={task.name}/>
              </div>
              <div className="group">
                <Section title="Height Limit" value={task.name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <div className=" grid grid-cols-3 w-full">
          <div>
            <Section title="Ordered By" value={`${task?.creator?.username} (${task?.creator?.email})`}/>

          </div>
          <div>
            <h2 className="title" >Given To</h2>
            <p className="body">

              {task.assignees && task.assignees.map((assignee)=>(
                <p key={assignee.username}>{assignee.username} ({assignee.email})</p>
              ))}
            </p>
          </div>
          <div>
          </div>
        </div>
        <div className=" grid grid-cols-3">
          <div>
            <Section title="Order Date" value={task.date_created}/>
          </div>
          <div>
            <Section title="Due Date" value={task.start_date}/>
          </div>
          <div>
            <Section title="Ship" value={task.start_date}/>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="title">Description</h2>
        <div className="body">{task.description}</div>
      </div>
    </main>
  );
}
