

function Fixx() {
    console.log("declaration")

}

const func = function () { console.log("expression")}


const func2 = (number,age) => age - number;

console.log(func2(15,16));



const func3 = (number,age) => {

    const age2 = age - number;
    const isPerson = age2 > number ? true : false;
    return isPerson;
};


console.log(func3(15,20));


export default function Button( {children, onClick, isActive} ) {
    // let classes = "button"

    // if (isActive) classes += ' active' 
    
    return <button className={isActive ? "button active" : 'button'} onClick={onClick}>{children}</button>
}


export default function TabSelection({ active, onChange }) {
    return (
        <section style={{ marginBottom: "1rem" }}>
            <Button isActive={active === "main"} onClick={() => onChange('main')}>
                Главная
            </Button>
            <Button isActive={active === "feedback"} onClick={() => onChange('feedback')}>
                Обратная связь
            </Button>
        </section>
        
    )}

    <TabSelection active={tab} onChange={(corrent) => check(corrent)}/>
    onClick={() => ('main') => check('main')}