import React from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

const Private = () => <p>Private page</p>;

export default AuthHOC(Private);
