const Person = ({ name, age, image }) => {
  return (
    <div className='person'>
      <img src={image} className='img' alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};
export default Person;
