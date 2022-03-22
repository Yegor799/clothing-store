import './CollectionsOverview.scss';
import { useSelector } from 'react-redux';
import CollectionPreview from '../PreviewCollection/CollectionPreview';

const CollectionsOverview = () => {

    const collections = useSelector(state => state.shop.collections);

    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
};

export default CollectionsOverview;