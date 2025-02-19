interface SingleBlogPageProps {
  params: {
    id: string;
  };
}

const SingleBlogPage = ({ params }: SingleBlogPageProps) => {
  const { id } = params;
  return (
    <div>
      <h1>Single Blog: {id}</h1>
    </div>
  );
};

export default SingleBlogPage;
