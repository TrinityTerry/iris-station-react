import React, { useState } from "react";
import { Navbar, Table } from "../../../components";

const NavbarView = () => {
  const [showProps, setShowProps] = useState(false);

  return (
    <>
      <button onClick={() => setShowProps(!showProps)}>
        {showProps ? "See Component" : "See Props"}
      </button>
      {showProps ? (
        <Table
          tableData={[
            ["Name", "Default", "Type", "Description"],
            [
              "navArray",
              <pre>
                {`[
            {
              title: "Customers",
              route: "/customers",
            },
            {
              title: "Payments of this",
              dropdown: true,
              options: [
                {
                  title: "Here",
                  route: "/here",
                },
                {
                  title: "There is another example",
                },
              ],
            },
          ]`}
              </pre>,
              "Array of Objects",
              "This is the data that will be used to create the links on the navbar",
            ],
            [
              "color",
              "light",
              "string",
              "set the color of the navbar background. Options are `light` and `dark`. ",
            ],
            ["light", "true", "boolean", "Set's the color of the Navbar Text"],
            [
              "extraText",
              "",
              "string",
              "This till set the text that will show on the right side of the navbar",
            ],
          ]}
        />
      ) : (
        <>
          <h1>Navbar Element</h1>
          <Navbar
            navArray={[
              {
                title: "Customers",
                route: "#",
              },
              {
                title: "Payments of this",
                dropdown: true,
                options: [
                  {
                    title: "Here",
                    route: " ",
                  },
                  {
                    title: "test",
                  },
                ],
              },
            ]}
          />
          <h1>Code Block</h1>
          <pre>
            {`
            <Navbar
              navArray={[
                {
                  title: "Customers",
                  route: "#",
                },
                {
                  title: "Payments of this",
                  dropdown: true,
                  options: [
                    {
                      title: "Here",
                      route: "#",
                    },
                    {
                      title: "#",
                    },
                  ],
                },
              ]}
            />
            `}
          </pre>
        </>
      )}
    </>
  );
};

export default NavbarView;
