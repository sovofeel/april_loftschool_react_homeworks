import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PreviewHeader = styled.div`
  height: 150px;
  padding: 20px;
`;

const PreviewImage = styled.img`
  height: 80px;
`;

const ShowPreview = ({ image = {}, name = '', id = 0, summary = '' }) => {
  return (
    <div className="t-preview">
      <PreviewHeader>
        <Link to={`shows/${id}`} className="t-link">
          {name}
        </Link>
        {image && <PreviewImage src={image.medium} alt={name} />}
      </PreviewHeader>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowPreview;
