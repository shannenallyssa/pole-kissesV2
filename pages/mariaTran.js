import Head from 'next/head'
import MariaAbout from '../Components/MariaAbout';
import HeadTag from '../Components/HeadTag';

const mariaTran = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='mariaTran'/>
            <div>
                <MariaAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default mariaTran
