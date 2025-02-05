import React, { useState } from "react";

const data = {
  fields: [
    { question: "What is your name?", type: "text" },
    { question: "What is your age?", type: "number" },
    { question: "What is your email?", type: "email" },
    { question: "Enter your password", type: "password" },
    { question: "What is your favorite color?", type: "text" }
  ]
};

const FormComponent = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, index) => {
    setFormData({ ...formData, [index]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      {data.fields.map((field, index) => (
        <div key={index} className="flex flex-col">
          <label className="mb-1 font-semibold">{field.question}</label>
          <input
            type={field.type}
            className="border p-2 rounded"
            onChange={(e) => handleChange(e, index)}
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default FormComponent;
