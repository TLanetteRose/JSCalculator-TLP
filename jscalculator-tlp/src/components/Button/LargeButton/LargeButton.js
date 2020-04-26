import React from 'react';

import Button from '../Button';

const largeButton = (props) => 
    <Button type='large'>
        {props.children}
    </Button>;

export default largeButton;