import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Adopt from './Adopt';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <h3>(put garfield's profile here)</h3>
      <Link to="/Adopt">
        <button className="btn btn-primary">Apply to Adopt</button>
      </Link>

      <Routes>
        <Route path="/Adopt/*" element={<Adopt />} />
      </Routes>
    </div>
  );
}

export default Profile;