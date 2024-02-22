"use server"
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import { fetchTask } from '@/lib/clickup';

export default async function TransportationOrder ({ params } : {
  params: { id: string}
}) {
  const task = await fetchTask(params.id)
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
          <Header title="Transportation Order" job={task.jobID} />
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
                <Section title="Department" value={task?.department}/>
            </div>

            <div className="grid grid-cols-3">
                <Section title="Order Date" value={task.orderDate}/>
                <Section title="Due Date" value={task.dueDate}/>
                <Section title="Warehouse" value={task.warehouse}/>
            </div>
            <div>
              <h2 className="title">Description</h2>
              <div className="body">{task.description}</div>
            </div>
            <div>
              <h2 className="p-2 font-semibold">Delivery Information</h2>
              <div className="grid grid-cols-3">
                <Section title="Type of Truck Required" value={task.truck}/>
                <Section title="Pickup Location" value={task.puLocation}/>
                <Section title="Pickup Time" value={task.puTime}/>
              </div>
              <div className="section">
                <Section title="Contact Info" value={task.delContact}/>
                <Section title="Delivery Location" value={task.delLocation}/>
              </div>
            </div>


          </div>


        </div>
  );
}
