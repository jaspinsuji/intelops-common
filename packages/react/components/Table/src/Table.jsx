import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Table = ({ columns, tableData }) => {
  const [tableDataSet, setTableDataSet] = useState([]);

  useEffect(() => {
    let mainData = {};
    columns &&
      columns.map((col, cIndex) => {
        tableData &&
          tableData.length > 0 &&
          tableData.map((tData, tIndex) => {
            if (mainData[tIndex] === undefined) {
              mainData[tIndex] = [];
            }
            mainData[tIndex].push(tData[col.accessor]);
          });
      });
    debugger;
    setTableDataSet(mainData);
  }, []);

  return (
    <>
      <div class="table-responsive">
        <table class="table table-flush w-full" datatable="true" id="datatable-search">
          <thead class="thead-light">
            <tr>
              {columns &&
                columns.length > 0 &&
                columns.map((col) => {
                  return <th  className="thead-light" class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{col.Header}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {tableDataSet &&
              Object.keys(tableDataSet).length > 0 &&
              Object.keys(tableDataSet).map((elmnt) => {
                const cellData = tableDataSet[elmnt];
                return (
                  <tr>
                    {cellData &&
                      cellData.map((data) => (
                        <td className="font-normal leading-normal text-sm p-2 text-slate-500 align-middle">
                    {data}
                  </td>
                      ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  /**
   * Specify a custom `columns` for the `<Table>`
   */
  columns: PropTypes.string,

  /**
   * Specify a custom `table Data` for the `<Table>`
   */
  tableData: PropTypes.string
};

export default Table;
