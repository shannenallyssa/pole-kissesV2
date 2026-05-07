import Head from 'next/head'
import JadaAbout from '../Components/JadaAbout';
import HeadTag from '../Components/HeadTag';

const jadaJones = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='jadaJones'/>
            <div>
                <JadaAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default jadaJones
