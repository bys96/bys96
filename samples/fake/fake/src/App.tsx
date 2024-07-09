// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     if (isLoading) return <p>loading...</p>;

//     return (
//       <ul>
//         <li>
//           <a href="http://google.com">
//             <p>go to google</p>
//           </a>
//         </li>
//       </ul>
//     );
//   }
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.gooogle.com" text="go to google" />
//         <ClassComponent href="http://www.x.com" text="go to x" />
//       </ul>
//     );
//   }
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";
// import ArrowComponent from "./ArrowComponent";
// import P from "./P";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <ClassComponent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.x.com" text="go to X" />
//     </ul>
//   );
// };

// const App = () => {
// const texts = [<p key="1">hello</p>, <p key="2">world</p>];
// 위에꺼를 refactoring map 함수 사용

//   const texts = ["hello", "world"].map((item, index) => (
//     <p key={index}>{item}</p>
//   ));
//   return <div>{texts}</div>;
// };

// const App = () => {
//   const texts = ["hello", "world"].map((item, index) => (
//     <p key={index} children={item} />
//   ));
//   return <div children={texts} />;
// };

// export default App;

// import EventListner from "./pages/EventListner";
// import Onclick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispatchEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopPropagation";
// import VariousInputs from "./pages/VariousInputs";
// import OnChange from "./pages/OnChange";
// import FileInput from "./pages/FileInput";
// import DragDrop from "./pages/DragDrop";
// import FileDrop from "./pages/FileDrop";

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <DragDrop />
//       <FileInput />
//       <OnChange />
//       <VariousInputs />
//       <StopPropagation />
//       <EventBubbling />
//       <DispatchEvent />
//       <ReactOnClick />
//       <Onclick />
//       <EventListner />
//     </div>
//   );
// }

// import Bootstrap from "./pages/Bootstrap";
// import Icon from "./pages/Icon";
// import Style from "./pages/Styles";
// import "./index.css";
// // import UsingIcon from './pages/UsingIcon';
// // import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';

// export default function App() {
//   return (
//     <div>
//       {/* <UsingIconWithCSSClass />
//       <UsingIcon /> */}
//       <Style />
//       <Icon />
//       <Bootstrap />
//     </div>
//   );
// }

// import Tailwindcss from "./pages/Tailwindcss";
// import Color from "./pages/Color";
// import TextsTest from "./pages/TextsTest";

// export default function App() {
//   return (
//     <div>
//       <TextsTest />
//       <Color />
//       <Tailwindcss />
//     </div>
//   );
// }

// import AvatarTest from "./pages/AvatarTest";
// import BackgroundImageTest from "./pages/BackgroundImageTest";
// import BorderTest from "./pages/BorderTest";
// import DisplayNoneTest from "./pages/DisplayNoneTest";
// import DisplayTest from "./pages/DisplayTest";
// import DivTest from "./pages/DivTest";
// import HeightTest from "./pages/HeightTest";
// import ImageTest from "./pages/ImageTest";
// import MarginTest from "./pages/MarginTest";
// import OverlayTest from "./pages/OverlayTest";
// import PaddingTest from "./pages/PaddingTest";
// import PositionTest from "./pages/PositionTest";
// import ViewportTest from "./pages/ViewportTest";

// function App() {
//   return (
//     <main>
//       <OverlayTest />
//       <PositionTest />
//       <BorderTest />
//       <AvatarTest />
//       <DisplayNoneTest />
//       <DisplayTest />
//       <BackgroundImageTest />
//       <MarginTest />
//       <PaddingTest />
//       <HeightTest />
//       <ViewportTest />
//       <ImageTest />
//       <DivTest />
//     </main>
//   );
// }
// export default App;

import DirectionTest from "./pages/DirectionTest";
import WrapTest from "./pages/WrapTest";
import MinMaxTest from "./pages/MinMaxTest";
import JustifyCenterTest from "./pages/JustifyCenterTest";
import AlignTest from "./pages/AlignTest";
import UserContainer from "./pages/UserContainer";
import CardContainer from "./pages/CardContainer";
import ModalTest from "./pages/ModalTest";
import InputTest from "./pages/InputTest";
import ButtonTest from "./pages/ButtonTest";

export default function App() {
  return (
    <main>
      {/* <CardContainer /> */}
      {/* <UserContainer /> */}
      {/* <AlignTest /> */}
      {/* <JustifyCenterTest /> */}
      {/* <MinMaxTest /> */}
      {/* <WrapTest /> */}
      {/* <DirectionTest /> */}
      {/* <ButtonTest /> */}
      {/* <InputTest /> */}
      <ModalTest />
    </main>
  );
}
