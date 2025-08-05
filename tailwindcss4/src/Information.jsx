import { useState, useEffect } from "react";

function Information() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowPopup(true);
    }
  }, []);
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto text-center">
            <h2 className="text-xl font-bold mb-2 text-black">
              Under Development
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              This website is currently under development. The mobile view might
              not look perfect yet as we’re still working on optimizations.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="cursor-pointer bg-[#d76f78] hover:bg-[#c55b64] text-white px-4 py-2 rounded-md transition duration-300"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;