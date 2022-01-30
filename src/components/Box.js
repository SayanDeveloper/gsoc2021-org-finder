import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

function Box({passed}) {
    let tech = passed.tech_tags.join(", ");
    return (
    <Link to={`/${passed.slug}`} className='each-box'>
        <img src={passed.logo_url} />
        <h4 className='text-center'>{passed.name}</h4>
        <p className='text-center lang'>
            {tech}
        </p>
    </Link>
    );
}

export default Box;
