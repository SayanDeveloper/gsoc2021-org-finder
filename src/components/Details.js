import React, {useState, useContext, useEffect} from 'react';
import '../styles/details.css';
import {useParams} from 'react-router-dom';
import { GlobalContext } from '../context/provider';
import Nav from './Nav';

function Details() {
    const {org} = useParams();
    const {all} = useContext(GlobalContext);
    const [data, setData] = all;
    const [orgData, setOrgData] = useState({});
    const [allTech, setAllTech] = useState([]);
    const [allTopic, setAllTopic] = useState([]);

    useEffect(() => {
        data.forEach((el) => {
            if (el.slug === org) {
                setOrgData(el);
            }
        });
        // console.log(typeof orgData.tech_tags);
    });
    useEffect(() => {
        setAllTech([orgData.tech_tags]);
    }, [orgData]);

    return (
    <div>
        <Nav />
        <div className='container'>
            <img className={`org-detail-img ${orgData.logo_bg_color === "white" ? "white" : ""}`} src={orgData.logo_url} />
            <h2>{orgData.name}</h2>
            <p className='tech-details'>
                {allTech.map((el, i) => {
                    return(
                        <span className='each-tech' key={i}>{el}</span>
                    )
                })}
            </p>
        </div>
    </div>
    );
}

export default Details;
