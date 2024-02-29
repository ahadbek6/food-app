import ComingSoon from "../assets/images/coming_soon.png"

const NotificationPage = () => {
  return (
      <div>
           <div className="flex flex-col items-center m-4">
      <h1 className="text-xs sm:text-lg lg:text-2xl font-medium md:font-semibold text-center text-lime-100 bg-primary p-4 m-4 rounded-md">
        Unlock the Secrets of Flavorful Bliss with Hungry Hearts Culinary
        Experience
      </h1>
      <img
        className="scale-125 h-72 sm:h-96 p-4 m-6"
        src={ComingSoon}
        alt="Coming Soon"
      />
    </div>
    </div>
  )
}

export default NotificationPage