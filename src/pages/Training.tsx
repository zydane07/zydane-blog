import { useState } from "react";

const Training = () => {
  const [name, setName] = useState("zydane");
  const [age, setAge] = useState(21);

  const showLog = (log: any, e: any) => {
    console.log("Hai ", log, e);
  };

  const showName = () => {
    setName("farhan");
    setAge(25);
  };

  return (
    <div
      className="training flex flex-col items-center justify-center"
      style={{
        height: "80vh",
      }}
    >
      <h1 className="text-4xl font-bold">Training Pages</h1>
      <div className="my-4 space-x-2 text-center">
        <button
          className="button"
          onClick={(e) => {
            showLog("zydane", e);
          }}
        >
          log me
        </button>

        <button className="button" onClick={showName}>
          Call me
        </button>
      </div>
      <p>
        Hi, My Name is {name}, I'am {age}
      </p>
    </div>
  );
};

export default Training;
