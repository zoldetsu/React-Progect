import { AnimeTitle } from '../../poster.ts';
import CardAnime from '../../components/CardAnime/CardAnime.tsx';
import classes from './TitlePage.module.css';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading.ts';
import MyLoader from '../../UI/Loader/MyLoader.tsx';


export default function AnimePage() {
    const [loading] = useLoading()
    const router = useNavigate()
    
    const rows = [];
    
    for (let i = 0; i < AnimeTitle.length; i += 1) {
        rows[i] = AnimeTitle[i]
    }

    return (
        <div className={classes.anime_container}>
            <div className={classes.animePage}>
            {loading 
            ?
            <div>
                <h1 className={classes.AnimeText}>Последние обновления</h1>
                <div className={classes.CardLine}>
                {rows.map((poster, index) => ( 
                        <CardAnime key={index} 
                            onClick = {() => router(`/anime/${poster.id}`)}
                            title={poster.title} 
                            status={poster.status} 
                            img={poster.path}
                            
                        >   
                        </CardAnime>      
                    ))} 

                </div>
                               

            </div>

            : 
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15%', justifyContent: 'center'}}>
                <MyLoader/>
            </div>
            

            }
            
        </div>
        </div>
        
    );
}