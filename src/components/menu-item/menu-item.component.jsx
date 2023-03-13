import './menu-item.styles.scss';
import React from 'react';
// import withRouter from 'react-router-dom'
// onClick={()=> history.push(`${match.url}${linkUrl}`)} ,linkUrl,match
const MenuItem = ({title,imageUrl,size}) => (
    <div className={`${size} menu-item`} >

        <div className='background-image' style={{
                backgroundImage : `url(${imageUrl})`
            }}
        />

        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

// export default withRouter(MenuItem);
export default MenuItem;