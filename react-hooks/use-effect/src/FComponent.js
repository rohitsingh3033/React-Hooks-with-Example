import React, {useState, useEffect} from 'react';

const FComponent = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState('Functional Component');
    useEffect(() => { // 1st argument is side effect function
        console.log('Component Mounted or Updated');
        const interval = setInterval(showDate, 1000);

        return () => { // like componentWillUnmount
            console.log('CleanUp of Interval');
            clearInterval(interval);
        }
        
    }, []);
    const showDate = () =>{
        setTime(new Date().toString());
    }
    return (
        <div>
            <div>{time}</div>
            <button onClick = {showDate}>Show Date</button>
            <div>{message}</div>
            <button onClick={() => setMessage('Changed Functional Component')}>Change Message</button>            
        </div>
    )
}

export default FComponent
