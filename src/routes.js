import { Route, Routes } from "react-router-dom";
import * as Main from "pages";

import KO from "pages/ko";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main.Main />}>
        <Route path="ko" element={<KO />}/>
        <Route path="en" element={<KO />}/>
        <Route path="jp" element={<KO />}/>
      </Route>
    </Routes>
  );
}
