import Head from 'next/head'
import KristinaAbout from '../Components/KristinaAbout';
import HeadTag from '../Components/HeadTag';

const kristinaMcHale = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='KristinaMcHale'/>
            <div>
                <KristinaAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default kristinaMcHale
