interface Title {
  title: string;
}

export const PageTitle = ({ title }: Title) => {
  return <h2>{title}</h2>;
};
