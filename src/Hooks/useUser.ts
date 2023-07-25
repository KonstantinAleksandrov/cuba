import {useEffect, useState} from "react";
import {getUserMe} from "../api";


export const useUser = () => {
  const [userData, setUserData] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    getUserMe().then(data => {
      setUserData(data)
    }).catch(e => setError(e.message))
  }, []);

  return [userData, error]
}