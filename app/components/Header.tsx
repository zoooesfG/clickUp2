import Image from 'next/image'

const Header = ({title, client, job}:{
  title: string,
  client?:string,
  job?:string
}) => {
  return (
    <div className="w-full flex justify-between font-bold mb-10">
        <div>
          <h1 className="text-xl">{title}</h1>
          <div>

            {job && <h2>Job #: {job}</h2>}
            {client &&<h2>Client: {client}</h2>}
          </div>
        </div>
        <Image src="/taylor.png" alt="taylor group logo" width={100} height={100}/>
      </div>
  )
}

export default Header
