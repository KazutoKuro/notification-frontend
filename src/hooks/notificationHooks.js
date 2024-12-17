import { useState, useCallback } from "react";
import axios from "axios";
import { envConfig } from "../libs/envConfig";

const API_URL = `${envConfig.backendUrl}/notifications`;

// Hook for fetching items
export const useGetAllNotifications = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err) {
      setError(err?.response?.data || err.message);
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, fetchData };
};

// Hook for creating an item
// export const useCreateItem = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = useCallback(async (item) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(API_URL, item);
//       setData(response.data);
//     } catch (err) {
//       setError(err?.response?.data || err.message);
//       console.error("Error creating item:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { data, error, loading, fetchData };
// };

// // Hook for updating an item
// export const useUpdateItem = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = useCallback(async (id, updatedItem) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.patch(`${API_URL}/${id}`, updatedItem);
//       setData(response.data);
//     } catch (err) {
//       setError(err?.response?.data || err.message);
//       console.error("Error updating item:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { data, error, loading, fetchData };
// };

// // Hook for deleting an item
// export const useDeleteItem = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = useCallback(async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.delete(`${API_URL}/${id}`);
//       setData(response.data);
//     } catch (err) {
//       setError(err?.response?.data || err.message);
//       console.error("Error deleting item:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { data, error, loading, fetchData };
// };
