import PDFIcon from "../../assets/pdf.svg";
import DocIcon from "../../assets/doc.svg";
import { LuArrowDownToLine, LuEye } from "react-icons/lu";
import "./FileItem.css";

const File = ({ props, isPdf, title, subtitle }) => {
  return (
    <div className="file-container" {...props}>
      <div className="file-body">
        <div className="icon">
          <img
            src={isPdf ? PDFIcon : DocIcon}
            alt="First Icon"
            width="30"
            height="30"
          />
        </div>
        <div className="info">
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="actions">
        <button className="btn btn-icon">
          <LuEye />
        </button>
        <button className="btn btn-icon">
          <LuArrowDownToLine />
        </button>
      </div>
    </div>
  );
};

export default File;
