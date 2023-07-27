/* import { useState } from 'react' */
//import logo from '/logo.svg'
//import react from `react`

import './App.css'
import { css } from '@emotion/react'
//import { css } from '@emotion/react'
//import { BrowserRouter } from 'react-router-dom'
//import useFetch from './customHooks/useFetch'
import FarmList from './components/FarmList'
//import { useForm, SubmitHandler } from "react-hook-form"
//import styled from '@emotion/react'
import FarmSearch from './components/FarmSearch'
import NavBar from './components/NavBar'

//const Body = styled.div`${bodyStyle}`
function App() {

  return (
    <>
      <div>
        <NavBar/>
        <FarmSearch />
      </div></>
  )
}

export default App
