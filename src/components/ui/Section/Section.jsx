import React from 'react';

function Section({ id, children, className = '', ...props }) {
    return (
        <section id={id} className={`section ${className}`} {...props}>
            {children}
        </section>
    );
}

export default Section;
