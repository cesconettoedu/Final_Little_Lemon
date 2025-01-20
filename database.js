import * as SQLite from "expo-sqlite";

let db;

export async function initDatabase() {
  db = await SQLite.openDatabaseAsync("little_lemon");
  await createTable();
}

export async function createTable() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS menuitems (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT,
      price TEXT,
      description TEXT,
      image TEXT,
      category TEXT
    );
  `);
}

export async function getMenuItems() {
  const items = await db.getAllAsync('SELECT * FROM menuitems');
  return items;
}

export async function saveMenuItems(menuItems) {
  // Usando execAsync para inserções em lote
  const values = menuItems.map(item => 
    `(${item.id}, "${item.name}", "${item.price}", "${item.description}", "${item.image}", "${item.category}")`
  ).join(", ");
  
  await db.execAsync(`
    INSERT INTO menuitems (id, name, price, description, image, category)
    VALUES ${values}
  `);
}

export async function filterByQueryAndCategories(query, activeCategories) {
  const categoriesString = activeCategories.map(cat => `'${cat}'`).join(",");
  
  const items = await db.getAllAsync(
    `SELECT * FROM menuitems WHERE name LIKE ? AND category IN (${categoriesString})`,
    [`%${query}%`]
  );
  
  return items;
}