import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';


export default function Trainings() {
    const[trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
     
    }

    const columns = [
        {
            id: "formatDate",
            Header: 'Date',
            accessor: d => {
                return moment(d.date).format("DD-MM-YYYY HH:mm")
            }
        },
        {

    Header: 'Duration',
    accessor: 'duration'
    },
    {
        Header: 'Activity',
        accessor: 'activity'
        },
    {
        Header: 'Customer',
        accessor: 'customer.firstname'
        },
    ]
    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>
    );
}