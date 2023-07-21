import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children, disabled, to, type, onClick}) {


    const base = "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200"
    const styles = {
      primary: base + " px-4 py-3  md:px-6 md:py-4",
      small: base + " py-2 px-4 text-xs md:px-5 md:py-2.5",
      secondary: " text-sm inline-block font-semibold tracking-wide uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 px-4 py-2.5  md:px-6  md:py-3.5",
      round: base + " py-1 px-2.5 text-s md:px-3.5 md:py-2",

    }
    
    if(to){
        return <Link to={to} className={styles[type]}>{children}</Link>
    }

    if (onClick) {
      return <button className={styles[type]} onClick={onClick}>{children}</button>
    }
  return (
    <button className={styles[type]} disabled={disabled}  >{children}</button>
  )
}
