import { useState, useEffect } from "react";
import "./DynamicStat.css";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

const DynamicStat = ({
  initialValue = 50,
  isPercentage = false,
  unitLabel = "",
  updateInterval = 5000,
}) => {
  const [value, setValue] = useState(initialValue);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const change = Math.floor(Math.random() * 21) - 10;

        if (change === 0) return prevValue;

        const newValue = Math.min(100, Math.max(1, prevValue + change));

        setDelta(newValue - prevValue);
        return newValue;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);

  const isPositive = delta >= 0;
  const formattedDelta = isPositive ? `+${delta}` : `${delta}`;

  return (
    <div className="num-card">
      <div className="num-body">
        <div className="num-value">
          {value}
          {isPercentage && <span className="percentage-symbol">%</span>}
        </div>

        {delta !== 0 && (
          <div
            className={`num-badge ${
              isPositive ? "badge-positive" : "badge-negative"
            }`}
          >
            <div className="icon-circle">
              {isPositive ? (
                <IoArrowDownCircleOutline className="badge-icon" />
              ) : (
                <IoArrowUpCircleOutline className="badge-icon" />
              )}
            </div>
            <span
              className="badge-text"
              title={`${formattedDelta}${isPercentage ? "%" : ""} ${unitLabel}`}
            >
              {formattedDelta}
              {isPercentage ? "%" : ""} {unitLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicStat;
