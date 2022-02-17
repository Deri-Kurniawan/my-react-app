function List(props) {
  return (
    <ol>
      {
        props.items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </ol>
  )
}

export default List;