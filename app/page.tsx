import { fetchTask } from "@/lib/clickup";


export default async function Home({ searchParams }: { searchParams: { id: string } }) {
  const task = await fetchTask("8686nmc8c")
console.log(task.jobID)
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
<ul>
      {/* {{#each users}} */}
      <li>Name: {task.jobID}</li>
      {/* <li>Age: {{this.value}}</li> */}
      <br />
      {/* {{/each}} */}
    </ul>
      <p>try /workorder/[id] or /transportation/[id] or /graphic/[id]</p>
    </main>
  );
}
