export const GreetingTitle = ()=> {
    return (
    <div style={{margin: "5vh",color:"white"}}>
        <h2 >Especialista en Grabados</h2>
    </div>
      
    )
} 


export const Greeting = (props) => {
    return (
    <div style={{margin: "5vh",color:"white", alignItems:"centre"}}>
        <p>{props.name}</p>
    </div>
      
    )
}

export default Greeting
