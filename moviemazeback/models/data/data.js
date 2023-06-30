import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { categories } from './categories.js'
import { products_v1 } from './products.js'
import { User } from '../User.js'
import { Article } from '../Article.js'
import { Category } from '../Category.js'
import { Product } from '../Product.js'


let newCategories = async (categories) => await Category.insertMany(categories)

let newUsers = async (users) => await User.insertMany(users)

let newProducts = async (products) => {
    for (let product of products) {
        let category = await Category.findOne({ name: product.category_id })
        product.category_id = category._id
        let newProduct = await Product.create(product)
        for (let article of product.article) {
            article.product_id = newProduct._id
            // article.cover_photo = article.photo[0]
            await Article.create(article)
        }
    }
}


let data = async () => {
    await newCategories(categories)
    await newUsers(users)
    await newProducts(products_v1)
    console.log('done!')
}

data()