import BgImg from "../../assets/home/Bgnine.svg"
import { Link } from "react-router-dom"
import { TextField, 
        InputAdornment, 
        IconButton, 
        Checkbox, 
        FormControlLabel, 
        useTheme,
        useMediaQuery
} from "@mui/material"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState([])
  const [inputData, setInputData] = useState({firstname: '', lastname: '', address: '', dobday: null, dobmonth: null, dobyear: null, email: '', gender: '', phone: ''})
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

// async function postData() {
//   const response = await fetch('http://localhost:5000/api/v1/auth/register', {
//     method: 'POST',
//     headers: { 
//       "Content-Type": "application/json"
//     },
//       body: `{
//         "email": "test@tester.com", 
//         "password": "Testing123", 
//         "id": "75fef700-2834-4342-aa06-4f8dd1891356"
//       }`
//     }
//       "msg": "credentials created",
//       "status": "success"
//   )
//   response.json().then(data => {
//     console.log(JSON.stringify(data))
//   })
// }
  // terminal@terminal:~/transafe_authentication_service$')

//   terminal@terminal:~/transafe-user-data-service$ curl -H "Content-Type: application/json" -X POST -d '{"first_name": "Pentagon", "last_name": "Daves", "address": "Block 234, Orland avenue, transafe estate.", "gender": "Male", "phone": "555234897", "email": "transafe@transafe.com", "dob_day": 4, "dob_month": 6, "dob_year": 2023}' http://localhost:5000/api/v1/users

// {
//   "message": "user created",
//   "status": "success",
//   "user_ID": "8ef0d51f751aaf9de80872015a8140a699a6af3f"
//


function handleChange(e) {
  const {id, value} = e.target;
  setInputData(prev => ({
    ...prev,
    [id]: value,
  }))
}

const handleSubmit = (event) => {
  event.preventDefault();
  const {firstname, lastname, address, phone, email, gender, dobday, dobmonth, dobyear} = inputData
  const data = {
    first_name: firstname,
    last_name: lastname,
    address: address,
    phone: phone,
    email: email,
    gender: gender,
    dob_day: Number(dobday),
    dob_month: Number(dobmonth),
    dob_year: Number(dobyear)
  }
  fetch('http://100.26.178.199/api/v1/users', {
    method: 'POST',
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    setUserData([inputData])
  })
}

console.log(inputData)

  return (
    <main>
      <div className="bg-cover bg-center lg:h-[100%] h-[100%] mb-12 p-8 flex items-center justify-center"
        style={{backgroundImage: `url(${BgImg})`}}>
        <div className="bg-green-100 lg:w-3/6 w-[100%] rounded-md p-6">
          <h3 className="font-bold text-2xl text-center mb-4 text-green-700">Sign Up</h3>
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex justify-between lg:flex-row flex-col">
                  <TextField style={{ width: isMobile ? '100%' : '48%' }}
                  label="First Name" 
                  size="small"
                  id="firstname"
                  margin="normal"
                  onChange={handleChange}
                  value={inputData.firstname}
                  />
                  <TextField style={{ width: isMobile ? '100%' : '48%' }}
                  label="Last Name"
                  size="small"
                  id="lastname"
                  margin="normal"
                  onChange={handleChange}
                  value={inputData.lastname}
                  />
              </div>
              <TextField 
                label="Address"
                variant="outlined"
                name="address"
                size="small"
                margin="normal"
                multiline
                maxRows={4}
                id="address"
                onChange={handleChange}
                value={inputData.address}
              />
               <TextField 
                  label="Phone"
                  variant="outlined"
                  name="phone"
                  size="small"
                  margin="normal"
                  id="phone"
                  onChange={handleChange}
                  value={inputData.phone}
                />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker 
                    label="Date of Birth"
                    slotProps={{ textField: { size: "small" } }} 
                    id="dob"
                    onChange={handleChange}
                    value={inputData.dob}
                  />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider> */}
             <div className="flex justify-between">
                  <TextField style={{ width: '30%' }}
                  label="Day of Birth"
                  size="small"
                  id="dobday"
                  margin="normal"
                  onChange={handleChange}
                  value={inputData.dobday}
                  />
                   <TextField style={{ width: '30%' }}
                  label="Month"
                  size="small"
                  id="dobmonth"
                  margin="normal"
                  onChange={handleChange}
                  value={inputData.dobmonth}
                  />
                   <TextField style={{ width: '30%' }}
                  label="Year"
                  size="small"
                  id="dobyear"
                  margin="normal"
                  onChange={handleChange}
                  value={inputData.dobyear}
                  />
             </div>
             <div className="flex justify-between lg:flex-row flex-col">
              <TextField style={{ width: isMobile ? '100%' : '48%' }}
                  label="Email"
                  variant="outlined"
                  name="email"
                  size="small"
                  margin="normal"
                  id="email"
                  onChange={handleChange}
                  value={inputData.email}
              />
              <TextField style={{ width: isMobile ? '100%' : '48%' }}
                  label="Gender"
                  variant="outlined"
                  name="gender"
                  size="small"
                  margin="normal"
                  id="gender"
                  onChange={handleChange}
                  value={inputData.gender}
              />
              </div>
              <TextField 
              label="Password"
              variant="outlined"
              name="password"
              size="small"
              margin="normal"
              id="password"
              onChange={handleChange}
              value={inputData.password}
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
              id="password"
              onChange={handleChange}
              value={inputData.password}
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