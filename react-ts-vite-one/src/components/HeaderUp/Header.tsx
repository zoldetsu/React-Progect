import settings from "../assets/settings.png"
import notification from '../assets/notification.png'
import './Header-icon.css'

export default function HeaderUp() {
    return (
        <header className='header'>
            <div className='text-logo'>
                Devicorn
            </div>
            <section className='icons-select'>
                <img className='img-icon' src={settings} alt="" />
                <img className='img-icon' src={notification} alt="" />
            </section>
            
        </header>
    )
}