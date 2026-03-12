import Head from 'next/head'
import PatriciaAbout from '../Components/PatriciaAbout';
import HeadTag from '../Components/HeadTag';

const patriciaReyes = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='PatriciaReyes'/>
            <div>
                <PatriciaAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default patriciaReyes
