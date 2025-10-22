 
 import image from '../assets/image.png';
 export default function Header(props) {
    return (
    <>
        <ul>
          <li style={{ color: 'blue', fontWeight: 'bold', fontSize: '100px' }}>Home</li>
          <li >About</li>
          <li >{props.game}</li>
        </ul>
        <p>{props.desc}</p>
        <img src={image} alt="Logo" width="200" style={{margin: '0 10px 0 0'}} />
        <img src={image} alt="Logo" width="200" />
      </>
    );
  }
