import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo image
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
  };

  const renderPasswordInput = (show, setShow, placeholder) => {
    return (
      <div className="mb-4 relative">
        <input
          type={show ? "text" : "password"}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={placeholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <i className={`fas ${show ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </span>
      </div>
    );
  };

  const renderPasswordSection = () => {
    return (
      <div>
        <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setForgotPassword(false)}
            className="text-black hover:text-gray-700"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="mx-auto h-12 w-auto" />
        </div>

        {/* Forgot Password Section */}
        {forgotPassword ? (
          renderPasswordSection()
        ) : (
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your user name"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {renderPasswordInput(showPassword, setShowPassword, "Enter your password")}
            {isLogin && (
              <div className="mb-4 text-right">
                <a
                  href="#"
                  onClick={() => setForgotPassword(true)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            )}
            {!isLogin && renderPasswordInput(showConfirmPassword, setShowConfirmPassword, "Confirm your password")}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
        )}
        {!forgotPassword && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black hover:text-gray-700"
            >
              {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;