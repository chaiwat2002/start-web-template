import { Method } from "@src/common/Constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface AxiosResponse<T> {
    data: T | null;
    loading: boolean;
    error: unknown;
    fetchData: () => Promise<void>;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": ["application/json", "application/x-www-form-urlencoded"],
        "Accept": "application/json",
    }
})

instance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export const useAxios = <T>(method: Method, url: string, request?: unknown): AxiosResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance({
                method,
                url,
                data: request,
            });
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [method, url, request]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, fetchData };
}
