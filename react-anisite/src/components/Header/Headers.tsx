import classes from './Header.module.css'

import LinkHeader from '../../UI/LinkHeader'
import { useEffect, useState } from 'react'
import useScroll from '../../hooks/useScroll'
import { Link, useLocation } from 'react-router-dom'

export default function Headers()  {    
    const [active, setActive] = useState('/anime')
    const scrolled = useScroll()
    
    const {pathname} = useLocation()

    useEffect(() => {
        setActive(pathname)
    },[pathname])

    
    return (
        <div className={ scrolled ? `${classes.header} ${classes.scroll}` : classes.header}>
            
                <div className={classes.header_line}>
                    <div className={classes.logo_text}>AniCorn</div>
                    <nav className={classes.nav_line}>
                        <LinkHeader route={"/anime"} active={active === "/anime"} onClick={() => {setActive(pathname)}}>Аниме</LinkHeader>
                        <LinkHeader route={'/dynh'} active={active === '/dynh'} onClick={() => {setActive(pathname)}}>Дунхуа</LinkHeader>
                        <LinkHeader route={'/dorama'} active={active === '/dorama'} onClick={() => {setActive(pathname)}}>Дорамы</LinkHeader>
                        <LinkHeader route={'/collection'} active={active === '/collection'} onClick={() => {setActive(pathname)}}>Коллекции</LinkHeader>
                    </nav>
                    <div className={classes.navSeachEnter}>
                        <div>
                        <Link to={'/seach'} className={classes.logo_enter}>Поиск</Link>
                        </div>
                        <div>
                        <Link to={'/sign'} className={classes.logo_enter}>вход</Link>
                        </div>
                        
                    </div>
                    
                </div>
                
            
            
        </div>
    )
}

