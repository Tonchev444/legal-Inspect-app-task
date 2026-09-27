import { SlOptions } from "react-icons/sl";
import "./Card.css";

const Card = ({
  title,
  subtitle,
  hasSettings,
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`card ${className}`.trim()} {...props}>
      {title && (
        <div className="card-header">
          <div className="title-container">
            <h2 className="card-title">{title}</h2>
            {subtitle && <div className="subtitle">{subtitle}</div>}
          </div>

          {hasSettings && (
            <div className="card-settings">
              <button className="btn btn-icon">
                <SlOptions />
              </button>
            </div>
          )}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
