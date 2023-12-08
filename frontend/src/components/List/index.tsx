import Button from "../Button";
import Heading from "../Heading";
import { styList } from "./style";
import React from "react";
import { ListProps } from "./types";

const List = ({ data, handleOnDelete }: ListProps ) => {
  return (
    <ul>
      {!data.length ? (
        <Heading> Please Insert your todo list</Heading>
      ) : (
        data.map((val, idRow) => {
          return (
            <div key={`${val}+${idRow}`} className={styList}>
              <li>{val}</li>
              <Button onClick={() => handleOnDelete(val)} color="danger">
                Delete
              </Button>
            </div>
          );
        })
      )}
    </ul>
  );
};

export default List;
