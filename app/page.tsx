// import GraphicsOrder from "./components/GraphicsOrder";
import TransportationOrder from "./components/TransportaionOrder";
// import WorkOrder from "./components/WorkOrder";


export default async function Home({ searchParams }: { searchParams: { id: string } }) {
  // const task = await fetchTask("8686nmc8c")



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">

      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <div className="h-full">
        {/* <WorkOrder id={"8686nmc8c"}/> */}
      </div>
      <div className="h-full">
        {/* <GraphicsOrder id={"8686t882e"}/> */}
      </div>
      <div className="h-full">
        <TransportationOrder id={"868716fkm"}/>
      </div>
    </main>
  );
}
