import { useRef, useState, useEffect } from "react";

const Section = ({
  id,
  sectionRef,
  style,
  heading,
  subHeading,
  contentWrapper,
  headingsHeight,
  children,
}) => {
  const [headingHeight, setHeadingHeight] = useState(0);
  const [subHeadingHeight, setSubHeadingHeight] = useState(0);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (headingRef.current && subHeadingRef.current) {
      setHeadingHeight(headingRef.current.clientHeight);
      setSubHeadingHeight(subHeadingRef.current.clientHeight + 4);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (headingsHeight) headingsHeight(headingHeight + subHeadingHeight);
    setLoading(false);
  }, [headingHeight, subHeadingHeight]);

  return (
    <section id={id} ref={sectionRef} style={style}>
      <div className="wrapper">
        <h1
          className="section-title text-3xl md:text-5xl"
          ref={headingRef}
          tabIndex={0}
        >
          {heading}
        </h1>
        <h2
          className="font-medium mt-1 text-2xl md:text-center"
          ref={subHeadingRef}
          tabIndex={0}
        >
          {subHeading}
        </h2>
        {!loading && contentWrapper === false ? (
          children
        ) : (
          <div
            className="content-flex-wrapper"
            style={{
              minHeight: `calc(100% - ${headingHeight + subHeadingHeight}px)`,
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
export default Section;
