interface ContentStyleProps {
  title: string;
  image: string;
  imageAlt: string;
  placeName: string;
  map: string;
  reason: string;
}

function ContentStyle(props: ContentStyleProps): JSX.Element {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.title}</h1>
      <img
        src={props.image}
        alt={props.imageAlt}
        height={"300px"}
        width={"500px"}
      />
      <h2>
        {props.placeName} (<a href={props.map}>map</a>)
      </h2>
      <h3>{props.reason}</h3>
    </div>
  );
}

export default ContentStyle;
