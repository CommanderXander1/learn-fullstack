const Notification = ({ message, color }) => {

    

    if(message === null) {
        return null
    }

    const styles = {
        color: color
    }

    return (
        <div className="notification" style={styles}>
            {message}
        </div>
    )
}

export default Notification