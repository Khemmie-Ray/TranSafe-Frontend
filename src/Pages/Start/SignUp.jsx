import BgImg from "../../assets/home/Bgnine.svg"
import { Link } from "react-router-dom"
import { TextField, 
        InputAdornment, 
        IconButton, 
        Checkbox, 
        FormControlLabel,
        InputLabel,
        MenuItem,
        Select, FormControl,
        Grid} from "@mui/material"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="bg-cover bg-center lg:h-screen h-[auto] mb-12 p-8 flex items-center justify-center"
        style={{backgroundImage: `url(${BgImg})`}}>
        <div className="bg-green-100 lg:w-3/6 w-[100%] rounded-md p-6">
          <h3 className="font-bold text-2xl text-center mb-4 text-green-700">Sign Up</h3>
            <form action="" className="flex flex-col">
            <Grid container spacing={0} alignItems="center" className="lg:flex justify-between">
              <Grid items>
          <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
                <Select className="mb-4"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Title">
                <MenuItem value="mr">Mr</MenuItem>
                <MenuItem value="mrs">Mrs</MenuItem>
                <MenuItem value="ms">Ms</MenuItem>
                </Select> 
                </FormControl>
              </Grid>
                <Grid items className="mb-4">
                  <TextField 
                  label="First Name" 
                  size="small"
                  />
                </Grid>
                <Grid items className="">
                  <TextField 
                  label="Last Name"
                  size="small" />
                </Grid>
              </Grid>
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
                 <TextField 
              label="Confirm password"
              variant="outlined"
              name="confirm password"
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
              <button className="bg-green-700 py-3 w-4/6 mx-auto text-white font-semibold">Sign Up</button>
              <p className="text-xs text-center mt-2">By creating an account, you agree to our Terms and Conditions, these terms govern your use of our service.
</p>
            </form>
            <div className="flex flex-col">
            <p className="mt-8 mb-2 text-sm">Already have an account</p>
            <Link to="/login" className="py-3 w-4/6 mx-auto border-2 border-green-700 text-center font-semibold">Log In</Link>
            </div>
        </div>
      </div>
    </main>
  )
}

export default SignUp