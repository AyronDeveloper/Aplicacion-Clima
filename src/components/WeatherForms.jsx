import { useState } from 'react'
import style from "./WeatherForms.module.css"

const WeatherForms = ({onChangeCity}) => {

    const [city,setCity]=useState("Lima")

    const handleChange=(e)=>{
        setCity(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        onChangeCity(city)
    }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input className={style.input} type="text" name='city' onChange={handleChange} value={city}/>
    </form>
  )
}

export default WeatherForms
