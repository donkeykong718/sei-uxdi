import Options from './Options'

export default function Card(props) {

  const { title, options } = props.details;

  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="options-container">
        {options.map((option, index) => (<Options option={option} key={index} />))}
      </div>
    </div>
  );
}