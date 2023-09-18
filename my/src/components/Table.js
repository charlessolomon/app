import React, { useEffect, useState } from 'react'
import './css/Table.css'

function Table({ data, mapping, colored }) {

    let [pagination, setPagination] = useState({ data: [] });
    let [pageindex, setIndex] = useState(0);

    useEffect(() => {
        console.log(data, mapping);
        setPagination({ data: sliceIntoChunks(data, 13) })
    }, [data, mapping])

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    let getTableHead = (arr) => {
        return arr.map(function (item, index) {
            return (
                <td key={index}>{item}</td>
            );
        });
    };

    let getTableRow = (item) => {
        return mapping[1].map(function (field, index) {
            return (
                <td style={{ color: colored.includes(index) ? "var(--blue)" : "inherit" }} key={index}>{item[field]}</td>
            );
        });
    }

    let getTableData = (arr) => {
        if(!arr) return <tr><td>"Null"</td></tr>;
        return arr.map(function (item, index) {
            return (
                <tr key={index}>
                    {getTableRow(item)}
                </tr>
            );
        });
    };

    let getPages = (arr) => {
        if(!arr) return <></>;
        if(arr.length < 2) return <></>;
        return arr.map(function (item, index) {
            return (
                <div className='pagination-number' key={index} style={{background: index===pageindex ? "blue": "white",color: index===pageindex ? "white": "black"}} onClick={()=>{setIndex(index)}}><p>{index + 1}</p></div>
            );
        });
    };

    return (
        <div>
            <div className='Table'>
                <table>
                    <thead><tr>{getTableHead(mapping[0])}</tr></thead>
                    <tbody>{getTableData(pagination.data[pageindex])}</tbody>
                </table>
            </div>
            <div className='Pagination'>
                {getPages(pagination.data)}
            </div>
        </div>
    )
}

export default Table