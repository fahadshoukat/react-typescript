type MenuProps = {
    children: React.ReactNode
}

const Menu = (props: MenuProps) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Menu