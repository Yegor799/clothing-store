import { useState } from "react";
import { SHOP_DATA } from "../../data";
import CollectionPreview from "../../components/PreviewCollection/CollectionPreview";

const ShopPage = () => {
    
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
))}
        </div>
    );
}

export default ShopPage;