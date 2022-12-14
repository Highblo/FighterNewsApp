import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/User";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(res.data) {
          showMessage({ title: "ログインしました", status: "success" })
          history.push("/news");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" })
        }
      })
      .catch(() => showMessage({ title: "ログイン出来ません", status: "error" }) )
      .finally(() => setLoading(false));
  }, []);
  return { login, loading, setLoading };
}
