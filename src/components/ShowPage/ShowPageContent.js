import React from 'react';

const ShowPageContent = ({ name = '', image = {}, summary = '', _embedded = { cast: [] } }) => (
  <div>
    <p>{name}</p>
    {image && <img src={image.medium} alt={name} />}
    <div>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
    <div className="t-person">
      {_embedded.cast.map(({ person, index }) => (
        <div className="t-person-item">
          <p>{person.name}</p>
          {person.image && <img src={person.image.medium} alt={person.name} />}
        </div>
      ))}
    </div>
  </div>
);

export default ShowPageContent;
