import '../style.css'
import Header from './Header'
import SignUpSignIn from './SignUpSignIn'
const SignUp = () => {
  return (
    <div>
        <Header />
        <div className='wrapper'>
        <SignUpSignIn />
        </div>
       
    </div>
  )
}

export default SignUp