const rawEnv = import.meta.env;

export const envConfig = {
  backendUrl: rawEnv.VITE_BACKEND_URL,
};
