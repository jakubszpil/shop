import React, { forwardRef } from "react";

const Container = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={className ? `container ${className}` : "container"} ref={ref} {...props}>
      {children}
    </div>
  );
});

export default Container;
