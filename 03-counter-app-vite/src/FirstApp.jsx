import PropTypes from "prop-types";
//Single element component

//las default props ahora se pasan como parametros por defecto asi
export const FirstApp = ({
    title = 'No hay titulo',
    subTitle = 'No hay subtitulo',
    name = 'Fede'}) => {
    
    
    return (
        //esto es un fragment
        <>
        <h1>{title}</h1>
            {/* <code> {JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
}

//Prop Types para validar y documentar los props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

//No funcionan mas las default props
// FirstApp.defaultProps = {

//     title: 'No hay titulo',
//     subTitle: 'No hay subtitulo',
//     name: 'Fede'
// }
