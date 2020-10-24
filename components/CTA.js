import { forwardRef } from "react";
import Link from "next/link";

const CTA = forwardRef(({ className, type, children, ...props }, ref) => {
  const Component = type === "link" ? Link : "button";
  const bindClass = className ? `cta ${className}` : "cta";
  return (
    <Component className={bindClass} type={type !== "link" ? type : null} {...props}>
      <a className={bindClass}>
        <p>{children}</p>
        <span className="fas fa-arrow-right cta__icon" aria-hidden="true"></span>
        <div className="cta__bar"></div>
      </a>
    </Component>
  );
});

export default CTA;
