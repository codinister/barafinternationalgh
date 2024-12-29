'use client'



import useGetquery from "@/data/server/useGetquery"
import Contactbox from "./Contactbox"

const Contactdetails = () => {

  const set = useGetquery('settings', '/settings') || []



  return (
    <div className="contactdetails">
    <div>
      <Contactbox desc="Danyame-Kumasi" url="#" fa="map-marker" />
      <Contactbox desc={set[0]?.phone1} url="#" fa="phone" />
      <Contactbox desc={set[0]?.phone2} url="#" fa="phone" />
      <Contactbox
        desc={set[0]?.email}
        url="#"
        fa="envelope"
      />
    </div>

    <div>
      <Contactbox
        desc="Facebook"
        url={set[0]?.facebook}
        fa="facebook"
      />
      <Contactbox
        desc="Instagram"
        url={set[0]?.instagram}
        fa="instagram"
      />
      <Contactbox
        desc="Youtube"
        url={set[0]?.youtube}
        fa="youtube"
      />
    </div>
  </div>
  )
}

export default Contactdetails