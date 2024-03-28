import { useState } from 'react';
import data from '../data';
import Person from './Person';

const List = () => {
  const [people, setPeople] = useState(data);

  console.log;
  return (
    <div style={{ background: '#fff' }}>
      <h3>{people.length} birthdays today</h3>
      {people.map(({ name, id, age, image }) => {
        return (
          <Person key={id} name={name} age={age} image={image} width='75' />
        );
      })}
      <button
        type='button'
        className='btn'
        style={{ width: '100%' }}
        onClick={() => setPeople([])}
      >
        Clear All
      </button>
    </div>
  );
};
export default List;
