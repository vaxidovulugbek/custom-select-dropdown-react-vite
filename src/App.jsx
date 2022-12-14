import { useRef, useState } from 'react'
import './App.css'
import downArrow from './assets/down-arrow.svg'
function App() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("select Cars")
  const menuRef = useRef()
  const textRef = useRef()
  const arrowRef = useRef()
  const customRef = useRef()
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== customRef.current && e.target !== arrowRef.current && e.target !== textRef.current) {
      setOpen(false)
    }
  })
  console.log(textRef.current);

  return (
    <div className="App">
      <div className='custom'>
        <div ref={customRef} className='custom__dropSelect' onClick={() => setOpen(!open)}>
          <p ref={textRef}>{text}</p>
          <img ref={arrowRef} src={downArrow} alt="" />
        </div>
        <div ref={menuRef} className={open === true ? `custom__select` : "d-none" }>
          <p onClick={() => setText("Ferrari")}>Ferrari</p>
          <p onClick={() => setText("Lamborgini")}>Lamborgini</p>
          <p onClick={() => setText("Rols Roys")}>Rols Roys</p>
        </div>
      </div>
    </div>
  )
}

export default App
