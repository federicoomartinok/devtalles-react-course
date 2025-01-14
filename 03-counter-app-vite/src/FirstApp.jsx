
const getResult = (a,b) => {
    return a+b;
}


//Single element component
export const FirstApp = () => {
    
    return (
        //esto es un fragment
        <>
        <h1>{getResult(1,3)}</h1>
            {/* <code> {JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo</p>
        </>
    );
}
