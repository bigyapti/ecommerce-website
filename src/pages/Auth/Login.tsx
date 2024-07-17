import { useState } from "react";
import { useGetUsersQuery } from "src/providers/redux/api/fakeStoreApi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Text from "../../components/common/Text";

const Login = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (users) {
      const user = users.find(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );

      if (user) {
        console.log("Login successful:", user);
        navigate(`/user/${user.id}`);
      } else {
        console.log("Invalid username or password");
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-1/3 bg-black p-8 border border-gray-700 rounded-xl shadow-md">
        <Text text="Login" className=" text-white mb-1" />
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Text text="Username" className=" text-white mb-1" />
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className="mt-1 px-4 py-2 border border-gray-600 bg-gray-800 rounded-md shadow-sm w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            />
          </div>
          <div className="mb-6">
            <Text text="Password" className="text-white mb-1" />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="mt-1 px-4 py-2 border border-gray-600 bg-gray-800 rounded-md shadow-sm w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            />
          </div>
          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
