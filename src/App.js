import { demoData } from "./Demodata";
import DemoArray from "./Array";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>JavaScript Array Methods</h2>
      {Object.keys(demoData).map((key, index) => {
        let leftData = demoData[key].l || [];
        let rightData = demoData[key].r || [];
        let textOnly = demoData[key].textOnly || false;

        return (
          <DemoArray
            key={key + index}
            buttonLabel={demoData[key].label || key + "()"}
            leftData={leftData}
            rightData={rightData}
            textOnly={textOnly}
          />
        );
      })}
    </div>
  );
}
