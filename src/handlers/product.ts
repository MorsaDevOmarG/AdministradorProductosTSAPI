import { Request, Response } from "express";
import colors from 'colors';
import Product from "../models/Product.model";

export const createProduct = async (req : Request, res : Response) => {
  // console.log(colors.yellow(req.body));

  // const product = new Product(req.body);
  // const savedProduct = await product.save();

  // console.log(colors.magenta(`Producto creado: ${JSON.stringify(savedProduct)}`));

  const product = await Product.create(req.body);

  // Almacenar en la BD
  // await product.save();
  
  // res.json("Crear un producto");
  res.json({
    data: product
  });

};