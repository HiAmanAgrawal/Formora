import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateSelection from './components/FormBuilder/TemplateSelection';
import DataTable from './components/DataTable';
import FormBuilder from './components/FormBuilder/FormBuilder';
import TemplatePreview from './components/FormBuilder/TemplatePreview';
import MainDashboard from './components/MainDashboard';

const App = () => {
  return (
    <Router>
      
      <div className="flex h-screen bg-gray-50">
       
        <div className="flex-1">
          <Routes>
            <Route path="/MainDashboard" element={<MainDashboard />} />
            <Route path="/templateSelection" element={<TemplateSelection />} />
            <Route path="/preview" element={<TemplatePreview />} />
            <Route path="/workspace/:id" element={<DataTable />} />
            <Route path="/form-builder" element={<FormBuilder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;