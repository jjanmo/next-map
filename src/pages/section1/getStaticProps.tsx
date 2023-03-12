interface Props {
  data: number;
}
export default function Example({ data }: Props) {
  return (
    <div>
      <h1>getStaticProps</h1>
      <div>{`data : ${data}`}</div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), 2000);
  });

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}
