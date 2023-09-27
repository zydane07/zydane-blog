import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsPending(true);
    navigate("/");
  };
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className=" flex max-w-2xl flex-col items-center justify-center rounded-2xl border shadow-md"
        style={{
          height: "40vh",
          width: "50vh",
        }}
      >
        <h1 className="mb-8 text-center text-2xl">
          Welcome to
          <span className="font-bold text-blue-700"> Zydane Blog</span>
        </h1>

        {/* login form */}
        <form action="#" onSubmit={handleLogin} className="w-full px-8">
          <label className="block " htmlFor="email">
            Email:
          </label>
          <input className="input" id="email" type="email" required />
          <label className="block" htmlFor="password">
            Password:
          </label>
          <div className="relative">
            <input
              className="input"
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fa fa-eye-slash text-sm" /> // Hide password icon
              ) : (
                <i className="fa fa-eye text-sm" /> // Show password icon
              )}
            </span>
            {!isPending && (
              <button className="button my-4 w-full ">Log in</button>
            )}
            {isPending && (
              <button className="button my-4 w-full " disabled>
                Wait for Login...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
