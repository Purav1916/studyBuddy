import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function SessionCard({ post }) {
  const [joined, setJoined] = useState(post.joinedUsers?.includes("Purav Patel") || false); // TODO: Replace with actual user authentication
  const [joinCount, setJoinCount] = useState(post.joinedCount || 0); // Initialize with existing join count or 0

  async function handleJoin() {
    if (joined ==  false){
      setJoined(true);
      const newCount  =  joinCount + 1;
      setJoinCount(newCount);

      const updatedUsers = [
        ...(post.joinedUsers || []),
        "Purav Patel" // TODO: Replace with actual user authentication
      ]

      // Update join count in Firestore
      await updateDoc(doc(db, "posts", post.id), {
        joinedCount: newCount,
        joinedUsers: updatedUsers
      });
    }else{
      return;
    };
    
  }

  async function handleLeave() {
    if (joined) {
      setJoined(false);
      const newCount  =  joinCount - 1;
      setJoinCount(newCount);
      const updatedUsers = (post.joinedUsers || []).filter(
        (user) => user !== "Purav Patel" // TODO: Replace with actual user authentication
      )
      await updateDoc(doc(db, "posts", post.id), {
        joinedCount: newCount,
        joinedUsers: updatedUsers
      });
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-xl text-gray-900">
            {post.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Looking for study partners
          </p>
        </div>

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
          {post.subject}
        </span>
      </div>

      {/* Session Info */}
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          📍 {post.location}
        </p>

        <p className="text-gray-600">
          ⏰ {post.time}
        </p>
      </div>

      {/* Message */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-5">
        <p className="text-gray-700 leading-relaxed">
          {post.message}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">
            👥 {joinCount} students joined
          </p>

          {joined && (
            <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              ✓ You've joined
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {!joined ? (
            <button
              onClick={handleJoin}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Join
            </button>
          ) : (
            <button
              onClick={handleLeave}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Leave
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SessionCard;