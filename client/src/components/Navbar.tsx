// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  const loginWithGithub = () => {
    window.location.href = 'http://localhost:3000/auth/github'; // Backend GitHub route
  };

  const logout = async () => {
    await fetch('http://localhost:3000/auth/logout', {
      credentials: 'include',
    });
    window.location.href = '/';
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <span className="font-bold">GitHub OAuth</span>
      <div className="space-x-4">
        <button
          onClick={loginWithGithub}
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          Login with GitHub
        </button>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
