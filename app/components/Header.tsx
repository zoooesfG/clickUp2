import Image from 'next/image'

const Header = ({title, request, job}:{
  title: string,
  request?:string,
  job?:string
}) => {
  return (
    <div className="w-4/5 flex justify-between font-bold mb-10">
        <div>
          <h1 className="text-xl">{title}</h1>
          <div>
            {request &&<h2>Request #: {request}</h2>}
            {job && <h2>Job #: {job}</h2>}
          </div>
        </div>
        <Image src="/taylor.png" alt="taylor group logo" width={100} height={100}/>
      </div>
  )
}

export default Header
