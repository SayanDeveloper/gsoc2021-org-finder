import React, {useContext} from 'react';

function Box({passed}) {
    let tech = passed.tech_tags.join(", ");
    return (
    <div className='each-box'>
        <img src={passed.logo_url} />
        <h4 className='text-center'>{passed.name}</h4>
        <p className='text-center lang'>
            {tech}
        </p>
    </div>
    );
}

export default Box;
