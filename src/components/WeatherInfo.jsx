import style from "./WeatherInfo.module.css"

const WeatherInfo = ({weather}) => {
  return (
    <div className={style.mainInfo}>
      <div className={style.city}>{weather?.location.name}</div>
      <div className={style.country}>{weather?.location.country}</div>
      <div className={style.row}>
        <div>
            <img src={`http:${weather?.current.condition.icon}`} alt="" />
        </div>
        <div className={style.weatherConditions}>
            <div className={style.condition}>{weather?.current.condition.text}</div>
            <div className={style.current}>{weather?.current.temp_c}°</div>
        </div>
      </div>
      <iframe title="mapa"
      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115590.73628652914!2d${weather?.location.lon}9!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1694923663362!5m2!1ses-419!2spe`} 
      width="100%" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default WeatherInfo
