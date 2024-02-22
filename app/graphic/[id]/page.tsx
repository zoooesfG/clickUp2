"use server"
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import { fetchTask } from '@/lib/clickup';


export default async function GraphicsOrder ({ params } : {
  params: { id: string}
}) {
  const task = await fetchTask(params.id)
    return (

    <div className="flex min-h-screen flex-col items-center justify-between p-24 min-w-full">

      <Header title="Graphics Order" job={task.jobID} />
      <div className="mx-auto">
        <div className="section">
            <Section title="Client" value={task.clientName}/>
            <Section title="Event Name" value={task?.eventName}/>
        </div>
        <div className=" grid grid-cols-3">
            <Section title="Ordered By" value={task?.orderedBy}/>
          <div>
            <Section title="Given To" value={task?.assignee}/>
          </div>
            <Section title="Ship Date" value={task?.shipDate?.toDateString()}/>
        </div>

        <div className="grid grid-cols-3">
            <Section title="Order Date" value={task?.orderDate.toDateString()}/>
            <Section title="Due Date" value={task?.dueDate.toDateString()}/>
            <Section title="Warehouse" value={task?.warehouse}/>
        </div>

        <div>
          <div className="grid grid-cols-3">
            <Section title="Process" value={task?.process}/>
            <Section title="Finishing" value={task?.finish} />
            <Section title="Quantity" value={task?.qty}/>
          </div>
          <div className="section">
            <Section title="Height" value={task?.height}/>
            <Section title="Width" value={task?.width}/>
            <Section title="Design File Link" value={task.file}/>
          </div>
        </div>


      <div>
          <h2 className="title">Description</h2>
          <div className="body">
            {task.description}
            </div>
        </div>

      </div>


    </div>
  );
}


