import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      try {
        setTrendingContent(null);
        const response = await axios.get(`/api/v1/${contentType}/trending`);
        setTrendingContent(response.data.content);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
};

export default useGetTrendingContent;
