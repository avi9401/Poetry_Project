import React from 'react'


const Day = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const today = new Date(), 
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  const now = new Date();
  const totalDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

   const day = now.getDate();
   const remainingDays = totalDays - day


  return (

  <div className='comp'>
    <div className="date">
      <p className='date-set'>Current date is: {date}</p>
    </div>
    <div className="time">
      <p className='time-set'>Current time is: {time}</p>
    </div>
    <div className="days">
      <p className='days-left'>Days left in the month: {remainingDays}</p>
    </div>
  </div>
  );
}

export default Day