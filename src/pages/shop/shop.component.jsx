import React from 'react';

import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div>
                <h1>Shop page</h1>
                {
                    this.state.collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;