import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [holidays, setHolidays] = useState(data);

  // const [clear, setClear] = useState(false)

  function handleDelete(id){
    const newList =holidays.filter(holiday=>holiday.id !== id);
    setHolidays(newList);
  }
  return (
    <main>
      <section className="container">
        <h3>National Holidays</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt="holiday" />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date} <button className="delete" onClick={e=>handleDelete(holiday.id)}>X</button></p>
              </div>
            </div>
          );
        })}
        <button onClick={()=> setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
