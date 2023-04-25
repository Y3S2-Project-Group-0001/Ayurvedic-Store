// import React from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { verify } from '../../services/User'

// const Login = () => {
//   const navigate = useNavigate()
//   const [searchParams] = useSearchParams()
//   const handleForm = async e => {
//     e.preventDefault()
//     await verify({
//       email: searchParams.get('email'),
//       verificationCode: e.target.verificationCode.value,
//     })
//       .then(res => {
//         navigate('/login')
//       })
//       .catch(e => console.error(e))
//   }
//   return (
//     <div className="flex justify-center items-center ">
//       <img src="Verify.svg" alt="Verify" className="flex-1 h-[500px] w-[500px]" />
//       <div className="flex flex-col flex-1 bg-black justify-center h-screen">
//         <form onSubmit={handleForm} className="flex flex-col items-center">
//           <span className="font-medium text-3xl text-white ">Enter Verification Code</span>
//           <input
//             className="bg-transparent border-2 my-4 border-input-border rounded-[5px] h-16 w-1/2 p-4 text-gray-100"
//             name="verificationCode"
//             type="number"
//             placeholder="Verification Code"
//           />
//           <button className="bg-[#ffbb00] font-bold mt-10 w-1/4 h-10 rounded-[5px] flex justify-center items-center text-base font-normal">
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verify } from '../../services/User'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(Verify.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flex: 1,
  },
  formContainer: {
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '50%',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3rem',
    color: 'white',
    marginBottom: theme.spacing(4),
  },
  input: {
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: theme.palette.grey[500],
    borderRadius: '5px',
    height: '4rem',
    width: '100%',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 2),
    color: 'white',
  },
  button: {
    backgroundColor: '#ffbb00',
    fontWeight: 'bold',
    fontSize: '1rem',
    height: '3rem',
    width: '25%',
    borderRadius: '5px',
    marginTop: theme.spacing(10),
  },
}))

const Login = () => {
  const classes = useStyles()

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const handleForm = async e => {
    e.preventDefault()
    await verify({
      email: searchParams.get('email'),
      verificationCode: e.target.verificationCode.value,
    })
      .then(res => {
        navigate('/login')
      })
      .catch(e => console.error(e))
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.image} />
        <Grid item xs={12} md={6} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h3" className={classes.title}>
              Enter Verification Code
            </Typography>
            <form onSubmit={handleForm}>
              <TextField
                className={classes.input}
                name="verificationCode"
                type="number"
                placeholder="Verification Code"
                variant="outlined"
                InputProps={{ style: { color: 'white' } }}
              />
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
