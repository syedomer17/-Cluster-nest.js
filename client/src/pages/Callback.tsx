// src/pages/Callback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate login complete
    // Backend already sets cookie if GitHub OAuth success
    const checkLogin = async () => {
      try {
        const res = await fetch('http://localhost:3000/profile', {
          credentials: 'include',
        });

        if (res.ok) {
          // If login successful → go to /home
          navigate('/home');
        } else {
          navigate('/');
        }
      } catch (err) {
        console.error(err);
        navigate('/');
      }
    };

    checkLogin();
  }, [navigate]);

  return (
    <div className="text-center mt-20 text-xl text-gray-600">
      Logging in... please wait
    </div>
  );
};

export default Callback;
