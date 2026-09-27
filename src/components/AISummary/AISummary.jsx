import { LuLightbulb } from "react-icons/lu";
import "./AISummary.css";
import { VscWarningCompact } from "react-icons/vsc";
import { useGetSuggestedRewriteMutation } from "../../services/apiSlice";
import { useSelector } from "react-redux";
const AISummary = () => {
  const { activeDocument, uploadProgress, aiSummaryText } = useSelector(
    (state) => state.documents,
  );
  const [getSuggestedRewrite, { isLoading }] = useGetSuggestedRewriteMutation();
  const isEnabled = activeDocument && uploadProgress === 100;
  const handleRewriteClick = () => {
    const optimisticText = `All good! No rewrites necessary"`;

    getSuggestedRewrite({
      documentId: activeDocument.id,
      newText: optimisticText,
    });
  };
  return (
    <div className="card-container">
      <div className="status-container">
        <div className="status-row">
          <div className="status-col">
            <b>Risk Zone:</b>
          </div>
          <div className="status-col">
            <div className="pill loss">
              <VscWarningCompact />
              Medium 2.3
            </div>
          </div>
        </div>
        <div className="status-row">
          <div className="status-col">
            <b>Clause Type:</b>
          </div>
          <div className="status-col">License / IP</div>
        </div>
        <div className="status-row">
          <div className="status-col">
            <b>Impact:</b>
          </div>
          <div className="status-col">May affect exclusivity rights</div>
        </div>
      </div>
      <div className="recomendation-container">
        <div className="header">
          <LuLightbulb />
          Recommendation
        </div>
        <div className="body">{aiSummaryText}</div>
      </div>
      <button
        className="suggestion-button"
        onClick={handleRewriteClick}
        disabled={!isEnabled || isLoading}
      >
        See Suggested Rewrite
      </button>
    </div>
  );
};

export default AISummary;
