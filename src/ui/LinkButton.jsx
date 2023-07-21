import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


export default function LinkButton({children, to}) {
    const navigate = useNavigate()
    const classes = "text-sm text-blue-500 hover:text-blue-700 hover:underline"

if (to === "-1") {
    return <button className={classes} onClick={() => navigate(-1)}>{children}</button>
}

  return (
    <Link className={classes} to={to}>{children}</Link>
  )
}
