function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(
        `Invalid rating for "${item.title}": ${item.rating}. Must be between 0 and 5.`
      );
    }
    return item.rating >= 4;
  });
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const productTotals = products.map((product) => {
    const baseTotal = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = (baseTotal * product.discount) / 100;
      const priceAfterDiscount = baseTotal - discountAmount;
      return priceAfterDiscount;
    }

    return baseTotal;
  });

  const finalTotal = productTotals.reduce((sum, currentPrice) => {
    return sum + currentPrice;
  }, 0);

  return finalTotal;
}
