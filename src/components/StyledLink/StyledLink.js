import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLink = props => {
  const LinkWrapper = styled.div`
    display: inline-block;
    text-decoration: none;
    padding: 0 5px;
  `;

  return (
    <LinkWrapper>
      <Link {...props}>{props.children}</Link>{' '}
    </LinkWrapper>
  );
};

export default StyledLink;
