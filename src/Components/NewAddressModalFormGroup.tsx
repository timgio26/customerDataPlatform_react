import { useState } from "react";
import { CornerModal } from "../Components/CornerModal";
import { IoIosAdd } from "react-icons/io";
export function NewAddressModalFormGroup(){
    const [showModal, setShowModal] = useState<boolean>(false);
    return(
              <CornerModal
        ModalTrigerIcon={<IoIosAdd size={45} color="white" />}
        submitFunction={() => {}}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <form action="">
          <div className="mb-2">
            <span className="font-bold">New Address</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="Alamat" className="text-xs">
              Alamat
            </label>
            <textarea
              name="Alamat"
              id="Alamat"
              className="border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Kategori" className="text-xs">
              Kategori
            </label>
            <select name="Kategori" id="Kategori">
              <option value="Rumah">Rumah</option>
              <option value="Toko">Toko</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Pabrik">Pabrik</option>
              <option value="Lain-lain">Lain-lain</option>
            </select>
          </div>
        </form>
      </CornerModal>
    )
}