import { LoginPayload } from '@models/auth';
import axiosClient from './index';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post('/login', payload);
  },
  logout() {
    return axiosClient.post('/logout');
  },
};
