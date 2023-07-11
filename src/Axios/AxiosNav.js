import React from 'react'
import './axois.css'
import { Link } from 'react-router-dom'
export default function AxiosNav() {
  return (
    <div>

        <center>
            <Link to={'izbrann'}>    
          <button>Показать избранные</button>
            </Link>
            <Link to={'/'}>           
          <button>Показать все</button>
            </Link>
        </center>

    </div>
  )
}
