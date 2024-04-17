export const Person = ({ person }) => {
  let marriageStatus = 'I am not married';

  if (person.isMarried) {
    const partner = person.sex === 'f' ? 'husband' : 'wife';

    marriageStatus = `${person.partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}

      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
