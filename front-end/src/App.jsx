import React, { useState } from "react";
import FormComponent from "./components/FormBuilder/FormBuilder";
import ImageGrid from "./components/FormBuilder/TemplateSelection";
import DataTable from "./components/DataTable";
const jsonData = [
  { id: 1, name: "Alice", age: 30, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 25, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  // Add more data as needed
];

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-primary mb-4">Formora</h2>
        <input
          type="text"
          placeholder="Search themes..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <ul className="space-y-5 text-gray-900 menu bg-base-100 w-full rounded-box">
          {[
            "Feedback Form", "Consent Form", "Informed Consent", "Guardian Consent",
            "Invitation Form", "Registration Form", "Application Form", "Survey Form", "Complaint Form"
          ].map((item, index) => (
            <li 
              key={index} 
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => setSelectedTemplate(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-auto text-red-500 flex items-center ">Logout</button>
      </aside>

      Main Content
      <main className="flex-1 p-6">
        {!selectedTemplate ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-center mb-6">Start designing your form</h1>
            <h2 className="text-xl font-semibold mb-4 text-center">Choose a Template</h2>
            <ImageGrid onSelectTemplate={setSelectedTemplate} />
          </div>
        ) : (
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedTemplate} Form</h2>
            <FormComponent template={selectedTemplate} />
          </div>
        )}
      </main>

       {/* Data Table */}
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Table</h1>
      <DataTable data={jsonData} />
    </div>
    </div>
  );
};

export default App;
