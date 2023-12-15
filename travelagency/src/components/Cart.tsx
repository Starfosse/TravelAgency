import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BaggageClaim, Plane } from "lucide-react"
import { Button } from "./ui/button"

const Cart = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <BaggageClaim />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Votre prochaine voyage</SheetTitle>
            <SheetDescription>
              Détail article
            </SheetDescription>
          </SheetHeader>
          <Button className="mt-4">
            Procéder au paiement
            <Plane className="h-5 ml-1" />
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Cart
