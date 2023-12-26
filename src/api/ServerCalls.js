import axios from "axios";
import { toast } from "react-toastify";

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
export async function login(userInfo) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/api/auth/login`,
      userInfo,
      { withCredentials: true }
    );
    toast.success(response.data.message);
    localStorage.setItem("token", response.data.data.token);
    return {
      user: { ...response.data.data.user },
      message: response.data.message,
    };
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
}
