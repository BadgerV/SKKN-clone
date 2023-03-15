import SecondHeader from '../SecondHeader/SecondHeader';
import SplashMini from '../SplashMini/SplashMini';
import './generalPageComponent.css';

const GeneralPageComponent = () => {
  return (
    <div className='GeneralPageComponent'>
        <div className="GeneralPageComponentContainer">
            <SecondHeader />
            <SplashMini />
        </div>
    </div>
  )
}

export default GeneralPageComponent