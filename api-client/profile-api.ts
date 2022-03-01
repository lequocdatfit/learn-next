import axiosClient from '.';

export const profileApi = {
  getProfile() {
    return axiosClient.get('/profile');
  },
};
