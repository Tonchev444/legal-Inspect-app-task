import "./DocumentStatus.css";
import File from "../File/FileItem";
import { useDispatch, useSelector } from "react-redux";
import { updateUploadProgress } from "../../features/fileSlice";
import { useEffect } from "react";
const DocumentStatus = () => {
  const dispatch = useDispatch();
  const { activeDocument, uploadProgress } = useSelector(
    (state) => state.documents,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(updateUploadProgress(91));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card-container">
      <div className="document-container">
        <div className="content">
          <File
            isPdf={activeDocument.isPdf}
            title={activeDocument.title}
            subtitle={activeDocument.subtitle}
          />
        </div>
      </div>
      <div className="status-container border-top">
        <div className="status-row">
          <div className="status-col">
            <b>Analyzed:</b>
          </div>
          <div className="status-col">07 Nov 2025</div>
        </div>
        <div className="status-row">
          <div className="status-col">
            <b>Last Edited:</b>
          </div>
          <div className="status-col">Anna K., Associate</div>
        </div>
      </div>
      <div className="progress-container">
        <div className="info">
          <div className="title">AI Review Progress</div>
          <div className="subtitle">{uploadProgress}% complete</div>
        </div>
        <div className="bar">
          <div className="progress" style={{ width: `${uploadProgress}%` }} />
        </div>
        <div className="state-badge">Stage: Clause Analysis</div>
      </div>
    </div>
  );
};

export default DocumentStatus;
