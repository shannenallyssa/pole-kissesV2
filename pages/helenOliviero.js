import Head from 'next/head'
import HelenAbout from '../Components/HelenAbout';
import HeadTag from '../Components/HeadTag';

const helenOliviero = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='HelenOliviero'/>
            <div>
                <HelenAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default helenOliviero
