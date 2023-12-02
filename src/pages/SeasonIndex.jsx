import '../css/Season.css'
import { useState } from 'react';
import { SeasonPreview } from '../cmps/SeasonPreview';

export function SeasonIndex() {

    const [isDark,setIsDark] = useState(false)

    return (
        <div onClick={()=> {setIsDark(!isDark)}}>
            <SeasonPreview className='season-preview' isDark={isDark} />
        </div>
    )
  }