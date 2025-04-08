import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import ItemDisplay from './ItemDisplay';

const FoodDisplay = ({ category }) => {
  const { food_list, name } = useContext(StoreContext);
  // console.log(name);  // Check what 'name' contains for debugging
const data =name.length>0?name:food_list

console.log(data)
  return (
    <div className='mt-[30px]'>
      <h2 className='font-[600]' style={{ fontSize: 'max(2vw,24px)' }}>
        Top dishes near you
      </h2>
      <div
        className='mt-[30px] gap-[20px]'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          rowGap: '50px'
        }}
      >
        {
        data
          .filter(item => category === 'All' || category === item.category)
          .map((item, index) => (
            <ItemDisplay
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
