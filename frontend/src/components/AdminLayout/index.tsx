import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  PropsAdminLayout,
  TypeCallbackWithParams,
  TypeFuncWithObject,
} from "./types";

const callbackWithParams: TypeCallbackWithParams = (
  firstName: string,
  lastName: string
) => {
  return `${firstName} ${lastName}`;
};

const funcWithObj: TypeFuncWithObject = (firstName, secondName) => {
  return [
    {
      name: firstName,
    },
    {
      name: secondName,
    },
  ];
};

console.log({ callbackWithParams, funcWithObj });

const AdminLayout = ({ children }: PropsAdminLayout) => {
  const [show, setShow] = useState<boolean>(true);

  const handleClose: () => void = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {children}
    </>
  );
};

export default AdminLayout;
