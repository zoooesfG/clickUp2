import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import { fetchTask } from '@/lib/clickup';

export default async function TransportationOrder ({ params } : {
  params: { id: string}
}) {
  const task = await fetchTask(params.id)
    return (

    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-full">

      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <Header title="Transportation Order" job={task.id} />
      <div className="mx-auto">
        <div className="section">
            <Section title="Client" value={task.name}/>
            <Section title="Event Name" value={task?.project?.name}/>
        </div>
        <div className=" grid grid-cols-3">
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

        <div className="grid grid-cols-3">
            <Section title="Order Date" value={task.date_created}/>
            <Section title="Due Date" value={task.start_date}/>
            <Section title="Warehouse"/>
        </div>
        <div>
          <h2 className="title">Description</h2>
          <div className="body">{task.description}</div>
        </div>
        <div>
          <h2 className="p-2 font-semibold">Delivery Information</h2>
          <div className="grid grid-cols-3">
            <Section title="Type of Truck Required"/>
            <Section title="Pickup Location"/>
            <Section title="Pickup Time"/>
          </div>
          <div className="section">
            <Section title="Contact Info"/>
            <Section title="Delivery Location"/>
          </div>
        </div>


      </div>


    </div>
  );
}
