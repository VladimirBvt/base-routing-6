import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const RequireAuth = ({children}) => {
  const location = useLocation()
  const {user} = useAuth()

  // если есть авторизация - отрисовываем любую страницу, переданную в children
  // если нет авторизации - то переадрисуем пользователя
  // также хотим знать откуда пришел пользователь: чтобы после авторизации его туда же и вернуть, для этого используем location и state в компоненте Navigate
  if (!user) {
    return <Navigate to="/login" state={{from: location}} />
  }

  return children
};

export default RequireAuth;
