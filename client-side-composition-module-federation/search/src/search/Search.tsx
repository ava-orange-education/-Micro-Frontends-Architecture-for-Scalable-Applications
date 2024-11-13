import './search.css';

interface SearchProps {
  label: string;
}

export default function Search(props: SearchProps) {
  return (
    <div className="search">
      <label>{props.label}</label>
      <input type="text" placeholder="Search ..." />
    </div>
  );
}
