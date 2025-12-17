// 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐏𝐮𝐛𝐥𝐢𝐜, 𝐏𝐫𝐢𝐯𝐚𝐭𝐞, 𝐚𝐧𝐝 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐞𝐝

// Today I explored one of the most important aspects of TypeScript’s class system:
// access modifiers — public, private, and protected.
// While JavaScript has always had a very “loose” approach to class design, TypeScript finally gives us real structure and proper encapsulation. These modifiers dramatically improve the way we model real-world entities and control access to internal logic.

// 🔹 𝐩𝐮𝐛𝐥𝐢𝐜 — 𝐅𝐮𝐥𝐥𝐲 𝐀𝐜𝐜𝐞𝐬𝐬𝐢𝐛𝐥𝐞, 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝐟𝐨𝐫 𝐏𝐮𝐛𝐥𝐢𝐜 𝐀𝐏𝐈𝐬
class User {
  constructor(public username: string, public email: string) {}
}
const u = new User("aati", "aati@example.com");
console.log(u.username); // ✔️ Public class API
// public is ideal for data meant to be openly accessed as part of the class interface.

// 🔹 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 — 𝐒𝐭𝐫𝐢𝐜𝐭 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐥 𝐋𝐨𝐠𝐢𝐜

// A more realistic example:
class BankAccount {
  private balance: number = 0;
  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
const acc = new BankAccount();
acc.deposit(500);
acc.balance; // ❌ Error — protected from direct access

// private ensures no external part of the codebase can manipulate internal state.
// This is the level of safety JavaScript simply doesn’t provide on its own.

// 🔹 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐞𝐝 — 𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐝 𝐟𝐨𝐫 𝐂𝐥𝐞𝐚𝐧 𝐈𝐧𝐡𝐞𝐫𝐢𝐭𝐚𝐧𝐜𝐞
class Employee {
  protected baseSalary: number = 4000;
  calculateAnnualSalary() {
    return this.baseSalary * 12;
  }
}

class Manager extends Employee {
  private bonus: number = 2000;
  getTotalCompensation() {
    return this.calculateAnnualSalary() + this.bonus;
  }
}

const m = new Manager();
m.baseSalary; // ❌ Error — accessible only within the hierarchy

// protected shines when you need subclasses to share internal data without exposing it publicly.

// 🔹 𝐂𝐨𝐦𝐛𝐢𝐧𝐢𝐧𝐠 𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐫𝐬 𝐈𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐂𝐨𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐨𝐫

// A more complete, real-world structure:

class Product {
  constructor(
    public title: string,
    private price: number,
    protected stock: number
  ) {}

  getInfo() {
    return `${this.title} - $${this.price}`;
  }

  updateStock(amount: number) {
    if (amount >= 0) this.stock = amount;
  }
}
class DigitalProduct extends Product {
  applyDiscount(percent: number) {
    if (percent > 0 && percent < 100) {
      this.stock = Math.floor(this.stock * (1 - percent / 100));
    }
  }
}
