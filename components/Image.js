import { forwardRef } from "react";
import ProgressiveImage from "react-progressive-image";

const Image = forwardRef(({ filename, className, alt, ...props }, ref) => {
  return (
    <ProgressiveImage placeholder={`/images/jpg/${filename}.jpg`} src={`/images/webp/${filename}.webp`}>
      {(src) => <img src={src} className={className} {...props} alt={alt} ref={ref} />}
    </ProgressiveImage>
  );
});

export default Image;
