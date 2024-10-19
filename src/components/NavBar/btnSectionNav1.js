import React from 'react'
import { Link } from 'react-router-dom'


export default function BtnSectionNav1(props) {
  return (
    <div>
    <Link to={props.link}>
      <button
        className="text-white w-full border hover:shadow-md text-sm font-bold cursor-pointer bg-slate-950 transition screenLarge:hover:bg-gradient-to-r Laptop:hover:bg-gradient-to-r mobil:bg-gradient-to-r MiniPortable:bg-gradient-to-r from-cyan-950 to-pink-500 rounded-full px-4 py-2"
        type="button"
      >
        {props.title}
      </button>
    </Link>
  </div>
  )
}
