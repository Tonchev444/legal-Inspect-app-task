import { useMemo, useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "./StyledTable.css";
import ReactCountryFlag from "react-country-flag";

const TableCell = ({ children, type, value }) => {
  let component;
  switch (type) {
    case "percentage":
      component = <>{children}%</>;
      break;
    case "state":
      component = <div className={`pill ${value}`}>{children}</div>;
      break;
    case "countryCode":
      component = (
        <>
          <ReactCountryFlag
            countryCode={value === "UK" ? "GB" : value}
            svg
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "4px",
            }}
            title="United Kingdom"
          />
          {children}
        </>
      );
      break;
    default:
      component = <>{children}</>;
      break;
  }
  return component;
};

const StyledTable = ({ data = [], columns = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    });
  }, [data, sortConfig]);

  const handleSort = (columnKey) => {
    let direction = "asc";
    if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: columnKey, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return null;
    }
    return sortConfig.direction === "asc" ? (
      <FiArrowUp className="sort-icon active" />
    ) : (
      <FiArrowDown className="sort-icon active" />
    );
  };

  return (
    <div className="table-conteiner">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                <div className="cell">
                  <span>{column.label}</span>
                  {getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  <TableCell type={column.key} value={row[column.key]}>
                    {row[column.key]}
                  </TableCell>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="subtitle">Last precedent update; Nov 2025</div>
    </div>
  );
};

export default StyledTable;
