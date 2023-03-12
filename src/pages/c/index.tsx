interface Props {
  data: number;
}

export default function CComp({ data }: Props) {
  return (
    <div>
      this is C component
      <hr />
      <h1>{`SetTimeout Data : ${data}`}</h1>
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
