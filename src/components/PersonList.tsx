type NameListProps = {
    nameList: {
        first: string,
        last: string
    }[]
}

const PersonList = (props: NameListProps) => {
  return (
    <div>
        {
            props.nameList.map(name => <h2 key={name.first}>{name.first} {name.last}</h2>)
        }
    </div>
  )
}

export default PersonList