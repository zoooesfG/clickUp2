"use server"
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./components/pdf";


export default async function Home({ searchParams }: { searchParams: { id: string } }) {
  // const task = await fetchTask("8686nmc8c")



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
<PDFFile/>

      <p>try /workorder/[id] or /transportation/[id] or /graphic/[id]</p>
    </main>
  );
}
