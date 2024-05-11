import Card from "./Card";

const Data = () => {
  let array = [
    {
      name: "kirtikumar",
    },
    {
      name: "sachin",
    },
    {
      name: "gautam",
    },
  ];
  return (
    <div>
      {array.map((item) => (
        <Card name={item.name} />
      ))}
    </div>
  );
};

export default Data;
