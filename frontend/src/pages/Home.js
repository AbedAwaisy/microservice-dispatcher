import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  const features = [
    'Responsive Design',
    'High Performance',
    'User-Friendly Interface',
  ];

  return (
    <div>
      <h1 className="heading">Welcome to Our Website</h1>
      <p className="text-center">Explore the features we offer:</p>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
