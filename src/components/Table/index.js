import React from "react";
import "./style.scss";

const Table = ({ headers, body }) => {
    const bodyData = body.map((row, index) => {
        let rowData = [];
        let i = 0;

        for (const key in row) {
            rowData.push({
                key: body[i],
                val: row[key],
            });
            i++;
        }

        return (
            <tr key={index}>
                {rowData.map((item, index) => (
                    <td key={index}>{item.val}</td>
                ))}
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, i) => {
                        return <th key={i}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>{bodyData}</tbody>
        </table>
    );
};

export default Table;
