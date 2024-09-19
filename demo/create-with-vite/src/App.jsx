import groupBy from "lodash/groupBy";
import ButtonComponent from "./ButtonComponent";

const data = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "fruit", name: "banana" },
  { id: 3, category: "vegetable", name: "carrot" },
  { id: 4, category: "fruit", name: "orange" },
  { id: 5, category: "vegetable", name: "lettuce" },
];

const App = () => {
  const groupedData = groupBy(data, "category");
  console.log(groupedData);

  return (
    <div>
      <h1>Hello, React with Webpack!</h1>\
      <ButtonComponent />
      {JSON.stringify(groupedData)}
    </div>
  );
};

export default App;
