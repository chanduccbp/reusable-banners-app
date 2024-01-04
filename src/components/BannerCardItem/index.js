import './index.css'

const BannerCardItem = props => {
  const {bannerCardsDetails} = props
  const {headerText, description, className} = bannerCardsDetails
  return (
    <li className={className}>
      <div>
        <h1 className="head"> {headerText} </h1>
        <p className="para"> {description} </p>
        <button type="button" className="butt">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
