import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import CreateSession from "./pages/CreateSession";
import MySessions from "./pages/MySessions";
import Profile from "./pages/Profile";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setPosts(data);
    });

    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Navbar />

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Feed posts={posts} />} />

            <Route
              path="/create"
              element={<CreateSession posts={posts} setPosts={setPosts} />}
            />

            <Route
              path="/sessions"
              element={<MySessions posts={posts} />}
            />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;