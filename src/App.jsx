import { useState } from 'react';
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import imageList from './data';

function App() {
  const [selectedImage, setSelectedImage] = useState(imageList[0])

  return (
    <>
      <div className="gallery">
        <div className="images-container">
          <div className="selected-image">
            <ImageGallery src={selectedImage.src} alt={selectedImage.alt} isLarge />
          </div>
          <div className="thumbnail-images">
            {
              imageList.map((image) => (
                <ImageGallery 
                  key={image.id}
                  src={image.src} 
                  alt={image.alt} 
                  onClick={() => setSelectedImage(image)}
                  isSelected={selectedImage.id === image.id}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
