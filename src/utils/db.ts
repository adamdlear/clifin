import Database from "better-sqlite3";

const db = new Database("transactions.db");
db.pragma("journal_mode = WAL");

interface Transaction {
    amount: number;
    date: string;
    title?: string;
}

export function createTransactionTable(): void {
    db.exec(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            amount REAL NOT NULL,
            date TEXT NOT NULL
        )
    `);
}

export function addTransaction(transaction: Transaction) {
    const insert = db.prepare(`
        INSERT INTO transactions (title, amount, date) VALUES (?, ?, ?)
    `);
    insert.run(transaction.title ?? "", transaction.amount, transaction.date);
}
