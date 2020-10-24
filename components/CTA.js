import { forwardRef } from "react";
import Link from "next/link";

const CTA = forwardRef(({ className, type, children, ...props }, ref) => {
  const Component = type === "link" ? Link : "button";
  const bindClass = className ? `cta ${className}` : "cta";
  return (
    <Component className={bindClass} type={type !== "link" ? type : null} {...props}>
      {children}
    </Component>
  );
});

export default CTA;
