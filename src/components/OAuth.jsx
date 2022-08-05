import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
// import facebookIcon from '../assets/svg/facebookIcon.svg'



function OAuth() {

    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            //Check For User
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //If user doesn't exist,create user
            if(!docSnap.exists()){
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            navigate('/')
        } catch (error) {
            toast.error('Could not Authorize with Google')
        }
    }

    // const onFacebookClick = async () => {
    //     try {
    //         const auth = getAuth()
    //         const provider = new FacebookAuthProvider()
    //         const result = await signInWithPopup(auth, provider)
    //         const user = result.user

    //         //Check For User
    //         const docRef = doc(db, 'users', user.uid)
    //         const docSnap = await getDoc(docRef)

    //         //If user doesn't exist,create user
    //         if(!docSnap.exists()){
    //             await setDoc(doc(db, 'users', user.uid), {
    //                 name: user.displayName,
    //                 email: user.email,
    //                 timestamp: serverTimestamp()
    //             })
    //         }

    //         navigate('/')
    //     } catch (error) {
    //         toast.error('Could not Authorize with Facebook')
    //     }

    // }

    return (
        <div className='socialLogin'>
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt='google' />
            </button>
            {/* <button className="socialIconDiv" onClick={onFacebookClick}>
                <img className='socialIconImg' src={facebookIcon} alt='facebook' />
            </button> */}
        </div>
    )
}

export default OAuth