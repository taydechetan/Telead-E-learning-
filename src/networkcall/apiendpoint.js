import ForgotPassword from "../screen/loginflow/forgotpassword/forgotpassword";

const APPConfig = {
  // API_URL: "http://173.212.250.62/betting/ap-admin/public/api",
  API_URL: "http://173.212.250.62/shmangus/sh-admin/public/api",
};

const ApiEndPoints = {
  StdRegister: `${APPConfig.API_URL}/student-register`,
  Login: `${APPConfig.API_URL}/login`,
  ForgotPassword: `${APPConfig.API_URL}/forgot-password`,
};

export default ApiEndPoints;
