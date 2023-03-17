import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../service";
const get = async (db, path, quantity, filter) => {
  switch (quantity) {
    case "all":
      const q = query(
        collection(db, path),
        typeof filter === "object" ? filter : undefined
      );
      const all = await getDocs(q);
      const arr = [];
      all.forEach((doc) => {
        arr.push(doc.data());
      });
      return arr;
      break;
    case "one":
      const one = await getDoc(doc(db, path, filter));
      return one.data();
      break;
  }
};
const post = async (db, path, filter, body) => {

  const res = await addDoc(collection(db, path), body);

  return res;
};
export const useDB = ({ action, path, quantity, filter, start, body }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function consult() {
      switch (action) {
        case "get":
          const res = await get(db, path, quantity, filter);
          res && setData(res);
          setLoading(false);
          break;
        case "post":
          const p = await post(db, path, filter, body);
          setData(p);
          setLoading(false);
          break;
        default:
          return;
      }
    }
    if (loading && start) {
      consult();
    }
  }, [start]);
  return {
    data,
    loading,
  };
};
/*
{
    action: 'post', 'get', 'del'
    path: ruta a consultar
    quantity: 'all', 'one',
    start?: boolean
    filter?: Object > where(string, operator,  boolean)
    body?: informacion a enviar
    
}
*/
