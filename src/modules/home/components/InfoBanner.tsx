import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const InfoBanner = () => {
  return (
    <div className="h-20 bg-white absolute left-1/2 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 pt-11">
    <div className="flex items-center gap-5 w-60">
      <RiCustomerService2Line className="text-designColor w-8 h-8" />
      <div>
        <p>Ponedjeljak - Petak</p>
        <p className="font-semibold">7:30 - 19:30</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <FiPhoneCall className="text-designColor w-8 h-8" />
      <div>
        <p>+ 385 32 442 992</p>
        <p className="font-semibold">Pozovite nas</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <TbTruckDelivery className="text-designColor w-8 h-8" />
      <div>
        <p>Dostava za sve</p>
        <p className="font-semibold"> iznose 4,00€</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <FiMail className="text-designColor w-8 h-8" />
      <div>
        <p>Pošaljite upit</p>
        <p className="font-semibold">Email</p>
      </div>
    </div>
  </div>
  )
}

export default InfoBanner