// src/services/auth.ts
export const loginWithGithub = () => {
  window.location.href = 'http://localhost:3000/auth/github';
};

export const logout = async () => {
  await fetch('http://localhost:3000/auth/logout', {
    credentials: 'include',
  });
};

export const refreshToken = async () => {
  await fetch('http://localhost:3000/auth/refresh', {
    credentials: 'include',
  });
};

export const getProfile = async () => {
  const res = await fetch('http://localhost:3000/profile', {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Not authenticated');
  return res.json();
};
