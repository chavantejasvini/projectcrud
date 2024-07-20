import { Button, Card, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './adduser.module.css'
import background from '../assets/bg.jpg'
import axios from 'axios'
import NavBar from './NavBar'
// import AddTwoTone from '@mui/icons-material/AddTwoTone';
// import Addchart from '@mui/icons-material/Addchart';

const Adduser = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [nameHelperText, setNameHelperText] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [phoneHelperText, setPhoneHelperText] = useState('')


  const handelSubmit = () => {
    const posting = () => {
      axios.post('http://localhost:3000/users', { name: name, email: email, phone: phone })
    }
    if (name === '' || email === '' || phone === '') {
      setEmailError(true)
      setNameError(true)
      setPhoneError(true)
      setNameHelperText('Please Enter Name')
      setPhoneHelperText('Please Enter Number')
      setEmailHelperText('Please Enter Email')
    } else {
      alert('submitted')
      posting();
    }
  }
  return (
    <main>
      <div
        id={style.bg}
        className=' w-full h-[695px] flex flex-col justify-center items-center bg-slate-500 relative'>
        <div className=' w-full'>
          <NavBar />
        </div>
        <div id={style.conatiner} className=' w-2/3 h-[500px] rounded-3xl flex bg-white m-[10px]'>
          <div
            id={style.leftContainer}
            className=' w-[50%] h-[500px] rounded-2xl relative'>
            <img src={background} className=' rounded-2xl' />
            <div id={style.glass} className=' flex flex-col justify-evenly items-center'>
              <h1 className=' font-bold text-3xl text-white'>WELCOME</h1>
              <p className=' text-white'>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Sed facere aspernatur eaque.
                Accusantium velit architecto animi doloremque voluptates,
                natus impedit quasi nam quia officia. Inventore voluptatum repellendus
                minus sequi voluptatem!</p>
            </div>
          </div>
          <div id={style.formContainer} className=' rounded-r-3xl flex justify-start items-center'>
            <form action="post">
              <div className='flex flex-col justify-start items-start m-[50px] '>
                <h1 id={style.title} className='text-4xl mb-[30px] mt-[10px]'>Register here</h1>
                <label className=' text-left'>Name</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={name}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  error={nameError}
                  helperText={nameHelperText}
                  onChange={(e) => {
                    setName(e.target.value)
                    setNameError(false)

                  }}
                />
                <label>Email</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={email}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  error={phoneError}
                  helperText={phoneHelperText}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError(false)

                  }}
                />
                <label>Phone</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={phone}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  error={emailError}
                  helperText={emailHelperText}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setPhoneError(false)

                  }}
                />
                <Button variant="contained"
                  sx={{ marginTop: '15px', width: '160px' }}
                  onClick={(e) => { handelSubmit() }}
                >
                  REGISTER
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Adduser
