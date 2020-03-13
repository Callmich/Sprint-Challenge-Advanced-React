import { useEffect } from 'react';
import { useState } from 'react';
import ProfileCard from './ProfileCard';


export const useDarkMode = () => {

    const [dmOff, setDmOff] = useState(false)

    useEffect(()=>{
        if (dmOff === true){
            document.body.classList.add("darkmode") &&
            ProfileCard.classList.add("darkmode");
        } else{
            document.body.classList.remove("darkmode") &&
            ProfileCard.classList.remove("darkmode");
        }
    }, [dmOff])

    return [dmOff, setDmOff]

}