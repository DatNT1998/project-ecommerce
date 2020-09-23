import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="background-image" />
        <div className="content">
            <div className="title">
                {title.toUpperCase()}
            </div>
            <span className="subtitile">
                SHOP NOW
            </span>
        </div>
    </div >
)

export default withRouter(MenuItem);