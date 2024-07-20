import { Button, Card, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './adduser.module.css'
import background from '../assets/bg.jpg'
import axios from 'axios'
import NavBar from './NavBar'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setName(res.data.name)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`, { name, email, phone })
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <div
        id={style.bg}
        className='w-full h-[695px] flex flex-col justify-center items-center bg-slate-500 relative'>
        <div className='w-full'>
          <NavBar />
        </div>
        <div id={style.container} className='w-2/3 h-[500px] rounded-3xl flex bg-white m-[10px]'>
          <div
            id={style.leftContainer}
            className='w-[50%] h-[500px] rounded-2xl relative'>
            <img src={background} className='rounded-2xl' alt="Background" />
            <div id={style.glass} className='flex flex-col justify-evenly items-center'>
              <h1 className='font-bold text-3xl text-white'>WELCOME</h1>
              <p className='text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed facere aspernatur eaque. Accusantium velit architecto animi doloremque voluptates,
                natus impedit quasi nam quia officia. Inventore voluptatum repellendus minus sequi voluptatem!
              </p>
            </div>
          </div>
          <div id={style.formContainer} className='rounded-r-3xl flex justify-start items-center'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col justify-start items-start m-[50px]'>
                <h1 id={style.title} className='text-4xl mb-[30px] mt-[10px]'>Update here</h1>
                <label className='text-left'>Name</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={name}
                  variant="filled"
                  size="small"
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={email}
                  variant="filled"
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone</label>
                <TextField
                  sx={{ width: '300px', marginTop: '15px' }}
                  value={phone}
                  variant="filled"
                  size="small"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{ marginTop: '15px', width: '160px' }}
                  type="submit"
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UpdateUser
