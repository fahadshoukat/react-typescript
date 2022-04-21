type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
  return (
    <h1>Hello {props.name}! you have 10 unread messages.</h1>
  )
}

export default Greet