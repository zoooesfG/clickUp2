
const Section = ({title, value}:{

    title?:string,
    value?:string

}) => {
  return (
    <div className="group">
      <h2 className="title">{title}</h2>
      <p className="body">{value}</p>
    </div>
  )
}

export default Section
