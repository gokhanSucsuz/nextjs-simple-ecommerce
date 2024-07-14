import GenerateRandomProducts from "@/app/actions/generateRandomProducts";
import ProductCard from "@/app/components/productCard";
import ProductSection from "@/app/components/productSection";
import { getLocale } from "@/app/locales/getLocales";

export default function Home({ params }) {
  const locales = getLocale(params.countryCode)

  const latestProduct = GenerateRandomProducts.getLatestProducts()
  const weeklyProduct = GenerateRandomProducts.getWeeklyProducts()
  const discount = GenerateRandomProducts.getDiscountProducts()
  console.log(latestProduct)

  return (
    <div className="flex flex-col gap-4">
      <ProductSection href={`/${params.countryCode}/sections/latest-products`} title="Latest Products" />
      <div className="grid grid-cols-3 gap-4">
        {
          latestProduct.map((item) => {
            return (
              <ProductCard key={item.productId} locale={params.countryCode} product={item} />
            )
          })
        }
      </div>
      <ProductSection href={`/${params.countryCode}/sections/weekly-products`} title="Weekly Products" className="mt-40" />
      <div className="grid grid-cols-3 gap-4">
        {
          weeklyProduct.map((item) => {
            return (
              <ProductCard key={item.productId} locale={params.countryCode} product={item} />
            )
          })
        }
      </div>
      <ProductSection href={`/${params.countryCode}/sections/discount-products`} title="Discount Products" className="mt-40" />
      <div className="grid grid-cols-3 gap-4">
        {
          discount.map((item) => {
            return (
              <ProductCard key={item.productId} locale={params.countryCode} product={item} />
            )
          })
        }
      </div>
    </div>
  );
}
