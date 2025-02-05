import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-lg flex flex-col">
      <h2 className="text-xl font-bold text-blue-500 mb-4">Formora</h2>
      
      <input
        type="text"
        placeholder="Search themes..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <ul className="space-y-2 text-gray-700">
        {[
          "Feedback Form", "Consent Form", "Informed Consent", "Guardian Consent",
          "Invitation Form", "Registration Form", "Application Form", "Survey Form", "Complaint Form"
        ].map((item, index) => (
          <li key={index} className="hover:text-blue-500 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-auto text-red-500 flex items-center">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
