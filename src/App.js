import "./App.css";

import Text from "./components/Text";
import Weclome from "./components/Welcome";
import Image from "./components/Image";
import Link from "./components/Link";
import Sum from "./components/Sum";
import Colors from "./components/Colors";

const App = () => {
  return (
    <div>
      <Text />
      <Weclome />
      <Image />
      <Link />
      <Sum />
      <Colors />
    </div>
  );
};

export default App;
