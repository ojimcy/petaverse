import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'
import icon4 from '../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Set Up Your Wallet",
            description: "Set up a wallet that is functional for NFT purchasing. Once your wallet is set up, connect it to Petaverse by clicking the wallet icon in the top right corner.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Create Your Collection",
            description: "Setting up your NFT collection and creating NFTs on NFTs is easy! Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Add Your NFTs",
            description: "Upload your art work, add the neccessary fields including title, description. Customize your NFTs with properties, stats, etc.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "List Them For Sale",
            description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22">
                            <h2 className="tf-title pb-17">
                                Create And Sell Your NFTs</h2>                         
                        </div>
                    </div>
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                             
            </div>
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
