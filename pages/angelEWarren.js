import Head from 'next/head'
import AngelAbout from '../Components/AngelAbout';
import HeadTag from '../Components/HeadTag';

const angelEWarren = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='AngelEWarren'/>
            <div>
                <AngelAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default angelEWarren
