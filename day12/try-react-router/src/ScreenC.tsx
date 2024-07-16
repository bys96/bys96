import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface Params {
  userid: string;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  const history = useHistory();
  const { userid } = useParams<Params>();

  const onClickGoback = () => {
    history.goBack();
  };

  return (
    <div>
      <div>{"Your id is " + userid}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoback}>Go back</button>
      </div>
    </div>
  );
};

// const ScreenC: FC<ScreenCProps> = (props) => {
//   return (
//     <div>
//       <div>{"Your id is " + props.match.params.userid}</div>
//       <div>{props.message}</div>
//     </div>
//   );
// };

// const ScreenC: FC<ScreenCProps> = (props) => {
//   const onClickGoback = () => {
//     props.history.goBack();
//   };

//   return (
//     <div>
//       <div>{"Your id is " + props.match.params.userid}</div>
//       <div>{props.message}</div>
//       <div>
//         <button onClick={onClickGoback}>Go back</button>{" "}
//       </div>
//     </div>
//   );
// };

export default ScreenC;
