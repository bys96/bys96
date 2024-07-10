import React, { useState, useEffect } from "react";

function UseSampleApp1() {
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(1);

  // useEffect(() => {
  //   setResult1(a + b);
  // }, [a, b]);

  // useEffect(() => {
  //   setResult2(c - d);
  // }, [c, d]);

  // useEffect(() => {
  //   setResult3(e * f);
  // }, [e, f]);

  // useEffect(() => {
  //   setResult4(g / h);
  // }, [g, h]);

  const handlePlus = () => {
    setResult1(a + b);
  };

  const handleMinus = () => {
    setResult2(c - d);
  };

  const handleMultiple = () => {
    setResult3(e * f);
  };

  const handleDivide = () => {
    setResult4(g / h);
  };

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <button onClick={handlePlus}>Plus</button>
      <span>{result1}</span>
      <br />

      <input
        type="number"
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
      />
      <input
        type="number"
        value={d}
        onChange={(e) => setD(Number(e.target.value))}
      />
      <button onClick={handleMinus}>Minus</button>
      <span>{result2}</span>
      <br />

      <input
        type="number"
        value={e}
        onChange={(e) => setE(Number(e.target.value))}
      />
      <input
        type="number"
        value={f}
        onChange={(e) => setF(Number(e.target.value))}
      />
      <button onClick={handleMultiple}>Multiple</button>
      <span>{result3}</span>
      <br />

      <input
        type="number"
        value={g}
        onChange={(e) => setG(Number(e.target.value))}
      />
      <input
        type="number"
        value={h}
        onChange={(e) => setH(Number(e.target.value))}
      />
      <button onClick={handleDivide}>Divide</button>
      <span>{result4}</span>
      <br />
    </div>
  );
}

export default UseSampleApp1;
