import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { loginUser } from "../store/action";
import { useTranslation } from "react-i18next";

const PasswordLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { t } = useTranslation();
  //** Store Vars */
  const loginStores = useSelector((state: RootState) => state.auth);

  //** State Vars */
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const loginPayload = {
      uid: form.username,
      pwd: form.password,
      appType: "erp",
      logType: "emp",
      ip: "223.185.48.247",
    };
    dispatch(loginUser(loginPayload));
  };

  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          {t("login.username")}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder={t("login.username")}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          {t("login.password")}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder={t("login.password")}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!loginStores?.isLoading}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-all duration-200 hover:bg-blue-700 disabled:opacity-50"
      >
        {!loginStores?.isLoading ? `${t("login.loggingIn")}` : `${t("login.login")}`}
      </button>
    </form>
  );
};

export default PasswordLogin;
