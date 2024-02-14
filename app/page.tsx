import { fetchTasks } from "@/lib/clickup";
import { HomeProps } from "@/types";

export default async function Home({searchParams}:HomeProps) {
  const allTasks = await fetchTasks({
    id: searchParams.id,
    name: searchParams.name,
    description: searchParams.description,
    date_created: searchParams.date_created

  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      {/* <pre>{JSON.stringify(allTasks, null, 2)}</pre> */}
      <div className="w-4/5">
        <div className="section">
          <div className="group">
            <h2 className="title" >Description</h2>
            <p className="body">{allTasks.name}</p>
          </div>
          <div className="group">
            <h2 className="title" >Client</h2>
            <p className="body">{allTasks.name}</p>
          </div>
        </div>
        <div className="section">
          <div className="group">
            <h2 className="title" >Event Name</h2>
            <p className="body">{allTasks.name}</p>
          </div>
          <div className="group">
            <h2 className="title" >Contact</h2>
            <p className="body">{allTasks.name}</p>
          </div>
        </div>
        <div className="section">
          <div className="group">
            <h2 className="title" >Event Location</h2>
            <p className="body">{allTasks.locations.name}</p>
          </div>
          <div className="">
            <div className="grid grid-cols-2">
              <div className="group">
                <h2 className="title" >Hall</h2>
                <p className="body">{allTasks.locations.name}</p>
              </div>
              <div className="group">
                <h2 className="title" >Booth Number</h2>
                <p className="body">{allTasks.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="group">
                <h2 className="title" >Booth Size</h2>
                <p className="body">{allTasks.name}</p>
              </div>
              <div className="group">
                <h2 className="title" >Height Limit</h2>
                <p className="body">{allTasks.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <div className=" grid grid-cols-3 w-full">
          <div>
            <h2 className="title" >Ordered By</h2>
              <p className="body">{allTasks.name}</p>
          </div>
          <div>
            <h2 className="title" >Given To</h2>
              <p className="body">{allTasks.name}</p>
          </div>
          <div>
            <h2 className="title" >Department</h2>
              <p className="body">{allTasks.name}</p>
          </div>
        </div>
        <div className=" grid grid-cols-3">
          <div>
            <h2 className="title" >Order Datey</h2>
              <p className="body">{allTasks.name}</p>
          </div>
          <div>
            <h2 className="title" >Due Date</h2>
              <p className="body">{allTasks.name}</p>
          </div>
          <div>
            <h2 className="title" >Ship</h2>
              <p className="body">{allTasks.name}</p>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="title" >Description</h2>
        <div className="body" ></div>
      </div>
    </main>
  );
}
