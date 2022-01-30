import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/provider';
import '../styles/home.css';
import Box from './Box';

function Result() {
    const [query, setQuery] = useState("");
    const {all, Filtered} =useContext(GlobalContext);
    const [data, setData] = all;
    const [filtered, setFiltered] = Filtered;

    useEffect(() => {
        var filByName = query == "" ? data : filtered.filter((each) => each.name.toLowerCase().includes(query.toLowerCase()));
        var test = [];
        data.forEach((each) => {
            each.tech_tags.forEach((sm) => {
                if (sm.toLowerCase().includes(query)) {
                    test.push(each);
                }
            });
        })
        var fil = filByName.concat(test);
        var filSet = new Set(fil);
        var fil = [...filSet];
        setFiltered(fil);
        console.log(test);
    }, [query]);

    return (
    <div className='container flex-horizontal-center'>
        <div className='searchbox'>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='search-input' 
                placeholder='Type here to search...'
            />
        </div>
        
        <div className='result-list'>
        {filtered.map((each, index) => {
            return (
                <Box key={index} passed={each} />
            )
        })}
        </div>
    </div>
    );
}

export default Result;
