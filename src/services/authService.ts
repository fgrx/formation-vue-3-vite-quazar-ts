import axios from "axios";

export default {
  async signIn(email: string, password: string) {
    let result = null;
    const credentials = {
      email,
      password,
    };

    try {
      const req = await axios.post(
        `${import.meta.env.VITE_API_SERVER}/signin`,
        credentials
      );
      result = req.data;
    } catch (error) {
      console.log(error);
    }

    return result;
  },
};
