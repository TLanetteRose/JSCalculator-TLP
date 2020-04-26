import React from 'react';

import Button from '../Button';

const largeButton = (props) => 
    <Button type='large' id={props.id} {...props} />;

export default largeButton;