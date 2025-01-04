import { supabase } from "./supabase";

/**
 * Asynchronously retrieves all data from the "products" table using Supabase.
 *
 * @returns {Promise<Array|undefined>} - Returns a promise that resolves to an array of data from the "products" table, or undefined if an error occurs.
 */
async function getData() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) console.log(error);
  return data;
}

/**
 * Adds an item to the bag based on the provided id.
 *
 * @param {number} id - The unique identifier of the item to be added to the bag.
 */ let bag = [];

function addToBag(id) {
  if (bag.id === id.id) {
    const itemExists = bag.some((item) => item.id === id.id);
    if (!itemExists) {
      bag.push(menu.filter((item) => item.id === id));
    } else {
      console.log("Item already exists");
    }
  }
}

function getBag() {
  return bag;
}
/**
 * Fetches popular items from the "products" table in the database.
 *
 * @async
 * @function getPopularItems
 * @returns {Promise<Object>} The response containing popular items.
 */
async function getPopularItems() {
  const response = await supabase
    .from("products")
    .select("*")
    .eq("popular", "true");
  return response;
}
/**
 * Retrieves recommended items from the "products" table.
 *
 * @returns {Promise} A Promise that resolves to the response containing the recommended items.
 */
async function getRecommendedItems() {
  const response = await supabase
    .from("products")
    .select("*")
    .eq("recommended", "true");
  return response;
}
/**
 * Asynchronously retrieves user data based on the provided email.
 *
 * @param {string} email - The email of the user to retrieve data for.
 * @returns {Promise<object>} - A promise that resolves to the user data if found, or rejects with an error if not found.
 */
async function getUserData(email, password) {
  const { data, error } = await supabase
    .from("users")
    .select("email, password")
    .eq("email", email)
    .eq("password", password);
  if (error) console.error(error);
  return data;
}
/**
 * Asynchronously adds a user to the database.
 *
 * @param {Object} userData - The user data to be inserted.
 * @returns {Promise} - A promise that resolves to the inserted user data.
 */
async function addUser(userData) {
  const { data, error } = await supabase.from("users").insert([userData]);

  if (error) {
    console.error("Error adding user:", error);
  }
  return data;
}
/**
 * Asynchronously retrieves user data from the "users" table in the Supabase database based on the provided username.
 *
 * @param {string} username - The username of the user to retrieve data for.
 * @returns {Promise<object>} - A promise that resolves to the retrieved user data or rejects with an error.
 */
async function getUserName(username) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username);
  if (error) console.error(error);
  return data;
}
/**
 * Asynchronously signs out the user.
 */
async function signOut() {
  await supabase.auth.signOut();
}

export {
  addToBag,
  addUser,
  getUserName,
  getData,
  getBag,
  getPopularItems,
  getUserData,
  getRecommendedItems,
  signOut,
};
