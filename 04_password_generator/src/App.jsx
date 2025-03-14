import { useState, useCallback, useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%^&*()_+{}[]<>?"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },  [length, character, number,setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, character, number, passwordGenerator]);

  const copyPasswordToClip = useCallback(()=>{
   passwordRef.current?.select()
  //  passwordRef.current?.setSelectionRange(0,3)

 window.navigator.clipboard.writeText(password)
  },[password])



  return (
    <>
      <h1 className='text-4xl text-center '>Password Generator</h1>
      <div className='w-full max-w-wd mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-white'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" name="" id="" value={password} className='outline-none w-full py-1 px-3' readOnly placeholder='Password' ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' onClick={copyPasswordToClip}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full cursor-pointer mt-2"
          />
            <label htmlFor=""> Length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" name="" id="numberInput" defaultChecked={number} onChange={() => setNumber(prev => !prev)}  />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" name="" id="charInput" defaultChecked={character} onChange={() => setCharacter(prev => !prev)} />
            <label htmlFor="charInput">Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
