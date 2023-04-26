// import React, { useEffect, useState } from 'react'
// import Avatar from '@mui/material/Avatar'
// import { getUser } from '../../services/User'
// import jwt_decode from 'jwt-decode'
// import EditUserDialog from './EditUserDialog'
// import { useNavigate } from 'react-router-dom'
// import Header from '../../components/Header'

// const UserProfile = () => {
//   const userdata = jwt_decode(localStorage.getItem('token')).data
//   const navigate = useNavigate()

//   const [user, setUser] = useState(userdata)
//   const [isOpen, setIsOpen] = useState(false)
//   const [profilePic, setProfilePic] = useState(user.photo_url)
//   const [coverPic, setCoverPic] = useState(user.cover_photo_url)
//   const [username, setUsername] = useState(user.username)

//   const handleOpen = () => {
//     setIsOpen(!isOpen)
//   }

//   useEffect(() => {
//     getUser({ email: user.email }).then(res => {
//       setProfilePic(res.data.data.photo_url)
//       setUsername(res.data.data.username)
//       setCoverPic(res.data.data.cover_photo_url)
//       setUser(res.data.data)
//     })

//     navigate('/user')
//   }, [])

//   return (
//     <div>
//       <Header />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="flex flex-col px-28">
//         <div className=" relative flex">
//           {coverPic ? (
//             <img src={coverPic} alt="Cover" className="h-[20rem] w-[85rem]" />
//           ) : (
//             <div className="h-[20rem] w-[85rem] bg-slate-600">
//               {/* <img
//                 src="https://images.unsplash.com/photo-1521117184087-0bf82f2385ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
//                 alt="Cover image"
//                 className="h-[20rem] w-[85rem]"
//               /> */}
//             </div>
//           )}
//           <div className="absolute h-24 w-24 bg-blue-400 -bottom-5 left-8">
//             {profilePic ? (
//               <Avatar
//                 alt="Profile Picture"
//                 src={profilePic}
//                 sx={{ width: 100, height: 100 }}
//                 variant="square"
//               />
//             ) : (
//               <Avatar
//                 alt="Profile Picture"
//                 src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
//                 sx={{ width: 100, height: 100 }}
//                 variant="square"
//               />
//             )}
//           </div>
//         </div>
//         <div className="h-7 w-full mt-10 flex justify-between">
//           <span className="text-2xl font-inter font-bold">@{username}</span>
//           <button
//             className="bg-[#1976D2] text-white p-2 flex text-center items-center rounded-sm"
//             onClick={() => handleOpen()}
//           >
//             Edit Profile
//           </button>
//           <EditUserDialog
//             isDialogOpened={isOpen}
//             handleCloseDialog={() => setIsOpen(false)}
//             user={user}
//           />
//         </div>
//       </div>
//       <br></br>
//       <hr className="bg-black h-1" />
//       <div className=" flex px-28 mt-7">
//         <div className=" flex"></div>
//       </div>
//     </div>
//   )
// }

// export default UserProfile

// import React, { useEffect, useState } from 'react'
// import Avatar from '@mui/material/Avatar'
// import { getUser } from '../../services/User'
// import jwt_decode from 'jwt-decode'
// import EditUserDialog from './EditUserDialog'
// import { useNavigate } from 'react-router-dom'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'

// const UserProfile = () => {
//   const userdata = jwt_decode(localStorage.getItem('token')).data
//   const navigate = useNavigate()

//   const [user, setUser] = useState(userdata)
//   const [isOpen, setIsOpen] = useState(false)
//   const [profilePic, setProfilePic] = useState(user.photo_url)
//   const [coverPic, setCoverPic] = useState(user.cover_photo_url)
//   const [username, setUsername] = useState(user.username)

//   const handleOpen = () => {
//     setIsOpen(!isOpen)
//   }

//   useEffect(() => {
//     getUser({ email: user.email }).then(res => {
//       setProfilePic(res.data.data.photo_url)
//       setUsername(res.data.data.username)
//       setCoverPic(res.data.data.cover_photo_url)
//       setUser(res.data.data)
//     })

//     navigate('/user')
//   }, [])

//   return (
//     <div>
//       <Header />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <Grid container justifyContent="center">
//         <Grid item xs={12} md={10} lg={8}>
//           <div style={{ position: 'relative', display: 'flex' }}>
//             {coverPic ? (
//               <img
//                 src={coverPic}
//                 alt="Cover"
//                 style={{ height: '20rem', width: '85rem' }}
//               />
//             ) : (
//               <div
//                 style={{
//                   height: '20rem',
//                   width: '85rem',
//                   backgroundColor: 'slategray',
//                 }}
//               />
//             )}
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: '-5rem',
//                 left: '2rem',
//                 height: '6rem',
//                 width: '6rem',
//                 backgroundColor: 'blue',
//               }}
//             >
//               {profilePic ? (
//                 <Avatar
//                   alt="Profile Picture"
//                   src={profilePic}
//                   sx={{ width: 100, height: 100 }}
//                   variant="rounded"
//                 />
//               ) : (
//                 <Avatar
//                   alt="Profile Picture"
//                   src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
//                   sx={{ width: 100, height: 100 }}
//                   variant="rounded"
//                 />
//               )}
//               <Typography
//                 variant="h5"
//                 component="span"
//                 style={{ fontSize: '2rem', fontWeight: 'bold' }}
//               >
//                 @{username}
//               </Typography>
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={10} lg={8}>
//           <button
//             style={{
//               backgroundColor: '#1976D2',
//               color: 'white',
//               padding: '0.5rem 1rem',
//               display: 'flex',
//               alignItems: 'right',
//               borderRadius: '0.2rem',
//               marginLeft: '90%',
//               marginTop: '2%',
//             }}
//             onClick={() => handleOpen()}
//           >
//             Edit Profile
//           </button>
//           <EditUserDialog
//             isDialogOpened={isOpen}
//             handleCloseDialog={() => setIsOpen(false)}
//             user={user}
//           />
//         </Grid>
//       </Grid>
//       <br />

//       <Grid container justifyContent="center">
//         <Grid item xs={12} md={10} lg={8}>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginTop: '1rem',
//             }}
//           >
//             {/* Add your content here */}
//             <h1>hI</h1>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default UserProfile

import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { getUser } from '../../services/User'
import jwt_decode from 'jwt-decode'
import EditUserDialog from './EditUserDialog'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const UserProfile = () => {
  const userdata = jwt_decode(localStorage.getItem('token')).data
  const navigate = useNavigate()

  const [user, setUser] = useState(userdata)
  const [isOpen, setIsOpen] = useState(false)
  const [profilePic, setProfilePic] = useState(user.photo_url)
  const [coverPic, setCoverPic] = useState(user.cover_photo_url)
  const [username, setUsername] = useState(user.username)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    getUser({ email: user.email }).then(res => {
      setProfilePic(res.data.data.photo_url)
      setUsername(res.data.data.username)
      setCoverPic(res.data.data.cover_photo_url)
      setUser(res.data.data)
    })

    navigate('/user')
  }, [])

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <div style={{ position: 'relative', display: 'flex' }}>
            <img
              src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cover"
              style={{ height: '20rem', width: '85rem' }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '30rem',
                height: '6rem',
                width: '6rem',
              }}
            >
              {profilePic ? (
                <Avatar
                  alt="Profile Picture"
                  src={profilePic}
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                  }}
                  variant="rounded"
                />
              ) : (
                <Avatar
                  alt="Profile Picture"
                  // src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                  }}
                  variant="rounded"
                />
              )}
              <Typography
                variant="h5"
                component="span"
                style={{ fontSize: '2rem', fontWeight: 'bold' }}
              >
                @{username}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <button
            style={{
              backgroundColor: 'rgba(61, 86, 49, 1)',
              color: 'white',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'right',
              borderRadius: '0.2rem',
              marginLeft: '90%',
              marginTop: '2%',
            }}
            onClick={() => handleOpen()}
          >
            Edit Profile
          </button>
          <EditUserDialog
            isDialogOpened={isOpen}
            handleCloseDialog={() => setIsOpen(false)}
            user={user}
          />
        </Grid>
      </Grid>
      <br />

      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            {/* Add your content here */}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserProfile
