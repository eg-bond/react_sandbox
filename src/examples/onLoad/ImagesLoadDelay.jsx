import { useRef, useState } from 'react'
import s from './ImagesLoad.module.css'

function ImagesLoadDelay() {
  const delayRef = useRef('')

  const [opCl, switchOp] = useState(s.opacity_1)
  const [imgKey, switchImg] = useState('image1')

  const delay = ms => {
    return new Promise(res => setTimeout(() => res(), ms))
  }

  let opa = s.opacity_1

  // Анимация всегда одинаковая
  async function hideImg(img) {
    if (imgKey !== img) {
      switchOp(s.opacity_0)
      await delay(200)
      switchImg(img)
    }
  }
  async function showImg() {
    switchOp(s.opacity_1)
  }

  console.log('render')
  return (
    <div>
      <h1>Images Loading with exact animation</h1>
      <button onClick={() => hideImg('image1')}>Wolf100%</button>
      <button onClick={() => hideImg('image2')}>MajorGrom</button>
      <button onClick={() => hideImg('image3')}>Chernobyl</button>
      <div>
        <img
          className={opa}
          onLoad={showImg}
          src={`./${imgKey}.jpg`}
          // src={`./${imgKey.current}.jpg`}
          alt='img1'
        />
      </div>
    </div>
  )
}

export default ImagesLoadDelay
