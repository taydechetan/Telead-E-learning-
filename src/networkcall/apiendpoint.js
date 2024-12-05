import Contactus from "../screen/contactuspage/contactus";
import ForgotPassword from "../screen/loginflow/forgotpassword/forgotpassword";

const APPConfig = {
  // API_URL: "http://173.212.250.62/betting/ap-admin/public/api",
  API_URL: "http://173.212.250.62/shmangus/sh-admin/public/api",
};

const ApiEndPoints = {
  StdRegister: `${APPConfig.API_URL}/student-register`,
  Login: `${APPConfig.API_URL}/login`,
  ForgotPassword: `${APPConfig.API_URL}/forgot-password`,
  Contactus: `${APPConfig.API_URL}/contactus`,
  Termconditon: `${APPConfig.API_URL}/page/terms_condition`,
  Privacypolicy: `${APPConfig.API_URL}/page/privacy_policy`,
  Sendotpemail: `${APPConfig.API_URL}/forgot-verify-email-otp`,
  StudentProfile: `${APPConfig.API_URL}/student-update-profile`,
  ChangePassword: `${APPConfig.API_URL}/change-password`,
};

export default ApiEndPoints;

