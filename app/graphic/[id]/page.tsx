import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import { fetchTask } from '@/lib/clickup';


export default async function GraphicsOrder ({ params } : {
  params: { id: string}
}) {
  const task = await fetchTask(params.id)
    return (

    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-full">

      <Header title="Graphics Order" job={task.id} />
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
            <Section title="Ship Date" value={task.start_date}/>
        </div>

        <div className="grid grid-cols-3">
            <Section title="Order Date" value={task.date_created}/>
            <Section title="Due Date" value={task.start_date}/>
            <Section title="Warehouse"/>
        </div>

        <div>
          <div className="grid grid-cols-3">
            <Section title="Process"/>
            <Section title="Finishing"/>
            <Section title="Quantity"/>
          </div>
          <div className="section">
            <Section title="Height"/>
            <Section title="Width"/>
            <Section title="Design File Link"/>
          </div>
        </div>


      <div>
          <h2 className="title">Description</h2>
          <div className="body">{task.description}</div>
        </div>

      </div>


    </div>
  );
}


