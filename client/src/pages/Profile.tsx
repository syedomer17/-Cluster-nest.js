// src/pages/Profile.tsx
import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/auth';

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Not logged in</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Hello, {user.username}!</h1>
      <p>Email: {user.email || 'No email provided'}</p>
    </div>
  );
};

export default Profile;
