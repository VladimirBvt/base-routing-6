import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
  // Хук useMatch возвращает true, если полученный url (в качестве параметра) совпадает
  // с той ссылкой, которая у нас сейчас активна. Он принимает либо паттерн (объект настроек { path: string - путь url, caseSensitive: boolean - зависимость ли от регистра, end: boolean - полную ли ссылку смотреть (полное вхождение строки) или частичного вхождения нам будет достаточно }), либо строку (путь url).
  // Возвращает он либо объект PatchMatch, либо null. Это можно использовать как булево значение.
  const match = useMatch({
    path: to,
    end: to.length === 1, // если это главная страница, то берем полный путь, если не главная - то не полный
  })
  // console.log({match}) // вернет либо null, либо объект

  return (
    <Link
      to={to}
      className="app-link"
      style={{
        color: match ? "var(--color-active)" : "", // проверяем активное ли состояние ссылки через match
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
