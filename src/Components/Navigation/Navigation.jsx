import './Navigation.css'
function Navigation() {
  const auth = localStorage.getItem('user');
  const result = JSON.parse(auth);

  return (
    <div className='navigation-section'>
      <div className='navigation-section-logo'><h3>LOGO</h3></div>
      <div className='navigation-section-links'>
        <div className="links"><a href="/">Home</a></div>
        {
          !result?<div className="links"><a href="/login">Login</a></div>: result.username
        }
        {
          !result?<div className="links"><a href="/signup">Signup</a></div>: <div>Logout</div>
        }

      </div>
    </div>
  )
}

export default Navigation