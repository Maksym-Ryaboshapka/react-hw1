const Colors = () => {
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <ul>
      {colors.map((color) => {
        return <li>{color}</li>;
      })}
    </ul>
  );
};

export default Colors;
