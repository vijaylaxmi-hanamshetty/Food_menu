import React from 'react';
import Layout from '../Components/Layout/Layout';
import { MenuList } from '../data/data';

const Menu = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {MenuList.map((menu, index) => (
          <div key={index} className="max-w-md m-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-64 object-cover"
                src={menu.image}
                alt={menu.name}
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">{menu.name}</h5>
                <p className="text-gray-700">{menu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
