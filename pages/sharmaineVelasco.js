import Head from 'next/head'
import SharmaineAbout from '../Components/SharmaineAbout';
import HeadTag from '../Components/HeadTag';

const sharmaineVelasco = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='SharmaineVelasco'/>
            <div>
                <SharmaineAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default sharmaineVelasco
