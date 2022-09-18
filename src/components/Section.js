
const Section = (props) => {
  return (
    <div
    className={`min-h-screen flex justify-center items-center border-b-2 border-normal ${props.bg}`}
    id={props.id}>
        {props.comp}
    </div>
  )
}


export default Section
