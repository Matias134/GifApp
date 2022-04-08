import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import 'animate.css';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading && 'Cargando...'}
            <div className='container-card animate__animated animate__fadeIn'>
                {
                    images.map(img => (
                        <GifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
