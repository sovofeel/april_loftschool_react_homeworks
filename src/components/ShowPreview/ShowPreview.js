import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PreviewHeader = styled.div`
  height: 320px;
  padding: 20px;
`;

const PreviewImage = styled.img`
  max-height: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
`;

const ShowPreview = ({ image = {}, name = '', id = 0, summary = '' }) => {
  return (
    <div className="t-preview">
      <PreviewHeader>
        <Link className="t-link" to={`/shows/${id}`}>
          {name}
        </Link>
        {image && <PreviewImage src={image.medium} alt={name} />}
      </PreviewHeader>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
      <hr />
    </div>
  );
};

export default ShowPreview;
