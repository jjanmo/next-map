interface Props {
  data: number;
}

export default function AComp({ data }: Props) {
  return (
    <div>
      <span style={{ textTransform: 'uppercase', fontSize: '2rem' }}>
        this is A component
      </span>
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
  };
}
