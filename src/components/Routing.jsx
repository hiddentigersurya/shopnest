import React from 'react'

function Routing() {
  

  return (
    <>
    <div>
      <h1>Routing Example</h1>
      <ul>
        <li><Link to='/home'>Home Page</Link></li>
        <li><Link to='/about'>About  Page</Link></li>
        <li><Link to='/list'>List Page</Link></li>
      </ul>
    </div>
     <Routes>
      <Route path='/home' element={<Home />}>Home</Route>
      <Route path='/about/*' element={<About />}>About</Route>
      <Route path='/list' element={<List />}>List</Route>
      {/**the below route is a dynamic route */}
      <Route path='/users/:id' element={<Users />}></Route> 
      {/** Redirecting Routing */}
      <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
      <Route path='*' element={<NotFound />}></Route>
     </Routes>
    </>
  )
}
/** Routing Types
 * 1. Normal Routing
 * 2. Link Tag - Reload doesn't happen 
 * 3. Dynamic Routing / Template Routing
 * 4. Nested Routing
 * 5. Custom Routing
 * Redirect Routing
 */
function Users(){
  let params = useParams();
  let [user, setUser] = useState(null);
  useEffect(()=>{
   (async function () {
    const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
    const userData = await resp.json();
    console.log(userData);
    setUser(userData);
   }) ()
  },[]);
  return (
    <>
    {user==null ? <h3>Loading ....</h3>: <h3>Name: {user.name.firstname+" "+user.name.lastname}</h3>}
    </>
  )}
function Home(){
  return(
    <>
    <h2>Home Section</h2>
    </>
  )
}
function About(){
  return(
    <>
    <h2>About Section</h2>
    <Routes>
      <Route path='company' element={<Company />}></Route>
      <Route path='founder' element={<Founder />}></Route>
    </Routes>
    </>
  )
}
function Company(){
  return(
    <h2>Congrats , u are part of Nxtwave</h2>
  )
}
function Founder(){
  return(
    <h2> u can meet rahul attuluri</h2>
  )
}
function List(){
  return(
    <>
    <h2>List Section</h2>
    </>
  )
}
function NotFound(){
  return(
    <>
    <h2>Page Not Found</h2>
    </>
  )
}

export default Routing