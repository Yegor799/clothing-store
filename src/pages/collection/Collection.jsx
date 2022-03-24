import './Collection.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem';


const CollectionPage = () => {
    
    const collections = useSelector(state => state.shop.collections);
    
    let { collectionId } = useParams(); 

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