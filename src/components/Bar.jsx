import React from 'react';

const Bar = ({data}) => {
    return (
        <div className="bar">
            <div className="bar__wrapper" style={{width: `${data.level}%`}}>
                <span className="bar__name">
                   {data.icon}{data.name}
                </span>
            </div>
        </div>
    );
}

export default Bar;