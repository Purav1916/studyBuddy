import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function CreateSession({ posts, setPosts }) {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    location: "",
    time: "",
    message: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit() {
    if (!form.name || !form.subject) return;

    await addDoc(collection(db, "posts"), {
      ...form,
      joinedCount: 0,
      joinedUsers: [],
      timestamp: serverTimestamp()
    });

    setForm({
      name: "",
      subject: "",
      location: "",
      time: "",
      message: ""
    });
  }

  return (
  <div className="max-w-3xl mx-auto py-8">
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Create Study Session
        </h2>

        <p className="text-gray-500 mt-2">
          Find classmates and build your study group.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          name="name"
          className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 rounded-2xl transition"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="subject"
          className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 rounded-2xl transition"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          name="location"
          className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 rounded-2xl transition"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="time"
          className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 rounded-2xl transition"
          placeholder="Time"
          value={form.time}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="message"
        rows="5"
        className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 rounded-2xl transition mb-6"
        placeholder="Describe what you're studying, what help you need, or what topics you'll cover..."
        value={form.message}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg transition shadow-md"
      >
        Create Session 🚀
      </button>
    </div>
  </div>
);
}

export default CreateSession;