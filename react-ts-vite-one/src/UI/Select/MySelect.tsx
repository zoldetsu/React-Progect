

export default function MySelect({options, defaultValue, onChange, value}) {
    return (
        <select value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map( option => 
            <option value={option.value} key={option.value}>
                {option.name}
            </option>
            )}
        </select>
        
    )
}