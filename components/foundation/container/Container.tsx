import "./container.scss";

interface ContainerProps {
  children?: any;
}

export default function Container(props: ContainerProps) {
  return <div className="container--main" {...props} />;
}
