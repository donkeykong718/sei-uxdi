export default function Options({ option }) {

  const { name, text, img } = option;
  console.log(Object.keys(img)[0]);

  return (
    <div className="option">
      <img src={Object.values(img)[0]} alt={Object.keys(img)[0]} className="option-image" />
      <p className="option-name">{name}</p>
      <p className="option-text">{text}</p>
    </div>
  )

}