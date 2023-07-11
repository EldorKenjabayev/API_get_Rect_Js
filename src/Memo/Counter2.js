import React, { useMemo } from 'react'

export default function ({coun2}) {
    const tekshirish  = useMemo(()=>{
        let i = 0;
        while(i < 800000000) i++;
        return coun2 === 5 ? 'bu besh':'bu besh emas'
    },[coun2])
  return (
    <div>
        <h2>{coun2}</h2>
        <h2>{tekshirish}</h2>
    </div>
  )
}
