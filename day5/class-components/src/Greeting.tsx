import React from "react"; // 여러개쓸때는 { React , }도 가능

interface GreetingProps {
  name?: string; // ? 은 nullabe (null도 허용)
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: `Hello from, ${props.name}`,
    };
  }

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if (props.name && props.name !== state.message) {
      const newState = { ...state };
      newState.message = Greeting.getNewMessage(props.name);
      return newState;
    }
    return state;
  }
  static getNewMessage(name: string): string {
    return `Hello from, ${name}`;
  }
  render() {
    console.log("rendering Greeting");
    if (!this.props.name) {
      return <div>no name given</div>;
    }

    return <div>{this.state.message}</div>;
  }
}
