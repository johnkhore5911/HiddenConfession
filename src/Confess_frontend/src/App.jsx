import React, { useEffect, useState } from "react";
import { Header1 } from "./Header1";
import { ConfessionGallery } from "./ConfessionGallery";
import { AddConfession } from "./AddConfession";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header1 />} />
          {/* <Route path="/Header" element={<Header1 />} /> */}
          {/* <Route path="/loader" element={<Loader />} /> */}
          <Route path="/ConfessionGallery" element={<ConfessionGallery />} />
          <Route path="/AddConfession" element={<AddConfession />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
