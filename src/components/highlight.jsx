export const Highlight = ({children, color}) => (
<span
    style={{
        backgroundColor: color,
        borderRadius: '5px',
        color: '#fff',
        padding: '0.3rem 1rem',
        fontWeight: 'bold',
    }}>
    {children}
  </span>
);