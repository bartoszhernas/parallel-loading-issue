import { ReactNode } from "react";

export default function Layout(props: {
  children: ReactNode;
  drawer: ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.drawer}
    </>
  );
}
