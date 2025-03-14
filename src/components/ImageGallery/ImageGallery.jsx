import React from 'react'
import './ImageGallery.css'

export default function ImageGallery(props) {
    return (
        <>
            <img 
                src={props.src} 
                alt={props.alt} 
                onClick={props.onClick} 
                className={` ${props.isLarge ? "large-img" : "thumbnail"} ${props.isSelected ? "selected" : ""}`}
                />
        </>
    )
}
