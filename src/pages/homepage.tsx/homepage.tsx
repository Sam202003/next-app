import { Bentham } from '@next/font/google'
import React from 'react'

const Homepage = () => {
  return (
    <div>
          <h1>Welcome to the C4 evaluation for
      
          </h1>
          <h1>RCT-201</h1>
          <p>You need to create an application similar to the one that you are looking right now. There 2 pages that needs to be created apart from the current homepage</p>
     
      
          <p>One path is /people and another a dynamic route /people/[id]</p>

          <button>/people</button>
          <p>The people can go to this page, by clicking the `People` tab in the Navbar
The data should be fetched from https://jsonplaceholder.typicode.com/users (Users API call) using Static Site Generation (SSG) for this page.
Hence the people page will be rendered from the server, with all the data present in the HTML file itself

          </p><button>/people/id</button>
          <p>The people can go to this page, by clicking the `Get Todos` button in the User Cards
All the static HTML files, based on the static paths of the user id, should be created using SSG
The HTML files should have the UserID:[id] data present in their HTML pages (Check screenshots for examples)
The TodoData should be fetched from https://jsonplaceholder.typicode.com/users/$id/todos using Client Side Rendering, and shown in the UI after the page loads
              Visting any other dynamic route based on the user id which is not in the API should show the 404 page. For example, from the Users API call, none of the user has the 97 user id, hence, visiting http://localhost:3000/people/97 should return 404 page</p>
          

          <h1>Making Criteria : </h1>
          <button> # TYPESCRIPT</button>
          <button> # REACT</button>
          <button> # NEXT JS</button>
          <button> # CHAKRAUI</button>
          </div>
  )
}

export default Homepage

