import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextComponent = ({ children }) => {
  const components = {
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      // Ex. 2: rendering a custom `link` annotation
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a href={value?.href} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    },
    // listItem: {
    //   // Ex. 1: customizing common list types
    //   bullet: ({ children }) => (
    //     <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    //   ),

    //   // Ex. 2: rendering custom list items
    //   checkmarks: ({ children }) => <li>✅ {children}</li>,
    // },
    // list: {
    //   // Ex. 1: customizing common list types
    //   bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    //   number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    //   // Ex. 2: rendering custom lists
    //   checkmarks: ({ children }) => (
    //     <ol className="m-auto text-lg">{children}</ol>
    //   ),
    // },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="h1-heading">{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className="blockquote">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  };

  return (
    <div className="portable-text-container">
      <PortableText value={children} components={components} />
    </div>
  );
};

export default PortableTextComponent;
