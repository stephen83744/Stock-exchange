import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type User = {
  fullName: string;
  password: string;
  email: string;
};

const STORAGE_KEY = "logindata";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const retrieve = (): User[] => {
    const info = localStorage.getItem(STORAGE_KEY);
    if (!info) {
      console.log("No data is saved");
      return [];
    }
    const parse = JSON.parse(info);
    return parse;
  };

  const saving = (users: User[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError(" Passwords do not match");
      return;
    }

    if (!agree) {
      setError("please agree to the terms and conditions");
      return;
    }

    const users = retrieve();
    const existing = users.find((user) => user.email === email);

    if (existing) {
      setMessage("Email already registered. Please login");
      return;
    }

    const newUser: User = {
      fullName,
      email,
      password,
    };
    saving([...users, newUser]);
    setMessage("processing ...");
    setError("");

    setTimeout(() => {
      navigate("/market");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="w-full w-md rounded-2xl p-8 shadow-xl bg-white"> 
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">Welcome to Alpha Rise</h2>
        <p className="text-center text-gray-600 mb-6">Please sign up to continue</p>

         <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
          <button 
           onClick={() => navigate("/")}
          className="flex-1 py-2 text-center text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer">
            Sign In
          </button>
          <div className="flex-1 py-2 text-center text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm cursor-pointer"
          >
            Sign Up
          </div>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          <div className="form">
             {error && <div className="mb-6 p-3 rounded-lg text-sm text-center bg-red-100 text-red-700">{error}</div>}
          {message && <div className="mb-6 p-3 rounded-lg text-sm text-center bg-green-100 text-green-700">{message}</div>}


            <label className="label" htmlFor="fullname">
              {" "}
              Fullname
            </label>
            <br></br>
            <input
              type="text"
              className="mb-6 w-full rounded-lg border border-gray-300 p-2"
              id="Fullname"
              value={fullName}

              
              onChange={(e) => {
                setFullName(e.target.value);
                setError("");
              }}
            />
          </div>

          <div>
            <label className="label" htmlFor="Email">
              Email
            </label>
            <br></br>
            <input
              type="email"
              id="Email"
              className="mb-6 w-full rounded-lg border border-gray-300 p-2"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="relative">
            <label className="label" htmlFor="Password">
              Password
            </label>
            <br></br>
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              className="mb-7 w-full rounded-lg border border-gray-300 p-2"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
             <button
                 type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-500"
            >
              {showPassword ?    
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> 
                : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>)
                }
                </button>
          </div>

          <div className="relative">
            <label className="label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <br></br>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-Password"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
            />
             <button
                 type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-500"
            >
              {showPassword ?    
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> 
                : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>)
                }
                </button>
          </div>

          <div>
            <input
              className="mb-4 text-lg text-gray-600"
              type="checkbox"
              checked={agree}
              id="checkbox"
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label  htmlFor="checkbox">
              I agree to the{" "}
              <a href="#!">
                <u>Terms of service</u>
              </a>
            </label>
          </div>

          <div id="response"></div>
          <div className="">
            <button type="submit" className=" mt-3 w-full rounded-lg bg-black p-2 text-white cursor-pointer hover:bg-black-100">
              Sign Up
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};
export default SignUp;
