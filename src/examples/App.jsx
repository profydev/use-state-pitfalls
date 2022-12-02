// hidden

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RedundantState } from "./RedundantState";
import { DuplicateState } from "./DuplicateState";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Redundant State</Tab>
        <Tab>Duplicate State</Tab>
      </TabList>

      <TabPanel>
        <RedundantState />
      </TabPanel>
      <TabPanel>
        <DuplicateState />
      </TabPanel>
    </Tabs>
  );
}

export default App;
