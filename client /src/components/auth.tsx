import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const SignupwithFirebase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const passwordElement = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const conpassElement = document.getElementById(
      "conpass"
    ) as HTMLInputElement;

    if (
      !usernameElement ||
      !emailElement ||
      !passwordElement ||
      !conpassElement
    ) {
      console.error("One or more form elements are missing.");
      return;
    }

    const username = usernameElement.value;
    const email = emailElement.value;
    const password = passwordElement.value;
    const conpass = conpassElement.value;

    if (password === "" || conpass === "") {
      alert("Please fill in both password fields");
      return;
    }

    if (password !== conpass) {
      alert("Passwords do not match");
      return;
    }

    const db = getFirestore();
    const colRef = collection(db, "Signup");

    try {
      await addDoc(colRef, {
        username,
        email,
        password,
        conpass,
      });
      console.log("Signup successful");
      navigate("/addfriends"); // Navigate to the '/addfriends' route
    } catch (error) {
      console.error("Error adding document: ", error);
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
              Get Started
            </div>
            <form
              className="flex flex-col items-center justify-center"
              id="signup-form"
              onSubmit={SignupwithFirebase}
            >
              <input
                type="text"
                placeholder="Username"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mt-4 mr-12 focus:bg-black"
                id="username"
              />
              <input
                type="email"
                placeholder="Email id"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12 focus:bg-black"
                id="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
                id="password"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
                id="conpass"
              />
              <button
                className="font-montserrat bg-white text-black p-5 rounded mt-4 text-center h-[20px] flex flex-col justify-center"
                type="submit"
              >
                Sign up
              </button>
            </form>

            <div className="flex flex-row gap-2">
              <div className="text-white mt-4 font-montserrat opacity-60 text-xs">
                Already have an account?
              </div>
              <Link
                to="/login"
                className="text-white mt-4 font-montserrat text-xs no-underline"
              >
                Log in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
