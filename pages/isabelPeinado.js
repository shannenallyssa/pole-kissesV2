import Head from 'next/head'
import IsabelAbout from '../Components/IsabelAbout';
import HeadTag from '../Components/HeadTag';

const isabelPeinado = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='IsabelPeinado'/>
            <div>
                <IsabelAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default isabelPeinado
