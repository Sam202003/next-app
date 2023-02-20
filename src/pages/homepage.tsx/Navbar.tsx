import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div style={{border:"1px solid white"}}>
      <h1></h1>
      <Link href="/People.tsx">
      <button>People</button>
      </Link>
          
    </div>
  )
}

export default Navbar
