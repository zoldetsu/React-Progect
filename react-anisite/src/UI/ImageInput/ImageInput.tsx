import classes from './ImageInput.module.css'

interface MyInput {
    typ:string,
    
    setInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept: string
   
}

export default function MyInput ({typ, setInput,accept}: MyInput) {
    return (
        <div>
            <input className={classes.MyInput} type={typ} accept={accept} onChange={setInput}/>
        </div>
    )
}