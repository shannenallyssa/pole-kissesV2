import Head from 'next/head'
import MichiAbout from '../Components/MichiAbout';
import HeadTag from '../Components/HeadTag';

const michiKollette = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='michiKollette'/>
            <div>
                <MichiAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default michiKollette
