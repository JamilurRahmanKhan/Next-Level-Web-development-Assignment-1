function formatValue(value: string | number | boolean): string | number | boolean {
    if(typeof value === "string"){
        return value.toUpperCase();
    }else if(typeof value === "number"){
        return value * 10;
    }else{
        return !value;
    }
};





function getLength(value: string | number[]): number {
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}





class Person{
    constructor(public name: string, public age: number){}

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}






type Item = {
    title: string;
    rating: number;
};

function filterByRating (items: Item[]): Item[] {
    const result: Item[] = [];

    items.forEach((item: Item) => {
    if (item.rating >= 4) {
      result.push(item);
    }
  });

  return result;
};





type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers (users: User[]): User[] {
  const activeUsers: User[] = [];

  users.forEach((user: User) => {
    if (user.isActive === true) {
      activeUsers.push(user);
    }
  });

  return activeUsers;
};





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}





function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];

    arr1.forEach((item) => {
        let exists = false;

        for (let i = 0; i < result.length; i++) {
            if (result[i] === item) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(item);
        }
    });

    arr2.forEach((item) => {
        let exists = false;

        for (let i = 0; i < result.length; i++) {
            if (result[i] === item) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(item);
        }
    });

    return result;
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

  const productTotals = products.map((item: Product): number => {
    const baseTotal = item.price * item.quantity;

    if (item.discount !== undefined) {
      const discountAmount = (baseTotal * item.discount) / 100;
      return baseTotal - discountAmount;
    }

    return baseTotal;
  });

  let finalTotal = 0;

  for (let i = 0; i < productTotals.length; i++) {
    finalTotal = finalTotal + productTotals[i];
  }

  return finalTotal;
}

    