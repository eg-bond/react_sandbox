import { useState } from 'react'
import s from './ImagesLoad.module.css'

function ImagesLoad() {
  const [imgSrc, switchSrc] = useState('image1')
  const [opCl, switchOp] = useState(s.opacity_0)

  // Вариант без анимации при прогруженной картинке
  const hideImg = img => {
    if (imgSrc !== img) {
      switchSrc(img)
      switchOp(s.opacity_0)
    }
  }
  const showImg = () => {
    switchOp(s.opacity_1)
  }

  console.log('render')
  return (
    <div>
      <h1>Images Loading Event</h1>
      <button onClick={() => hideImg('image1')}>Wolf100%</button>
      <button onClick={() => hideImg('image2')}>MajorGrom</button>
      <button onClick={() => hideImg('image3')}>Chernobyl</button>
      <div>
        <img
          className={opCl}
          onLoad={showImg}
          src={`./${imgSrc}.jpg`}
          alt='img1'
        />
      </div>
    </div>
  )
}

export default ImagesLoad
