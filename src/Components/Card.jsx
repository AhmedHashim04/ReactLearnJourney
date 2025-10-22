export default function Card(parms) {
    return(
    <div 
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '300px',
        display:'inline-block'

    }}
    
    className="cardStyle">

        <h1>Title :{parms.title} </h1>
        <p>Description:{parms.desc} </p>
        <div>

            <img src={parms.img} alt=""  />
        </div>
    </div>


    )

    
}