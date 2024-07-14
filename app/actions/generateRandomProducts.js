import { faker } from "@faker-js/faker";
class GenerateRandomProducts {
	memData = [];
	basketData = [];
	constructor() {
		if (this.memData.length) {
			return;
		} else {
			for (let i = 0; i < 50; i++) {
				const data = {
					discountPercent: faker.number.int({ min: 25, max: 50 }),
					productId: i.toString(),
					department: faker.commerce.department(),
					category: {
						categoryName: faker.commerce.department(),
						categoryId: i.toString()
					},
					productCode: faker.commerce.isbn(),
					price: faker.commerce.price(),
					productName: faker.commerce.productName(),
					productShortName: faker.commerce.product(),
					materials: [
						faker.commerce.productMaterial(),
						faker.commerce.productMaterial(),
						faker.commerce.productMaterial(),
						faker.commerce.productMaterial()
					],
					weeklyProduct: faker.number.int({ min: 0, max: 1 }),
					description: faker.commerce.productDescription(),
					colors: [
						faker.color.rgb(),
						faker.color.rgb(),
						faker.color.rgb(),
						faker.color.rgb(),
						faker.color.rgb(),
						faker.color.rgb()
					],
					company: {
						name: faker.company.name,
						companyId: faker.string.uuid()
					},
					image: faker.image.url()
				};
				this.memData.push(data);
			}
		}
	}
	getCategories() {
		const categories = this.memData.map((item) => {
			return {
				...item.category
			};
		});
		const uniqueCategories = new Set(
			categories.map((category) => category.categoryName)
		);
		const mappedCategories = [...uniqueCategories].map((item) => {
			return {
				categoryId: categories.find((c) => c.categoryName === item)?.categoryId,
				categoryName: item
			};
		});
		return mappedCategories;
	}

	getProductsByCategoryId(slice = 3) {
		return this.memData.filter(
			(product) => product.category.categoryId === categoryId
		);
	}
	getLatestProducts(slice = 3) {
		return this.memData
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.slice(0, slice);
	}
	getWeeklyProducts(slice = 3) {
		return this.memData.filter((p) => p.weeklyProduct === 1);
	}
	getDiscountProducts(slice) {
		return this.memData.filter((p) => p.discountPercent > 25).slice(0, slice);
	}

	getProductById(id) {
		return this.memData.find((item) => item.id === id);
	}
	searchData(q) {
		return this.memData.filter((item) =>
			item.productName.toLowerCase().includes(q.toLowerCase())
		);
	}
	sortAsc(d) {
		return d.slice().sort((a, b) => a.price - b.price);
	}
	sortDesc(d) {
		return d.slice().sort((a, b) => b.price - a.price);
	}
	getAllProducts() {
		return this.memData;
	}
}

export default new GenerateRandomProducts();
