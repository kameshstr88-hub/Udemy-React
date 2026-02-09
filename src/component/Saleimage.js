import Sale from "../assets/images/Saleimage.jpg"

function SaleImage() {
  return (
    <div className="sale-image">
      <img src={Sale} alt="Sale" />
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale – 24 hours to save</h2>
        <p>
          Get the top courses for just ₹499. Just one day to save,
          but a lifetime to learn.
        </p>
      </div>
    </div>
  )
}

export default SaleImage
