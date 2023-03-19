import { type AppType } from "next/app";
import "~/styles/global.scss";
import { useState, useEffect } from "react";

import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loading"> <div className="Loading-spinner"></div></div>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default api.withTRPC(MyApp);
