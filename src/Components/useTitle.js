import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Kids Toyland | ${title} `;
  }, [title]);
};

export default useTitle;
