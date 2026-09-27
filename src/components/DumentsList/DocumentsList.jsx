import { Link } from "react-router";
import File from "../File/FileItem";
import "./DocumentsList.css";
import { LuChevronDown } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  finishUpload,
  startUpload,
  updateUploadProgress,
} from "../../features/fileSlice";

const DocumentsList = ({ isCompact }) => {
  const dispatch = useDispatch();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newDoc = {
      id: Date.now().toString(),
      isPdf: file.type === "application/pdf",
      title: file.name,
      subtitle: `${file.type.includes("pdf") ? "PDF" : "DOC"} • ${(file.size / (1024 * 1024)).toFixed(2)}MB`,
    };

    dispatch(startUpload(newDoc));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      dispatch(updateUploadProgress(progress));

      if (progress >= 100) {
        clearInterval(interval);
        dispatch(finishUpload(newDoc));
      }
    }, 300);
  };
  const documents = useSelector((state) =>
    isCompact
      ? state.documents.documents.slice(0, 3)
      : state.documents.documents,
  );
  return (
    <div className="card-container">
      <div className="list-container">
        {documents.map((file) => (
          <File
            key={file.title}
            isPdf={file.isPdf}
            title={file.title}
            subtitle={file.subtitle}
          />
        ))}
      </div>
      <div className="actions-container">
        {isCompact && (
          <div className="show-all-container">
            <Link to="/cases">
              Show All <LuChevronDown />
            </Link>
          </div>
        )}
        <div className="show-all-container">
          <input
            type="file"
            onChange={handleFileUpload}
            id="file-input"
            hidden
          />
          <label htmlFor="file-input" className="upload-btn">
            Upload
          </label>
        </div>
      </div>
    </div>
  );
};

export default DocumentsList;
