import { useState } from 'react'

function Container() {
  let [inputValue, changeInputValue] = useState('')

  return (
    <Prezentational
      inputValue={inputValue}
      changeInputValue={changeInputValue}
    />
  )
}

function Prezentational({ inputValue, changeInputValue }) {
  // let [inputValue, changeInputValue] = useState('')

  return (
    <div>
      <h1>Prezentational component</h1>
      <p>Can only render UI with coming props, doesn't contain any logic</p>
      <input
        type='text'
        value={inputValue}
        onChange={e => changeInputValue(e.target.value)}
      />
      <h2>Input Value:</h2>
      <p>{inputValue}</p>
    </div>
  )
}

export default Container
