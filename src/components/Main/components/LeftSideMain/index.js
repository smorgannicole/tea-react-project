import teaFarm from '../images/hd-tea.png'
import leaves from '../images/leaves.png'
import yellowBerries from '../images/yellow-berries.png'
import redBerry from '../images/red-berry.png'

const LeftSideMain = () => {
    return (
        <div className="col-8 left-wrapper">
            <h2 className='tea-house'>TEA HOUSE</h2>
            <img className='tea-farm-img' src={teaFarm} alt="" />
            <p className='motto'>Steeped in<br/> tradition, sipped <br/>with delight:<br/> discover your<br/> perfect blend</p>
            <img className='leaves-img' src={leaves} alt="" />
            <p className='ethical-blip'>Sip responsibly <br/> sourced tea,<br/> supporting fair wages,<br/> environmental stewardship,<br/> and community development.<br/> Taste goodness, do good.</p>
            <img className='yel-bers-img' src={yellowBerries} alt="" />
            <img className='red-ber-img' src={redBerry} alt="" />
        </div>
    );
}

export default LeftSideMain;