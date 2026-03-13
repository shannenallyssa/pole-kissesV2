import Head from 'next/head'
import TaylorAbout from '../Components/TaylorAbout';
import HeadTag from '../Components/HeadTag';

const taylorJayne = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='ShannenVelasco'/>
            <div>
                <TaylorAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default taylorJayne
