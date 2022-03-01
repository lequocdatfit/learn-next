import { authApi } from '@api/auth-api';
import { profileApi } from '@api/profile-api';
import * as React from 'react';

export interface LoginProps {}

export default function Login(props: LoginProps) {
  async function handleLoginClick() {
    try {
      await authApi.login({ username: 'easy', password: '123qwe' });
    } catch (err) {
      console.log('login failed!');
    }
  }
  async function handleLogoutClick() {
    try {
      await authApi.logout();
    } catch (err) {
      console.log('Logout failed!');
    }
  }
  async function handleGetProfileClick() {
    try {
      await profileApi.getProfile();
    } catch (err) {
      console.log('Get profile failed!');
    }
  }

  return (
    <div>
      Login page
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
    </div>
  );
}
