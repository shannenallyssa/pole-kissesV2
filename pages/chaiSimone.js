import Head from 'next/head'
import ChaiAbout from '../Components/ChaiAbout';
import HeadTag from '../Components/HeadTag';

const chaiSimone = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='ShannenVelasco'/>
            <div>
                <ChaiAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default chaiSimone
