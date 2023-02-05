function Alert(props) {
    setTimeout(() => {
        console.log('assad');
      }, 3000)
      console.log('123')
    return (
        <div className="container">
            <div className="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert;

