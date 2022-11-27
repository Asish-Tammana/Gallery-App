import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, changeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbDetails

  const inActiveClass = isActive ? '' : 'active-class'

  const clickImg = () => {
    changeImg(id)
  }
  return (
    <li
      type="none"
      className={`thumbnail-item ${inActiveClass}`}
      onClick={clickImg}
    >
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
