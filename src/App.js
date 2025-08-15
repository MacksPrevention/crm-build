import FormPage from './Components/FormPage/FormPage';
import Table from './Components/Table/Table';
import Edit from './Components/Edit/Edit';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/table" element={<Table />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
