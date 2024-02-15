
const Section = ({title, value}:{

    title:string,
    value:string

}) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="body">{value}</p>
    </div>
  )
}

export default Section
