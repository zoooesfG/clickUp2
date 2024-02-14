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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(allTasks, null, 2)}</pre>
      <h1>test</h1>

    </main>
  );
}
