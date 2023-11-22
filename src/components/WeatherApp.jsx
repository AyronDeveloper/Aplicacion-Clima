import { useEffect, useState } from 'react'
import WeatherForms from './WeatherForms'
import WeatherInfo from './WeatherInfo'
import Loading from './Loading'
import styles from "./WeatherApp.module.css"

const WeatherApp = () => {

    const [weather, setWeather]=useState(null)

    useEffect(()=>{
        loadInfo()
    },[])

    useEffect(()=>{
        document.title=`Clima ${weather?.location.name ?? ""}`
    },[weather])

    const loadInfo=async(city="Lima")=>{
        try {
            const responsive=await fetch(`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`)
            const data = await responsive.json()
            setTimeout(()=>{
                setWeather(data)
            },2000)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChangeCity=(city)=>{
        setWeather(null)
        loadInfo(city)
    }

  return (
    <>
        <div className={styles.weatherContainer}>
            <WeatherForms onChangeCity={handleChangeCity}/>
            {weather ? <WeatherInfo weather={weather}/>: <Loading/>}
        </div>    
    </>
  )
}

export default WeatherApp
