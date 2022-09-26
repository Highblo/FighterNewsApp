import axios from "axios";
import { useState, useCallback } from "react";

import { useMessage } from "./useMessage";

export const useGetData = () => {
  const [articles, setArticles] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const { showMessage } = useMessage();

  const getData = useCallback((serch: string) => {
    setNewsLoading(true);
    const url = "https://newsapi.org/v2/everything?" +
    `q=${serch}&` +
    "sortBy=popularity&" +
    "apiKey=68663194d6644ba2bf011c5dc0d7f053";
    axios.get(url)
    .then(({data: {articles}}) => setArticles(articles))
    .catch(() => showMessage({ title: "時間をおいてから、もう一度お試しください", status: "error" }))
    .finally(() => setNewsLoading(false));
  }, []);
  return { articles, getData, newsLoading };
}