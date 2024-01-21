
const ChildFunctionComponent = (props) => {
    return (
        <div>
        <h1>Using prop : My role is{props.role} {props.children}</h1>
        
        </div>
    );

}
export default ChildFunctionComponent