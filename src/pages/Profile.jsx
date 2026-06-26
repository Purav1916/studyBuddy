function Profile() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

        {/* Header */}
        <div className="text-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-5 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            PP
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Purav Patel
          </h2>

          <p className="text-gray-500 mt-2">
            Computer Science Student • University of Illinois Chicago
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="bg-indigo-50 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-indigo-600">
              12
            </h3>
            <p className="text-gray-600 mt-1">
              Sessions Created
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-green-600">
              8
            </h3>
            <p className="text-gray-600 mt-1">
              Sessions Joined
            </p>
          </div>
        </div>

        {/* Extra section */}
        <div className="mt-10 bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-gray-500">
            Keep joining study sessions to grow your profile 🚀
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;