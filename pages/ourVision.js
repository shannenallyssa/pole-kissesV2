import Head from 'next/head'
import OurVision from '../Components/OurVision';
import HeadTag from '../Components/HeadTag';

const ourVision = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='OurVision'/>
            <div>
                <OurVision currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default ourVision
