import router from "next/router";
import { useEffect } from "react";
import RotasEnum from "../enums/RotasEnum";

export default function _404() {
  useEffect(() => {
    router.push(RotasEnum.ROOT);
  }, []);
  
  return null;
}
