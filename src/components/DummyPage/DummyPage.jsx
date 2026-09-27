import { Suspense, use } from "react";
import "./DummyPage.css";

const neverEndingPromise = new Promise(() => {});

function DummySkeleton() {
  return (
    <div className="page-container">
      <h2 className="dummy-title">Under construction...</h2>
      <div className="title-section" />
      {[1, 2, 3, 4].map((item) => (
        <div className="items-section" key={item} />
      ))}
      <div className="content-section" />
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="items-section" key={item} />
      ))}
    </div>
  );
}
function WaitingContent() {
  use(neverEndingPromise);

  return null;
}
export default function DummyPage() {
  return (
    <Suspense fallback={<DummySkeleton />}>
      <WaitingContent />
    </Suspense>
  );
}
