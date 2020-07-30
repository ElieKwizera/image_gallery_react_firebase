import React from 'react'
import useStore from '../hooks/useStore'

const ImageGrid = () => {
    const {images} = useStore('images');
    return (
        <div className="img-grid">
            {images && images.map(img => (
                <div className="img-wrap" key={img.id}>
                    <img src={img.url} alt="images"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
