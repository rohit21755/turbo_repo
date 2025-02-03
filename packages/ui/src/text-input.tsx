interface Props {
  placeholder: string;
  onChange: (e:any) => void;
}
export function TextInput({ placeholder, onChange,  }: Props) {
  return <input  onChange={onChange} type="text"  style={{
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "10px",
  }} placeholder={placeholder} />;
}