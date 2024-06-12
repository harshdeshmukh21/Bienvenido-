import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    conpassword: "",
  });

  let name, value;
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PutData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { username, email, password, conpassword } = user;

    try {
      const res = await fetch("http://localhost:4000/addUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          conpassword,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        window.alert(data.message);
      } else {
        window.alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:4000/users");
      const json = await res.json();

      if (res.ok) {
        setUser(json);
      }
    };
    getUsers();
  }, []);

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
            >
              <input
                type="text"
                placeholder="Username"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mt-4 mr-12 focus:bg-black"
                id="username"
                name="username"
                onChange={handleInputs}
              />
              <input
                type="email"
                placeholder="Email id"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12 focus:bg-black"
                id="email"
                name="email"
                onChange={handleInputs}
              />
              <input
                type="password"
                placeholder="Password"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
                id="password"
                name="password"
                onChange={handleInputs}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="font-montserrat rounded bg-black text-white p-4 no-outline mr-12"
                id="conpass"
                name="conpassword"
                onChange={handleInputs}
              />
              <button
                className="font-montserrat bg-white text-black p-5 rounded mt-4 text-center h-[20px] flex flex-col justify-center"
                type="submit"
                onClick={PutData}
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
