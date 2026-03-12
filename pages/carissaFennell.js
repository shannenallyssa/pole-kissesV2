import Head from 'next/head'
import CarissaAbout from '../Components/CarissaAbout';
import HeadTag from '../Components/HeadTag';

const carissaFennell = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='CarissaFennell'/>
            <div>
                <CarissaAbout currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default carissaFennell
