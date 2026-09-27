import { RELEVANT_CASES, RELEVANT_CASES_HEADER } from "../../../consts/consts";
import AISummary from "../../AISummary/AISummary";
import Card from "../../Card/Card";
import DocumentStatus from "../../DocumentStatus/DocumentStatus";
import DocumentsList from "../../DumentsList/DocumentsList";
import DynamicStat from "../../DynamicStat/DynamicStat";
import RiskTrendChart from "../../RiskTrendChart/RiskTrendChart";
import StyledTable from "../../Table/StyledTable";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page-container grid-container">
      <div className="grid-left">
        <Card title="Document Status" hasSettings={true}>
          <DocumentStatus />
        </Card>
        <Card title="AI Summary" hasSettings={true}>
          <AISummary />
        </Card>
        <Card
          title="Documents"
          hasSettings={true}
          subtitle={"Last AI Documents Reviews"}
        >
          <DocumentsList isCompact={true} />
        </Card>
      </div>

      <div className="grid-right">
        <div className="grid-right-header">
          <Card title="Pages Analyzed">
            <DynamicStat
              initialValue={15}
              unitLabel="pages"
              updateInterval={4000}
            />
          </Card>
          <Card title="Relevant Precedents">
            <DynamicStat
              initialValue={25}
              unitLabel="cases"
              updateInterval={3000}
            />
          </Card>
          <Card title="Identified Risks">
            <DynamicStat
              initialValue={10}
              unitLabel="this week"
              updateInterval={5000}
            />
          </Card>
          <Card title="AI Confidence">
            <DynamicStat
              initialValue={85}
              isPercentage={true}
              updateInterval={2000}
            />
          </Card>
        </div>

        <div className="grid-right-body">
          <Card>
            <RiskTrendChart />
          </Card>
          <Card title="Relevant Cases" hasSettings={true}>
            <StyledTable
              columns={RELEVANT_CASES_HEADER}
              data={RELEVANT_CASES}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
