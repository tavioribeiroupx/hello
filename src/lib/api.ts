"use strict";

import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_API_URL;

if (!url) {
  console.error("NEXT_PUBLIC_API_URL não está configurada no ambiente");
}

const apiClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
}); 

const apiServer = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  const token = session?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({
        redirect: true,
        callbackUrl: "/sign-in?error=unauthorized",
      });
      return Promise.reject(error);
    } else if (error.response?.status === 403) {
      await signOut({
        redirect: true,
        callbackUrl: "/sign-in?error=forbidden",
      });
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export { apiClient, apiServer };
