// src/views/auth/store/action/index.ts
import axios from "@/config/axios"; // your custom axios instance
import type { AppDispatch } from "@/redux/store";

export const loginUser = (loginData: Record<string, unknown>) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: "LOGIN_LOADING", isLoading: false, errorText: null });

    
      await axios.post("/login/authenticate", loginData)
      .then((response) => {

      const resData = response.data;
      console.log("✅ Raw Response:", JSON.stringify(resData, null, 2));

      // Handle case if response is nested
      const ResponseStatus = resData?.ResponseStatus || resData?.value?.ResponseStatus;
      const ResponseMessage = resData?.ResponseMessage || resData?.value?.ResponseMessage;

      console.log("✅ Parsed ResponseStatus:", ResponseStatus);

      if (ResponseStatus === "Success") {
        localStorage.setItem("userData", JSON.stringify(resData));
        dispatch({
          type: "LOGIN_SUCCESS",
          isLoading: true,
          loginSuccess: true, // ✅ set true
          errorText: "Success",
        });
      } else if (ResponseStatus === "Fail") {
        const errorMessage = ResponseMessage || "Login failed";
        dispatch({
          type: "LOGIN_ERROR",
          isLoading: true,
          loginSuccess: false, // ✅ set true
          errorText: errorMessage,
        });
      } else if (ResponseStatus === "Restricted") {
        const errorMessage = ResponseMessage || "Access restricted";
        dispatch({
          type: "LOGIN_ERROR",
          isLoading: true,
          loginSuccess: false, // ✅ set true
          errorText: errorMessage,
        });
      } else {
        console.warn("⚠️ Unhandled response:", resData);
        dispatch({
          type: "LOGIN_ERROR",
          isLoading: true,
          errorText: "Unexpected response from server",
        });
      }
    }) 
    .catch((error: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      const errorMessage = err?.response?.data?.message || "Network error";
      dispatch({
        type: "LOGIN_ERROR",
        isLoading: true,
        errorText: errorMessage,
      });
    })
  };
};


export const logoutUser = () => {
  return (dispatch: AppDispatch) => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };
};
