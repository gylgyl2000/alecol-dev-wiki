import React from 'react';

const Highlight = ({children, color}) => (
<span
    style={{
        backgroundColor: color,
        borderRadius: '5px',
        color: '#fff',
        padding: '8px 20px',
        fontWeight: 'bold',
    }}>
    {children}
  </span>
);

export default Highlight;