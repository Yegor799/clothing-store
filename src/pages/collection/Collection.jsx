import './Collection.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem';


const CollectionPage = () => {
    
    // const COLLECTION_ID_MAP = {
    //     hats: 1,
    //     sneakers: 2,
    //     jackets: 3,
    //     womens: 4,
    //     mens: 5,
    // };

    const collections = useSelector(state => state.shop.collections);
    
    let { collectionId } = useParams(); 

    // const collection = collections.find(col => col.id === COLLECTION_ID_MAP[collectionId]);  

    const collection = collections.find(item => item.routeName === collectionId);    

    const { title, items } = collection;    

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};

export default CollectionPage;