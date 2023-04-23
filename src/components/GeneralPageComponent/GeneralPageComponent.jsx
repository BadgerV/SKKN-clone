import CategoryComponent from '../CategoryComponent/CategoryComponent';
import SecondHeader from '../SecondHeader/SecondHeader';
import SplashMini from '../SplashMini/SplashMini';
import './generalPageComponent.css';

const GeneralPageComponent = () => {
  return (
    <>
      <div className='GeneralPageComponent'>
        <div className="GeneralPageComponentContainer">
            <SecondHeader />
            <SplashMini />
        </div>
    </div>
    <div className="GeneralMini">

          <div className="GeneralMiniCont">
            <CategoryComponent />
          </div>

    </div>
    </>
  )
}

export default GeneralPageComponent