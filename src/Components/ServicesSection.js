import React from 'react';

function ServicesSection({image, title, text}) {
    return (
        <div className="ServicesSection" style={{width : "50%"}}>
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
