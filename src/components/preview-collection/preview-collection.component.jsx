import './collection-preview.styles.scss'
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            <div key={items.id}>{items.filter((item,ind)=>ind<4).map(({id,...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps}/>
            ))}</div >
        </div>
    </div>
)
export default PreviewCollection;