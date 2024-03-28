const Person = ({ name, age, id, image, width }) => {
  return (
    <div className='person'>
      <img src={image} className='img' alt='' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};
export default Person;
