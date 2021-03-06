import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


export default function Customers() {
    const[customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const columns = [
    {
Header: 'Firstname',
accessor: 'firstname'
},
{
    Header: 'Lastname',
    accessor: 'lastname'
    },
    {
        Header: 'Streetaddress',
        accessor: 'streetaddress'
        },
        {
         Header: 'Postcode',
        accessor: 'postcode'
        },
        {
        Header: 'City',
        accessor: 'city'
        },
        {
            Header: 'Email',
        accessor: 'email'
        },
        {
            Header: 'Phone',
        accessor: 'phone'
        },
        
    ]
    return (
        <div>
            <ReactTable data={customers} columns={columns} />
        </div>
    );
}