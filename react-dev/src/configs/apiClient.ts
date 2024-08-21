import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { MAX_RETRIES, RETRY_DELAY, TIMEOUT } from "../utils/constants";

// Retry configuration
interface RetryConfig extends AxiosRequestConfig {
  retryCount?: number;
  retryDelay?: number;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor
apiInstance.interceptors.request.use(
  (config) => {
    // add bearer token to header
    const token = "";
    config.headers["Authorization"] = `Bearer ${token}`;

    // return config
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiInstance.interceptors.response.use(
  (response) => {
    // Handle Response Successful
    return response;
  },
  async (error: AxiosError) => {
    // Handle Response Errors
    const config = error as RetryConfig;
    if (!config) return Promise.reject(error);

    // Set the retry count if it's not set
    config.retryCount = config.retryCount ?? 0;

    // Retry the request if the retry count is less than the max retries
    if (config.retryCount < MAX_RETRIES) {
      config.retryCount += 1;

      // Wait for the retry delay
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));

      // Retry the request
      return apiInstance(config);
    }
    if (error.response && error.response.status === 401) {
      // handle error when token expired
      // Try refreshing the token
      // const newToken = await refreshToken();
      // If successful, update the token and retry the request
      // config.headers['Authorization'] = `Bearer ${newToken}`;
      // return axiosInstance(config!);
      // If refresh fails, handle logout
      // redirect to login, clear local storage, etc.
    }
    /**
     * show toast
     * Logging Errors
     * Token Refresh Logic
     * Canceling Requests
     * status code 404 Not Found
     * status code 500 Server error
     */
    return Promise.reject(error);
  }
);

export default apiInstance;
