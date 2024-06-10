import { useEffect, useState } from "react";

const AddFriends = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/addfriends")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div
        id="body"
        className="flex h-screen w-screen bg-[url('src/assets/backgrounds/BG-Dark.png')] bg-cover bg-center justify-center items-center"
      >
        <div className="h-[500px] w-[700px] bg-black rounded-lg flex flex-col justify-center items-start">
          <div className="text-white font-montserrat mt-4 text-2xl mb-4 text-center w-full">
            Add Friends
          </div>

          <div className="flex flex-row w-full">
            <div className="h-[380px] w-1/2 mt-4 flex flex-col items-center justify-center border-r">
              <input
                type="text"
                placeholder="Username"
                className="font-montserrat h-[20px] w-[200px] bg-black text-white p-4 no-outline border rounded-lg"
              />
              <button className="font-montserrat bg-white text-black p-5 rounded mt-4 text-center h-[20px] flex flex-col justify-center">
                Search
              </button>
            </div>

            <div className="h-[380px] w-1/2 mt-4 flex flex-col items-center justify-center">
              <div className="h-[350px] w-[280px] border rounded-lg text-white  ">
                {data ? `Friend: ${data}` : "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
