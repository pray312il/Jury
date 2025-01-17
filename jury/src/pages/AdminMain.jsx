import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";
import Navbar from "../components/navbar/Navbar";
import AdminAddEvent from "./AdminAddEvent";



const AdminMain = (props, getidPZDC) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NzMxMzgwLCJpYXQiOjE2NjUxMzkzODAsImp0aSI6IjNlYTA4ZjE2YmUzNDQyYmViZjQ1Njg5NDkzMDhlZTIzIiwidXNlcl9pZCI6Mn0.sAquDN8WQVpuJnZ8BjLqX8h4ua6KX_IvUH4sdcxDKdc"

    const [modalActive, setModalActive] = useState(false);

    const [update, setUpdate] = useState(false)
    const [events, setevent] = useState([{
    },
    ])
    
    const getIdEvent = (EventIds) => {
        props.getidPZDC(EventIds)
        console.log(EventIds)
    }

    async function getinf(){
        axios.get('http://aleksbcg.beget.tech/events/', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
                setevent(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }



    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    console.log(events)
    
    return (
        <>

            <section className="AdminMain">
                <h1>Мероприятия</h1>
                <div className="AdminMain__EventPull">
                    {events.map((events) =>
                        <Event getId={getIdEvent} event={events} key={events.id} />
                    )}
                </div>
                <div className="AdminMain__buttons">
                    <button>Жюри</button>
                    <button onClick={() => setModalActive(true)}>Мероприятие</button>
                </div>
            </section>
            <AdminAddEvent active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminMain