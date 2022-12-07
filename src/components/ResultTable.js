import React from 'react';
import { useSelector } from 'react-redux';

export default function ResultTable() {
  const { resultTable } = useSelector((state) => state.result);
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {resultTable?.map((item, index) => {
            return (
              <tr key={index} className="table-body">
                <td>{item.name}</td>
                <td>{item.attemps}</td>
                <td>{item.earnPoints}</td>
                <td>{item.result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
