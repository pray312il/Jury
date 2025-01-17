import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import Jury from "../components/AdminEditJury/Jury";

import "../components/AdminEditJury/AdminEditJury.css";
import Navbar from "../components/navbar/Navbar";

const AdminEditJury = (props) => {

    const [update, setUpdate] = useState(false)

    const [jurys, setJury] = useState([
    ])

    const removeJury = (project) => {
        setJury(jurys.filter(p => p.id !== project.id))
    }

    async function getinf() {
        axios.get(`http://aleksbcg.beget.tech/eventJury/getJury/${props.EventId}`, {
        }).then(response => {
            setJury(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    return (
        <>
            <Navbar/>
            <section className="AdminEditJury">
                <div className="AdminEditJury__pulljury">
                    {jurys.map((jurys, index) =>
                        <Jury remove={removeJury} number={index + 1} jury={jurys} key={jurys.id} />
                    )}

                </div>
                <Link to="/AdminAddJury"><button className="AdminEditJury__button">Добавить члена жюри</button></Link>
            </section>
        </>
    )
}

export default AdminEditJury