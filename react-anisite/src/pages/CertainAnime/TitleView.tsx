import { useParams } from 'react-router-dom';
import classes from '../Anime/TitlePage.module.css';
import {AnimeTitle} from '../../poster'
import { useLoading } from '../../hooks/useLoading';
import MyLoader from '../../UI/Loader/MyLoader';

export default function TitleView() {
    const { id } = useParams();
    const [loading] = useLoading()
    const result = AnimeTitle.find(anime => anime.id === parseInt(id));

    return (
        <div className={classes.animeView}>
            {
                loading 
                ?
                <div>
                    {result ? (
                <div className={classes.view_container}>
                    <img src={result.path} alt="" />
                    <div className={classes.text_block}>
                        <div className={classes.text_title}>{result.title}</div>
                        <p>{result.status}</p>
                    </div>
                </div>
            ) : (
                <div>
                    Аниме с id {id} не найдено
                </div>
            )}
                </div>
                :
                <div style={{display: 'flex', alignItems: 'center', marginTop: '15%', justifyContent: 'center'}}>
                    <MyLoader/>
                </div>
                
            }
        </div>
    );
}