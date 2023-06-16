import { useEffect, useState } from "react";

export default function useLoading(delay) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay * 1000);
  }, []);
  return loading;
}
