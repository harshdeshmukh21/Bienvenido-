import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"; // Import the 'auth' object from the firebase modul
import google from "../assets/backgrounds/google.png";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/addfriends");
      })
      .catch((error) => {
        console.error(error);
        navigate("/auth");
      });
  };

  const handleLogin = async () => {
    const username = (document.getElementById("username") as HTMLInputElement)
      ?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;

    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        navigate("/addfriends");
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        id="body"
        className="flex flex-row justify-end items-end h-screen w-screen bg-[url('src/assets/backgrounds/BG-Dark.png')] bg-cover bg-center"
      >
        <div className="text-2xl text-white font-montserrat mb-auto mr-auto p-4">
          BIENVENIDO
        </div>

        <div className="h-full w-1/2 bg-black">
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="text-3xl text-white font-montserrat mt-4 ml-4">
              Login
            </div>
            <input
              type="text"
              placeholder="Username"
              className="font-montserrat rounded bg-black text-white p-4 no-outline mt-4 mr-12"
              id="username"
            />
            <input
              type="email"
              placeholder="Email id"
              className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
              id="password"
            />

            <button
              className="font-montserrat bg-white text-black p-5 rounded mt-4 text-center h-[20px] flex flex-col justify-center"
              onClick={handleLogin}
            >
              Login
            </button>

            <div className="flex flex-row gap-2">
              <div className="text-white mt-8 font-montserrat opacity-60 text-xs">
                Login with Google?
              </div>
              <button
                className="text-white font-montserrat text-xs mt-6"
                onClick={signInWithGoogle}
              >
                <img src={google} alt="google" className="h-[30px] w-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
