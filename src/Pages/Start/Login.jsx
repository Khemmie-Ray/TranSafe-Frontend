import BgImg from "../../assets/home/Bgnine.svg"
import { Link } from "react-router-dom"
import { TextField, 
        InputAdornment, 
        IconButton, 
        Checkbox, 
        FormControlLabel, 
        } from "@mui/material"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="bg-cover bg-center h-screen mb-12 p-8 flex items-center justify-center"
        style={{backgroundImage: `url(${BgImg})`}}>
        <div className="bg-green-100 lg:w-3/6 w-[100%] rounded-md p-4">
          <h3 className="font-bold text-2xl text-center mb-4 text-green-700">Log In</h3>
            <form action="" className="flex flex-col">
              <TextField 
              label="Email"
              variant="outlined"
              name="email"
              size="small"
              margin="normal"
              />
              <TextField 
              label="Password"
              variant="outlined"
              name="password"
              size="small"
              margin="normal"
              type={showPassword ? 'password' : 'text' }
              InputProps={{
                endAdornment: (
             <InputAdornment position="end">
               <IconButton onClick={handlePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
             </InputAdornment>
              )
            }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    margin="normal"
                  />
                }
                label="Remember me"
              />
              <Link to="/dashboard" className="bg-green-700 py-3 w-4/6 mx-auto text-white font-semibold text-center">Log In</Link>
            </form>
            <div className="flex flex-col">
            <p className="mt-8 mb-2 text-sm">Don't have an account?</p>
            <Link to="/signup" className="py-3 w-4/6 mx-auto border-2 border-green-700 text-center font-semibold">Sign Up</Link>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Login