import Image from "next/image"
import { TextDecoderStream } from "node:stream/web"
import { ChangeEvent, useState } from "react"

const AddImage = () => {
  const [newImage, setNewImage] = useState<string | null>(
    null
  )
  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedImage = event.target.files?.[0]

    if (selectedImage) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageSrc = e.target?.result as string // STRING | lire l'image dans la fonction
        setNewImage(imageSrc)
      }
      reader.readAsDataURL(selectedImage) // Convertir l'image en base64, FILE
      //   setNewImage(selectedImage)
      //   console.log(typeof selectedImage)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        // Autres attributs et gestionnaires d'événements nécessaires
      />
      {/* {newImage ? <PrintImage testa={newImage} /> : null} */}
      {newImage ? (
        <Image src={newImage} fill alt="test" />
      ) : null}
    </div>
  )
}

export default AddImage
