import React, { useState } from "react";

import style from "./Faq.module.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Faq = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
      <div>
        <h4>{title}</h4>
        <Button onClick={() => {
          setToggle(!toggle);  
        }}>{toggle ? "-" : "+"}</Button>
      </div>
      <dir>{toggle && <p>{desc}</p>}</dir>
    </article>
  );
};

export default Faq;
