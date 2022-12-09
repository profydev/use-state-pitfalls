import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Examples from "./examples/App";
import RedundantState from "./redundant-state/App";
import DuplicateState from "./duplicate-state/App";
import UpdateStateWithUseEffect from "./update-state-with-use-effect/App";
import ListenToStateUpdatesWithUseEffect from "./listen-to-state-updates-with-use-effect/App";
import ContradictingState from "./contradicting-state/App";
import DeeplyNestedState from "./deeply-nested-state/App";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Examples</Tab>
        <Tab>Redundant State</Tab>
        <Tab>Duplicate State</Tab>
        <Tab>Update State With useEffect</Tab>
        <Tab>Listen To State Updates With useEffect</Tab>
        <Tab>Contradicting State</Tab>
        <Tab>Deeply Nested State</Tab>
      </TabList>

      <TabPanel>
        <Examples />
      </TabPanel>
      <TabPanel>
        <RedundantState />
      </TabPanel>
      <TabPanel>
        <DuplicateState />
      </TabPanel>
      <TabPanel>
        <UpdateStateWithUseEffect />
      </TabPanel>
      <TabPanel>
        <ListenToStateUpdatesWithUseEffect />
      </TabPanel>
      <TabPanel>
        <ContradictingState />
      </TabPanel>
      <TabPanel>
        <DeeplyNestedState />
      </TabPanel>
    </Tabs>
  );
}

export default App;
