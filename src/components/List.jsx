import Person from './Person';

const List = ({ people }) => {
  return (
    <div>
      {people.map(({ name, id, age, image }) => {
        return <Person key={id} name={name} age={age} image={image} />;
      })}
    </div>
  );
};
export default List;
