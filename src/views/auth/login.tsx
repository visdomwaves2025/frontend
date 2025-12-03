import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/redux/store";
import PasswordLogin from "./components/PasswordLogin";
import FaceLogin from "./components/FaceLogin";
// import LanguageSwitcher from "../layout/langSwitcher";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  //** Store Vars */
  const loginStores = useSelector((state: RootState) => state.auth);

  //**State Vars */
  const [tab, setTab] = useState<"password" | "face">("password");

  useEffect(() => {
    if (loginStores?.loginSuccess) {
      navigate("/dashboard");
    }
  }, [loginStores?.loginSuccess, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">{t("login.title")}</h2>

        <div className="mb-4 flex justify-center space-x-2">
          <button
            onClick={() => setTab("password")}
            className={`rounded px-3 py-1 text-sm ${tab === "password" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            {t("login.passwordLogin")}
          </button>
          <button
            onClick={() => setTab("face")}
            className={`rounded px-3 py-1 text-sm ${tab === "face" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            {t("login.faceLogin")}
          </button>
        </div>

        {tab === "password" ? <PasswordLogin /> : <FaceLogin />}

        {loginStores?.errorText !== "Success" && (
          <p className="mt-4 text-center text-sm text-red-500">{loginStores?.errorText}</p>
        )}
      </div>
      {/* <LanguageSwitcher /> */}
    </div>
  );
};

export default Login;
