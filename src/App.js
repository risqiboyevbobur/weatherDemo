import { useState } from "react";
import "./App.css";
import axios from "axios"
// let value = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`
let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
const one  = require("./img/icon.png")

function App() {

const [data,setData] = useState()
const [value,setValue] = useState()
const getDataWeather = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`)
  .then((res) => {
    setData(res?.data)
    setValue("")
  })
}
console.log(data);
  return (
    <div className="App">
      <div className="rain">
       <div className="container">
        <div className="row justify-content-center ">
         {!data ?
          <div className="col-4">
          <div style={{background: "transparent"}} className="card">
          <div className="card-body">
          <input type="text" placeholder="search weather" value={value} onChange={(e) => setValue(e.target.value)} className="first" />
            <button onClick={getDataWeather} className="btn btn-search">Click</button>
            <h2 className="card-title">Demo</h2>
            <br />
            <h6 className="card-title">Demo</h6>
            <br />
           <h3 className="card-text degree"><b>Demo</b></h3>
           <img src={one} alt="one" />
           <br />
           
           <br />
          </div>
          <ul style={{listStyle:"none", display:"flex", justifyContent:"space-around"}} className="box">
            <li style={{paddingRight:"15px"}} className="list-box">Max: Demo</li>
            <div className="or"></div>
            <li className="list-box">Min: Demo</li>
          </ul>
        </div>
          </div>
          :
          <div className="col-4">
          <div style={{background: "transparent"}} className="card">
          <div className="card-body">
          <input type="text" placeholder="search weather" value={value} onChange={(e) => setValue(e.target.value)} className="first" />
            <button onClick={getDataWeather} className="btn btn-search">Click</button>
            <h2 className="card-title">{data?.name}</h2>
            <br />
            <h6 className="card-title">{data?.weather[0].main}</h6>
            <br />
           <h3 className="card-text degree"><b>{Math.round(data?.main?.temp)+ "°c "}</b></h3>
           <img src={one} alt="one" />
           <br />
           
           <br />
          </div>
          <ul style={{listStyle:"none", display:"flex", justifyContent:"space-around"}} className="box">
            <li style={{paddingRight:"15px"}} className="list-box">Max: {Math.round(data?.main?.temp_max)+ "°c"}</li>
            <div className="or"></div>
            <li className="list-box">Min: {Math.round(data?.main?.temp_min)+ "°c "}</li>
          </ul>
        </div>
          </div>}
        </div>
       </div>
      </div>
      <div className="lightining"></div>
    </div>
  );
}

export default App;
