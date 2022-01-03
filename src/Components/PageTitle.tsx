type Title = {
  title: string;
};

export const PageTitle = (props: Title) => {
  return <h2>{props.title}</h2>;
};
