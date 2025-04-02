import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Product } from "@/lib/products";

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <section>
      <div className="relative border-t-2 w-full px-5 lg:px-20 mb-20">
        <h1 className="text-black dark:text-gray-200  text-4xl font-bold mt-20 mb-8">
          Product Information
        </h1>
        <div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Brand Name</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Stocks Available</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Warranty</TableCell>
                <TableCell>{product.warrantyInformation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">
                  Shipping Information
                </TableCell>
                <TableCell>{product.shippingInformation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Return Policy</TableCell>
                <TableCell>{product.returnPolicy}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
