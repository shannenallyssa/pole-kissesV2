import Head from 'next/head'
import ShannenAbout from '../Components/ShannenAbout';
import HeadTag from '../Components/HeadTag';

const shannenVelasco = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='ShannenVelasco'/>
            <div>
                <ShannenAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default shannenVelasco
