import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import SessionCard from "../components/SessionCard";

function MySessions({ posts }) {
  // Only show your own sessions
  const myPosts = posts.filter((post) => post.name === "Purav Patel"); // TODO: Replace with actual user authentication

  // Delete from Firestore
  async function handleDelete(id) {
    await deleteDoc(doc(db, "posts", id));
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          My Sessions
        </h1>
        <p className="text-gray-500 mt-2">
          Manage the study sessions you created
        </p>
      </div>

      {/* Empty state */}
      {myPosts.length === 0 ? (
        <div className="bg-white rounded-3xl shadow p-10 text-center">
          <p className="text-gray-500">
            You haven’t created any study sessions yet.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPosts.map((post) => (
            <div key={post.id} className="relative">
              {/* Card */}
              <SessionCard post={post} />

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(post.id)}
                className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium transition"
              >
                Delete Session
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MySessions;