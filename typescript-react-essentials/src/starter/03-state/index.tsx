import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
}

const navLinks: Link[] = [
  {
    id: 1,
    url: 'somestring',
    text: 'some text'
  },
    {
    id: 2,
    url: 'somestring',
    text: 'some text'
  },
    {
    id: 3,
    url: 'somestring',
    text: 'some text'
  }
]

function Component() {
  const [text, setText] = useState('shakeAndBake')
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([])
  const [links, setLinks] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={()=>{
        setText('typeSctipt')
        setNumber(0)
        setList(['hello', 'world'])
        setLinks([...links, {id:4, url:'hello', text:'hello'}])
      }}>click me</button>
      {/* <h2>State</h2> */}
    </div>
  );
}
export default Component;
