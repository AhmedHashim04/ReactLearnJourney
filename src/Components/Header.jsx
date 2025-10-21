 
 import image from '../assets/image.png';
 export default function Header() {
    return (
    <>
        <ul>
          <li style={{ color: 'blue', fontWeight: 'bold', fontSize: '100px' }}>Home</li>
          <li >About</li>
          <li >Contact</li>
        </ul>
        <img src={image} alt="Logo" width="200" style={{margin: '0 10px 0 0'}} />
        <img src={image} alt="Logo" width="200" />
      </>
    );
  }
