import { AuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../interfaces/user.interface';

export const mapAuthResponse = (rawData: any): AuthResponse => {
  const user: User = {
    id: rawData.id,
    username: rawData.username,
    email: rawData.email,
  };

  return {
    user: user,
    token: rawData.token,
  };
};