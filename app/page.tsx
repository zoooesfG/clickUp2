import { fetchTasks } from "@/lib/clickup";
import { HomeProps } from "@/types";
import Image from "next/image";
import Section from "./components/Section";

const startDate =() => {

}
export default async function Home({searchParams}:HomeProps) {
  const allTasks = await fetchTasks({
    id: searchParams.id,
    name: searchParams.name,
    description: searchParams.description,
    date_created: searchParams.date_created

  })
  const assignees = allTasks.assignees

  const utcSeconds = allTasks.due_date
  const date = new Date(0);
  const startDate = date.setUTCSeconds(utcSeconds)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      {/* <pre>{JSON.stringify(allTasks, null, 2)}</pre> */}
      <div className="w-4/5 flex justify-between font-bold mb-10">
        <div>
          <h1 className="text-xl">Work Order</h1>
          <div>
            <h2>Request #: {allTasks.id}</h2>
            <h2>Job #: {allTasks.id}</h2>
          </div>
        </div>
        <Image src="/taylor.png" alt="taylor group logo" width={100} height={100}/>
      </div>
      <div className="w-4/5">
        <div className="section">
          <div className="group">
            <Section title="Description" value={allTasks.name}/>
          </div>
          <div className="group">
            <Section title="Client" value={allTasks.name}/>
          </div>
        </div>
        <div className="section">
          <div className="group">
            <Section title="Event Name" value={allTasks.project.name}/>
          </div>
          <div className="group">
            <Section title="Contact" value={allTasks.name}/>
          </div>
        </div>
        <div className="section">
          <div className="group">
            <Section title="Event Location" value={allTasks.locations.name}/>
          </div>
          <div className="">
            <div className="grid grid-cols-2">
              <div className="group">
                <Section title="Hall" value={allTasks.locations.name}/>
              </div>
              <div className="group">
                <Section title="Booth Number" value={allTasks.name}/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="group">
                <Section title="Booth Size" value={allTasks.name}/>
              </div>
              <div className="group">
                <Section title="Height Limit" value={allTasks.name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <div className=" grid grid-cols-3 w-full">
          <div>
            <Section title="Ordered By" value={`${allTasks.creator.username} (${allTasks.creator.email})`}/>

          </div>
          <div>
            <h2 className="title" >Given To</h2>
            <p className="body">

              {assignees?.map((assignee)=>(
                <p>{assignee.username} ({assignee.email})</p>
              ))}
            </p>
          </div>
          <div>
            <Section title="Department" value={allTasks.assignees.username}/>
          </div>
        </div>
        <div className=" grid grid-cols-3">
          <div>
            <Section title="Order Date" value={allTasks.date_created}/>
          </div>
          <div>
            <Section title="Due Date" value={allTasks.startDate}/>
          </div>
          <div>
            <Section title="Ship" value={allTasks.start_date}/>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="title">Description</h2>
        <div className="body">{allTasks.description}</div>
      </div>
    </main>
  );
}
