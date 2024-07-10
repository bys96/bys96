import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
  const [message, setMessage] = useState("");
  // const [age, setAge] = useState(20);
  // const [isDark, setisDart] = useState(false);

  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name]);

  if (!name) {
    return <div>no name given</div>;
  }

  return <div>{message}</div>;
};

export default Greeting;
