// import React, { useState } from 'react'
// import { createSearchParams, useNavigate } from 'react-router-dom'
// import { register } from '../../services/User'
// import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'
// import { Button, TextField, IconButton, Typography, Grid } from '@mui/material'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import InputAdornment from '@mui/material/InputAdornment'
// import Visibility from '@mui/icons-material/Visibility'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false)

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword)
//   }
//   const navigate = useNavigate()

//   const handleForm = async e => {
//     e.preventDefault()
//     const userEmail = e.target.email.value
//     await register({
//       email: e.target.email.value,
//       username: e.target.username.value,
//       password: e.target.password.value,
//     })
//       .then(res => {
//         navigate({
//           pathname: '/verify',
//           search: createSearchParams({
//             email: userEmail,
//           }).toString(),
//         })
//       })
//       .catch(err => console.error(err))
//   }
//   const onLoginClick = () => {
//     navigate('/login')
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <img
//             src="Register.svg"
//             alt="Register"
//             style={{
//               height: '100%',
//               width: '100%',
//               objectFit: 'cover', // Add this property to make the image fit the grid item
//             }}
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <div
//             style={{
//               backgroundColor: 'white',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               height: '100vh',
//               padding: '2rem',
//             }}
//           >
//             <form onSubmit={handleForm} style={{ textAlign: 'center' }}>
//               <Typography
//                 variant="h4"
//                 component="span"
//                 style={{ color: 'black', fontWeight: 'bold' }}
//               >
//                 Sign Up
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 InputProps={{ style: { color: 'black' } }}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 name="username"
//                 type="username"
//                 placeholder="Username"
//                 InputProps={{ style: { color: 'black' } }}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 InputProps={{
//                   style: { color: 'black' },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={handleClickShowPassword}>
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 name="repassword"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Re-enter Password"
//                 InputProps={{
//                   style: { color: 'black' },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={handleClickShowPassword}>
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 fullWidth
//                 sx={{
//                   margin: '2rem 0',
//                   borderRadius: '5px',
//                   width: { xs: '100%', sm: '200px' }, // Set width to 100% on xs (extra small) screens, and 200px on sm (small) screens and above
//                 }}
//               >
//                 Sign Up
//               </Button>

//               <div style={{ margin: '1rem 0' }}>
//                 <Typography
//                   variant="subtitle1"
//                   component="span"
//                   style={{ color: 'black' }}
//                 >
//                   Or login with:
//                 </Typography>
//               </div>
//               <div>
//                 <IconButton>
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton>
//                   <TwitterIcon />
//                 </IconButton>
//                 <IconButton>
//                   <InstagramIcon />
//                 </IconButton>
//               </div>
//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { register } from '../../services/User'
import { TextField, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import styled from 'styled-components'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const navigate = useNavigate()

  const handleForm = async e => {
    e.preventDefault()
    const userEmail = e.target.email.value
    await register({
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .then(res => {
        navigate({
          pathname: '/verify',
          search: createSearchParams({
            email: userEmail,
          }).toString(),
        })
      })
      .catch(err => console.error(err))
  }
  const onLoginClick = () => {
    navigate('/login')
  }

  const Container = styled.div`
    background-color: gray;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    img {
      object-fit: cover;
      object-position: right top;
      width: 100%;
      height: 100%;
    }
  `

  const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 25%;
    background-color: #7590680;
    padding: 50px;
    border-radius: 20px;
    @media only screen and (max-width: 1000px) {
      left: 50%;
      background-color: #759068bd;
      padding: 50px;
      border-radius: 20px;
    }
    transition: 1s;
    transform: translate(-50%, -50%);
  `
  const HeroContentS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    right: 3%;
    background-color: #7590680;
    padding: 50px;
    border-radius: 20px;
    @media only screen and (max-width: 1000px) {
      left: 70%;
      background-color: #759068bd;
      padding: 50px;
      border-radius: 20px;
    }
    transition: 1s;
    transform: translate(-50%, -50%);
  `

  const HeroText = styled.div`
    font-size: 40px;
    text-align: start;
    color: rgba(61, 86, 49, 1);
    font-family: 'Quicksand';
    font-weight: 500;
    @media only screen and (max-width: 1000px) {
      color: #2d5b19;
    }
  `

  const Button = styled.button`
    margin-top: 10px;
    width: 120px;
    height: 40px;
    background: #729b0e;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 2s;

    @media only screen and (max-width: 1000px) {
      background: #354410e3;
    }

    &:hover {
      background: #5b6a36;
    }
    &:active {
      background: #49552c;
    }
  `

  return (
    <>
      <Container>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>
        <img src="images/homeBanner.jpg" alt="Home_Page_Image" />
        <HeroContentS>
          <HeroText>
            Since Nature Provides <br />
            Everything, Medicine <br />
            Is Just A Part
          </HeroText>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={onLoginClick}
            fullWidth
            sx={{
              margin: '2rem 0',
              borderRadius: '5px',
              width: { xs: '100%', sm: '200px' },
              border: '20%',
              borderColor: 'black',
            }}
          >
            Sign In
          </Button>
        </HeroContentS>

        <HeroContent>
          <form onSubmit={handleForm} style={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: 'rgba(61, 86, 49, 1)', fontWeight: 'bold' }}
            >
              Sign Up
            </Typography>
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth-width="200px"
              name="email"
              type="email"
              placeholder="Email"
              InputProps={{ style: { color: 'black' } }}
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              width="200px"
              name="username"
              type="username"
              placeholder="Username"
              InputProps={{ style: { color: 'black' } }}
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              width="200px"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              InputProps={{
                style: { color: 'black' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              width="200px"
              name="repassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Re-enter Password"
              InputProps={{
                style: { color: 'black' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                margin: '2rem 0',
                borderRadius: '5px',
                width: { xs: '100%', sm: '200px' }, // Set width to 100% on xs (extra small) screens, and 200px on sm (small) screens and above
              }}
            >
              Sign Up
            </Button>

            <div style={{ margin: '1rem 0' }}>
              <Typography
                variant="subtitle1"
                component="span"
                style={{ color: 'black' }}
              >
                Or login with:
              </Typography>
            </div>
            <div>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </div>
          </form>
        </HeroContent>
      </Container>
    </>
  )
}

export default Login
