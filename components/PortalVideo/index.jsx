import { forwardRef } from "react";

export const PortalVideo = forwardRef(({ imageMap, ...rest }, ref) => {
  return (
    <video ref={ref} {...rest} autoPlay loop muted>
      <source src={imageMap} type="video/mp4" />
    </video>
  );
});