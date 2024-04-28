interface InputField {
  text: string;
  handleInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InputField({
  text,
  handleInput,
  handleSubmit,
}: InputField) {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
}
