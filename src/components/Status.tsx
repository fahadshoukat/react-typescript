type StatusProps = {
    message: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message
    if(props.message === 'loading'){
        message = 'Loading...'
    }else if (props.message === 'success'){
        message = 'Data fetched successfully!'
    }else if (props.message === 'error'){
        message = 'Error fetching data'
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status