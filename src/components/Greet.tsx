type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
      <div>
{
    props.isLoggedIn ? `<h1>Hello {props.name}! you have {props.messageCount} unread messages.</h1>` : <h1>Welcome Guest</h1>
}
    
      </div>
  )
}

export default Greet